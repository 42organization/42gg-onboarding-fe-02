import { setupServer } from 'msw/node';
import { handlers } from './node';

export const server = setupServer(...handlers);
