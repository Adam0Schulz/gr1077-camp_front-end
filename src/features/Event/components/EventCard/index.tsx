import { Event, ParagraphSection } from 'api/models'
import "./style.css"
import calendarLightIcon from 'assets/icons/calendar.svg'
import calendarDarkIcon from 'assets/icons/calendar-darkbg.svg'
import { Link } from 'react-router-dom'
import { EventState } from 'api/enums'
import { useRef } from 'react'

interface Props {
  size: 'large' | 'small',
  event: Event,
  state?: EventState,
  row?: number,
}

const EventCard = ({ size, event, state = EventState.UPCOMING, row }: Props) => {

  /* Getting the paragraph preview */
  /* potencial use of useMemo */
  let paragraphText: string = 'No text to preview'
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
              <img className='event-card__icon event-card__scaleHover' src={calendarLightIcon} />
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

        <div
          style={{ gridRow: row }}
          className={'event-card event-card--large event-card--' + state.toLocaleLowerCase() + ' event-card--' + (event.id % 2 == 0 ? 'even' : 'odd')}>
          <div className='event-card__datetime'>
            <div className='event-card__datetime__cont'>
              <h2 className='event-card__date'>{event.date.toString()}</h2>
              <h4 className='event-card__time'>{time}</h4>
            </div>
          </div>

          <div className='event-card__body'>

            <img className='event-card__icon' src={calendarDarkIcon} />
            <div className='event-card__textarea'>
              <Link to={'/events/' + event.id} >
                <div className='img_cont event-card__image-cont'>
                  <img className={'event-card__image ' + state.toLocaleLowerCase() + ' event-card__scaleHover'} src={event.image.url} alt={event.image.caption} />
                </div>
              </Link>

              <div className='event-card__text'>
                <h3 className='event-card__heading'>{event.name}</h3>
                <p className='event-card__paragraph'>{paragraphText}</p>
                {/* <MoreBtn link={something/something}/> */}
                <Link to={'/events/' + event.id} >
                  <button className='event-card__scaleHover'>More {'>'}</button>
                </Link>
              </div>
            </div>

          </div>
        </div>

      }
    </>
  )
}

export default EventCard