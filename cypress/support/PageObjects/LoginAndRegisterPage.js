class LoginAndRegisterPage {

   evidentLogo(){
      return cy.dataCy('header-platform-logo')
   }
   individualInvestment() {
      return cy.get("[aria-label='as an individual']")
   }
   emailInput() {
      return cy.get("[name='email']")
   }
   emailPassword() {
      return cy.get("[name='password']")
   }
   signUp(){
      return cy.get("span[class='block']")
   }
   proceedAfterRegistration(){
      return cy.dataCy('verification-proceed-btn')
   }

   login(){
      return cy.dataCy('login-submit-btn')
   }

}
export default LoginAndRegisterPage