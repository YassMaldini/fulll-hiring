import { Dispatch } from "react";
import { SearchUserResponse, SearchUsersParams } from "../../../api/queries/searchUsers.types";

export interface MainScreenContextProps {
  searchResult?: SearchUserResponse;
  setSearchResult: (searchResult?: SearchUserResponse) => void;

  isEditable: boolean;
  setEditable: (isEditable: boolean) => void;

  searchParams: Pick<SearchUsersParams, "page" | "perPage">;
  setSearchParams: Dispatch<React.SetStateAction<Pick<SearchUsersParams, "page" | "perPage">>>;

  // isLoading: boolean;
  // setLoading: (isLoading: boolean) => void;
}