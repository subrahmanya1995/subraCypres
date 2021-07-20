///<reference types="Cypress" />
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps'
import homePagePO from '../../../../pageObjects/WAM/functionalPO/homePagePO'
import FooterPO from '../../../../pageObjects/WAM/navigationPO/footerPO/FooterPO'
import CommonPage from '../../../../pageObjects/commonPO/CommonPO'

const footerPage = new FooterPO();
const commonPage = new CommonPage();
const homePage = new homePagePO();
let commonprop = {}
let homePageData = {}

before(function () {
    cy.fixture("CommonProperties").then(function (commonProperties) {
        commonprop = commonProperties;
    })
    cy.fixture("HomeProperties").then(function (homeProperties) {
        homePageData = homeProperties;
    })
});

Given('User visits the nblytest site and lands on home page', () => {
    //Launch application
    commonPage.LaunchApplication(Cypress.env('us_url_nbhlyTest'))
});

Then('User lands on home Page', () => {
    cy.url().then(url => {
        cy.request({
            url: url
        }).then((resp) => {
            //verify the response status code to check whether page opens up successfully or not
            expect(resp.status).to.eq(200)
        })
    })
});

Then('User able to view header', () => {
    cy.xpath('//header').should("be.visible")
    cy.xpath('(//a[@class="nav-link"])[2]').should("be.visible")
    cy.xpath('(//a[@class="nav-link"])[3]').should("be.visible")
    cy.xpath('(//a[@class="nav-link"])[4]').should("be.visible")
    cy.xpath('(//a[@data-title="contact"])').should("be.visible")
    cy.xpath('(//a[@class="nav-link"])[1)').should("be.visible")
    
    
});

Then('User able to view main', () => {
    cy.xpath('//img[@alt="HouseMaster"]').should("be.visible")

    
    cy.xpath('//img[@alt="Rainbow International"]').should("be.visible")
    cy.xpath('//img[@alt="Window Genie"]').should("be.visible")
    cy.xpath('//img[@alt="Mosquito Joe"]').should("be.visible")
    cy.xpath('//img[@alt="DryerVent Wizard"]').should("be.visible")
    cy.xpath('//img[@alt="Mr Rooter"]').should("be.visible")
    cy.xpath('//img[@alt="Aireserv"]').should("be.visible")
    cy.xpath('//img[@alt="GroundGuys"]').should("be.visible")
    cy.xpath('//img[@alt="MrElectric"]').should("be.visible")
    cy.xpath('//img[@alt="Mr Appliance]').should("be.visible")
    cy.xpath('//img[@alt="MrHandyman"]').should("be.visible")
});

Then('User able to view footer', () => {
    cy.xpath('//footer').should("be.visible")
    cy.xpath('//a[@data-title="Contact Us"]').should("be.visible")
    cy.xpath('//a[@data-title="ADA Notice"]').should("be.visible")
    cy.xpath('//a[@data-title="Privacy Policy & Legal Statement"]').should("be.visible")
    cy.xpath('//a[@data-title="Terms of Use"]').should("be.visible")
    cy.xpath('//a[@data-title="About Ads"]').should("be.visible")
    cy.xpath('//a[@data-title="Site Map"]').should("be.visible")
    cy.xpath('//a[@data-title="ProTradeNet"]').should("be.visible")
    cy.xpath('//a[@data-title="California Privacy Policy"]').should("be.visible")
    cy.xpath('////a[@data-title="Do Not Sell My Info"]').should("be.visible")
    cy.xpath('////a[@data-title="California Collection Notice"]').should("be.visible")
    
    
    


});

Then('User able to see Footer Links', () => {

    cy.scrollTo('bottom')
    cy.wait(500)
    footerPage.getFooterLinks().then((footerLinks)=>{
        
        expect(footerLinks).to.have.length.greaterThan(0)
    })

});