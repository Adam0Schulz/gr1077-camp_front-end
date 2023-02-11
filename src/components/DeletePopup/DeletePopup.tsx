import './DeletePopup.css'
import icon from 'assets/icons/warning.png'

interface Props {
    type: "blog post" | "event"
}

const DeletePopup = ({type}: Props) => {

    return (
        <div className='delete-popup'>
            <div className='delete-popup__body'>
                <div className='delete-popup__icon-cont'>
                    <img className='delete-popup__icon' src={icon} alt="warning icon" />
                </div>
                <p className='delete-popup__heading bold'>Delete {type}</p>
                <p className='delete-popup__paragraph'>Are you sure you want to delete this {type}? <br /> This action cannot be undone.</p>
                <div>
                    <button className='btn btn-s delete-popup__btn' onClick={() => console.log('Canceling')}>Cancel</button>
                    <button className='btn btn-p delete-popup__btn' onClick={() => console.log('Deleting')}>Delete</button>
                </div>
            </div>
        </div>
    )

}

export default DeletePopup