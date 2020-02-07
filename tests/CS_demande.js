

let login = require('../pages/CS_login_homepage');
let orga = require('../pages/CS_orga_homepage');
let certif = require('../pages/CS_certif_homepage');


describe('ChamberSign - Integ', function () {

    var EC = protractor.ExpectedConditions;

    /*
    it('Login', function () {

        login.get('http://integ.chambersign.apsdigit.lan/viseo/view/fr/connexion');

        login.enterEmail('lamri123@yopmail.com');
        login.enterPassword('Azerty123;')
        login.connectGo();

    });

    
    it('Organisation', function () {

        // Vérif présence champ SIREN => Arrivée sur écran Organisation
        browser.wait(EC.presenceOf(element(by.css('[placeholder = "9 chiffres exactement"]')), 5000));

        orga.enterSiren('344553664');
        orga.enterTel('0472241001');

        browser.sleep(2000);
        orga.validGo();

    }); 
    */
    login.get('http://integ.chambersign.apsdigit.lan/viseo/view/fr/nouvelle-demande/-1/certificat');

    it('Certificat', function () {

        // Vérif présence champ Produit => Arrivée sur écran Certificat
        browser.wait(EC.presenceOf(element(by.xpath('//span[@class="ng-star-inserted"]')), 5000));

        // Produit
        certif.selectProduit();

        // Type d'abonnement
        certif.selectTypeAbo();

        // Vérif présence champ Support
        browser.wait(EC.presenceOf(element(by.xpath('//select[@name="supportNumeriqueId"]')), 5000));

        certif.selectSupport();

        // Vérif présence champ Lecteur
        browser.wait(EC.presenceOf(element(by.xpath('//select[@name="lecteurNumeriqueId"]')), 5000));

        certif.selectLecteur();

        // Vérif présence champ lieu de retrait
        browser.wait(EC.presenceOf(element(by.xpath('//input[@id="commune"]')), 5000));

        certif.enterCommune("breval");
        certif.selectCommune();
        
        // Vérif présence case à cocher éligibilité
        browser.wait(EC.presenceOf(element(by.xpath('//label[contains(.,"Le titulaire souhaite recevoir son certificat sur site.")]')), 5000));

        certif.cocherEligibilite();
        certif.cocherPreRequis();

        browser.sleep(2000);

        certif.validGo();

    });
    
});