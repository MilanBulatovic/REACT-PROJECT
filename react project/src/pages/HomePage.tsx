import AllJobsBtn from "../components/AllJobsBtn"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import JobListing from "../components/JobListing"

const HomePage = () => {
  return (
    <>
        <Hero/>
        <Cards/>
        <JobListing isHome={true}/>
        <AllJobsBtn />
    </>
  )
}

export default HomePage