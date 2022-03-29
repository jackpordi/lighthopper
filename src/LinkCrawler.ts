import Axios from 'axios';
import * as Cheerio from 'cheerio';

export class LinkCrawler {
  private links: string[] = [];

  constructor(
    private readonly startUrl: string,
    private readonly baseUrl: string,
  ) {}

  public async crawl() {
    await this.startCrawling(this.startUrl);
    return this.links;
  }

  private async startCrawling(link: string) {
    const response = await Axios.get(link);

    const html = response.data;
    const linkObjects = Cheerio.load(html)('a');
    const immediateLinks: string[] = [];
    linkObjects.each((_, element) => {
      immediateLinks.push(element.attribs.href);
    });
    // console.log(linkObjects.map(l => l.attribs));

    for (const linkUrl of immediateLinks) {
      if (linkUrl !== undefined) {
        if (linkUrl.startsWith('/') && !this.links.includes(this.baseUrl + linkUrl)) {
          const absolutePath = this.baseUrl + linkUrl;
          this.links.push(absolutePath);
          await this.startCrawling(absolutePath);
        } else if ((linkUrl.startsWith(this.baseUrl) || linkUrl.startsWith(this.baseUrl.replace('www.', ''))) && !this.links.includes(linkUrl)) {
          this.links.push(linkUrl);
          await this.startCrawling(linkUrl);
        }
      }
    }
  }
}
