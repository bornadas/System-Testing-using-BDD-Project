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
    await driver.executeScript('window.scrollTo(0,0)');
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();
  });
  // add more products
  this.Then(/^I click on \+ button to add more products from veckans varor$/, async function () {
    await (await (await driver.findElements(By.css('.ax-product-quantity-plus')))[4]).click();
    await waitAWhile();
    await (await (await driver.findElements(By.css('.ax-product-quantity-plus')))[2]).click();
    await waitAWhile();
    await (await (await driver.findElements(By.css('.ax-product-quantity-plus')))[6]).click();
    await waitAWhile();
  });
}