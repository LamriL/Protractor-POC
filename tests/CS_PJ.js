
let login = require('../pages/01_CS_login_homepage');
let orga = require('../pages/02_CS_orga_homepage');
let certif = require('../pages/03_CS_certif_homepage');
let personne = require('../pages/04_CS_personne_homepage');
let modal = require('../pages/05_CS_modal_homepage');
let pj = require('../pages/06_CS_pj_homepage');


describe('ChamberSign - Integ', function () {

    var EC = protractor.ExpectedConditions;


    it('PJ', function () {

        browser.get('http://integ.chambersign.apsdigit.lan/viseo/view/fr/nouvelle-demande/4ab2b6fb-ba5d-4b55-a578-657c129efcb0/pieces-justificatives');
        
        browser.wait(EC.presenceOf(element(by.xpath('//button[contains(.,"Connexion")]')), 5000));

        element(by.xpath('//button[contains(.,"Connexion")]')).click();

        browser.wait(EC.presenceOf(element(by.name('email')), 5000));

        element(by.name('email')).sendKeys('lamri123@yopmail.com');
        element(by.name('password')).sendKeys('Azerty123;');
        element(by.buttonText('Se connecter')).click();

        browser.sleep(5000);

        browser.wait(EC.presenceOf(element(by.xpath('//strong[contains(.,"Ajoutez vos pièces justificatives")]')), 5000));

        browser.sleep(5000);


    }); 


});