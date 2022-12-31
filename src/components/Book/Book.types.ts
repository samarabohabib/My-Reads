export interface IBook {
    allowAnonLogging: boolean,
    authors: string[],
    averageRating?: number,
    canonicalVolumeLink: string,
    categories?: string[],
    contentVersion: string,
    description: string,
    id: string,
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string
    },
    industryIdentifiers: {
        identifier: string,
        type: string
    }[],
    infoLink: string,
    language: string,
    maturityRating: string,
    pageCount: number,
    panelizationSummary: {
        containsEpubBubbles: boolean,
        containsImageBubbles: boolean
    },
    previewLink: string,
    printType: string,
    publishedDate: string,
    publisher?: string,
    ratingsCount?: number,
    readingModes: {
        image: boolean,
        text: boolean
    },
    shelf: string,
    subtitle?: string,
    title: string,
    index?: number 
}