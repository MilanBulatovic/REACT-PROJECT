import jobsData from '../jobs.json'
import JobSingle from './JobSingle'

const JobListing = ({isHome = false}) => {

  const jobListings = isHome ? jobsData.jobs.slice(0,3) : jobsData.jobs ;

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => (
                <JobSingle job={job} key={job.id} />
            ))};
            
          </div>
        </div>
    </section>
  )
}

export default JobListing