import {Page} from "@playwright/test";

export const clickButtonByText = async (page: Page, text: string) => {
    return await page.getByText(text).click()
};