class User { //definerer en klasse og kalder den User
    constructor(name, gender, birthday, email, interest, city, password){ //tilføjer attributter 
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.email = email;
    this.interest = interest;
    this.city = city;
    this.password = password;
    }
}

class paymentUser extends User{ //definerer en ny klasse der hedder paymentUser og extender den fra den klasse der hedder User
    constructor(name, gender, birthday, email, interest, city, password, creditCardName){
        super(name, gender, birthday, email, interest, city, password, creditCardName) //nedarver attributterne fra klassen User
        this.creditCardName = creditCardName; //tilføjer en attribut til klassen paymentUser som kun gælder for netop denne klasse
        this.creditCardNumer = creditCardNumber;
        this.creditCardExpiryDate = creditCardExpiryDate;
        this.creditCardCVC = creditCardCVC;
        this.password = password;

    }
}

class freeUser extends User { //definerer en ny klasse der hedder freeUser og extender den fra den fra den klasser der hedder User
    constructor(name, gender, birthday, email, interest, city, password){ //nedarver attributterne fra klassen User
        super(name, gender, birthday, email, interest, city, password)
    }
}

class img {
    constructor(fileName, uploadDate){
        this.fileName = fileName;
        this.uploadDate = uploadDate;
    }

}

class match{
    constructor(user1, user2){
    this.user1 = user1;
    this.user2 = user2;
}}

module.exports = User;
