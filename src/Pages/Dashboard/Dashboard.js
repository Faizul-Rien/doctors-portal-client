import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
        <input id="dashBoard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  ">
          <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashBoard-sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Appointments</Link></li>
            <li><Link to='/dashboard/review'>My Reviews</Link></li>
            <li><Link to='/dashboard/history'>My History</Link></li>
           {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;