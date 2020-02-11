Feature: Fill attendify field
  Scenario: Fill my first name
    Given The user go to "https://hub.attendify.com/account/login/"
    When The user adds "sergmarch@test.mail" in the name field
    Then The user should see correct email
