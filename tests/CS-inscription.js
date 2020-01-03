describe('demo calculator tests', function(){

    it('addition test', function (){

        browser.get('http://integ.chambersign.apsdigit.lan/viseo/view/fr/connexion');
    
        
        // Clic sur bouton s'inscrire
        element(by.linkText("S'inscrire")).click();
        
        // Remplissage du formulaire d'inscription
        element(by.name('prenom')).sendKeys('Lamri');
        element(by.name('nom')).sendKeys('Laib');
        element(by.name('email')).sendKeys('ttttt1@yopmail.com');
        element(by.name('password')).sendKeys('Azerty123;');
        element(by.name('confirmPassword')).sendKeys('Azerty123;');

        element(by.buttonText('Inscription')).click();

        element(by.buttonText('Fermer')).click();
        

        browser.sleep(5000);
        
    });


});