let slowDown = true;
async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {
  this.Given(/^that I am on "([^"]*)"$/, async function (url) {
    await helpers.loadPage(url);
  });
  //for cookies policy
  this.When(/^that I accepted the standard cookie policy$/, async function () {
    await driver.wait(until.elementsLocated(by.css('#onetrust-accept-btn-handler')), 10000);
    let cookieAcceptButton = await driver.findElement(By.css('#onetrust-accept-btn-handler'));
    while (!(await cookieAcceptButton.isDisplayed())) {
      await driver.sleep(100);
    }
    await cookieAcceptButton.click();
    await waitAWhile();
  });
  // remove delivery popup
  this.When(/^that we have been through the initial where to deliver popup$/, async function () {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();
    await waitAWhile();
    await driver.wait(until.elementsLocated(by.css('.ax-delivery-widget-overlay')), 10000);
    let deliveryOverlay = await driver.findElement(By.css('.ax-delivery-widget-overlay'));
    await deliveryOverlay.click();
    await waitAWhile();
    let minusButton = await driver.findElement(By.css('.ax-product-quantity-minus'));
    await minusButton.click();
    await waitAWhile();
  });
}