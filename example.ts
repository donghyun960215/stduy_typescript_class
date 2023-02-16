class Parent{
  constructor(protected _name: string, private _age: number){}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }

  protected printName(): void{
    console.log(this._name, this._age);
  }
}

class Child extends Parent {
  public gender = "male";
    
  constructor(age: number){
    super("hyun",age);  //super을 항상 먼저 써줘야한다.
    this.printName();
  }
}
const c = new Child(5);
c.print(); 
//reslt: hyun 5
//      이름은 hyun 이고, 나이는 5 입니다. 

//constructor 에서 부모의 무언가를 표현하고싶을 때 위와 같이 사용
