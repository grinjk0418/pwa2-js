class Mammal {
  _name;
  _residence;

  constructor(name, residence) {
    this._name = name;
    this._residence = residence;
  }

  breath() {
    console.log(`${this._name}가 폐호흡합니다.`);
  }

}

class Whale extends Mammal {
  constructor(name, residence) {
    super(name, residence); //부모객체의 생성자 함수를 호출하는 키워드
  }

  // 오버라이딩, 부모가 물려준거 맘에 안드니까 새로 정의
  breath() {
    console.log(`눈누난나`);
  }

  swimming() {
    console.log(`${this._name}가 헤엄칩니다.`);
  }
}

class FlyingSquirrel extends Mammal {
  constructor(name, residence) {
    super(name, residence); //부모객체의 생성자 함수를 호출하는 키워드
  }
  
  flying() {
    console.log(`${this._name}가 날아갑니다.`);
  }
}

const whale = new Whale('고래', '바다');
whale.breath();