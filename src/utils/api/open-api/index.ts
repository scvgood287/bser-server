import puppeteer from 'puppeteer';

import {
  Path,
  Nickname,
  SeasonId,
  MatchingTeamMode,
  UserNum,
  GameId,
  MetaType,
  Language,
  OpenApiKey,
  Username,
  Password,
  DefaultHeaders,
  MatchingMode
} from 'src/types/api/open-api';
import {
  HASH,
  GET_USER_NUMBER_PATH,
  TOP_RANKERS_PATH,
  USER_RANK_PATH,
  USER_STATS_PATH,
  USER_MATCHES_PATH,
  MATCH_RESULTS_PATH,
  GET_GAME_DATA_TABLE_PATH,
  GET_FREE_CHARACTERS_PATH,
  GET_LANGUAGE_DATA_PATH,
  BSER_DEV_PAGE_PATH,
} from 'src/dictionaries/default-path';
import { KOREAN } from 'src/dictionaries/language';
import { ENTER, CODE } from 'src/dictionaries/common';
import { LOGIN_SELECTOR, SIGN_IN_FORM_USERNAME_SELECTOR, SIGN_IN_FORM_PASSWORD_SELECTOR, MY_DASHBOARD_SELECTOR, } from 'src/dictionaries/selector';

export const getFreshOpenApiKey = async (username: Username, password: Password): Promise<OpenApiKey> => {
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();
  
    await page.goto(BSER_DEV_PAGE_PATH);
  
    await page.waitForSelector(LOGIN_SELECTOR);
    await page.click(LOGIN_SELECTOR);
  
    await page.waitForSelector(SIGN_IN_FORM_USERNAME_SELECTOR);
    await page.waitForSelector(SIGN_IN_FORM_PASSWORD_SELECTOR);
    await page.type(SIGN_IN_FORM_USERNAME_SELECTOR, username);
    await page.type(SIGN_IN_FORM_PASSWORD_SELECTOR, password);
    await page.keyboard.press(ENTER);
  
    await page.waitForSelector(MY_DASHBOARD_SELECTOR);
    await page.click(MY_DASHBOARD_SELECTOR);
  
    await page.waitForSelector(CODE);
    const code = await page.$(CODE);
    const openApiKey = await code.evaluate(node => node.innerHTML);

    return openApiKey;
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  };
};

export const testApi = async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1280, height: 640 } });

  const url = "https://www.makestar.co/projects/singer_kimyohan_06/story"
  const email = "scvgood287@naver.com";
  const password = "aa07630763!";
  const TARGETS = ["SET2"];
  const AMOUNT = 6;

  try {
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    const dialogSelector = "div.site-notice-dialog-content";
    const buttonSelector = "button";
    const makestarNowSelector = "div.color-white.d-flex.justify-center.align-center";

    const dialog = await page.waitForSelector(dialogSelector);
    const dialogButton = await dialog.waitForSelector(buttonSelector);
    await dialogButton.click();

    while (await page.$(dialogSelector)) {};
    await page.click(makestarNowSelector);

    const emailInputSelector = "input[placeholder='이메일']";
    const passwordInputSelector = "input[placeholder='비밀번호']";

    const emailInput = await page.waitForSelector(emailInputSelector);
    const passwordInput = await page.waitForSelector(passwordInputSelector);
    await emailInput.type(email);
    await passwordInput.type(password);
    await page.keyboard.press('Enter');

    const rewardListSelector = "div[class*='-list']";
    const listItemsSelector = "div.list-item";
    const INNER_HTML_SELECTOR = "div.fs-15.color-black9.lh-11";
    const amoutInputSelector = "input[type='number']";
    const nextButtonSelector = "button.button-wrapper.bg-red";

    await page.waitForSelector(rewardListSelector);
    await page.$$eval(listItemsSelector, ((elements, innerHTMLSelector: string, targets: string[]) => {

      elements.some(element => {
        const innerHTMLs = [...element.querySelectorAll(innerHTMLSelector)];
        const isTarget = innerHTMLs.some(({ innerHTML }) => targets.some(target => innerHTML.includes(target)));

        if (isTarget) {
          element.querySelector("label").click();
        };

        return isTarget;
      });
    }), INNER_HTML_SELECTOR, TARGETS);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);
    const amountInput = await page.waitForSelector(amoutInputSelector);
    const rect = await amountInput.evaluate((element: HTMLInputElement, amount: number) => {
      element.value = String(amount + 1);
      const { y, right } = element.getBoundingClientRect();

      return {
        x: right - 6,
        y: y + 6
      };
    }, AMOUNT);

    await page.mouse.click(rect.x, rect.y);
    await page.waitForTimeout(1000);
    await page.click(nextButtonSelector);
  } catch (e) {
    console.log(e);
  } finally {
    // await browser.close();
  };
};


export const sleep = (ms: number = 1000) => {
  const delay = performance.now() + ms;
  while (performance.now() < delay) {};
}

export const delayedExecution = async<T> (cb, delay): Promise<{ response: T, duration: number}> => {
  sleep(delay);

  const start = performance.now();

  const response = await cb();

  const duration = performance.now() - start;

  return {
    response,
    duration
  };
}

export const getUserNumberPath = (nickname: Nickname): Path => `${GET_USER_NUMBER_PATH}?query=${nickname}`;
export const topRankersPath = (seasonId: SeasonId = 0, matchingTeamMode: MatchingTeamMode = 1): Path => `${TOP_RANKERS_PATH}/${seasonId}/${matchingTeamMode}`;
export const userRankPath = (userNum: UserNum, seasonId: SeasonId = 0, matchingTeamMode: MatchingTeamMode = 1): Path => `${USER_RANK_PATH}/${userNum}/${seasonId}/${matchingTeamMode}`;
export const userStatsPath = (userNum: UserNum, seasonId: SeasonId = 0): Path => `${USER_STATS_PATH}/${userNum}/${seasonId}`;
export const userMatchesPath = (userNum: UserNum): Path => `${USER_MATCHES_PATH}/${userNum}`;
export const matchResultsPath = (gameId: GameId): Path => `${MATCH_RESULTS_PATH}/${gameId}`;
export const getGameDataTablePath = (metaType: MetaType = HASH): Path => `${GET_GAME_DATA_TABLE_PATH}/${metaType}`;
export const getFreeCharactersPath = (matchingMode: MatchingMode): Path => `${GET_FREE_CHARACTERS_PATH}/${matchingMode}`;
export const getLanguageDataPath = (language: Language = KOREAN): Path => `${GET_LANGUAGE_DATA_PATH}/${language}`;

export const createDefaultAxiosRequestHeaders = (openApiKey: OpenApiKey): DefaultHeaders => ({ 'x-api-key': openApiKey });

const openApiUtils = {
  getFreshOpenApiKey,
  getUserNumberPath,
  topRankersPath,
  userRankPath,
  userStatsPath,
  userMatchesPath,
  matchResultsPath,
  getGameDataTablePath,
  getFreeCharactersPath,
  getLanguageDataPath,
  createDefaultAxiosRequestHeaders,
  testApi,
};

export default openApiUtils;