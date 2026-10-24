import{test}from '@playwright/test'

test ('oneFrameTest',async({page})=>{
await page.goto ("https://www.tutorialspoint.com/selenium/practice/frames.php");
const iframes1 = await page.frameLocator(`//h2[text()="Iframe 2"]/preceding-sibling::iframe[@src="new-tab-sample.php"]`);
await iframes1.locator('//a[@href="https://www.tutorialspoint.com"]').click();
await page.waitForTimeout(2000);


const iframes2 = await page.frameLocator('//h2[text()="Iframe 2"]/following-sibling::iframe[@src="new-tab-sample.php"]');
await iframes2.locator('//a[@href="https://www.tutorialspoint.com"]').click();
await page.waitForTimeout(2000);
})



test ('nestedFrameTest',async({page})=>{
await page.goto ("https://www.tutorialspoint.com/selenium/practice/frames.php");
const iframes1 = await page.frameLocator(`//h2[text()="Iframe 2"]/preceding-sibling::iframe[@src="new-tab-sample.php"]`);
await iframes1.locator('//a[@href="https://www.tutorialspoint.com"]').click();
await page.waitForTimeout(2000);


const iframes2 = await page.frameLocator('//h2[text()="Iframe 2"]/following-sibling::iframe[@src="new-tab-sample.php"]');
await iframes2.locator('//a[@href="https://www.tutorialspoint.com"]').click();
await page.waitForTimeout(2000);
})