console.log("HW");
// Enum intérêt
var InterestType;
(function (InterestType) {
    InterestType[InterestType["Music"] = 0] = "Music";
    InterestType[InterestType["Film"] = 1] = "Film";
    InterestType[InterestType["Videogame"] = 2] = "Videogame";
    InterestType[InterestType["Nature"] = 3] = "Nature";
    InterestType[InterestType["Sport"] = 4] = "Sport";
    InterestType[InterestType["Shopping"] = 5] = "Shopping";
    InterestType[InterestType["Books"] = 6] = "Books";
    InterestType[InterestType["Vehicle"] = 7] = "Vehicle";
})(InterestType || (InterestType = {}));
// class intérêt
class Interest {
    constructor(name) {
        this.name = name;
    }
    addInterest(interest) {
        console.log(`Ajout de l'intérêt : ${InterestType[interest.name]}`);
    }
    deleteInterest(interest) {
        console.log(`Suppression de l'intérêt : ${InterestType[interest.name]}`);
    }
}
// class USER
class User {
    constructor(firstName, lastName, email, userName, friends = [], interests = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.friends = friends;
        this.interests = interests;
    }
    createProfil() {
        console.log(`Création du profil de ${this.userName}`);
    }
    modifyProfil() {
        console.log(`Modification du profil de ${this.userName}`);
    }
    addFriend(friend) {
        this.friends.push(friend);
        console.log(`${this.userName} a ajouté ${friend.userName} à ses amis.`);
    }
    deleteFriend(friend) {
        this.friends = this.friends.filter(f => f !== friend);
        console.log(`${this.userName} a supprimé ${friend.userName} à ses amis.`);
    }
}
// class comment
class Comments {
    constructor(author, content) {
        this.author = author;
        this.content = content;
    }
    createComment() {
        console.log(`${this.author.userName} a écrit : "${this.content}"`);
    }
    modifyComment() {
        console.log(`Commentaire modifié `);
    }
    deleteComment() {
        console.log(`Commentaire supprimé `);
    }
}
// class publication
class Publication {
    constructor(content, img, comment = []) {
        this.content = content;
        this.img = img;
        this.comment = comment;
    }
    showPublication() {
        console.log("Nouvelle publication :");
        if (this.content)
            console.log(`Texte : ${this.content}`);
        if (this.img)
            console.log(`Image : ${this.img}`);
        if (!this.content && !this.img)
            console.log("Publication vide !");
    }
}
// class mur du user
class WallUser {
    constructor(publication, userAuthor) {
        this.publication = publication;
        this.userAuthor = userAuthor;
    }
    publicate() {
        console.log(`${this.userAuthor.userName} publie : ${this.publication.content}`);
    }
    modifify() {
        console.log(`Modification de la publication : ${this.publication.content}`);
    }
}
// =====================
// SCRIPT DE TEST
// =====================
// Création des utilisateurs
const alice = new User("Alice", "Dupont", "alice@email.com", "alice01");
const bob = new User("Bob", "Martin", "bob@email.com", "bob77");
const clara = new User("Clara", "Durand", "clara@email.com", "clara22");
// Création des profils
alice.createProfil();
bob.createProfil();
clara.createProfil();
// Gestion des amis
alice.addFriend(bob);
alice.addFriend(clara);
alice.deleteFriend(clara);
// Ajout d’intérêts
const music = new Interest(InterestType.Music);
const sport = new Interest(InterestType.Sport);
alice.interests.push(music, sport);
console.log(`${alice.userName} s'intéresse à : ${alice.interests.map(interest => InterestType[interest.name]).join(", ")}`);
// Publication
const pubText = new Publication("Ceci est juste un texte");
const pubImage = new Publication(undefined, "photo.png");
const pubFull = new Publication("Texte + image", "photo.png");
const pubEmpty = new Publication(); // rien
pubText.showPublication();
pubImage.showPublication();
pubFull.showPublication();
pubEmpty.showPublication();
const wallAlice = new WallUser(pubText, alice);
const wallBob = new WallUser(pubText, bob);
const wallClara = new WallUser(pubText, clara);
wallAlice.publicate();
wallAlice.modifify();
// Commentaires
const comment1 = new Comments(bob, "Super post Alice !");
const comment2 = new Comments(clara, "Bravo 🎉");
pubText.comment.push(comment1, comment2);
comment1.createComment();
comment2.createComment();
