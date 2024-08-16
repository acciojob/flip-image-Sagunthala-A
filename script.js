// write js code if required
describe('Image Flip Test', () => {
  beforeEach(() => {
    cy.visit('path-to-your-html-file'); // Adjust this path to your HTML file
  });

  it('checks initial image', () => {
    cy.get('.flip').should('have.css', 'background-image', 'url("https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg")');
  });

  it('checks hover image rule', () => {
    cy.get('.flip').trigger('mouseover');
    cy.get('.flip').should('have.css', 'background-image', 'url("https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg")');
  });
});
