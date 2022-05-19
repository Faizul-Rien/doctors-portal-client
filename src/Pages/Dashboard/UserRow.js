import React from 'react';

const UserRow = ({user}) => {
    const {email} = user; 
    return (
        
            <tr>
        <th>1</th>
        <td>{email}</td>
        <td><button class="btn bg-green-500 btn-sm">Make Admin</button></td>
        <td><button class="btn bg-red-500 btn-sm">Remove user</button></td>
      </tr>

    );
};

export default UserRow;