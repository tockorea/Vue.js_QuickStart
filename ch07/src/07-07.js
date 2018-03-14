function Person(name, yearCount) {
  this.name = name;
  this.age = 0;
  var outerThis = this;
  var incrAge = function() {
    this.age++;

    // 2. 바깥 영역의 this를 다른 변수에 할당하고 참조하는 방법
    // outerThis.age++;
  }
  for (var i = 1; i <= yearCount; i++) {
    incrAge();

    // 1. 함수 수준의 apply 메서드를 이용해 incrAge 함수를 둘러싸고 있는 영역의 this를
    // incrAge 함수 내부의 this로 강제 지정하는 방법
    // incrAge.apply(this);
  }
}

var p1 = new Person("홍길동", 20);
// this.age는 0이 출력됨.
console.log(p1.name + "님의 나이 : " + p1.age);