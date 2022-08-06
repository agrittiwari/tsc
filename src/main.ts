const a = '1';

let hello: string = 'world';

//hello=[]  
//comment out to see error  



//functions


const printName =(name:string, surname:string, age:number) =>{
    return name + '' + surname +' is' + age + ' years old'
}

//defining a function

const printSum =(num1:number, num2:number):number =>{
    return num1 + num2;
}

//objects


const user1 :{name:string, age:number} = {
    name: 'Agrit',
    age: 20,
   
}

const user2 :{name:string, age:number}= {
name: 'Agrit Tiwari',
age :22
} 

//Interfaces

interface User {
    name:string, 
    age?:number,
    greetings(): string
}

const user3 :User = {
    name: 'Agrit',
    age: 20,
   greetings(){
    return 'Hello' + name
   }
}

const user4 :User= {
name: 'Agrit Tiwari',
greetings(){
    return 'Hello' + name
   }
} 


//Types and Unions

// Union - operator to combine data types

let username:string = 'Agrit'
 
let pageName: string | number = '1'

let errorMessage : string | null = null;


interface UserInterface {
    firstName : string,
    lastName: string
}

let userX: UserInterface | null = null;

//bad code 
let someProp :string | null |number | [] | object =null


//Type aliases

type ID = string;
type PopularTag = string;



const popularTags : PopularTag[] = ['India' , 'Italy', '6']


