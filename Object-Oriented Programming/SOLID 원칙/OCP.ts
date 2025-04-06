/**
 * 개방-폐쇄 원칙 (OCP: Open-Closed Principle)
 * 확장에는 열려 있고, 변경에는 닫혀 있어야 한다.
 */

/* 안 좋은 예 */
// 다른 엔진을 사용하는 차가 추가될 경우 Vehicle 클래스를 수정해야한다. (변경에는 닫혀 있어야 한다 위반!)
class Vehicle {
  startEngine(type: string) {
    if (type === 'electric') console.log("전기차 엔진 ON");
    else if (type === 'gas') console.log("가솔린 엔진 ON");
  }
}

/* 개선 예 */
// 다른 연료를 사용하는 자동차가 추가될 경우 class 하나만 추가하면 된다!
interface Engine {
  start(): void;
}

// 전기차 엔진 클래스 생성
class ElectricEngine implements Engine {
  start() { console.log("전기차 엔진 ON"); }
}

// 가솔린 엔진 클래스 생성
class GasEngine implements Engine {
  start() { console.log("가솔린 엔진 ON"); }
}

class Vehicle2 {
  // 생성자: 사용하는 엔진 클래스로 객체 생성
  constructor(private engine: Engine) {}
  startEngine() {
    this.engine.start();
  }
}