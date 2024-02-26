let x
x=10;

var y
y=20;

const z =30;


for (var i = 0; i<10;i++){
console.log(i);
}
console.log(i);

function greet(){
    console.log("hellow");
}
greet();

function add(a,b){
    console.log(a+b);
}
add(10,20);

//arrow fuunction
()=>{
    console.log("hello")
}

const fname="Silfanus"
const lname="Omollo"
console.log(fname+" "+lname)

console.log(`hello ${fname} ${lname}`);

//object
const person={
    fname:"Silfanus",
    lname:"Omollo"
}
console.log(person.fname+" "+person.lname)

const{Fname,Lname}=person;
    Fname:"Sylvan",
    Lname;"Omollo"

console.log(fname+" "+lname)

//spread operator
console.log({...person});

//promise
function pro(){
    fetch("https://jsonplaceholder.typicode.com/users")
}