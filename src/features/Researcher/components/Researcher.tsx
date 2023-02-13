import {MoreArrow} from "components/MoreArrow/MoreArrow";
import {Researcher} from "api/models";
import './Researcher.css'

interface Props {
    researcher: Researcher,
}


const ResearcherCard = ({researcher} : Props) => {
    return (
        <div className='researcher-card'>

                <img src={researcher.profileImage.url} className='researcher-profile-img' />

            <div className='researcher-name'>
                <h5>{researcher.firstName} {researcher.lastName}</h5>
                <p>{researcher.title}</p>
            </div>
            <div className='researcher-contact'>
                <p>{researcher.telephone}</p>
                <p>{researcher.email}</p>
            </div>
            <a className='researcher-profile' href={researcher.profile}>Visit KU profile</a>
            <MoreArrow/>
        </div>
    )
}

export default ResearcherCard;