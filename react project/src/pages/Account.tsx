import { toast } from "react-toastify";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Account = () => {

const { user, logOut } = UserAuth()
const [error, setError] = useState('');
const navigate  = useNavigate();
const handleLogout = async () => {
    try {
        await logOut();
        navigate('/sign-in');
        toast.success('You are logged out!', {
            autoClose: 2000
        });
    } catch (err) {
        setError('Didnt log out!')
        toast.error(error, {
            autoClose: 2000
        })
    }
}

  return (
    <>
    <div className="p-4">
        <div className="mt-5">Email: {user && user.email} </div>
        {/* <div>Name:{user && user.uid} </div> */}
        <button onClick={ handleLogout } className="px-4 py-2 bg-red-700 text-white mt-4">Logout</button>
    </div>
   </>
  )
}

export default Account