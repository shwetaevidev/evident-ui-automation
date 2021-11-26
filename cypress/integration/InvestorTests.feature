Feature: Login with an Investor account and select the toggles on Risk Declaration Page

    I want to register as an Investor and then Login with that account

    #Scenario1
    Scenario: Validate Risk assessment - Self declaration Page functionlaity

        Given I navigate to Investor Portal to Register as an Investor
        When Investor clicks Proceed button
        Then Investor is navigated to Risk Declaration Page
        And Investor validates Risk assessment - Self declaration text
        Then Investor validates Risk on Risk assessment - Self declaration text
        And Investor validates Diversification on Risk assessment - Self declaration text
        And Investor validates Limited transfer on Risk assessment - Self declaration text
        And Investor validates Cancellation on Risk assessment - Self declaration text
        And Investor validates Limits on Risk assessment - Self declaration text
        And Investor validates Research on Risk assessment - Self declaration text
        Then Investor clicks toggles
        Then User clicks Proceed button
        And User is navigated to Accounts Page
        
    #Scenario1
    Scenario: User should be brought to market place on login
        Given I navigate to Investor Portal to login as an Investor
        Then User is brought to market place




