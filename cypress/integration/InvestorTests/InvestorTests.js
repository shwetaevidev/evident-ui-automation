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

	riskAssessmentSelfDeclarationPage.getRiskToggle().should('have.text', testData.RiskText)
	riskAssessmentSelfDeclarationPage.getDiversification().should('have.text', testData.DiversificationText)
	riskAssessmentSelfDeclarationPage.getLimitedTransfer().should('have.text', testData.LimitedTransferText)
	riskAssessmentSelfDeclarationPage.getCancellation().should('have.text', testData.CancellationText)
	riskAssessmentSelfDeclarationPage.getLimits().should('have.text', testData.Limits)
	riskAssessmentSelfDeclarationPage.getReasearch().should('have.text', testData.Research)
	riskAssessmentSelfDeclarationPage.getToggles().wait(1000).click({ multiple: true })


});

Then(/^User clicks Proceed button$/, () => {
	riskAssessmentSelfDeclarationPage.getProceed().then((x) => {
		   if (x.is("disabled")) {
		      riskAssessmentSelfDeclarationPage.getToggles().click({ multiple: true })      
		   }else{
			riskAssessmentSelfDeclarationPage.getProceed().click({ force: true }).wait(500)
		   }   
		 });
	
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

And(/^User should be able to validate the Header notification$/, () => {
	riskAssessmentSelfDeclarationPage.getHeaderNotificationBtn().should('be.visible')
});

And(/^User should be able to validate the profile icon and clicks the profile icon$/, () => {
	riskAssessmentSelfDeclarationPage.getProfileIcon().should('be.visible')
	riskAssessmentSelfDeclarationPage.getProfileIcon().click()
	riskAssessmentSelfDeclarationPage.getAccountsBtn().click()	
});

Then(/^User validates (.*) and (.*) on the accounts Page$/, (onboarding,attribute) => {
	riskAssessmentSelfDeclarationPage.getOnBoardingSteps(onboarding).should("have.attr", "href", attribute);
});




