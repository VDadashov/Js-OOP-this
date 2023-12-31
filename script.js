// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };


//   console.log(user.sizes.width);


// let clone = Object.assign({},user);
// let clone = structuredClone(user);

// for(let key of user){
//     clone[sizes] = user[sizes];
// }


// console.log(clone.name == user.name);

// console.log(clone.sizes.width); // 50

// clone.sizes.width = 80;
// user.sizes.width = 72;

// console.log(user.sizes.width); // 50


// this

// this Global
// console.log(this);

// this implict
// let user = {
//     name : "Fatime",
//     surname : "Yusubova",
    // fullname : function(){
    //     console.log("hello");
    // }

//     fullname(){
//         console.log(`${this.name} ${this.surname}`);
//     },

//     friends : {
//         name : "Vusal",
//         surname : "Dadashov",
//         friendsFullName(){
//             console.log(`${this.name} ${this.surname}`);
//         }
//     }
// }


// user.fullname();
// user.friends.friendsFullName();



// this explicit
// call apply bind

// let student1 = {
//     name : "Nermin",
//     surname : "Esedova",
// }

// let student2 = {
//     name : "Fatime",
//     surname : "Yusubova",
// }


// let students = [student1, student2];


function fullname(reng1, reng2 = "sari"){
    console.log(`${this.name} ${this.surname} rengler: ${reng1} - ${reng2}`);
}


// student1.fullname();
// student2.fullname();


// call
// fullname.call(student1,"qirmizi", "yasil");
// fullname.call(student2, "qirmizi",);

// apply
// fullname.apply(student1,['qirmizi',"mavi"]);

// bind
// let test = fullname.bind(student1,"qirmizi","sari");

// test();


// let student1 = {
//     name : "Nermin",
//     surname : "Esedova",
//     age: 19,
//     UOMG : 82,
// }

// let student2 = {
//     name : "Fatime",
//     surname : "Yusubova",
//     age : 18,
//     UOMG : 91,
// }

// let student3 = {
//     name : "Vusal",
//     surname : "Dadashov",
//     age : 19,
//     UOMG : 67,
// }

// let student4 = {
//     name : "Emin",
//     surname : "Suleymanov",
//     age : 20,
//     UOMG : 76,
// }

// let students = [];

// students.push(student1,student2,student3,student4);


// function resultAge(){
//     let newArr = [];

//     for(let key in students){
//         if(students[key].age == 18){
//             newArr.push(students[key]);
//         }
//     }

//     return newArr
// }

function resultUOMG(){
    let newArr = []

    for(let key in students){
        if(students[key].UOMG >= 91 && students[key].UOMG <= 100){
            newArr.push(students[key]);
        }
    }

    return newArr
}


// let resultAge1 = resultAge();

// for(let item of resultAge1){
//     let {name, surname, age} = item;
//     console.log(`${name} ${surname} ${age} ${item.UOMG}`);
// }


function Person(name,surname,age){
    this.ad = name,
    this.soyad = surname,
    this.yas = age
    this.friends = [];
    // this.fullname = function(){
    //     console.log(this.ad + " " + this.soyad);
    // }
}

Person.prototype.fullname = function(){
    console.log(this.ad + " " + this.soyad);
}

Person.prototype.addFriend = function(name, surname, age){
    let friend = {
        name : name,
        surname : surname,
        age : age
    }

    this.friends.push(friend);
}

Person.prototype.getFriends = function(){
    let friends = this.friends;

    for(let item of friends){
        let {name, surname, age} = item;

        console.log(`Name: ${name} - Surname: ${surname} - Age: ${age}`);
    }
}

let fatime = new Person("Fatime", "Yusubova", "19");
let vusal = new Person("Vusal", "Dadashov", "19");

// fatime.fullname();
fatime.addFriend("Vusal","Dadashov", 19);
fatime.addFriend("Nermin","Esedova",19)
fatime.getFriends();
vusal.getFriends();