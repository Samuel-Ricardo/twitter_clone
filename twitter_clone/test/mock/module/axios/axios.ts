import axios from 'axios';
import { mockDeep } from 'jest-mock-extended';

export const mockAxios = () => mockDeep<typeof axios>();
