class RiskAssessmentSelfDeclarationPage {

   selfDeclarationPageHeader(){
      return cy.dataCy('header-platform-logo')
   }
   
   getRiskDeclarationText() {
      return cy.contains('Risk assessment - Self declaration')
   }

   getRiskTextsOnRiskDeclarationPage(){
      return cy.xpath("//div[@class='text-h6 q-mb-sm' and contains(text(),'Risk')]")
   
   }
   getDiversificationTextsOnRiskDeclarationPage(){
      return cy.xpath("//div[@class='text-h6 q-mb-sm' and contains(.,'Diversification')]")
   }
   getLimitedTransferTextsOnRiskDeclarationPage(){
      return cy.xpath("//div[@class='text-h6 q-mb-sm' and contains(.,'Limited transfer')]")
   }
   getCancellationTextsOnRiskDeclarationPage(){
      return cy.xpath("//div[@class='text-h6 q-mb-sm' and contains(.,'Cancellation')]")
   }
   getLimitsTextsOnRiskDeclarationPage(){
      return cy.xpath("//div[@class='text-h6 q-mb-sm' and contains(.,'Limits')]")
   }
   getResearchTextsOnRiskDeclarationPage(){
      return cy.xpath("//div[@class='text-h6 q-mb-sm' and contains(.,'Research')]")
   }

   getToggles(){
      // return cy.dataCy('risk-toggle')
      return cy.xpath("//div[@class='q-toggle__thumb absolute flex flex-center no-wrap']")
   }

   getRiskToggle(){
      return cy.dataCy('risk-toggle')

   }

   getDiversification(){
      return cy.dataCy('diversification-toggle')
   }

   getLimitedTransfer(){
      return cy.dataCy('limited-transfer-toggle')
   }

   getCancellation(){
      return cy.dataCy('cancellation-toggle')
   }

   getLimits(){
      return cy.dataCy('limits-toggle')
   }

   getReasearch(){
      return cy.dataCy('research-toggle')
   }

   getProceed(){
      return cy.dataCy('risk-submit-btn')
   }

   getAccount(){
      return cy.get('.router-link-active')
   }
   
}
export default RiskAssessmentSelfDeclarationPage