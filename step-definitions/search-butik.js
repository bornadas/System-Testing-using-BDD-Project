let slowDown = true;
async function waitAWhile() {
    await driver.sleep(slowDown ? 5000 : 0);
}

module.exports = function() {    
  this.When(/^I click on hitta butik$/, async function () {  
    await driver.findElement(By.css('#selenium--header-nav-link-hitta-butik')).click();
    await waitAWhile();
  });

  this.When(/^I search "([^"]*)" in the search bar$/, async function (input) {
    let searchInput = await driver.findElement(by.css('#input-7'));
    await searchInput.sendKeys(input);
    await waitAWhile();
  });

  this.Then(/^I should get the butik address$/, async function () {
    await driver.wait(until.elementsLocated(by.css('.ax-store-search-result-storename')), 10000);
    let elements = await driver.findElements(by.css('.ax-store-search-result-storename'));        
    expect(elements.length).to.not.equal(0);     
  });
     
}