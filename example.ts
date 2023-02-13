class Person {
  name: string = "dong";
  age: number;

  constructor(age?: number){
    if(age == undefined){
      this.age = 0;
    }else{
      this.age = age;
    }
  }
}

const p1 = new Person(38);
const p2 = new Person();

console.log(p1);
