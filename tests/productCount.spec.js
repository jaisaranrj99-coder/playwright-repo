import { test } from '@playwright/test';

test('intro', async ({ page }) => {
    await page.goto("https://www.myntra.com/boy-tshirts");

    //     const priceText = await page.locator(
    //         '//div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]'
    //     ).allInnerTexts();

    //     const prices = priceText.map(p =>
    //         Number(p.replace(/[^\d]/g, ""))
    //     );

    //     const minPrice = Math.min(...prices);

    //     console.log('Minimum T-shirt price:', minPrice);
    //    let productName = await page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and normalize-space()="Rs. ${minPrice}"]/ancestor::div[@class="product-price"]/preceding-sibling::h4[@class="product-product"]`).allInnerTexts();
    //     console.log("Product name:", productName);
    async function getMinimumPrice(){
    let pricesText = await page.locator(`//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or not(@class) and text()]`).allInnerTexts();;
    const prices = pricesText.map(a => Number(a.replace(/[^\d]/g, "")))
    const minimumPrice = Math.min(...prices);
    console.log('Minimum T-shirt price:', minimumPrice);

    const productName = await getProductName(minimumPrice);
    console.log('All products Minimum T-shirt price:', productName);
    }

    async function getProductName(minPrice) {
        let productName = await page.locator(`//li[@class="product-base"]//div[@class="product-price"]//span[(@class="product-discountedPrice" and normalize-space()="Rs. ${minPrice}") or( not(@class) and normalize-space()="Rs. ${minPrice}")]/ancestor::div[@class="product-price"]/preceding-sibling::h4[@class="product-product"]`).allInnerTexts();
        return productName;
    }


    await getMinimumPrice()

});       

await page.locator(`//span[contains(text(),"Trending now")]/ancestor::div[@class="layoutTop"]/following-sibling::div[@class="layoutMiddle"]/descendant::a[contains(@class,"keyword-text d-ib ml-4 mxw-70p tc")][8]`).click();