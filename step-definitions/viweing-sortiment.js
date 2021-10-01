const { $, $$ } = require('../helpers/element-selection.js');

module.exports = function () {

    // /^ = Start of regular expression
    // $/ = End of regular expression
    // "([^"]*)" = match anything inside quotation marks
    
    this.Given(/^that I am on the "([^"]*)"$/, async function (url) {
         await helpers.loadPage(url);
       });

       this.When(/^I click on MENY button$/, async function () {
    return driver.findElement(by.css(".left-menu-btn")).click();

       });    

    this.Then(/^I can see sortiment$/, async function () {
         // Wait for 20sec .ax-sidemenu-heading element to show
        await driver.wait(until.elementsLocated(by.css('.ax-sidemenu-heading')), 20000);
        let findList = await $('.ax-sidemenu-heading');
        expect(findList).to.not.equal(null);
       });

       this.Then(/^the result should contain at least one sortiments$/, async function () {
        await driver.wait(until.elementsLocated(by.css('.ax-sidemenu-list')), 10000);
        let elements = await driver.findElements(by.css('.ax-sidemenu-list'));
        
        expect(elements.length).to.not.equal(0);
       });
};