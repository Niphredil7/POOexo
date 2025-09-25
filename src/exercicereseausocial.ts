console.log("HW")

// Enum intérêt
enum InterestType {
Music,
Film,
Videogame,
Nature,
Sport,
Shopping,
Books,
Vehicle,
}

// interfaces génériques
interface IUser {

    modifyProfil():void

    createProfil():void

}

interface IPublicate{

    publicate():void 

    modifify():void
}

interface IFriends {

    addFriend(friend: User):void

    deleteFriend(friend: User):void
}

interface IInterest {

    addInterest(interest: Interest):void

    deleteInterest(interest: Interest):void
}

interface IComment {
    createComment():void
    
    modifyComment():void

    deleteComment():void
}

// class intérêt
class Interest implements IInterest {
    constructor(public name:InterestType){}

    addInterest(interest: Interest): void {
        console.log(`Ajout de l'intérêt : ${InterestType[interest.name]}`);
    }

    deleteInterest(interest: Interest): void {
        console.log(`Suppression de l'intérêt : ${InterestType[interest.name]}`);
    }
}

// class USER
class User implements IUser, IFriends{
     constructor(
        public firstName: string,
        public lastName: string,
        private email: string,
        public userName: string,
        public friends: User[] = [],
        public interests: Interest[] = []) {}

    createProfil(): void {
        console.log(`Création du profil de ${this.userName}`);
    }

    modifyProfil(): void {
        console.log(`Modification du profil de ${this.userName}`);
    }

    addFriend(friend: User): void {
        this.friends.push(friend);
        console.log(`${this.userName} a ajouté ${friend.userName} à ses amis.`);
    }

    deleteFriend(friend: User): void {
        this.friends = this.friends.filter(f => f !== friend);
        console.log(`${this.userName} a supprimé ${friend.userName} à ses amis.`);
    }
}


// class comment
class Comments implements IComment  {
    constructor(public author: User, public content: string) {}

    createComment(): void {
        console.log(`${this.author.userName} a écrit : "${this.content}"`);
    }

    modifyComment(): void {
        console.log(`Commentaire modifié `);
    }

    deleteComment(): void {
        console.log(`Commentaire supprimé `);
    }
}

// class publication
class Publication {
    constructor(
        public content?: string,
        public img?: string,
        public comment: Comments[] = []
    ) {}

    showPublication(): void {
        console.log("Nouvelle publication :");
        if (this.content) console.log(`Texte : ${this.content}`);
        if (this.img) console.log(`Image : ${this.img}`);
        if (!this.content && !this.img) console.log("Publication vide !");
    }
}

// class mur du user
class WallUser implements IPublicate {

    constructor(public publication: Publication, public userAuthor: User) {}

    publicate(): void {
        console.log(`${this.userAuthor.userName} publie : ${this.publication.content}`);
    }

    modifify(): void {
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
