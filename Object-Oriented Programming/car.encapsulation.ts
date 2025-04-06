/**
 * 캡슐화 (Encapsulation)
 * 데이터와 기능을 하나로 묶고, 외부에서 접근을 제한하는 것
 */

class Car {
  private readonly brand: string; // readonly: 한 번 초기화 이후 변경할 수 없도록 사용하는 키워드
  private oil: number;
  // 객체 초기화
  constructor(brand: string, oil?: number) {
    this.brand = brand;
    this.oil = oil ? oil : 0;
  }

  /* 메서드 */
  // getter: 브랜드 확인 (읽기 전용)
  getBrand(): string {
    return this.brand;
  }


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