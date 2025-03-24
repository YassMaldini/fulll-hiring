import { searchUsers } from "./searchUsers";
import { SearchUserResponse } from "./searchUsers.types";

global.fetch = jest.fn();

describe("searchUsers function tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch data and add checked property to each item when response is ok", async () => {
    const mockData: SearchUserResponse = {
      total_count: 1,
      incomplete_results: false,
      items: [
        {
          "login": "YassMaldini",
          "id": 115337790,
          "node_id": "U_kgDOBt_qPg",
          "avatar_url": "https://avatars.githubusercontent.com/u/115337790?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/YassMaldini",
          "html_url": "https://github.com/YassMaldini",
          "followers_url": "https://api.github.com/users/YassMaldini/followers",
          "following_url": "https://api.github.com/users/YassMaldini/following{/other_user}",
          "gists_url": "https://api.github.com/users/YassMaldini/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/YassMaldini/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/YassMaldini/subscriptions",
          "organizations_url": "https://api.github.com/users/YassMaldini/orgs",
          "repos_url": "https://api.github.com/users/YassMaldini/repos",
          "events_url": "https://api.github.com/users/YassMaldini/events{/privacy}",
          "received_events_url": "https://api.github.com/users/YassMaldini/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false,
          "score": 1,
          "checked": false
        }
      ],
    };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    const params = { text: "YassMaldini" };
    const result = await searchUsers(params);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result.data).toBeDefined();
    expect(result.data?.items[0].checked).toEqual(false);
  });

  it("should return undefined data when response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const params = { text: "something" };
    const result = await searchUsers(params);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result.data).toBeUndefined();
  });
});