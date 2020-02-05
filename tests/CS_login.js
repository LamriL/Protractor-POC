let login = require('../pages/CS_login_homepage');

describe('ChamberSign - Integ', function () {

    it('Login', function () {

        login.get('http://integ.chambersign.apsdigit.lan/viseo/view/fr/connexion');

        login.enterEmail('lamri123@yopmail.com');
        login.enterPassword('Azerty1;')
        login.connectGo();

        browser.sleep(2000);

    });

    if (expect(element(by.css('[placeholder = "9 chiffres exactement"]')).isPresent()).toBe(true))
    {
        console.log("PRESENT");
    }
    else
        console.log("ABSENT");



     /*   
    it('Organisation', function () {

        login.get('http://integ.chambersign.apsdigit.lan/viseo/view/fr/connexion');

        login.enterEmail('lamri123@yopmail.com');
        login.enterPassword('Azerty1;')
        login.connectGo();

        element(by.css('[placeholder = "9 chiffres exactement"]'));]


        browser.sleep(2000);

    });
*/
});