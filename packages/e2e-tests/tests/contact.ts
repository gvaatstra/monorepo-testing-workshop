import { test, expect } from "@playwright/test";

export const clickContactButton = () => {
    return test("should click contact page button", async ({ page }) => {
        await page.goto("/contact");
        await page.getByText('Click me').click()
    });
};