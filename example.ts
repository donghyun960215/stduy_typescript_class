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
