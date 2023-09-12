

Given(/^estou na pagina de login$/, () => {
	cy.visit('admin-demo.nopcommerce.com/login')
    .wait(2000)

    cy.get('strong')
    .should('have.text','Welcome, please sign in!')
   
   
});

When(/^defino meu email e senha$/, () => {
    cy.get('#Email').clear().type('admin@yourstore.com')
    .wait(2000)
    .should('have.value','admin@yourstore.com');
});

Then(/^eu consigo logar com sucesso$/, () => {
    cy.get('#Password').clear().type('admin')
    .should('have.value','admin');
   
    cy.get('button[type="submit"]').click();

});
