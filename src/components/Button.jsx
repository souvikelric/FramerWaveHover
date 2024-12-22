import "./navbar.css";
import {animate, motion} from 'framer-motion';
const Button = ({isActive, setisActive}) => {
    return (
        <div onClick={()=> setisActive((prev)=> !prev)} className="button">
            <motion.div className="slider"
            animate={{top: isActive? "-100%" : 0}}
            transition={{duration:0.5, ease:[0.76,0,0.24,1]}}
            >
                <div className="el">
                    <PerspectiveText label={"MENU"}/>
                </div>
                <div className="el">
                    <PerspectiveText label={"CLOSE"}/>
                </div>
            </motion.div>
            
        </div>
    )
}

export default Button;

const PerspectiveText = ({label}) => {
    return (
        <div className="perspective">
             <p>{label}</p>
             <p>{label}</p>
        </div>
    )
}

