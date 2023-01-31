import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import harryStyles from "./CategoryLabel.module.css";

const CategoryLabel = ({subcat}) => {



  return (
    <div className={harryStyles.card}>
    
      {subcat}
    </div>
  )
}
export default CategoryLabel