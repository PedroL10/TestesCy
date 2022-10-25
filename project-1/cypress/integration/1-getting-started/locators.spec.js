/// <reference types="cypress" />



describe('Locators', () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements whit get", () => {

        //Get all elements by tag name 
        cy.get("button")
        cy.get("h3")
        cy.get("h2")

        //Get all elements by className
        cy.get(".btn-with-class")

        //Get all elements with specific classes
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        //Get all elementes by id
        cy.get("#btn-with-id")

        // Get all elements by specific attribute
        cy.get("[type='submit']")

        // Get all elements by tag name AND class
        cy.get("button.Elements-btn")
        
        // Get all elements by tag name AND class AND id
        cy.get("button.Elements-btn#btn-with-id")

        // Get all elements by tag name AND class AND type attribute
        cy.get("button.Elements-btn[type='submit']")

        //Get all elementes by with specific data test id
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1")
    })


    it("Locating elements with CONTAINS", () => {
        //GET elements by text
        cy.contains("Unique Text")
        
        //GET elements by text
        cy.contains("Not Unique Text")
        //With selector
        cy.contains("[type='submit']", "Not Unique Text")
        cy.contains("form", "Not Unique Text")

        cy.get("[type='submit']").contains("Not Unique Text")
    })
    
    it("Locating Elements with find", () => {
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-2")
    } )

}) 