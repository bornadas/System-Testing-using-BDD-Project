// Helpers for selecting DOM elements
function $(cssSelector) {
  return driver.findElement(by.css(cssSelector));
}

function $$(cssSelector) {
  return driver.findElements(by.css(cssSelector));
}

module.exports = { $, $$ };