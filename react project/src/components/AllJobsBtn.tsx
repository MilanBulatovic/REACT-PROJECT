import { Link } from "react-router-dom"

const AllJobsBtn = () => {
  return (
    <section className="m-auto my-10 p-6 bg-transparent">
      <div className="max-w-lg m-auto">
    <Link
      to="/jobs"
      className="block bg-black text-white font-bold text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >View All Jobs</Link>
    </div>
  </section>
  )
}

export default AllJobsBtn