import { Event, ParagraphSection } from 'api/models'
import "./style.css"
import calendarLightIcon from 'assets/icons/calendar.svg'
import calendarDarkIcon from 'assets/icons/calendar-darkbg.svg'
import { Link } from 'react-router-dom'
import { EventState } from 'api/enums'

interface Props {
  size: 'large' | 'small',
  event: Event,
  state?: EventState,
  row?: number,
}

const EventCard = ({ size, event, state = EventState.UPCOMING, row }: Props) => {

  /* Getting the paragraph preview */
  /* potencial use of useMemo */
  let paragraphText: string = 'No text to show'
  if (event.paragraphSectionSet.length != 0) {

    const paragraphsSeq = event.paragraphSectionSet.map(paragraph => paragraph.id)
    const paragraph =
      event
        .paragraphSectionSet
        .filter(
          item =>
            item.id == Math.min(...paragraphsSeq)
        )[0] as ParagraphSection
    paragraphText = paragraph.text
  }

  const time = event.startTime.substring(0, 5) + ' - ' + event.endTime.substring(0, 5)

  return (
    <>

      {size == 'small' &&
        <Link to={'/home'}>
          <div className='event-card event-card--small'>
            <div className='event-card__datetime'>
              <h4 className='event-card__date'>{event.date.toString()}</h4>
              <h5 className='event-card__time'>{time}</h5>
            </div>
            <div>
              <img className='event-card__icon' src={calendarLightIcon} />
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
          <Link to={'/home'}
            className={'event-card__datetime event-card__datetime--large event-card__datetime--' + state.toLocaleLowerCase() + ' event-card__datetime--' + (event.id % 2 == 0 ? 'even' : 'odd')}
            style={{ gridRow: row }}>
            <div className='event-card__datetime__cont'>
              {/* there should be something to make the heading black if it's a past event*/}
              <h2 className='event-card__date'>{event.date.toString()}</h2>
              <h4 className='event-card__time'>{time}</h4>
            </div>
          </Link>

          <Link to={'/home'}
            className={'event-card__body event-card__body--large event-card__body--' + state.toLocaleLowerCase() + ' event-card__body--' + (event.id % 2 == 0 ? 'even' : 'odd')}
            style={{ gridRow: row }}>

            <img className='event-card__icon' src={calendarDarkIcon} />
            <div className='event-card__textarea'>
              <img className={'event-card__image ' + state.toLocaleLowerCase()} src={event.image.url} alt={event.image.caption} />
              <div className='event-card__text'>
                <h3 className='event-card__heading'>{event.name}</h3>
                <p className='event-card__paragraph'>{paragraphText}</p>
                {/* <MoreBtn link={something/something}/> */}
                <button>More {'>'}</button>
              </div>
            </div>

          </Link>
        </>

      }
    </>
  )
}

export default EventCard