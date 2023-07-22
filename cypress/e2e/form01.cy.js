/// <reference types="Cypress"/>

const URL = '127.0.0.1:8080/tareas/clase-6/pregunta-familiar.html';
const NUMERO_INTEGRANTES = 3;


describe("Testing task-1-calculator", () => {
  it("Test the correct use of task-1-calculator", () => {
    cy.visit(URL);

    cy.get('input[name="cantidad-integrantes"]').type("3");
    cy.get('button[id="siguiente-paso"]').click();

    cy.get("button[id='calcular']").should("be.visible");
    cy.get("button[id='resetear']").should("be.visible");

    cy.get("#integrantes").find('.integrante').should('have.length',NUMERO_INTEGRANTES);


    for (let i = 0; i < 3; i++) {
      cy.get(`.member-${i + 1}`).type(`${i+20}`);
    }

    cy.get('button[id="calcular"]').click();

    
    cy.get("#analisis").find('p').should('have.length',NUMERO_INTEGRANTES);
  });

  });