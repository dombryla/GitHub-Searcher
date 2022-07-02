import { SearchItem, SearchInput } from "./model/models"

const url = "https://api.github.com/search/code"

export const search = async (
  {searchPhrase, userName,language}: SearchInput
): Promise<any> => {
    const response = await fetch(`${url}?q=${searchPhrase} user:${userName} language:${language}`,{
      method: "GET",
    })
    const data = await response.json()
    const result = parseSearchResponse(data)
    return result
}

const parseSearchResponse = (data: any): SearchItem =>{
  return data.items.map((item : any)=>({
      name: item.name,
      url: item.html_url,
      description: item.repository.description,
      login: item.repository.owner.login,
			avatarUrl: item.repository.owner.avatar_url,
      sha: item.sha
  }))
}
