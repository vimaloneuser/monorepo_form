describe('ui-form-elements: Label component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=label--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Label!');
    });
});
