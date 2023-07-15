const URL = '127.0.0.1:8080/tareas/clase-6/salario-familia.html';
const NUMERO_INTEGRANTES = 3;
const NUMERO_ETIQUETA_ANALISIS = 4;


describe("Testing task-1-calculator", () => {
  it("Test the correct use of task-1-calculator", () => {
    cy.visit(URL);

    cy.get('input[id="salario-anual-integrante"]').type("20000");
    cy.get('button[id="boton-agregar"]').click();

    cy.get('input[id="salario-anual-integrante"]').type("20000");
    cy.get('button[id="boton-agregar"]').click();

    cy.get('input[id="salario-anual-integrante"]').type("20000");
    cy.get('button[id="boton-agregar"]').click();

    cy.get(".integrante").find('input').should('have.length',NUMERO_INTEGRANTES);


    cy.get('button[id="calcular"]').click();


    cy.get("#analisis").find('p').should('have.length',NUMERO_ETIQUETA_ANALISIS);

  });

  });