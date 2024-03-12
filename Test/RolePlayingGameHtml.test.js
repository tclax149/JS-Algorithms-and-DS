// Import necessary modules from Testing Library
require('@testing-library/jest-dom');
const { fireEvent, render, screen } = require('@testing-library/dom');

// Import the HTML file to be tested using CommonJS require syntax
const fs = require('fs');
const html = fs.readFileSync('./Role Playing Game/Style Guide Refactor/refactoredRole.html', 'utf8');

// Render the HTML file
beforeEach(() => {
  document.body.innerHTML = html;
});

// Define test cases
describe('HTML elements', () => {

  test('Store button click should trigger action', () => {
    const storeButton = screen.getByRole('button', { name: 'store button' });
    fireEvent.click(storeButton);
    
    // assertions to verify expected behavior

    // 
   
  });

  test('Cave button click should trigger action', () => {
    const caveButton = screen.getByRole('button', { name: 'cave button' });
    fireEvent.click(caveButton);
    // assertions to verify expected behavior

  
  });

  test('Lift button click should trigger action', () => {
    const liftButton = screen.getByRole('button', { name: 'lift button' });
    fireEvent.click(liftButton);
   
    // assertions to verify expected behavior

   
  });
});


