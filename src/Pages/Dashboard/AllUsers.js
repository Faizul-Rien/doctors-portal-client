import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
   const {data: users, isLoading , refetch} = useQuery('users', ()=>
       fetch('https://sleepy-everglades-76683.herokuapp.com/user',{
           method: 'GET',
           headers:{
               authorization: `Bearer ${localStorage.getItem('accessToken')}`
           }
       })
       .then(res => res.json()));


   if(isLoading){
       return <Loading></Loading>
   }
    return (
        <div>
            <h2>All users : {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Admin</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
       {
          users.map(user => <UserRow
          key={user._id}
          user = {user}
          refetch={refetch}
          ></UserRow>)
      } 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;