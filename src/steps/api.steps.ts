import { expect, request } from '@playwright/test';
import { Given, Then, When } from '@cucumber/cucumber';
import * as dotenv from 'dotenv';
import { env } from 'process';
dotenv.config();

//const rm2_scope = env.RM2_API_SCOPE;

Given('I requested an access_token for GetHelp Portal API', async () => {
  const oauthURL: string = env.OAUTH_URI as string;
  const gethelp_api_scope: string = env.GETHELP_API_SCOPE as string;
  const client_secret: string = env.SECRETID as string;
  const client_id: string = env.CLIENTID as string;

  const context = await request.newContext({
    baseURL: oauthURL,
  });
  const _response = await context.post('', {
    form: {
      grant_type: 'client_credentials',
      scope: gethelp_api_scope,
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
  env.ACCESS_TOKEN = responseToken;
});

When('I send Get request to GetHelp Portal with the uri path {string}', async (path) => {
  const gethelp_api: string = env.GETHELP_API as string;
  const context = await request.newContext({
    baseURL: gethelp_api,
  });
  const _response = await context.get(path, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + env.ACCESS_TOKEN,
    },
  });

  //Store Status Code and Response Body to validate on the next steps
  const resBody = await _response.json();
  env.RESPONSE_BODY = resBody.toString();

  const res: number = _response.status();
  env.RESPONSE_STATUS = res.toString();
});

Then('Response status code is {string}', async (statusCode: string) => {
  const st = env.RESPONSE_STATUS;
  expect(st, 'Checking Response').toBe(statusCode);
});
