let login = require('../pages/CS_login_homepage');
let orga = require('../pages/CS_orga_homepage');


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
         element(by.xpath('//*[@id="multi-select"]')).click();
         element(by.xpath('//label[contains(.,"Eiducio")]')).click();

        // Type d'abonnement
        element(by.xpath('//select[@id="typeAbonnement"]')).click();
        element(by.xpath('//*[@id="typeAbonnement"]/option[3]')).click();

        // Vérif présence champ Support
        browser.wait(EC.presenceOf(element(by.xpath('//select[@name="supportNumeriqueId"]')), 5000));

        element(by.xpath('//select[@name="supportNumeriqueId"]')).click();
        element(by.xpath('//select[@name="supportNumeriqueId"]/option[3]')).click();

        // Vérif présence champ Lecteur
        browser.wait(EC.presenceOf(element(by.xpath('//select[@name="lecteurNumeriqueId"]')), 5000));

        element(by.xpath('//select[@name="lecteurNumeriqueId"]')).click();
        element(by.xpath('//select[@name="lecteurNumeriqueId"]/option[2]')).click();

        // Vérif présence champ lieu de retrait
        browser.wait(EC.presenceOf(element(by.xpath('//input[@id="commune"]')), 5000));

        element(by.xpath('//input[@id="commune"]')).sendKeys("breval");
        element(by.xpath('//li[contains(.,"78980 BREVAL")]')).click();
        
        // Vérif présence case à cocher éligibilité
        browser.wait(EC.presenceOf(element(by.xpath('//label[contains(.,"Le titulaire souhaite recevoir son certificat sur site.")]')), 5000));

        element(by.xpath('//div[2]/div/div/label')).click();
        
        element(by.xpath('//div[8]/div/div/label')).click();

        browser.sleep(2000);

        element(by.xpath('//button[contains(.,"Suivant")]')).click();

    });
    
});