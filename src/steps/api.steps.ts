import { getAccessToken } from '../utils/api_helper';
import { expect, request } from '@playwright/test';
import { Given, Then, When } from '@cucumber/cucumber';
import * as dotenv from 'dotenv';
import { env } from 'process';
dotenv.config();

//const rm2_scope = env.RM2_API_SCOPE;

Given('I requested an access_token for GetHelp Portal API', async () => {
  const gethelp_api_scope: string = env.GETHELP_API_SCOPE as string;
  const client_secret: string = env.SECRETID as string;
  const client_id: string = env.CLIENTID as string;

  const token: string = await getAccessToken(client_secret, client_id, gethelp_api_scope);
  env.ACCESS_TOKEN = token;
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
