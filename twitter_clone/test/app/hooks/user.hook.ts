import { useUsers } from '@/app/hooks/user/all.hook';
import { expect } from '@jest/globals';

describe('[HOOK] | USER', () => {
  let USER: {
    all: typeof useUsers;
  };

  beforeAll(() => {
    USER.all = useUsers;
  });

  it('[INTEGRATION] | [HOOK] - Should: list [all] => [USER]', () => {
    const { data } = USER.all();

    expect(data).toBeDefined();
    expect(data?.length).toBeGreaterThanOrEqual(0);
  });
});
