import { GitHubUser } from "../../types/user.types";

export interface SearchUsersParams {
  text: string;
  page?: number;
  perPage?: number;
}

export interface SearchUserResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
};