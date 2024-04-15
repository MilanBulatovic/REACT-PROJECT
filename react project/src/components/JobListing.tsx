import { Job } from '../interface/Jobs';
import {useState, useEffect} from 'react'
import JobSingle from './JobSingle'
import { ClipLoader } from 'react-spinners';

const JobListing = ({isHome = false}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchjobs = async () => {
      const apiUrl = isHome ? 'http://127.0.0.1:8000/jobs?_limit=3' : 'http://127.0.0.1:8000/jobs';
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
    fetchjobs();
  }, [])

  //const jobListings = isHome ? jobsData.jobs.slice(0,3) : jobsData.jobs ;

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          
            {loading ? (<ClipLoader color="#3641d6" />) : (
             
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job:Job) => (
                  <JobSingle job={job} key={job.id} />
                ))}
              </div>
             
            )}
        </div>
    </section>
  )
}

export default JobListing