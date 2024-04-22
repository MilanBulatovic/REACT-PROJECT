import { Job } from '../interface/Jobs';
import {useState, useEffect} from 'react'
import JobSingle from './JobSingle'
import { ClipLoader } from 'react-spinners';
import { fetchJobs } from '../services/Services';

const JobListing = ({isHome = false}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs(isHome, setJobs, setLoading )
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