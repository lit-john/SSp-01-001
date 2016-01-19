// Just printing to the console 
console.log("Hello world");

function add(a, b) {
	var ans = a + b;
	return ans;
}

var theAns;
theAns = add(5, 10);
console.log("5 + 10 is " + theAns);

var name = "John"; //String
var age = 21; // int
var male = true; // boolean
var myArray = new Array(); //Array

if (age == 21 ) {
	console.log("Your still young " + name);
}

var o = new Object();
var anotherObject = {};

 /*
AS Code:

public class Person {
	public var name:String;
	public var age:int;
	public var male:boolean;

	function Person() {
		// default to female
		this.male = false;
	}

	public growOld():void {
		this.age++;
	}
}

// Somewhere else

var p:Person = new Person();

p.name = "John";
p.age = 21;
p.male = true;

p.growOld();

*/
var person = {};
person.name = "John";
person.age = 21;
person.male = true;
person.growOld = function () {
	this.age++;
};

var anotherPerson = {
	name: "Mary",
	age: 25,
	male: false,
	growOld: function() {
		this.age++;
	},
	friends: ["Tom","Pat"]
};

for(var i=0;i<10;i++) {
	console.log(anotherPerson.name + " is " + anotherPerson.age);
	anotherPerson.growOld();
}









