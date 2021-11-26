/// <reference types="Cypress" />
// InvestorLogin.js created with Cypress
import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginAndRegisterPage from '../../support/PageObjects/LoginAndRegisterPage'
import RiskAssessmentSelfDeclarationPage from '../../support/PageObjects/RiskAssessmentSelfDeclarationPage'
import testData from '../../fixtures/testData.json'


const loginAndRegisterPage = new LoginAndRegisterPage;
const riskAssessmentSelfDeclarationPage = new RiskAssessmentSelfDeclarationPage;

Given('I navigate to Investor Portal to Register as an Investor', () => {
	cy.RegisterInvestorUser();
	cy.wait(1000)

});

When(/^Investor clicks Proceed button$/, () => {
	loginAndRegisterPage.proceedAfterRegistration().click()
});

Then(/^Investor is navigated to Risk Declaration Page$/, () => {
	riskAssessmentSelfDeclarationPage.selfDeclarationPageHeader().should('be.visible')
});

And(/^Investor validates Risk assessment - Self declaration text$/, () => {
	riskAssessmentSelfDeclarationPage.getRiskDeclarationText().should('contain', 'Risk assessment - Self declaration')
});

And(/^Investor validates Risk on Risk assessment - Self declaration text$/, () => {
	riskAssessmentSelfDeclarationPage.getRiskTextsOnRiskDeclarationPage().should('have.text', 'Risk')
});

And(/^Investor validates Diversification on Risk assessment - Self declaration text$/, () => {
	riskAssessmentSelfDeclarationPage.getDiversificationTextsOnRiskDeclarationPage().should('have.text', 'Diversification')
});

And(/^Investor validates Limited transfer on Risk assessment - Self declaration text$/, () => {
	riskAssessmentSelfDeclarationPage.getLimitedTransferTextsOnRiskDeclarationPage().should('have.text', 'Limited transfer')
});

And(/^Investor validates Cancellation on Risk assessment - Self declaration text$/, () => {
	riskAssessmentSelfDeclarationPage.getCancellationTextsOnRiskDeclarationPage().should('have.text', 'Cancellation')
});

And(/^Investor validates Limits on Risk assessment - Self declaration text$/, () => {
	riskAssessmentSelfDeclarationPage.getLimitsTextsOnRiskDeclarationPage().should('have.text', 'Limits')
});

And(/^Investor validates Research on Risk assessment - Self declaration text$/, () => {
	riskAssessmentSelfDeclarationPage.getResearchTextsOnRiskDeclarationPage().should('have.text', 'Research')
});

Then(/^Investor clicks toggles$/, () => {
	riskAssessmentSelfDeclarationPage.getToggles().click({ multiple: true })
	riskAssessmentSelfDeclarationPage.getRiskToggle().should('have.text', testData.RiskText)
	riskAssessmentSelfDeclarationPage.getDiversification().should('have.text', testData.DiversificationText)
	riskAssessmentSelfDeclarationPage.getLimitedTransfer().should('have.text', testData.LimitedTransferText)
	riskAssessmentSelfDeclarationPage.getCancellation().should('have.text', testData.CancellationText)
	riskAssessmentSelfDeclarationPage.getLimits().should('have.text', testData.Limits)
	riskAssessmentSelfDeclarationPage.getReasearch().should('have.text', testData.Research)
});

Then(/^User clicks Proceed button$/, () => {
	riskAssessmentSelfDeclarationPage.getProceed().click()
});

And(/^User is navigated to Accounts Page$/, () => {
	riskAssessmentSelfDeclarationPage.getAccount().should('have.text', testData.Account)
});

Given(/^I navigate to Investor Portal to login as an Investor$/, () => {
	cy.InvestorUserLogin()
});

Then(/^User is brought to market place$/, () => {
	cy.url().should('eq', 'https://development.evident.capital/market-place')
	cy.url().should('include', '/market-place')
});

