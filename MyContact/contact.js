console.log("Bienvenue dans votre gestionnaire de contacts !");
console.log('Choisissez une option parmi celles ci-dessous: \n Tapez "A" pour voir tous vos contacts, \n Tapez "N" pour ajouter un contact, \n Tapez "X" pour quitter le gestionnaire.');

var contact = {
    initialisation: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire: function() {
        var description = "NOM: " + this.nom + " | PRENOM: " + this.prenom;
        return description;
    }
};

var contacts = [];

var contact1 = Object.create(contact);
contact1.initialisation("Lévisse", "Carole");
contacts.push(contact1);

var contact2 = Object.create(contact);
contact2.initialisation("Nelsonne", "Mélodie");
contacts.push(contact2);

var choix = "";

while (choix !== 'X') {
    choix = prompt('Entrez une commande:').toUpperCase();
    if (choix === 'N') {
        var contactNom = prompt("Entrez le nom:");
        var contactPrenom = prompt("Entrez le prénom:");
        var newContact = Object.create(contact);
        newContact.initialisation(contactNom, contactPrenom);
        contacts.push(newContact);
        console.log('Votre contact a bien été ajouté !');
    } else if (choix === 'A') {
        contacts.forEach(function(contact) {
            console.log(contact.decrire());
        });
    } else {
        console.log('Commande invalide ! Entrez A pour voir tous vos contacts, N pour en ajouter un ou X pour quitter');
    }
}