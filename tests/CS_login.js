let login = require('../pages/CS_login_homepage');
let orga = require('../pages/CS_orga_homepage');


describe('ChamberSign - Integ', function () {

    var EC = protractor.ExpectedConditions;

    it('Login', function () {

        login.get('http://integ.chambersign.apsdigit.lan/viseo/view/fr/connexion');

        login.enterEmail('lamri123@yopmail.com');
        login.enterPassword('Azerty1;')
        login.connectGo();

        browser.sleep(2000);

    });

    it('Organisation', function () {

        browser.wait(EC.presenceOf(element(by.css('[placeholder = "9 chiffres exactement"]')), 5000));

        orga.enterSiren('344553664');
        orga.enterTel('0472241001');

        sleep (10000);
        orga.validGo();

    });
    
});