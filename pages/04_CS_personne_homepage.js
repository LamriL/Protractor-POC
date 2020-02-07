let personne = function () {

    let prenomT_input = element(by.css('input[name="prenom"]'));
    let nomT_input = element(by.css('input[name="nom"]'));
    let emailT_input = element(by.css('input[name="mail"]'));
    let fonctionT_input = element(by.css('input[name="fonction"]'));
    let serviceT_input = element(by.css('input[name="service"]'));
    let telBureauT_input = element(by.css('input[name="telephoneBureau"]'));
    let telPortableT_input = element(by.css('input[name="telephonePortable"]'));

    let checkRL = element(by.id('Responsable2'));

    let prenomRL_input = element(by.css('input[name="prenomRepresentant"]'));
    let nom_RL_input = element(by.css('input[name="nomRepresentant"]'));
    let emailRL_input = element(by.css('input[name="mailRepresentant"]'))

    let checkDL = element(by.id('Delegataire1'));

    let prenomDL_input = element(by.css('input[name="prenomDelegataire"]'));
    let nomDL_input = element(by.css('input[name="nomDelegataire"]'));
    let emailDL_input = element(by.css('input[name="mailDelegataire"]'));

    let validButton = element(by.xpath('//button[contains(.,"Suivant")]'));

    // Titulaire
    this.saisieTitulaire = function (prenom, nom, email, fonction, service, telB, telP) {
        prenomT_input.sendKeys(prenom);
        nomT_input.sendKeys(nom);
        emailT_input.sendKeys(email);
        fonctionT_input.sendKeys(fonction);
        serviceT_input.sendKeys(service);
        telBureauT_input.sendKeys(telB);
        telPortableT_input.sendKeys(telP);   
    }
    
    // Cocher Non - (Présence d'un responsable légal) 
    this.presenceRL = function () {
        checkRL.click();
    }

    // Responsable légal
    this.saisieRL = function (prenom, nom, email) {
        prenomRL_input.sendKeys(prenom);
        nom_RL_input.sendKeys(nom);
        emailRL_input.sendKeys(email);
    }

    // Cocher Oui - (Présence d'un délégataire 
    this.presenceDL = function () {
        checkDL.click();
    }

    // Délégataire
    this.saisieDL = function (prenom, nom, email) {
        prenomDL_input.sendKeys(prenom);
        nomDL_input.sendKeys(nom);
        emailDL_input.sendKeys(email);
    }

    // Suivant
    this.validGo = function () {
        validButton.click();
    }

}

module.exports = new personne();