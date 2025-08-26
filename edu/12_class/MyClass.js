class MyClass {
  name; //인스턴스 변수, public : 클래스 내외부 어디서든 접근 가능
  #age; //인스턴스 변수, private : 클래스 내부에서만 접근 가능
  _addr; //인스턴스 변수, protected : 나와 상속관계에서 자식 클래스들은 접근이 가능(_문법적으로 막은건 아닌데 관례 다른개발자들이 알아볼수있게..)
  static gender = 'M'; //정적 변수, 잘 사용하지 않는다. new로 인스턴스화를 하지 않더라도 불러올수 있다.(메모리할당 많이 차지함) 

  // 생성자 메소드
  // `new` 키워드로 객체를 인스턴스화 할때 딱 한번 실행되는 메소드(컨스트럭터 안적으면 디폴트값으로 비어있다.)
  constructor(name, age, addr) { //객체 초기화를 위해 사용한다.
    this.name = name;
    this.#age = age;
    this._addr = addr;
  }

  // getter 프라이빗 된거 외부에서 보기만 하기/ setter 프라이빗 된거 외부에서 수정하기
  // 메소드지만 사용할때 프로퍼티 사용 하듯이 동작한다.
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }


  // 인스턴스 메소드
  add(a, b) {
    return a + b;
  }
}

// const myClass = new MyClass();
// let addNum = myClass.add(5, 10);
// console.log(addNum);

const myClass = new MyClass('홍길동', 20, '조선'); //인스턴스화
const myClass2 = new MyClass('갑순이', 10, '한국')
console.log(myClass.age);
myClass.age = 40;
console.log(myClass.age);
console.log(myClass2.name);

