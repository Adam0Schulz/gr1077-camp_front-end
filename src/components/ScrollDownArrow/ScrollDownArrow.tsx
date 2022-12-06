import React from "react";
import './ScrollDownArrow.css'
import {motion} from "framer-motion";

export const ScrollDownArrow = () => {
    return (
        <motion.div
            animate={{y: [0, -4, 10, 0]}}
            transition={{repeat: Infinity, repeatDelay: 7}}
            className="scrollDownBox">
            <div className="scrollDownText">SCROLL DOWN</div>
            <svg className="scrollDownArrow" width="16" height="20" viewBox="0 0 16 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.98486 9.74365L0.344238 3.10303C-0.114746 2.64404 -0.114746 1.90186 0.344238 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2856 1.44287C15.7446 1.90186 15.7446 2.64404 15.2856 3.09814L8.64502 9.73877C8.18604 10.2026 7.44385 10.2026 6.98486 9.74365ZM8.64502 19.1187L15.2856 12.478C15.7446 12.019 15.7446 11.2769 15.2856 10.8228L14.1821 9.71924C13.7231 9.26025 12.981 9.26025 12.5269 9.71924L7.81494 14.4214L3.10791 9.71435C2.64893 9.25537 1.90674 9.25537 1.45264 9.71435L0.344238 10.8179C-0.114746 11.2769 -0.114746 12.019 0.344238 12.4731L6.98486 19.1138C7.44385 19.5776 8.18604 19.5776 8.64502 19.1187Z"
                />
            </svg>
        </motion.div>
    )
}