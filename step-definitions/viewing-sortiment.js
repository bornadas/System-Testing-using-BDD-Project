const { $, $$ } = require('../helpers/element-selection.js');

let slowDown = true;
async function waitAWhile() {
    await driver.sleep(slowDown ? 5000 : 0);
}

module.exports = function () {
   this.When(/^I click on MENY button$/, async function () {      
        await(await driver.findElement(by.css('.left-menu-btn-opened'))).click();
        await waitAWhile();
        await (await driver.findElement(by.css('.left-menu-btn-closed'))).click();
        await waitAWhile();
   });    

    this.Then(/^I can see sortiment$/, async function () {
        await driver.wait(until.elementsLocated(by.css('.ax-sidemenu-heading')), 20000);        
        let findList = await $('.ax-sidemenu-heading');
        await waitAWhile();
        expect(findList).to.not.equal(null);
        await waitAWhile();
    });     

    this.Then(/^I click on Barn$/, async function () {
        await driver.findElement(By.css('a[href="/sortiment/barn"]')).click();
        await waitAWhile();
    });

    this.Then(/^I should get all the categories$/,async  function () {
        let grabCategories= await driver.wait(until.elementsLocated(by.css('[class^="AccordionNavNodestyles__StyledAccordionNavNodeList-sc-19q8af6-5 bvvGWC"]')));
        expect(grabCategories).to.not.equal(0);
        await waitAWhile();         
    });

    this.Then(/^I click on grot$/, async function () {
        let grabGrot = await driver.findElement(By.css('a[href="/sortiment/barn/grot"]'));
        await grabGrot.click();
    });
       
    this.Then(/^the result should contain at least one sortiment$/, async function () {
        let h2Text;
        while (h2Text !== 'Gröt') {
            h2Text = await (await driver.findElement(By.css('h2'))).getText();
            await driver.sleep(100);
        };
    }); 
};