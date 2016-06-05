const path = require('path');

// is it better to use before/after to reset buffer?
module.exports = {
  'Basic Text Copy' : function (browser) {
    browser
      .page.helper().resetBuffer()
      .url(`file:///${path.resolve(process.cwd(), browser.launchUrl)}`)
      .waitForElementVisible('[data-test="init-basic-text"]', 1000)
      .click('[data-test="init-basic-text"]')
      .assert.assertBuffer("Hello, I'm new content from your clipboard")
      .end();
  }
};
