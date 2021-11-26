// require('cypress-downloadfile/lib/downloadFileCommand')
// import 'cypress-file-upload'
import LoginAndRegisterPage from './PageObjects/LoginAndRegisterPage'
var email;

// import data from '../fixtures/testData.json'



const loginAndRegisterPage = new LoginAndRegisterPage()

// Cypress.Commands.add('uploadFile', () => {
//     addOfferPage.uploadFile().attachFile(fixturefilePath).trigger('input', { force: true }).wait(1000)
// });

// Cypress.Commands.add('uploadCanvasImage', () => {
//   addOfferPage.getUploadCanvasImage().attachFile(canvasfilePath).trigger('input', { force: true }).wait(1000)
// });

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});

function rndEmailId(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

Cypress.Commands.add('RegisterInvestorUser', (url) => {
  cy.visit('register')
  loginAndRegisterPage.individualInvestment().should('be.visible')
  loginAndRegisterPage.evidentLogo().should('be.visible')
  email=rndEmailId(6) + "@gmail.com"
  loginAndRegisterPage.emailInput().type(email) 
  loginAndRegisterPage.emailPassword().type(Cypress.env('password'))
  loginAndRegisterPage.signUp().click()

});

Cypress.Commands.add('InvestorUserLogin', (url) => {
  cy.visit('login')
  loginAndRegisterPage.evidentLogo().should('be.visible')
  loginAndRegisterPage.emailInput().type(email)
  loginAndRegisterPage.emailPassword().type(Cypress.env('password'))
  loginAndRegisterPage.login().click()
  cy.wait(1000)

});

