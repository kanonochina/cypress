function myCustomMethod(win) {
  

win.document.querySelector('input[name="firstName"]').value = 'Mock Automated'
win.document.querySelector('input[name="lastName"]').value = 'Order test'
win.document.querySelector('input[name="email"]').value = 'orders@productlistgenie.com'
win.document.querySelector('input[name="phone"]').value = '4123722692'
win.document.querySelector('input[name="address"]').value = '1989 Hillview Drive'
win.document.querySelector('input[name="city"]').value = 'San Francisco'
win.document.querySelector('input[name="zipcode"]').value = '94103'

win.document.querySelector('select[name="country"]').value = 'USA'


win.document.querySelector('input[name="cardNumber"]').value = '4242424242424242';
win.document.querySelector('input[name="expiry"]').value = '10/23'
win.document.querySelector('input[name="cardCode"]').value = '123'


win.document.querySelector('input[name="clientKey"]').value = "3gej8Lywn9pHbY9w8KLw7tW6t5TzSbF7rk92tTYySBbsDBC6Pu899nQTPeACU67E";
win.document.querySelector('input[name="loginKey"]').value = "8GyWVhr2B852";
win.document.querySelector('input[name="tk"]').value = "U2FsdGVkX1/R2/OjqgDXhdjTyWK56+Ta172iURIsPo4tQ2GMz8YrpauANAmzAB0K";
win.document.querySelector('input[name="testMode"]').value = true;
var head = win.document.getElementsByTagName('head')[0];
      var script= win.document.createElement('script');
      script.src= 'https://jstest.authorize.net/v1/Accept.js';
      head.appendChild(script);

win.sendPaymentDataToAnet = function () {
    var authData = {};
    authData.clientKey = "3gej8Lywn9pHbY9w8KLw7tW6t5TzSbF7rk92tTYySBbsDBC6Pu899nQTPeACU67E"
    authData.apiLoginID = "8GyWVhr2B852"
    var cardData = {};
    var expiration = win.document.querySelector('input[name="expiry"]').value.replace(/ /g,"");
    cardData.cardNumber = win.document.querySelector('input[name="cardNumber"]').value.replace(/ /g,"");
    cardData.month = expiration.split("/")[0];
    cardData.year = expiration.split("/")[1];
    cardData.cardCode = win.document.querySelector('input[name="cardCode"]').value;
    var secureData = {};
    secureData.authData = authData;
    secureData.cardData = cardData;
    win.Accept.dispatchData(secureData, win.responseHandler);
}

}



describe('My First Test', () => {
    it('Visit landing page', () => {
      cy.visit('https://zeftestbusines.productlistgenie.io/fred-measuringtape')
      cy.contains('SHOP NOW').click()
      cy.url().should('include', '/fred-measuringtape/checkout')
      cy.window().then(win => myCustomMethod(win))

      cy.wait(500)

      cy.contains('SEND MY TAPE MEASURE WITH FREE SHIPPING!').click()
    })
  })