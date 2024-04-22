import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFound';
import JobSingle, {jobLoader} from './pages/JobSinlge';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import { addJob, deleteJob, editJob } from './services/Services';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import { AuthContextProvider } from './context/AuthContext.jsx';
import Account from './pages/Account.js';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' 
          element={<JobSingle deleteJob={deleteJob} />} 
          loader={jobLoader}/>
        <Route path='/edit-job/:id' 
          element={<EditJob updateJobSubmit={editJob} />} 
          loader={jobLoader}/>
        <Route path='/add-job' element={
          <ProtectedRoute>
            <AddJob addJobSubmit={addJob} />
          </ProtectedRoute>
        }/>
        <Route path='/sign-in' element={<LoginPage />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        
        <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }/>
        {/* <Route path='/sign-in/' element={<LoginPage loginAction={loginAction} />}/> */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>  
     
    )
  );

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
