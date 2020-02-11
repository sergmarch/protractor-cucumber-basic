let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1200);

Given('The user go to {string}', function(str) {
  browser.waitForAngularEnabled(false);
  return browser.get(str);
});

When('The user adds {string} in the name field', function(email) {
  return $('.js-focus-script.sign__input-field').sendKeys(email);
});

Then('The user should see correct email', function() {
  let input = $('.js-focus-script.sign__input-field');
  input.getAttribute('value').then(value => {
    expect(value).to.equal('sergmarch@test.mail');
  });
});
