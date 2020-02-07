let login = function () {

    let email_input = element(by.name('email'));
    let password_input = element(by.name('password'));
    let connectButton = element(by.buttonText('Se connecter'));
  
    this.get = function (url) {
        browser.get(url);
    }

    this.enterEmail = function (mail) {
        email_input.sendKeys(mail);
    }

    this.enterPassword = function (mdp) {
        password_input.sendKeys(mdp);
    }

    this.connectGo = function () {
        connectButton.click();
    }

    //this.verifyResult = function(result){
    //    let output = element(by.cssContainingText('.ng-binding', result));
    //    expect(output.getText()).toEqual(result);
    //}

}

module.exports = new login();