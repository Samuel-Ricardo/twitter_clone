import { useMutation } from '@tanstack/react-query';

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
}));

export { useMutation };
