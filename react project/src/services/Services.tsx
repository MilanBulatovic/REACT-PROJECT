import { Job } from "../interface/Jobs";

const apiURl= 'http://127.0.0.1:8000'
const fetchAllJobs= `${apiURl}/jobs`
const fetchJobsApi= `${apiURl}/jobs?_limit=3`

  // Add job
  const addJob = async (newJob: Job): Promise<void> => {
    const res = await fetch(`${apiURl}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });

    if (!res) return;
  };

  // Delete job
  const deleteJob = async (id: string): Promise<void> => {
    const res = await fetch(`${apiURl}/jobs/${id}`, {
      method: 'DELETE',
    });
    if (!res) return;
  };

  // Edit job
  const editJob = async (job: Job): Promise<void> => {
    const res = await fetch(`${apiURl}/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });

    if (!res) return;
  };

  // Login
  const loginAction = async () => {
    console.log('test');
    return;
  }

  const fetchJobs = async (isHome, setJobs, setLoading) => {

   
      const apiUrl = isHome ? fetchJobsApi : fetchAllJobs;
      //console.log(apiUrl);
      
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        setJobs(data);
        
      } catch (error) {
        console.log('error', error);
        
      } finally {
        setLoading(false);
      }
  }

  
  export { addJob, deleteJob, editJob, loginAction, fetchJobs};
