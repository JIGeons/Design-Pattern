/**
 * 상속 (Inheritance)
 * 기존 클래스를 확장하여 새로운 클래스를 만드는 것
 */

// 부모 클래스: Vehicle
class Vehicle {
  protected readonly brand: string; // protected: 자식 클래스에서 접근 가능.

  protected constructor(brand: string) {
    this.brand = brand;
  }

  // getter: 브랜드 확인 (읽기 전용)
  getBrand(): string {
    return this.brand;
  }
}

// 자식 클래스: Car(부모클래스: Vehicle 상속)
class Car extends Vehicle {
  /* 속성 확장 */
  private oil: number = 0;

  // 생성자: 브랜드와 초기 기름량 설정
  constructor(brand: string, oil?: number) {
    super(brand); // 부모 생성자에 brand 전달
    this.oil = oil && oil > 0 ? oil : 0;
  }

  // getBrand() 메서드 오버라이드
  // override 키워드로 오버라이드 메소드인 것을 명시적으로 표시
  // * override 키워드는 TS 4.3 이상에서만 지원. (생략 가능)
  override getBrand(): string {
    return `브랜드: ${super.getBrand()}`;
  }

  /* 메서드 확장 */
  // setter: 기름 충전
  refuel(oil: number) {
    if (oil <= 0) {
      console.log("주유량은 0보다 커야 합니다.");
      return ;
    }

    this.oil += oil;
    console.log(`${oil}L가 충전되었습니다. 휘발유 잔여량: ${this.oil}L`);
  }

  // getter: 주행 시작
  startDrive() {
    if (this.oil <= 0) {
      console.log("현재 휘발유가 없어 주행할 수  없습니다. 기름을 충전해 주세요.");
      return ;
    }

    console.log("주행을 시작합니다.");
  }
}

const myCar = new Car('Hyundai');
myCar.getBrand(); // 'Hyundai'
myCar.startDrive(); // 현재 휘발유가 없어 주행할 수  없습니다. 기름을 충전해 주세요.
myCar.refuel(10); // '10L가 충전되었습니다. 휘발유 잔여량: 10L'
myCar.refuel(0);  // '주유량은 0보다 커야 합니다.'
myCar.startDrive(); // 주행을 시작합니다.
