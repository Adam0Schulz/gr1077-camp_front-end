import {Link} from "react-router-dom";
import './AdminButton.css';
import {motion} from 'framer-motion';

interface Props {
    text : string,
    link : string,
    color : 'red' | 'grey',
}

const AdminButton = ({text, link, color} : Props) => {
    return (
        <Link to={link} className='admin-link'>
            <motion.button className={color == 'red'? 'admin-button red-admin' : 'admin-button grey-admin'}
                        whileTap={{scale: 0.95, transition: {duration: 0.3}}}
                        /*whileHover = {{scale: 1.05, transition: {duration: 0.5}}}*/
            >
                {text}
            </motion.button>
        </Link>

    )
}

export default AdminButton;