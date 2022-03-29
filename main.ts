import fs from 'fs/promises';

import Axios from 'axios';
import Cheerio from 'cheerio';
// @ts-ignore
import lighthouse from 'lighthouse';
import * as ChromeLauncher from 'chrome-launcher';
import { LinkCrawler } from './src/LinkCrawler';

const START_URL = 'https://jackpordi.com';
const BASE_URL = `${new URL(START_URL).protocol}//${new URL(START_URL).hostname}`;

async function crawl(link: string = START_URL) {
}

const main = async () => {
  const linkCrawler = new LinkCrawler(START_URL, BASE_URL);
  console.log('Crawling for all links....');
  const links = await linkCrawler.crawl();
  console.log('Finished crawling...');

  // console.log('Running lighthouse...');
  // const tasks = Promise.all(links.map(async (link) => {
  //   const chrome = await ChromeLauncher.launch({ chromeFlags: ['--headless'] });
  //   const options = {
  //     logLevel: 'error', output: 'html', onlyCategories: ['performance'], port: chrome.port,
  //   };
  //   const runnerResult = await lighthouse(link, options);
  //   const reportHtml = runnerResult.report;
  //   await fs.writeFile(`${link.replaceAll(BASE_URL, '').replaceAll('/', '')}.html`, reportHtml);
  // }));
  //
  // await tasks;
  //
  // console.log('Done!');
};

main();
