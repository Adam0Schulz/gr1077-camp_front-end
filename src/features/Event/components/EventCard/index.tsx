import { Event, ParagraphSection } from 'api/models'
import "./style.css"

interface Props {
  size: 'large' | 'small',
  event: Event,
  state: 'past' | 'upcoming',
}

const EventCard = (props: Props) => {

  /* Getting the paragraph preview */
  /* potencial use of useMemo */
  let paragraphPreview
  if (props.event.paragraphSectionSet.length != 0) {

    const paragraphsSeq = props.event.paragraphSectionSet.map(paragraph => paragraph.id)
    const paragraph: ParagraphSection = props
      .event
      .paragraphSectionSet
      .filter(
        item =>
          item.id == Math.min(...paragraphsSeq)
      )[0] as ParagraphSection

    paragraphPreview = paragraph.text.substring(0, 100) + ' ...'
  }
  return (
    <>

      {props.size == 'small' &&
        <div >
          <div >
            <h4>{props.event.date.toString()}</h4>
            <h5>{props.event.startTime + ' - ' + props.event.endTime}</h5>
          </div>
          <div>
            <h4>{props.event.name}</h4>
            <img src={props.event.image.url} alt={props.event.image.caption} />
          </div>
        </div>
      }


      {props.size == 'large' &&
        <div className={props.event.id % 2 == 0 ? 'even' : 'odd'}>
          <div>
            {/* there should be something to make the heading black if it's a past event*/}
            <h2>{props.event.date.toString()}</h2>
            <h4>{props.event.startTime + ' - ' + props.event.endTime}</h4>
          </div>
          <div>
            <img className={props.state} src={props.event.image.url} alt={props.event.image.caption} />
            <div>
              <h3>{props.event.name}</h3>
              <p>{paragraphPreview}</p>
              {/* <MoreBtn link={something/something}/> */}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default EventCard