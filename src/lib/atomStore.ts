import { NewEvent, Time } from 'api/models'
import { atom } from 'jotai'


export const newEvent = atom<NewEvent>(
    {
        name: '',
        room: {
            id: 1,
            name: '',
            capacity: 1,
        },
        date: null,
        startTime: null,
        endTime: null,
        image: {
            url: '',
            caption: '',
        },
        researcherSet: [],
        externalResearcherSet: [],
        participantSet: [],
        paragraphSectionSet: [],
        imageSectionSet: [],
        linkSectionSet: []
    
    }
)
