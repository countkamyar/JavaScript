var m = 20;
console.log(typeof (m));
var person = {
    age: 20,
    name: "Kamyar"
};
console.log(person.age);
console.log("type of "+typeof person.age);
console.log(Number("23"))
var array = new Array();
array.name="kamyar"
array.surname="rostami"
console.log(array.name)
console.log(array.surname)
console.log("50"+5)
console.log("50"-5)
//pass by value for argument passing
function myfunc(a){
a="salam";
return a;
}
var b="hi";
console.log(myfunc(b));
//objects are passed by reference 
function objectreceiver(obj){
obj[0]="chetori";
return obj[0];
}
sampobj=[];
sampobj[0]="mammad";
objectreceiver(sampobj);
console.log(sampobj);
//less passed arguments return undefined
function less(a){
    a=2;
}
console.log(less());
//excess passed arguments can be recieved by using argument array 
function excess(){
    if(arguments.length>0){
        console.log(arguments[0]);
    }
}
excess(10);