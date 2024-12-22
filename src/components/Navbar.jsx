import './navbar.css';
import Button from './Button';
import {AnimatePresence, motion} from 'framer-motion';
import { useState } from 'react';
import { NavLinks } from './Navlinks';
const Navbar = () => {
    const [isActive, setisActive] = useState(false);
    const variants = {
        open:{
            width: "480px",
            height: "650px",
            top:"-25px",
            right:"-25px",
            transition: {duration:0.75, ease:[0.76,0,0.24,1]}
        },
        closed:{
            width: "100px",
            height: "40px",
            top:"0",
            right:"0",
            transition: {duration:0.75, delay:0.35, ease:[0.76,0,0.24,1]}
        }
    }
    return (
        <div className="navbar">
            <motion.div 
             variants = {variants}
             animate = {isActive ? "open" : "closed"}
             initial= "closed"
             className="menu">
            <AnimatePresence>
            {isActive && <NavLinks/>}
            </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} setisActive={setisActive}/>
        </div> 
    )
}

export default Navbar;