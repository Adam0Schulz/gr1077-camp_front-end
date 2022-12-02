import { Event, ParagraphSection } from 'api/models'
import "./style.css"
import calendarIcon from 'assets/icons/calendar.svg'
import { Link } from 'react-router-dom'

interface Props {
  size: 'large' | 'small',
  event: Event,
  state?: 'past' | 'upcoming',
}

const EventCard = ({size, event, state = 'upcoming'}: Props) => {

  /* Getting the paragraph preview */
  /* potencial use of useMemo */
  let paragraphPreview
  if (event.paragraphSectionSet.length != 0) {

    const paragraphsSeq = event.paragraphSectionSet.map(paragraph => paragraph.id)
    const paragraph: ParagraphSection = 
      event
      .paragraphSectionSet
      .filter(
        item =>
          item.id == Math.min(...paragraphsSeq)
      )[0] as ParagraphSection

    paragraphPreview = paragraph.text.substring(0, 100) + ' ...'
  }

  return (
    <>

      {size == 'small' &&
        <Link to={'/home'}>
          <div className='event-card event-card--small'>
            <div className='event-card__datetime'>
              <h4 className='event-card__date'>{event.date.toString()}</h4>
              <h5 className='event-card__time'>{event.startTime + ' - ' + event.endTime}</h5>
            </div>
            <div>
              <img className='event-card__icon' src={calendarIcon} />
            </div>
            <div className='event-card__body'>
              {/* Maybe we should limit the number of characters displayed in here like we did with the paragraph preview in large card */}
              <h4 className='event-card__heading'>{event.name}</h4>
              <img className='event-card__image' src={event.image.url} alt={event.image.caption} />
            </div>
          </div>
        </Link>
      }


      {size == 'large' &&
        
          <>
            <Link to={'/home'}>
            <div className={'event-card__datetime event-card__datetime--' + state + ' event-card__datetime--' + (event.id % 2 == 0 ? 'even' : 'odd')}>
              {/* there should be something to make the heading black if it's a past event*/}
              <h2 className='event-card__date'>{event.date.toString()}</h2>
              <h4 className='event-card__time'>{event.startTime.substring(0,5) + ' - ' + event.endTime.substring(0,5)}</h4>
            </div>
            </Link>
            <Link to={'/home'}>
            <img className='event-card__icon' src={calendarIcon} />
            <div className={'event-card__body ' + 'event-card__body--' + state + 'event-card__body--' + (event.id %2 == 0 ? 'even' : 'odd')}>
              <img className={ 'event-card__image ' + state} src={event.image.url} alt={event.image.caption} />
              <div className='event-card__text'>
                <h3 className='event-card__heading'>{event.name}</h3>
                <p className='event-card__paragraph'>{paragraphPreview}</p>
                {/* <MoreBtn link={something/something}/> */}
              </div>
            </div>
            </Link>
          </>
        
      }
    </>
  )
}

export default EventCard