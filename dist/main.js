var a = '1';
var hello = 'world';
//hello=[]  
//comment out to see error  
//functions
var printName = function (name, surname, age) {
    return name + '' + surname + ' is' + age + ' years old';
};
//defining a function
var printSum = function (num1, num2) {
    return num1 + num2;
};
//objects
var user1 = {
    name: 'Agrit',
    age: 20
};
var user2 = {
    name: 'Agrit Tiwari',
    age: 22
};
var user3 = {
    name: 'Agrit',
    age: 20,
    greetings: function () {
        return 'Hello' + name;
    }
};
var user4 = {
    name: 'Agrit Tiwari',
    greetings: function () {
        return 'Hello' + name;
    }
};
