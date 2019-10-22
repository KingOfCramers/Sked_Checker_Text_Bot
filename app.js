const cron = require("node-cron");
const moment = require("moment");
const logger = require("./logger");
require('dotenv').config();

// Import utility functions...
const { launchBots, setUpPuppeteer } = require("./setup"); 

// Import bots...
const HFAC = require("./bots/HFAC"); 

// Run program...
if(process.env.NODE_ENV === 'production'){
    logger.info(`Starting up bots in ${process.env.NODE_ENV} at ${moment().format("llll")}`);
    cron.schedule('* * * * *', async () => {
        try {
            let { today, browser, page } = await setUpPuppeteer();
            logger.info(`Running program at ${today.format("llll")}`);

            await launchBots({ page, browser, today, bots: [HFAC] }); // Launch bots in production...

            await page.close();
            await browser.close();
            logger.info(`Chrome Closed Bots.`);
        } catch (err){
            logger.error('Root Error.', err);
        }                
    });
} else {
    (async () => {
        try {
            let { today, browser, page } = await setUpPuppeteer();
            logger.info(`Running program at ${today.format("llll")}`);

            await HFAC({ today, browser, page });

            await page.close();
            await browser.close();
            logger.info(`Chrome Closed Bots.`);
        } catch (err){
            logger.error('Root Error in development.', err);
        }
    })();
};