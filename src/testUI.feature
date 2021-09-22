Feature:KarateTests

  Scenario: Test register part
    * fullscreen()
    Given driver 'http://localhost:3000/login'
    And input('#registerName','karate')
    And input('#registerPassword','1234')
    When click('#btn.btn-primary')
    Then driver.url='   '

    Scenario: Test log in part
      * fullscreen()
      Given driver 'http://localhost:3000/login'
      And input('#loginName','karate')
      And input('#loginPassword','1234')
      When click('#btn.btn-info')
      Then driver.url='   '

    Scenario: Test create ticket part
      * fullscreen()
      Given driver 'http://localhost:3000/createTicket'
      And input('.col-3.p-3 #form-control','subject')
      And input('#textArea','issue')
      When click('#btn.btn-primary')
      Then driver.url='   '