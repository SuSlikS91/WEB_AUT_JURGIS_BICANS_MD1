describe('Katalon', () => {
  

    it('passes', () => {
      cy.visit(' https://katalon-demo-cura.herokuapp.com/')
    // ii
    cy.get('a#btn-make-appointment').click();

    // iii
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');

    // iv
    cy.get('#btn-login').click();

    // 1.
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    
    // 2
    cy.get('#chk_hospotal_readmission').check();
    
    // 3
    cy.get('input[name="programs"][value="Medicaid"]').check();
    
    // 4
    const date = new Date();
    date.setDate(30);
    const dateString = date.toISOString().split('T')[0];
    cy.get('#txt_visit_date').type(dateString);
    
    // 5
    cy.get('#txt_comment').type('CURA Healthcare Service');
    
    // 6
    cy.get('#btn-book-appointment').click();

    // vi
    cy.get('#summary').within(() => {
        cy.get('h2').should('have.text', 'Appointment Confirmation');
    cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
    cy.get('#hospital_readmission').should('have.text', 'Yes');
    cy.get('#program').should('have.text', 'Medicaid');
    cy.get('#visit_date').should('have.text', '14/09/35');
    cy.get('#comment').should('have.text', 'CURA Healthcare Service');
  

    // 2. SCENARIJS
    describe('Katalon', () => {
  
  it('should display no appointments in the history for a new user', () => {
    //i
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    //ii
    cy.get('a#btn-make-appointment').click();

    //iii
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    //iv
    cy.get('#btn-login').click();
    //v
    cy.get('#menu-toggle').click(); 

    //vi
    cy.get('#sidebar-wrapper').should('have.class', 'active'); 

  // vii
    cy.get('a').contains('History').click(); 
    
    // viii 
    cy.get('section#history h2').should('contain', 'History');
    cy.get('section#history p').should('contain', 'No appointment.');
    });

  });

  });
  });
  });
