import React from "react";
import './MoreArrow.css'
import {motion} from "framer-motion";

export const MoreArrow = () => {
    return (
        <motion.div className="moreArrowBox" initial="rest" whileHover="hover" animate="rest">
            <div>
                <h4 className="moreArrowText">MORE</h4>
            </div>
            <div className="arrowBox">
                <div className="arrowLine">
                    <svg viewBox="0 0 200 180" width="20" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 170 102.1 L 170 77.6 L 0 77.6 L 0 102.1"/>
                    </svg>
                </div>
                <motion.div
                    variants={{
                        hover:
                            {
                                x: 16.9,
                                transition: {
                                    duration: 0.2,
                                    type: "tween",
                                    ease: "easeOut"
                                }
                            },
                        rest: {x: 0,
                            transition: {
                                duration: 0.2,
                                type: "tween",
                                ease: "easeIn"
                            }

                        }
                    }}
                    className="arrow"
                >
                    <svg viewBox="0 0 200 180" width="20" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M 196.416 98.492 C 201.195 93.705 201.195 85.948 196.416 81.166 L 118.495 3.245 C 113.708 -1.537 105.956 -1.537 101.169 3.245 C 96.387 8.023 96.387 15.781 101.169 20.566 L 170.447 89.827 L 101.169 159.097 C 96.387 163.879 96.387 171.631 101.169 176.416 C 105.956 181.195 113.708 181.195 118.495 176.416 L 196.416 98.492 M 0 102.071 L 187.755 102.071 L 187.755 77.582 L 0 77.582 L 0 102.071"/>
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    )
}