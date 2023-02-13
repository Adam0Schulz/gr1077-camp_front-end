export type Time = `${number}:${number}:${number}`

export interface DBObject {
    id: number,
}

export interface NewObject {
    id?: number,
}

export interface Page {
    paragraphSectionSet: ParagraphSection[],
    imageSectionSet: ImageSection[],
    linkSectionSet: LinkSection[],
}

export interface NewPage {
    paragraphSectionSet: NewParagraphSection[],
    imageSectionSet: NewImageSection[],
    linkSectionSet: NewLinkSection[],
}


export interface Event extends Page, DBObject {
    name: string,
    room: Room,
    date: Date, // not sure about this type
    startTime: Time, // not sure about this one either
    endTime: Time,
    image: Image,
    researcherSet: Researcher[],
    externalResearcherSet: ExternalResearcher[],
    participantSet: Participant[],
}

export interface NewEvent extends NewPage, NewObject {
    name: string,
    room: Room,
    date: Date, // not sure about this type
    startTime: Time, // not sure about this one either
    endTime: Time,
    image: NewImage,
    researcherSet: Researcher[],
    externalResearcherSet: NewExternalResearcher[],
    participantSet: Participant[] | [],
}

export interface BlogPost extends Page, DBObject {
    
}

export interface NewBlogPost extends NewPage, NewObject {
    
}

interface Person {
    firstName: string,
    lastName: string,
    title: string,
    email: string,
}


// We have a problem in the back-end
/* We should have sections for profile, cv and publication
 but now we just have sections for the researcher and profile, cv and publications separately */
export interface Researcher extends Page, DBObject, Person {
    profileImage: any,
    telephone: string,
    email: string,
    profile: string,

    /* finish this when you figure out the database*/
}

export interface OtherPage extends Page, DBObject {

}

export interface ExternalResearcher extends DBObject, Person {
    profileLink: string,
    profileImage: Image,
}

export interface NewExternalResearcher extends NewObject, Person {
    profileLink: string,
    profileImage: Image,
}

export interface Image extends DBObject {
    url: string,
    caption: string,
}

export interface NewImage extends NewObject {
    url: string,
    caption: string,
}

export interface Location extends DBObject {
    address: string,
    roomSet:Room[],

}

export interface Participant extends DBObject, Person {
    affiliation: string,
}
export interface NewParticipant extends NewObject, Person {
    affiliation : string,
}

export interface Room extends DBObject {
    name: string,
    capacity: number,
    location: Location

    // could be a string
}

export interface Section extends DBObject {
    seq: number,
}

export interface NewSection extends NewObject {
    seq: number;
}

export interface ImageSection extends Section, DBObject {
    image: Image,
    altText: string,
}

export interface NewImageSection extends NewSection {
    image: NewImage,
    altText: string,
}

export interface ParagraphSection extends Section, DBObject {
    heading?: string,
    text: string,
}

export interface NewParagraphSection extends NewSection {
    heading?: string,
    text: string,
}

export interface LinkSection extends Section, DBObject {
    text: string,
    link: string,
}

export interface NewLinkSection extends NewSection {
    text: string,
    link: string,
}

export const NewLocationObj: Location = {
    id: 1,
    address: "Øster Farimagsgade 5 DK-1353 Copenhagen K",
    roomSet: [],
}

export const NewEventObj: NewEvent = {
    name: '',
    room: {
        id: 0,
        name: '',
        capacity: 0,
        location: NewLocationObj
    },
    date: new Date(),
    startTime: '100:00:00', // could be improved
    endTime: '100:00:00', // could be improved
    image: {
        url: '',
        caption: ''
    },
    researcherSet: [],
    externalResearcherSet: [],
    participantSet: [],
    paragraphSectionSet: [],
    imageSectionSet: [],
    linkSectionSet: [],
}

export const NewBlogPostObj: NewBlogPost = {
    paragraphSectionSet: [],
    imageSectionSet: [],
    linkSectionSet: [],
}



export type SectionItem = 
ImageSection | 
ParagraphSection | 
LinkSection | 
NewImageSection | 
NewParagraphSection | 
NewLinkSection


export const emptyImageSection: NewImageSection = {
    seq: 0,
    image: {
        url: '',
        caption: ''
    },
    altText: ''
}
export const emptyParagraphSection: NewParagraphSection = {
    seq: 0,
    heading: '',
    text: ''
}
export const emptyLinkSection: NewLinkSection = {
    seq: 0,
    text: '',
    link: ''
}

export interface ApiParameter {
    name: string,
    value: string,
}