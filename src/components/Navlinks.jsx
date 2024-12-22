import {Links} from "./Data";
import "./Navlinks.css";
import {motion, stagger} from "framer-motion";

export const NavLinks = () =>{

    const variants = {
        initial:{
            opacity : 0,
            rotateX:90,
            translateY: 80,
            translateX: -20,
            
        },
        enter: (i) => ({
            opacity : 1,
            rotateX:0,
            translateX: 0,
            translateY: 0,
            transition:{
                duration: 0.65,
                delay:0.5 + (i * 0.1)
            }
        }),
        exit:(i)=>({
            opacity : 0,
        })
    }

    return (
    <div className="nav">
        <div 
        className="body">
            {
                Links.map((link,i) => (
                    <div key={i} 
                        className="linkContainer">
                        <motion.div 
                        variants={variants}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        custom={i}
                        >
                        <a href={link.href}>{link.title}</a>
                        </motion.div>
                    </div>
                    
                ))
            }
        </div>
    </div>
    )
}