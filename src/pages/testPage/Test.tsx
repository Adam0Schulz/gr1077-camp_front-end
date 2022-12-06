import Sections from 'components/Section/Sections'
import { useEventById } from 'features/Event/hooks/UseAllEvents'
import { useParams } from 'react-router'


const Test = () => {

    const id = Number(useParams().id)

    // Maybe redundant
    if (!id) {
        window.location.href = "/home"
    }

    const { data: event,
        isLoading,
        isError } = useEventById(id)

    if (isLoading) <>Loading...</>
    if (isError) <>Oops! Something went wrong!</>

    return (
        <div style={{display: 'grid', gridTemplateColumns: '73% 27%'}}>
            {event && <Sections page={event} />}
        </div>
    )
}

export default Test