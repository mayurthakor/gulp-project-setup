class Person {
	constructor (name) {
		this.name = name;
	}
	hello(){
		if(typeof this.name === 'string'){
			return 'hellow, I am ' + this.name + '!';	
		}else{
			return 'Hello';
		}
	}
}

var person = new Person('Mohammad');


document.write(person.hello()); 