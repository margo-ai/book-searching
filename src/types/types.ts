type IndustryIdentifiersType = {
    type: string;
    identifier: string;
};

export type GoogleBookType = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        subtitle?: string;
        authors?: string[];
        publisher?: string;
        publishedDate: string;
        description: string;
        industryIdentifiers?: IndustryIdentifiersType[];
        readingModes: {
            text: boolean;
            image: boolean;
        };
        pageCount: number;
        printType: string;
        categories?: string[];
        maturityRating: string;
        allowAnonLogging: boolean;
        contentVersion: string;
        panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
        };
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        language: string;
        previewLink: string;
        infoLink: string;
        canonicalVolumeLink: string;
        saleInfo: {
            country: string;
            saleability: string;
            isEbook: boolean;
        };
        accessInfo: {
            country: string;
            viewability: string;
            embeddable: boolean;
            publicDomain: boolean;
            textToSpeechPermission: string;
            epub: {
                isAvailable: boolean;
            };
            pdf: {
                isAvailable: boolean;
            };
            webReaderLink: string;
            accessViewStatus: string;
            quoteSharingAllowed: boolean;
        };
        searchInfo: {
            textSnippet: string;
        };
    };
};

export type TransformedBookType = {
    id: string;
    title: string;
    authors: string[];
    description: string;
    categories: string[];
    image: string;
};

export type StateType = {
    searchName: string;
    inputError: boolean;
    books: TransformedBookType[];
    category: string;
    sortedBy: string;
    booksLoadingStatus: string;
    moreBooksLoadingStatus: string;
    selectedBook: null | string;
    totalItems: number;
    startIndex: number;
};