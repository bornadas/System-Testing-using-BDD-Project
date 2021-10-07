let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {
//click on cart to view it
  this.When(/^I click on cart$/, async function () {
    await driver.findElement(By.css('.ax-cart-mini')).click();
    await waitAWhile();         
  });

//  Checking that cart is not be empty
  this.Then(/^I should be able to see the products which i added in the cart$/, async function () {
    let productsInCart= await driver.findElements(By.css('.selenium--product-list-go-to-product-detail'));
    await waitAWhile();      
    expect(productsInCart).to.not.equal(0);         
  });

}