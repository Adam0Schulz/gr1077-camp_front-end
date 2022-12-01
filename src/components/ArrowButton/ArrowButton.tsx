import {Link} from "react-router-dom";
import './ArrowButton.css';
import {motion} from 'framer-motion';


// need to add props
// dont know typescript


function ArrowButton() {
    return (
        <Link to={'/'} className='arrow'>
            <motion.div
                className='arrow-circle'
                whileTap={{scale: 0.9, transition: {duration: 0.1}}}
                whileHover={{
                    rotate: 40,
                    transition: {duration: 0.2}
                }}>
                <svg  className='arrow-button' width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4469 3.14838C29.5227 2.32343 28.9154 1.59323 28.0905 1.51742L14.6471 0.282096C13.8222 0.206291 13.0919 0.813593 13.0161 1.63855C12.9403 2.4635 13.5476 3.1937 14.3726 3.26951L26.3222 4.36758L25.2242 16.3172C25.1484 17.1422 25.7557 17.8724 26.5806 17.9482C27.4056 18.024 28.1358 17.4167 28.2116 16.5917L29.4469 3.14838ZM2.77165 25.9052L28.9124 4.16439L26.9941 1.85786L0.853346 23.5987L2.77165 25.9052Z" fill="white"/>
                </svg>
            </motion.div>
            <p className='arrow-button-text'>{}</p>
        </Link>
    )
}

export default ArrowButton;