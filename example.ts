class Person {
  public constructor(public _name: string, public age: number){}

  get name(){
    return this._name
  }

  set name(n: string){
    this._name = n;
  }
}

const p1 = new Person("dong",38);

console.log(p1.name); // get 을 하는 함수 getter
p1.name = "lee";      // set 을 하는 함수 setter
