const scrapingRobot:ScraperSettings = {
   id: 'scrapingrobot',
   name: 'Scraping Robot',
   website: 'scrapingrobot.com',
   multi_pages: (keyword, settings, countryData) => {
      const urls = [];
      const country = keyword.country || 'US';
      const device = keyword.device === 'mobile' ? '&mobile=true' : '';
      const lang = countryData[country][2];
      for (let i = 0; i < 10; i += 1) {
         const start = i * 10;
         const url = encodeURI(`https://www.google.com/search?hl=${lang}&q=${keyword.keyword}&start=${start}`);
         urls.push(`https://api.scrapingrobot.com/?token=${settings.scaping_api}&proxyCountry=${country}&render=false${device}&url=${url}`);
      }
      return urls;
   },
   resultObjectKey: 'result',
};

export default scrapingRobot;
