# Playwright Test Automation Portfolio

A Playwright and TypeScript test suite for [Automation Exercise](https://automationexercise.com/), covering registration, login, logout, the Contact Us form, navigation, product browsing, search, and cart behavior.

I built this project to apply my QA experience in test design, regression testing, and defect investigation to browser automation. The suite uses the Page Object Model, custom fixtures, and reusable components to keep test scenarios focused on user actions and expected results.

## Test coverage

The UI suite covers **10 test cases** (TC01 through TC09, plus TC12).

| Test case | Scenario | What it verifies |
| --- | --- | --- |
| TC01 | Register a user | A new user can complete registration and see the account confirmation. |
| TC02 | Log in with valid credentials | An existing user can sign in and see the logged-in username. |
| TC03 | Log in with invalid credentials | The application displays the expected error message. |
| TC04 | Log out | A signed-in user can log out and return to the login page. |
| TC05 | Register with an existing email | The application rejects the duplicate email and displays an error message. |
| TC06 | Submit the Contact Us form | The user can submit the form and see a success message. |
| TC07 | Open the Test Cases page | The Test Cases page opens from the main navigation. |
| TC08 | Browse products and view product details | The product list loads and the detail page shows the name, category, price, availability, condition, and brand. |
| TC09 | Search for a product | Searching for `Winter Top` returns the expected product. |
| TC12 | Add two products to the cart | `Blue Top` and `Men Tshirt` appear in the cart with the expected prices, quantities, and line totals. |

## Framework structure

| Path | Purpose |
| --- | --- |
| `tests/UI/` | End-to-end browser test scenarios |
| `pages/` | Page objects for navigation, registration, login, products, and the cart |
| `components/` | Reusable UI components, including the add-to-cart confirmation modal |
| `fixtures/baseTest.ts` | Custom fixtures that create and supply page objects to tests |
| `playwright.config.ts` | Base URL, test execution settings, HTML reporting, and trace configuration |
| `.github/workflows/playwright.yml` | GitHub Actions workflow for Playwright |

## Featured test — TC12: Add two products to the cart

The test adds `Blue Top` and `Men Tshirt`, uses the confirmation modal to continue shopping or open the cart, and verifies that exactly two rows appear. It scopes the price, quantity, and line-total assertions to each product’s row.

| Product | Unit price | Quantity | Line total |
| --- | --- | --- | --- |
| Blue Top | Rs. 500 | 1 | Rs. 500 |
| Men Tshirt | Rs. 400 | 1 | Rs. 400 |

This scenario exercises the product page, confirmation modal, and cart page in one flow. The test uses page objects supplied through fixtures, and the cart page object handles row-level lookups.

## Run locally

After installing Node.js and npm, run the following commands.

```bash
git clone https://github.com/Ardraanil0410/my_portfolio_framework.git
cd my_portfolio_framework
npm ci
npx playwright install
npx playwright test tests/UI
```

To watch the browser while the tests run, use headed mode.

```bash
npx playwright test tests/UI --headed
```

After a run, open the HTML report with this command.

```bash
npx playwright show-report
```

## Debugging and CI

The Playwright configuration uses the HTML reporter and captures a trace on the first retry when retries are enabled. A trace helps investigate the first point where the flow diverges. For example, if a product row is missing in TC12, the trace can show whether the add-to-cart click succeeded, whether the confirmation appeared, and what the cart displayed.

The GitHub Actions workflow is defined in `.github/workflows/playwright.yml`. Run history is available on the repository’s [Actions tab](https://github.com/Ardraanil0410/my_portfolio_framework/actions).

## Planned work

- Add API tests with Playwright’s request fixture.
- Move reusable registration inputs into dedicated test data.
- Verify a successful GitHub Actions run and document how to access its failure artifacts.
