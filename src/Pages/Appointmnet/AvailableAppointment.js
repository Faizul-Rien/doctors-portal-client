import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    // const [services,setServices] = useState([])
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const {data: services , isLoading, refetch} = useQuery(['available', formattedDate], ()=>  fetch(`https://sleepy-everglades-76683.herokuapp.com/available?date=${formattedDate}`)
    .then(res=> res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch(`https://sleepy-everglades-76683.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res=> res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])
    return (
        <div className='mb-28'>
            <h4 className='text-center text-primary mb-6 font-bold'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service =><Service
                    key={service._id}
                    service={service}
                    setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment ={treatment} refetch={refetch} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;