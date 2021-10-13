const { $, $$ } = require('../helpers/element-selection.js');
let slowDown = true;
async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {
  let countBefore;
  let countAfter;
  this.When(/^I click on cart button$/, async function () {
    await driver.findElement(By.css('[href="https://www.willys.se/varukorg"]')).click();
    await waitAWhile();
  });
  this.Then(/^the quantity should increase after clicking \+ button$/, async function () {
    countBefore = +((await (await driver.findElement(By.css('input.CartQuantityInputField_quantity-input__2dyMe'))).getAttribute("value")).split(" ")[0]);
    await driver.findElement(by.css('[aria-label="Öka antal"]')).click();
    countAfter = +((await (await driver.findElement(By.css('input.CartQuantityInputField_quantity-input__2dyMe'))).getAttribute("value")).split(" ")[0]);
    await expect(countBefore).to.not.equal(countAfter);
    console.log("quantity before increasing: " + countBefore + "\nquantity after increasing: " + countAfter)
    await waitAWhile();
  });
  this.Then(/^the quantity should decrease after clicking \- button$/, async function () {
    countBefore = +((await (await driver.findElement(By.css('input.CartQuantityInputField_quantity-input__2dyMe'))).getAttribute("value")).split(" ")[0]);
    await driver.findElement(by.css('[aria-label="Minska antal"]')).click();
    countAfter = +((await (await driver.findElement(By.css('input.CartQuantityInputField_quantity-input__2dyMe'))).getAttribute("value")).split(" ")[0]);
    await expect(countBefore).to.not.equal(countAfter);
    console.log("quantity before decreasing: " + countBefore + "\nquantity after decreasing: " + countAfter)
    await waitAWhile();
  });
}
