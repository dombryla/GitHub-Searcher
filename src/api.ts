import { SearchItem, SearchInputs } from "./model/models"

const url = "https://api.github.com/search/code"

export const search = async (
  {searchPhrase, userName,language}: SearchInputs
): Promise<SearchItem> => {
  const response = await fetch(`${url}?q=${searchPhrase} user:${userName} language:${language}`)
  if (!response.ok) throw Error("Data fetching problem")
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
			avatarUrl: item.repository.owner.avatar_url
  }))
}
