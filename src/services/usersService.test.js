import { usersService } from './usersService';

describe('Users service tests', () => {
  it('Get all users', async () => {
    const users = await usersService.search();
    expect(users.length > 0).toBeTruthy();
  });

  it('Find user by username', async () => {
    const username = 'Antonette';
    const users = await usersService.search({ username });
    expect(users.length === 1).toBeTruthy();
    const [first] = users;
    expect(first.id).toBe(2);
    expect(first.username).toBe('Antonette');
  });

  it('Search users by unknown name', async () => {
    const username = 'SDFSDF12312312';
    const users = await usersService.search({ username });
    expect(users.length === 0).toBeTruthy();
  });
});
