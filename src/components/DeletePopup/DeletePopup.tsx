import { Link } from 'react-router-dom'
import './DeletePopup.css'
import icon from 'assets/icons/warning.png'
import { useNavigate } from 'react-router-dom'

interface Props {
    type: "blog post" | "event",
    onCancelLink: string,
    onDeleteLink: string,
    deleteFunc: () => void
}

const DeletePopup = ({type, onCancelLink, onDeleteLink, deleteFunc}: Props) => {

    const navigate = useNavigate()

    return (
        <div className='delete-popup' onClick={(e) => {
            if(e.target == e.currentTarget) {
                navigate(onCancelLink)
            }
        }}>
            <div className='delete-popup__body'>
                <div className='delete-popup__icon-cont'>
                    <img className='delete-popup__icon' src={icon} alt="warning icon" />
                </div>
                <p className='delete-popup__heading bold'>Delete {type}</p>
                <p className='delete-popup__paragraph'>Are you sure you want to delete this {type}? <br /> This action cannot be undone.</p>
                <div>
                    <Link className='btn btn-s delete-popup__btn' to={onCancelLink}>Cancel</Link>
                    <button className='btn btn-p delete-popup__btn' onClick={() => {deleteFunc(); navigate(onDeleteLink)}}>Delete</button>
                </div>
            </div>
        </div>
    )

}

export default DeletePopup