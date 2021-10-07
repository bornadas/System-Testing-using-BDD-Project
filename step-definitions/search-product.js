const { $, $$ } = require('../helpers/element-selection.js');

let slowDown = true;
async function waitAWhile() {
    await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function() {

    this.When(/^I search for "([^"]*)" in the search box$/, async function(product) {
        let searchInput = await driver.findElement(by.css('[aria-label="Sök i e-handeln"]'));
        await searchInput.sendKeys(product);
        await waitAWhile();
    });

    this.When(/^I press ENTER$/, async function() {
        let searchInput = await driver.findElement(by.css('[aria-label="Sök i e-handeln"]'));
        await searchInput.sendKeys(selenium.Key.ENTER);
        await waitAWhile();
    });
    this.Then(/^I should get some search result$/, async function() {
        await driver.wait(until.elementsLocated(by.css('.Grid_grid__1YmC6')), 10000);
    });
    this.Then(/^I click on first search result$/, function() {
        return driver.findElement(by.css(".Product_product-header__3sHfy")).click();
    });
    this.Then(/^I should get more information about that product$/, async function() {
        await driver.wait(until.elementsLocated(by.css('.ProductDetails_product-details__3R0V8')), 10000);
        await waitAWhile();
    });
}