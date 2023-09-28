describe('Ninja Image Editor', () => {
    beforeEach(() => {
      cy.visit('index.html'); // replace with the correct path to your HTML file
    });
  
    it('should load an image', () => {
      cy.get('.choose-img').click();
      cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
      cy.get('.preview-img img')
        .should('have.attr', 'src')
        .and('include', 'blob');
    });
  
    it('should reset filters', () => {
      // Load an image first
      cy.get('.choose-img').click();
      cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
  
      // Apply some filters
      cy.get('#brightness').click();
      cy.get('.slider input').invoke('val', 150).trigger('input');
  
      // Reset filters
      cy.get('.reset-filter').click();
      cy.get('.slider input').should('have.value', '100');
    });
  
    it('should save the image', () => {
      // Load an image first
      cy.get('.choose-img').click();
      cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
  
      // Save the image
      cy.get('.save-img').click();
  
      // For now, we are just triggering the save function. Verifying that the image has indeed been saved is a bit complex in Cypress.
    });
  });
  describe('Filter testing', ()=>{
    beforeEach(()=>{
      cy.visit('/');
    })
  
    it('should apply brightness filter and reflect in preview', () => {
        // Load an image first
        cy.get('.choose-img').click();
        cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
      
        // Apply brightness filter
        cy.get('#brightness').click();
        cy.get('.slider input').invoke('val', 150).trigger('input');
      
        // Verify that filter value is updated
        cy.get('.filter-info .value').should('have.text', '150%');
      
        // Verify that filter is applied (it would be better if we can verify the CSS style of the preview image, but let's just check the filter name for now)
        cy.get('.filter-info .name').should('have.text', 'Brightness');
      });
      it('should apply saturation filter and reflect in preview', () => {
        // Load an image first
        cy.get('.choose-img').click();
        cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
      
        // Apply brightness filter
        cy.get('#saturation').click();
        cy.get('.slider input').invoke('val', 150).trigger('input');
      
        // Verify that filter value is updated
        cy.get('.filter-info .value').should('have.text', '150%');
      
        // Verify that filter is applied (it would be better if we can verify the CSS style of the preview image, but let's just check the filter name for now)
        cy.get('.filter-info .name').should('have.text', 'Saturation');
      });
      it('should apply grayscale filter and reflect in preview', () => {
        // Load an image first
        cy.get('.choose-img').click();
        cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
      
        // Apply brightness filter
        cy.get('#grayscale').click();
        cy.get('.slider input').invoke('val', 100).trigger('input');
      
        // Verify that filter value is updated
        cy.get('.filter-info .value').should('have.text', '100%');
      
        // Verify that filter is applied (it would be better if we can verify the CSS style of the preview image, but let's just check the filter name for now)
        cy.get('.filter-info .name').should('have.text', 'Grayscale');
      });
      it('should apply grayscale filter and reflect in preview', () => {
        // Load an image first
        cy.get('.choose-img').click();
        cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
      
        // Apply brightness filter
        cy.get('#inversion').click();
        cy.get('.slider input').invoke('val', 100).trigger('input');
      
        // Verify that filter value is updated
        cy.get('.filter-info .value').should('have.text', '100%');
      
        // Verify that filter is applied (it would be better if we can verify the CSS style of the preview image, but let's just check the filter name for now)
        cy.get('.filter-info .name').should('have.text', 'Inversion');
      });
});
describe('Rotation and Flips', () => {
    beforeEach(() => {
        cy.visit('index.html'); // replace with the correct path to your HTML file
    });
    it('should apply and revert left rotation', () => {
        // Load an image first
        cy.get('.choose-img').click();
        cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image

        // Apply left rotation
        cy.get('#left').click();

        // Verify the transformation applied is correct
        cy.get('.preview-img img').should('have.css', 'transform', 'matrix(0, -1, 1, 0, 0, 0)');

        // Reset filters to revert rotate & flip actions
        cy.get('.reset-filter').click();
        cy.get('.preview-img img').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
    });

    it('should apply and revert right rotation', () => {
        // Load an image first
        cy.get('.choose-img').click();
        cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image

        // Apply right rotation
        cy.get('#right').click();

        // Verify the transformation applied is correct
        cy.get('.preview-img img').should('have.css', 'transform','matrix(0, 1, -1, 0, 0, 0)' );

        // Reset filters to revert rotate & flip actions
        cy.get('.reset-filter').click();
        cy.get('.preview-img img').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
    });

    it('should apply and revert horizontal flip', () => {
        // Load an image first
        cy.get('.choose-img').click();
        cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
      
        // Apply horizontal flip
        cy.get('#horizontal').click();
        cy.get('.preview-img img').should('have.css', 'transform', 'matrix(-1, 0, 0, 1, 0, 0)');
      
        // Reset filters to revert rotate & flip actions
        cy.get('.reset-filter').click();
        cy.get('.preview-img img').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
    });
    
    it('should apply and revert vertical flip', () => {
        // Load an image first
        cy.get('.choose-img').click();
        cy.get('.file-input').attachFile('image.jpg'); // replace with a path to a test image
      
        // Apply vertical flip
        cy.get('#vertical').click();
        cy.get('.preview-img img').should('have.css', 'transform', 'matrix(1, 0, 0, -1, 0, 0)');
      
        // Reset filters to revert rotate & flip actions
        cy.get('.reset-filter').click();
        cy.get('.preview-img img').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
    });
    
});







  
  