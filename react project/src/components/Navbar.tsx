import logo from '../assets/images/logo.svg';
import {NavLink} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Navbar = () => {
  const { user } = UserAuth();
  const isLoggedIn = !!user;

  const linkClass = ({ isActive }: { isActive: boolean })=> 
  isActive ? 
  'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="container-xl lg:container m-auto p-4">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-between md:items-stretch md:justify-start"
            >
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                {/* <img
                  className="h-7 w-auto"
                  src={logo}
                  alt="React Jobs" /> */}
                <span className="md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                 

                  {isLoggedIn ? (
                  <>
                    <NavLink
                      to="/"
                      className={linkClass}
                      >Home
                    </NavLink>

                    <NavLink
                      to="/jobs"
                      className={linkClass}>
                     Jobs
                    </NavLink>
                    <NavLink
                      to="/add-job"
                      className={linkClass}>
                      Add Job
                    </NavLink>

                    <NavLink
                      to="/account"
                      className={linkClass}>
                      Account
                    </NavLink>
                  </>
                   ) :
                    
                   (
                  <>
                    <NavLink
                      to="/"
                      className={linkClass}
                      >Home
                    </NavLink>

                    <NavLink
                      to="/jobs"
                      className={linkClass}>
                      Jobs
                    </NavLink>

                    <NavLink
                      to="/sign-in"
                      className={linkClass}>
                      Sign In
                    </NavLink>

                    <NavLink
                      to="/sign-up"
                      className={linkClass}>
                      Register
                    </NavLink>
                  
                  </>
                   )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar