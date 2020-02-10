let modal = function () {

    let selectEnvoiListe = element(by.xpath('//select[@name="bureauEnregistrementId"]'));
    let selectEnvoiElement = element(by.xpath('//select[@name="bureauEnregistrementId"]/option[2]'));
    
    let validButton = element(by.xpath('//button[contains(.,"Suivant")]'));

    // Produit
    this.selectBureauEnvoi = function () {
        selectEnvoiListe.click();
        selectEnvoiElement.click();
    }  

    // Suivant
    this.validGo = function () {
        validButton.click();
    }

}

module.exports = new modal();