import { SEARCH_ENDPOINTS } from "../endpoints/searchEndpoints";
import { SearchUserResponse, SearchUsersParams } from "./searchUsers.types";

export async function searchUsers(params: SearchUsersParams) {
  const endpoint = SEARCH_ENDPOINTS.users(params)
  const response = await fetch(endpoint)
  // console.log('response', response)
  
  if (response.ok) {
    const data: Promise<SearchUserResponse> = response.json()

    // add a checked property to each resulted item
    const editableItems = (await data).items.map((item) => ({
      ...item,
      checked: false
    }))
    const editableData = {
      ...(await data),
      items: editableItems
    }

    return {
      ...response,
      data: editableData
    }
  } else {
    return {
      ...response,
      data: undefined
    }
  }
}