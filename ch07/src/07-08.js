function Person(name, yearCount) {
  this.name = name;
  this.age = 0;
  var incrAage = () => {
    this.age++;
  }
  for (var i = 1; i <= yearCount; i++) {
    incrAage();
  }
}

var p1 = new Person("홍길동", 20);
// this.age는 20이 출력됨.
console.log(p1.name + "님의 나이 : " + p1.age);