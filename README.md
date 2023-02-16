# class

## Quick Strat - class
```ts
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("Dong");

console.log(p1);
```
```plaintext
정리
class 키워드를 이용하여 클래스를 만들 수 있다.
class 이름은 보통 대문자를 이용한다.
new를 이용하요 class 를 통해 object를 만들 수 있다.
constuctor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
this를 이용하여 만들어진 object를 가리킬 수 있다.
JS로 컴파일되면 es5의 경우 function으로 변경된다.
```

## constructor & initlalize

```ts
class Person {
  name: string;    //에러
  age: number;     //에러
}

const p1 = new Person();

console.log(p1);
console.log(p1.age);
```
```plaintext
name와 age를 타입을 지정해줘도 초기화된게 없으므로 오류가 뜬다.
초기화를 하지 않으면 컴파일 단계에서 할당된게 없는걸로 판단한다.
age!:number; 느낌표를 넣어주면 클래스에서 할당하는게 아니라 런타임 도중 직접 값을 할당을 해주겠다 할때 사용된다.
코드상 오류도 나오지 않는다.
하지만 !를 표시를 하고 값을 할당을 안해주면 undifined가 뜨기 때문에 조심히 사용을 해야한다.
```

```ts
////////////////////////////1////////////////////////////
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

const p1 = new Person("dong",38);

console.log(p1);
////////////////////////////1////////////////////////////

////////////////////////////2////////////////////////////
class Person {
  name: string = "dong";
  age: number;

  constructor(age: number){
    this.age = age
  }
}

const p1 = new Person(38);

console.log(p1);
////////////////////////////2////////////////////////////

////////////////////////////3////////////////////////////
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
////////////////////////////3////////////////////////////
```
```plaintext
1번과 같이 constructor에 전체 할당을 해줄 수도 있고
2번과 같이 직접 할당도 가능하다.
3번과 같이 2가지의 형태로 부르고 싶다면 constructor 부분의 age에 ? 를 넣어주고 if,else 문을 사용하면 된다.
```

```plaintext
정리
생성자 함수가 없으면, 디폴트 생성자가 불린다.
프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
strict모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 항당하지 않은 경우에는 !를 붙여서 위험을 표현한다.
클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
생성자는 async를 설정할 수 없다.
```

## 접근제어자 (Access Modifiers)

```ts
class Person {
  public name: string = "dong";
  public age: number;

  private constructor(age?: number){
    if(age == undefined){
      this.age = 0;
    }else{
      this.age = age;
    }
  }
}

const p1 = new Person(38);  //private 인한 오류
const p2 = new Person();    //private 인한 오류

console.log(p1);
```
```plaintext
public 은 어디서든 접근이 가능한 접근제어자 이다
하지만 private은 그 안에서만 가능하다
private constructor을 보면 그 안에서만 접근이 가능하다
그러므로 현재 new 생성시 오류가 발생한다
```
```plaintext
접근제어자에는 public, private,protected가 있다.
설정하지 않으면 public 이다.
클래스 내부의 모든 곳에(생성자,프로퍼티,메서드)설정 가능하다.
private으로 설정하면 클래스 외부에서 접근할 수 없다.
자바스크립트에서 private 지원하지 않아 오랜동안 프로퍼티나 메서드 이름 앞에 _ 를 붙여서 표현했다.
```


## initialization in constructor parameters

```ts
class Person {
  public constructor(public name: string, public age: number){
  }
}

const p1 = new Person("dong",38);

console.log(p1);
```
```plaintext
생성자의 파마미터를 받아서 바로 그 생성자에 초기화하는 방법으로는
생성자 안에 접근제어자를 사용하면 this.을 사용 안해도 된다.
```

## Getters & Setters

```ts
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
```
```plaintext
값을 가져오는 행위 getter, 값을 세팅하는 행위 setter
```

## redonly properties

```ts
class Person {
  public readonly name: string = "dong";
  private readonly country : string ;

  public constructor(public _name: string, public age: number){
    this.country = "korea";

  }

  hello(){
    this.country = "China"; //오류발생
  }

}

const p1 = new Person("dong",38);

console.log(p1.name); 
p1.name = "lee";      //오류발생

```
```plaintext
readonly 키워드가 달려있는 경우에는 public이든 private 초기화 되는 영역에서만 셋팅할 수 있고 
다른 곳에서는 변경이 불가하다.
값을 바꿔주려고 하면 에러를 발생시킨다.
```

## index Signatures in class
```ts
// class => object
// {dong: "male", jade: "male"}
// {chloe: "female"m alex: "male", anna: "female"}

class Students {
  // [index: string]: string;
  [index: string]: "male" | "female"
}

const a = new Students();
a.dong = "male";
a.jade = "male";

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(a);
console.log(b);
```
```plaintext
초기값을 할당을 할 수 없다. 값이 있을 수도 있고 없을 수도 있기 때문이다
그래서 따로 최초값을 적을 필요가 없다.
프로퍼티가 고정된 형태가 아니라 동적으로 바뀌는 경우 사용해야할 기능이다.
```

## static properties & methods
```ts
class Person{
  public static City = "seoul";

  public static hello(){
    console.log("안녕하세요",Person.City);
  }

  public hi(){
    Person.City = "busan";
  }

}

Person.City;
Person.hello();

const p1 = new Person();
p1.hi();

Person.hello();
```
```plaintext
methods
static 이 없을 경우에는 메소드를 오브젝트로 만들어 낸 것에서 . 을 이용하여 사용 할 수 있다. 
static 을 사용할 경우 오브젝트에서는 메소드로 생각을 안한다. 그래서 class 명에다가 . 을 이용하여 사용 할 수 있다.

properties
프로퍼티에 static 를 사용할 경우 City를 Person을 new로 사용을 안해도 공유가 가능해진다.
```

## singletons

```plaintext
어플리케이션이 실행되는 중간에 클래스로부터 단 하나의 오브젝트만 생성을 해서 사용하는 패턴
```
```ts
////////////////////////////1////////////////////////////
class ClassName {
  private constructor(){}
}

const a = new ClassName(); // 오류
const b = new ClassName(); //오류
////////////////////////////1////////////////////////////

////////////////////////////2////////////////////////////
class ClassName {
  private static instance: ClassName | null = null;

  public static getInstance(): ClassName {
    // ClassName 으로부터 만든 Object 가 없으면, 만든다.
    if(ClassName.instance == null){
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }

  private constructor(){}
}

const a = ClassName.getInstance(); 
const b = ClassName.getInstance(); 

console.log(a == b); // true
////////////////////////////2////////////////////////////
```
```plaintext
private constructor(){} 설정하면서 밖에서 집적 호출이 불가능 하도록 만들었다.
싱글턴 패턴은 좋은 패턴이니까 많이 쓰자 라는 식은 아니자만 static의 활용도를 높이는 패턴이다.
``` 

## inheritance (상속)
```ts
class Parent{
  constructor(protected _name: string, private _age: number){}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }
}

const p = new Parent("dong", 28); //직접 new 해서 사용가능
p.print();

p._age = 99;       //오류
p._name = "hyun";  //오류
```
```plaintext
접근제어자 때문에 p. 을 사용이 불가능하다.(값변경 불가)
```

```ts
class Parent{
  constructor(protected _name: string, private _age: number){}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }
}

class Child extends Parent {}
const c = new Child("Son",5);
c.print();
c._age = 99;       //오류
c._name = "hyun";  //오류
```
```plaintext
생성자를 입력 안할시 원래는 디폴트 생성자가 생겨야하지만 Parent를 상속 받았기 때문에 Parent 의 생성자를 그대로 가져오게 되어있다.
접근제어자 때문에 위의 Parent 와 동일하게 c. 사용불가 
```

```ts
class Child extends Parent {
  //오버라이드
  public _name = "dong le."
  public gender = "male";
}
const c = new Child("Son",5);
c.print
c.gender 
c._name 
```
```plaintext
생성자 오버라이드
public 접근제어자로 새로 추가를 했기 때문에 c.gender 사용가능
오버라이드를 사용하여 접근제어자를 변경 했기 떄문에 c._name 사용가능
```

```ts
class Parent{
  constructor(protected _name: string, private _age: number){}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }
}

class Child extends Parent {
  public gender = "male";

  constructor(age: number){
    super("hyun",age);
  }
}
const c = new Child(5);
c.print();  //result : 이름은 hyun 이고, 나이는 5 입니다.
```
```plaintext
constructor(age: number){} 
constructor를 오버라이드 하려면 Parent생성자를 호출을 해줘야한다.
super()사용하여 부모의 생성자를 똑같이 맞춰준다.
```

```ts
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
```
```plaintext
constructor 에서 부모의 무언가를 호출하고 싶다면 위와 같이 사용
```