let slowDown = true;
async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {
  let boughtProducts;
  this.Given(/^that I navigate to glass\-godis\-och\-snacks category page$/, async function () {
    // find glass-godis-och-snacks categories
    let glassGodisAndSnacks = await driver.findElement(By.css('a[href="/sortiment/glass-godis-och-snacks"]'));
    browser.executeScript("arguments[0].scrollIntoView();", glassGodisAndSnacks.getWebElement());
    await glassGodisAndSnacks.click();
    //Find Choklad from glass-godis-och-snacks categories inside 
    await driver.wait(until.elementsLocated(by.css('a[href="/sortiment/glass-godis-och-snacks/choklad"]')), 10000);
    let choklad = await driver.findElement(By.css('a[href="/sortiment/glass-godis-och-snacks/choklad"]'));
    await driver.executeScript('document.querySelector(\'a[href="/sortiment/glass-godis-och-snacks/choklad"]\').scrollIntoView()');
    await choklad.click();
    let h2Text;
    while (h2Text !== 'Choklad') {
      h2Text = await (await driver.findElement(By.css('h2'))).getText();
      await driver.sleep(100);
    }
  });
  this.When(/^I added random number of each product that has price per piece in the cart$/, async function () {
    let loadMoreButton = driver.findElement(By.css('button[class*="LoadMore"]'));
    await loadMoreButton.click();
    await driver.executeScript('window.scrollTo(0,0)');
    // Get all products on the page
    let products = await driver.findElements(By.css('[itemtype="https://schema.org/Product"]'));
    // Loop through the products 
    // to buy which has per piece (kr/st)
    boughtProducts = [];
    for (let product of products) {
      // Check if the product has a price per piece
      let hasPricePerPiece = (await product.getText()).includes('kr/st');
      // if not do nothing 
      if (!hasPricePerPiece) { continue; }
      // Check for quantity discount
      let discountedProducts = await product.findElement(By.css('[class^="Product_product-save-price"]')).catch(e => { });
      let discountedText = discountedProducts ? await discountedProducts.getText() : '';
      let hasQuantityDiscount = discountedText.includes('FÖR');
      // Check for how many pieces the price is -> pricePer
      let pricePer = (hasQuantityDiscount && +discountedText.split(' ')[0]) || 1;
      // Randomize quantity (1 to 5 x pricePer), 
      // read the name and price of the product
      let name = await (await product.findElement(By.css('[itemprop="name"]'))).getText();
      let quantity = (Math.floor(Math.random() * 5) + 1) * pricePer;
      let price = +((await (await product.findElement(By.css('[class^="PriceLabel_product-price-text"]'))).getText()).split('\n').join('.').split('./st').join(''));
      // Remember name, price, quantity and pricePer for later
      boughtProducts.push({ name, quantity, price, pricePer });
      // Add the product to the cart in the right quantity
      let quantityField = await product.findElement(By.css('[aria-label="Ändra produktantal"]'));
      await quantityField.sendKeys(quantity + '', selenium.Key.ENTER);
    }
  });
  this.Then(/^the mini cart should show correct total price$/, async function () {
    // Calculate total price
    let calculatedTotalPrice = 0;
    for (let { quantity, price, pricePer } of boughtProducts) {
      calculatedTotalPrice += quantity * price / pricePer;
    }
    calculatedTotalPrice = +calculatedTotalPrice.toFixed(2);
    // Get quantity from mini-cart
    let miniCartTotalPrice = +(await (await driver.findElement(By.css('[class^="MiniCartstyles__StyledPrice"]'))).getText()).split(' ')[0].split(',').join('.');
    // Check that the total price displayed in the mini-cart
    // matches our calculations
    expect(miniCartTotalPrice).to.equal(calculatedTotalPrice);
    console.log("Price shown on mini cart: " + miniCartTotalPrice + "\nOur calculated price: " + calculatedTotalPrice)
  });
}





