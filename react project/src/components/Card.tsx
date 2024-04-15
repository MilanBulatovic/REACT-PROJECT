import { Link } from "react-router-dom"
import { CardProps} from "../interface/Card"

const Card: React.FC<CardProps> = ({ role, title, desc, backgroundColor, btnText }) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}  className="p-6 rounded-lg shadow-md">
         <p className="mt-2 mb-1 text-white">
        {role}
        </p>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-2 mb-4 text-white" >
        {desc}
        </p>
        <Link
        to="/add-job"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
         {btnText}
        </Link>
    </div>
  )
}

export default Card