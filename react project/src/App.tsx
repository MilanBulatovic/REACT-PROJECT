import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFound';
import JobSingle, {jobLoader} from './pages/JobSinlge';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import { addJob, deleteJob, editJob } from './services/Services';

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
        <Route path='/add-job/' element={<AddJob addJobSubmit={addJob} />}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>  
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
