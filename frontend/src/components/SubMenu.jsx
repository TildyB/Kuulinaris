import { useState } from "react"
import styles from "./Submenu.module.css"

const SubMenu = ({type}) =>{
    const [isHover,setIsHover] = useState(false)

    return(
        <div >
            <h1 onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>{type}</h1>            
            {isHover && 
            <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className={isHover ? styles.subMenuOn : styles.subMenuOff}>
                Hover accomplished!
            </div>}
        </div>
       
    )
}

export default SubMenu