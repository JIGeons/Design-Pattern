/**
 * 인터페이스 분리 원칙 (ISP: Interface Segregation Principle)
 * 클라이언트는 사용하지 않는 메서드에 의존해서는 안된다.
 */

/* 안 좋은 예 */
// GasCar는 사용하지 않는 메서드를 구현해야하므로 ISP를 위반한다
interface VehicleService {
  refuel(): void;
  chargeElectric(): void;
}

class GasCar implements VehicleService {
  refuel() {}
  chargeElectric() {} // 휘발유차에 필요 없는 기능!
}

/* 개선 예 */
// 인터페이스를 기능 단위로 분리하고, 각 클래스는 필요한 기능만 구현한다
interface Refuelable {
  refuel(): void;
}

interface Chargeable {
  chargeElectric(): void;
}

class GasCar2 implements Refuelable {
  refuel() {}
}

class ElectricCar implements Chargeable {
  chargeElectric() {}
}

// 두 가지 모두 가능한 차는 다중 상속을 받으면 된다.
class HybridCar implements Refuelable, Chargeable {
  refuel() {}
  chargeElectric() {}
}