const { $, $$ } = require('../helpers/element-selection.js');
let slowDown = true;
async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {
  // add first product
  this.Then(/^I click on \+ button to add the first product from veckans varor$/, async function () {
    let loadMoreButton = driver.findElement(By.css('[ax-analytics2-action="Beam_ShowMore"]'));
    await loadMoreButton.click();
    await (await (await driver.findElements(By.css('.ax-product-quantity-plus')))[4]).click();
  });
  // add more products
  this.Then(/^I added several copy of this product$/, async function () {
    for (let i = 1; i < 500; i++) {
      await (await (await driver.findElements(By.css('.ax-product-quantity-plus')))[4]).click();
    }
  });
}
