import { SearchUsersParams } from "../queries/searchUsers.types";

export const SEARCH_ENDPOINTS = Object.freeze({
  users: ({ text, page, perPage }: SearchUsersParams) => 
    `https://api.github.com/search/users?q=${text}${page ? `&page=${page}` : ''}${perPage ? `&per_page=${perPage}` : ''}`
})