let orga = function () {

    let siren_input = element(by.css('[placeholder = "9 chiffres exactement"]'));
    let tel_input = element(by.css('[placeholder = "Téléphone de l\'établissement du Titulaire "]'));

    let validButton = element(by.buttonText('Suivant'));

    this.enterSiren = function (siren) {
        siren_input.sendKeys(siren);
    }

    this.enterTel = function (tel) {
        tel_input.sendKeys(tel);
    }

    this.validGo = function () {
        validButton.click();
    }


}

module.exports = new orga();