/**
 * 리스코프 치환 원칙 (LSP: Liskov Substitution Principle)
 * 부모 타입 객체를 사용하는 곳에 자식 타입 객체를 넣어도 문제가 없어야 한다.
 */


/* 안 좋은 예 */
// Vehicle을 사용하는 곳에 ElectricCar를 사용할 경우 refuel에서 에러가 발생!
class Vehicle {
  refuel() { console.log("기름 충전"); }
}

class ElectricCar extends Vehicle {
  refuel() { throw new Error("전기차는 기름을 넣을 수 없습니다."); }  // 규약 위반
}

/* 개선 예 */
// refuel() 메서드를 자식 클래스에서 정의하여 Vehicle을 사용하는 곳에
// FuelVehicle, ElectricCar을 넣어도 아무런 문제가 발생하지 않음!
class Vehicle2 {}

class FuelVehicle extends Vehicle2 {
  refuel() { console.log("기름 충전"); }
}

class ElectricCar2 extends Vehicle2 {
  charge() { console.log("전기 충전"); }
}