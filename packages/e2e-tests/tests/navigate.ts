import {Page} from "@playwright/test";

export const navigateToPath = async (page: Page, path: string) => {
    return await page.goto(path);
};
