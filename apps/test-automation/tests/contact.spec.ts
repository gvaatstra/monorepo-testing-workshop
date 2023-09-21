import { clickButtonByText } from "e2e-tests/tests/interaction.ts";
import { navigateToPath } from "e2e-tests/tests/navigate.ts";
import { clickContactButton } from "e2e-tests/tests/contact.ts";

import { test, expect } from "@playwright/test";

// test('click button on contact', ({ page }) =>{
//     navigateToPath(page,'/contact')
//     clickButtonByText(page, 'Click me')
// })

clickContactButton();


