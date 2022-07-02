export type SearchItem = {
    name: string
    url: string
    description: string
    login: string
    avatarUrl: string
}

export type SearchInputs = {
    searchPhrase: string,
    userName: string,
    language:  "js" | "go" | "java"
  }