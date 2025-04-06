/**
 * 의존 역천 원칙 (DIP: Dependency Inversion Principle)
 * 고수준 모듈은 저수준 모듈에 의존해서는 안 된다.
 * 둘 다 추상화에 의존해야 한다.
 */

/* 안 좋은 예 */
// GasEngine()을 적접 생성하고 있어 고수준 모듈이 저수준 모듈에 의존해서는 안되는 원칙 위반
class GasEngine {
  start() { console.log("가솔린 엔진 ON"); }
}

class Car {
  engine = new GasEngine(); // 구체적인 구현에 직접 의존
}

/* 개선 예 */
// Car 객체 생성 시 사용하는 엔진 클래스를 주입하여 사용하면 되기 때문에 저수준 모듈에 의존하지 않는다.
interface Engine {
  start(): void;
}

class GasEngine2 implements Engine {
  start() { console.log("가솔린 엔진 ON"); }
}

class Car2 {
  constructor(private engine: Engine) {}
  startCar() {
    this.engine.start();
  }
}
