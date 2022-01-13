class Human
{
    constructor(gender)
    {
        this.gender = gender
    }
}


class Person extends Human
{
    constructor(nom, prenom, age, gender)
    {
        super(gender)
        this.nom = nom
        this.prenom = prenom
        this.age = age 
    }

    getAge = () => {
        console.log("Age : " + this.age)
    }
}



class Moderateur extends Person
{
    constructor(level, section, nom, prenom, age, gender)
    {
        super(nom, prenom, age, gender)
        this.level = level
        this.section = section
    }

}

class Utilisateur extends Person
{
    constructor(login, email, rue, num, ...args)
    {
        super(...args)
        this.login = login
        this.email = email
        this.address = new Address(rue, num)
    }

    afficheInfos = () =>
    {
        console.log("-- Login : " + this.login)
        console.log("-- Email : " + this.email)
    }
}

class Address
{
    constructor(rue, num)
    {
        this.rue = rue
        this.num = num
    }

    afficheInfos = () => {
        console.log("-- Rue : " + this.rue)
        console.log("-- Num : " + this.num)
    }
}

var arg1 = "Baudoux"
var arg2 = "Loic"
var arg3 = 30
var arg4 = "Male"


var user = new Utilisateur("Evengyl", "baudouxloic@gmail.com", "Rue jean jaurès", 12, arg1, arg2, arg3, arg4)

arg1 = "Morgane"
arg2 = "Meganck"
arg3 = 30
arg4 = "Female"


var modo = new Moderateur("Admin", "Dev", "Baudoux", "Loic", 30, "Female")
console.log(user)