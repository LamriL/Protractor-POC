let certif = function () {

    let produit_label = element(by.xpath('//span[@class="ng-star-inserted"]'));

    let selectProduitListe = element(by.xpath('//*[@id="multi-select"]'));
    let selectProduitElement = element(by.xpath('//label[contains(.,"Eiducio")]'));

    let selectTypeAboListe = element(by.xpath('//select[@id="typeAbonnement"]'));
    let selectTypeAboElement = element(by.xpath('//*[@id="typeAbonnement"]/option[3]'));

    let selectSupportListe = element(by.xpath('//select[@name="supportNumeriqueId"]'));
    let selectSupportElement = element(by.xpath('//select[@name="supportNumeriqueId"]/option[3]'));

    let selectLecteurListe = element(by.xpath('//select[@name="lecteurNumeriqueId"]'));
    let selectLecteurElement = element(by.xpath('//select[@name="lecteurNumeriqueId"]/option[2]'));

    let inputCommune = element(by.xpath('//input[@id="commune"]'));
    let choixCommune = element(by.xpath('//li[contains(.,"78980 BREVAL")]'));
    
    let labelEligibilite = element(by.xpath('//label[contains(.,"Le titulaire souhaite recevoir son certificat sur site.")]'));

    let checkEligibilite = element(by.xpath('//div[2]/div/div/label'));
    let checkPreRequis = element(by.xpath('//div[8]/div/div/label'));
    
    let validButton = element(by.xpath('//button[contains(.,"Suivant")]'));

    // Produit
    this.selectProduit = function () {
        selectProduitListe.click();
        selectProduitElement.click();
    }
    
    // Type d'abonnement
    this.selectTypeAbo = function () {
        selectTypeAboListe.click();
        selectTypeAboElement.click();
    }

    // Support
    this.selectSupport = function () {
        selectSupportListe.click();
        selectSupportElement.click();
    }

    // Lecteur
    this.selectLecteur = function () {
        selectLecteurListe.click();
        selectLecteurElement.click();
    }

    this.enterCommune = function (commune) {
        inputCommune.sendKeys(commune);
    }

    // Commune
    this.selectCommune = function () {
        choixCommune.click();
    }

    //Eligibilité
    this.cocherEligibilite = function () {
        checkEligibilite.click();
    }

    // Pré-requis
    this.cocherPreRequis = function () {
        checkPreRequis.click();
    }

    // Suivant
    this.validGo = function () {
        validButton.click();
    }

}

module.exports = new certif();