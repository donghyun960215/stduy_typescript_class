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