abstract class AbstarctPerson {
  protected _name: string = "dong";

  abstract setName(name: string): void;
}

class Person extends  AbstarctPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person();
p.setName("lee");