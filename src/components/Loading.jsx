import { IoThumbsUpOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="loading-wrapper">
            <motion.div 
                className="loading"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, ease: "easeInOut", duration: 2}}
            >
                <IoThumbsUpOutline />
            </motion.div>
            <h4>Loading...</h4>
        </div>
    )
}