let login = require('../pages/CS_login_homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        login.get('http://integ.chambersign.apsdigit.lan/viseo/view/fr/connexion');

        login.enterEmail('laib.cc@yopmail.com');
        login.enterPassword('Azerty123;')
        login.connectGo();

        browser.sleep(2000);

    });


});