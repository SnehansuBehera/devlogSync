import cron from 'node-cron';
import { generateAISummariesForAllUsers } from '../controllers/summary-controller';

import { Request, Response } from 'express';

cron.schedule('0 19 * * *', async () => {
  // Create mock req and res objects
  const req = {} as Request;
  const res = {
    status: () => res,
    json: () => res,
    send: () => res
  } as unknown as Response;
  await generateAISummariesForAllUsers(req, res);
});
