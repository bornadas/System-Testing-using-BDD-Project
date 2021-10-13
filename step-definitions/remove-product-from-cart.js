let slowDown = true;
async function waitAWhile() {
    await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function() {
    this.When(/^I click mini-cart$/, async function() {
        await driver.findElement(By.css('.ax-cart-mini')).click();
        await waitAWhile();
    });
    this.When(/^the product should be removed after clicking \- button$/, async function() {
        let productName = await driver.findElement(By.css('h3[role="button"]')).getText();
        await driver.findElement(By.css('.md-3-line .selenium--product-quantity-remove-from-cart-btn')).click();
        console.log(productName + " is removed from the cart")
        await waitAWhile();
    });
}