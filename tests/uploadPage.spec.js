import {test} from '@playwright/test'

test('intro',async({page})=>{
    await page.goto("https://www.file.io/");
    await page.setInputFiles('//label[@for="select-files-input"]','C:/Users/rjjai/Downloads/Jaisaran-Resume.pdf');
})