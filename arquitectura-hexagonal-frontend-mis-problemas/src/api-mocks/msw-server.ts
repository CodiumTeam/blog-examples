import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { rest } from 'msw';

const mswServer = setupServer(...handlers);
export { mswServer, rest };
