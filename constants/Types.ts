export type SearchContentResponse = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export type SearchResponse = {
    Search: SearchContentResponse[]
    totalResults: string
    Response: string
}


