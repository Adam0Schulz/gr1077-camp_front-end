interface DBObject {
    id?: number,
}

export interface Page{
    paragraphSectionSet: ParagraphSection[],
    imageSectionSet: ImageSection[],
    linkSectionSet: LinkSection[],
}
export interface Event extends Page, DBObject {
    name: string,
    room: Room,
    date: Date, // not sure about this type
    startTime: `${number}:${number}:${number}`, // not sure about this one either
    endTime: `${number}:${number}:${number}`,
    image: Image,
    researcherSet: Researcher[],
    externalResearcherSet: ExternalResearcher[],
    participantSet: Participant[],
}

export interface BlogPost extends Page, DBObject {
    
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
    telephone: string,
    /* finish this when you figure out the database*/
}

export interface OtherPage extends Page, DBObject {

}

export interface ExternalResearcher extends DBObject, Person {
    profileLink: string,
    profileImage: Image,
}

export interface Image extends DBObject {
    url: string,
    caption: string,
}

export interface Location extends DBObject {

}

export interface Participant extends DBObject, Person {
    affiliation: string,
}

export interface Room extends DBObject {
    name: string,
    capacity: number, // could be a string
}


export interface Section extends DBObject {

}

export interface ImageSection extends Section, DBObject {

}

export interface ParagraphSection extends Section, DBObject {

}

export interface LinkSection extends Section, DBObject {

}