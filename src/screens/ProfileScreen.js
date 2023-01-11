import { signOut } from 'firebase/auth';
import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav/Nav';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import './ProfileScreen.css'; 
const ProfileScreen = () => {
    const {user} = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <button className="profileScreen_signout" onClick={()=>signOut(auth)}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;