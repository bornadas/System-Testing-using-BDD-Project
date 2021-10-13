let slowDown = true;
async function waitAWhile() {
    await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {
    this.When(/^I added some product in cart$/, async function () {
        let loadMoreButton = driver.findElement(By.css('[ax-analytics2-action="Beam_ShowMore"]'));
        await loadMoreButton.click();
        for (let i = 0; i < 40; i++) {
            await (await (await driver.findElements(By.css('.ax-product-quantity-plus')))[i]).click();
        }
        await waitAWhile();
    });
    this.When(/^I click on the shopping cart$/, async function () {
        await driver.findElement(By.css('[ax-analytics2-action="Öppna minivarukorg"]')).click();
        await waitAWhile();
    });
    this.When(/^I click on töm varukorg button$/, async function () {
        let tomButton = await driver.findElement(By.css('[action="vm.clearCart()"]'));
        await tomButton.click();
        await waitAWhile();
    });
    this.Then(/^The cart should be empty$/, async function () {
        let clearButton = await driver.findElement(By.css('[ng-show="dialog.ok"]'));
        await clearButton.click();
        await waitAWhile();
    });
}