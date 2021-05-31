import React, {
  useCallback, useEffect, useState
} from 'react';
import styled from 'styled-components';

import { FILTER_DELAY } from '@constants/common';
import { usersService } from '@services/usersService';
import { toasterError } from '@utils/toaster';

import UsersFilter from './UsersFilter';
import UsersList from './UsersList';

/*

  To make code clean I recommend to call setData(res)

  But task requires to reduce number of renders.
  Thats why I added following check:

  setData((prev) => ((prev.length === 0 && res.length === 0) ? prev : res));

  Another solution:

  const equal = (prev, next) => {
    if (prev.data === next.data) return true;
    if (prev.data.length === 0 && next.data.length === 0) return true;
    return false;
  };

  memo(UsersList, equal);

  One more solution:

  const list = useMemo(() => data, [data.map(item => item.id).join()]);

  use it with memo HOC

*/

const Body = styled.div`
  width: 100%;
`;

function UsersBody() {
  const [data, setData] = useState([]);

  const filter = async (options = {}) => {
    try {
      const { username } = options;
      const result = await usersService.search({ username });
      setData((prev) => ((prev.length === 0 && result.length === 0) ? prev : result));
    } catch (error) {
      toasterError({ message: 'Sorry, error happens while filtering users' });
    }
  };

  useEffect(() => { filter(); }, []);

  const handleSubmit = useCallback(filter, []);

  return (
    <Body>
      <UsersFilter onSubmit={handleSubmit} />
      <UsersList data={data} />
    </Body>
  );
}

export default UsersBody;
