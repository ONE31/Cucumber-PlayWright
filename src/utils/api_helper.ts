import { expect, request } from '@playwright/test';
import * as dotenv from 'dotenv';
import { env } from 'process';
dotenv.config();

/**
 * Returns the Bearer token
 * @param client_secret
 * @param client_id
 * @param api_scope
 */
export async function getAccessToken(
  client_secret: string,
  client_id: string,
  api_scope: string,
): Promise<string> {
  const oauthURL: string = env.OAUTH_URI as string;

  const context = await request.newContext({
    baseURL: oauthURL,
  });
  const _response = await context.post('', {
    form: {
      grant_type: 'client_credentials',
      scope: api_scope,
      client_secret: client_secret,
      client_id: client_id,
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
  expect(_response.status(), 'Checking 200 Response').toBe(200);
  expect(_response.ok()).toBeTruthy;

  // get 'token' value from response's body data
  const res = await _response.json();
  const responseToken = res.access_token;
  return responseToken;
}
