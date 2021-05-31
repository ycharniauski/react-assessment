import { report } from '@utils/reporter';

const SEARCH_USERS_API = 'https://jsonplaceholder.typicode.com/users';

function getSearchUrl(options) {
  const { username } = options;
  if (username) {
    const encoded = encodeURIComponent(username);
    return `${SEARCH_USERS_API}?username=${encoded}`;
  }
  return SEARCH_USERS_API;
}

async function search(options = {}) {
  try {
    const { username } = options;
    const url = getSearchUrl({ username });
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    report(error);
    throw new Error('Sorry, Error happend while searching users');
  }
}

export const usersService = {
  search,
};
