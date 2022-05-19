import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({treatment,date,setTreatment, refetch}) => {
    const {_id,name,slots} = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');


    const handleBooking = event  =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,name,slot)

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
}

            fetch('http://localhost:5000/booking',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then (res => res.json())
            .then(data => {
                console.log(data)
                if(data.success){
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else{
                    toast.error(`You already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                 // to close the modal
                 refetch()
                setTreatment(null);
            })

         
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold mb-4 text-center text-lg">{name}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
    <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
    <select name='slot' className="select select-bordered w-full max-w-xs">
        {
            slots.map(slot =><option value={slot}>{slot}</option>)
        }
    </select>
    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="SUBMIT" className="btn btn-bg-neutral w-full max-w-xs" />
    </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModal;