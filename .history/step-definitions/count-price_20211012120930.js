let slowDown = true;
async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {
  let boughtProducts;
  this.Given(/^that I am on the Fruit category page$/, async function () {
    // find fruits and vegetable categories
    let fruktOchGrontLink = await driver.findElement(By.css('a[href="/sortiment/frukt-och-gront"]'));
    await fruktOchGrontLink.click();
    //Find fruits categories inside 
    await driver.wait(until.elementsLocated(by.css('a[href="/sortiment/frukt-och-gront/frukt"]')), 10000);
    let fruktLink = await driver.findElement(By.css('a[href="/sortiment/frukt-och-gront/frukt"]'));
    await driver.executeScript('document.querySelector(\'a[href="/sortiment/frukt-och-gront/frukt"]\').scrollIntoView()');
    await fruktLink.click();
    let h2Text;
    while (h2Text !== 'Frukt') {
      h2Text = await (await driver.findElement(By.css('h2'))).getText();
      await waitAWhile();
    }
  });
  this.When(/^I put a random number of each fruit that has price per piece in the cart$/, async function () {
    let loadMoreButton = driver.findElement(By.css('button[class*="LoadMore"]'));
    await loadMoreButton.click();
    await driver.executeScript('window.scrollTo(0,0)');
    // Get all products on the page
    let products = await driver.findElements(By.css('[itemtype="https://schema.org/Product"]'));
    // Loop through the products 
    // and buy a random number of those you can buy per piece (kr/st)
    boughtProducts = [];
    for (let product of products) {
      // Check if the product has a price per piece
      let hasPricePerPiece = (await product.getText()).includes('kr/st');
      // if not do nothing 
      if (!hasPricePerPiece) { continue; }
      // Check for quantity discount
      let discountElement = await product.findElement(By.css('[class^="Product_product-save-price"]')).catch(e => { });
      let discountText = discountElement ? await discountElement.getText() : '';
      let hasQuantityDiscount = discountText.includes('FÖR');
      // Check for how many pieces the price is -> pricePer
      let pricePer = (hasQuantityDiscount && +discountText.split(' ')[0]) || 1;
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
      await waitAWhile();
    }
  });
  this.Then(/^the mini\-cart should show the correct total quantity of products$/, async function () {
    // Calculate total quantity
    let totalQuantity = 0;
    for (let { quantity } of boughtProducts) {
      totalQuantity += quantity;
    }
    // Get quantity from mini-cart
    let miniCartTotalQuantity = +(await (await driver.findElement(By.css('[class^="MiniCartstyles__StyledCounter"]'))).getText());
    // Check that the total quantity displayed in the mini-cart
    // matches our calculations
    expect(miniCartTotalQuantity).to.equal(totalQuantity);
    await waitAWhile();
  });
  this.Then(/^the mini\-cart should show correct total price$/, async function () {
    await driver.findElement(By.css('.ax-cart-mini')).click();
    // Calculate total price
    let totalPrice = 0;
    for (let { quantity, price, pricePer } of boughtProducts) {
      totalPrice += quantity * price / pricePer;
    }
    totalPrice = +totalPrice.toFixed(2);
    // Get quantity from mini-cart
    let miniCartTotalPrice = +(await (await driver.findElement(By.css('[class^="MiniCartstyles__StyledPrice"]'))).getText()).split(' ')[0].split(',').join('.');
    // Check that the total price displayed in the mini-cart
    // matches our calculations
    expect(miniCartTotalPrice).to.equal(totalPrice);
    await waitAWhile();
    console.log('\n\nDISPLAYED TOTAL PRICE IN MINI-CART:', miniCartTotalPrice);
    console.log('CALCULATED TOTAL PRICE', totalPrice);
  });
}