
export const AVAILABLE_CATEGORIES = ['All', 'Art', 'Architecture', 'Biography & Autobiography', 'Computers', 
'History', 'Medical', 'Poetry', 'Juvenile Nonfiction', 'Fiction', 'Comics & Graphic Novels', 
'Religion', 'Foreign Language Study', 'African American baseball players', 'Pride and vanity',
'Rugby Union football', 'Labor unions', 'Courtship'] as const;
export interface Item {
    id: string,
    title: string,
    selflink: string,
    authors?: string[],
    imageLink?: string[],
    volumeInfo: VolumeInfoType,
    accessInfo: {
        country,
        pdf: {
        isAvailable,
        acsTokenLink}
    }
}

interface VolumeInfoType {
    title: string,
    subtitle?: string,
    categories?: string[],
    authors?: string[],
    imageLinks?: {smallThumbnail: string, thumbnail: string},
    description?: string,
}
export const SORT = ['relevance', 'newest'] as const;

export type RequestType = {
    query: string,
    orderBy: (typeof SORT)[number],
    startIndex: number, 
}
export type DataFromForm = {
    query: string,
    orderBy: (typeof SORT)[number],
    filter: (typeof AVAILABLE_CATEGORIES)[number],
}
