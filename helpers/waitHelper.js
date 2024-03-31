const { browser } = require ('webdriverio');

  function waitUntilElemetExist(element, timeout = 10000) { 
    element.waitForExist(timeout);
  }

  async function waitAndClick(element){
        await waitUntilElemetExist(element);
        await element.click();
  } 
  
  module.exports = {
    waitUntilElemetExist,
    waitAndClick
  };