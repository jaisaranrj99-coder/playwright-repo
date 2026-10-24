import { test } from '@playwright/test'

test('intro', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@type="text"]').fill("iphone 17 pro");
    await page.locator(`//input[@id="nav-search-submit-button"]`).click();
    await page.waitForLoadState();
    //const iphoneName = await page.locator(`//div[@data-cy="title-recipe"]/descendant::h2[contains(@class,"a-size-medium")]`).allInnerTexts()
    const allRatings = await page.locator(`//div[@data-cy="title-recipe"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro ")]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]/child::div[@class="a-row a-size-small"]/child::span[@aria-hidden="true"]`).allInnerTexts()
    const highestRating = await allRatings.map(a => parseFloat(a))
    const topRated = await Math.max(...highestRating);
    console.log('Maximum rated product:', topRated)

    await page.locator(`//div[@data-cy="title-recipe"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro ")]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]/child::div[@class="a-row a-size-small"]/child::span[@aria-hidden="true" and normalize-space()="${topRated}"]/ancestor::div[@data-cy="reviews-block"]/preceding-sibling::div[@data-cy="title-recipe"]/descendant::a[@target="_blank"]`).first().click();
// await page.locator(`//div[@data-cy="title-recipe"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro ")]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]/child::div[@class="a-row a-size-small"]/child::span[@aria-hidden="true" and normalize-space()="${topRated}"]/ancestor::div[@role="listitem"]`).first().click();
})