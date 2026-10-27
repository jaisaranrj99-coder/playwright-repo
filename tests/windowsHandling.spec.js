import { test } from '@playwright/test'

test('intro', async ({ context }) => {
    const page = await context.newPage()
    await page.goto("https://www.reliancedigital.in/");
    await page.locator(`//div[text()="Tablets"]`).click();
    const [newtab] = await Promise.all([await context.waitForEvent('page'),page.click(`//h5[contains(text()," Asus Pad 30.98 cm")]`)]);
    await newtab.getByAltText("Compare").click();
    await newtab.getByAltText("Compare (1)").click();
    await page.bringToFront();
    const [newtab1] = await Promise.all([await context.waitForEvent('page'),page.click(`//h5[contains(text(),"Moto Pad 70 Groove 32.25 cm")]`)]);
    await newtab1.getByAltText("Compare").click();
    await newtab1.getByAltText("Compare (2)").click(); 
})