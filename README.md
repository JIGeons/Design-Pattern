# 🎯 Design-Pattern

객체지향 프로그래밍의 핵심 개념과 SOLID 원칙을 이해하기 쉽게 정리한 학습용 레포입니다.  
➡️ 자세한 설명은 [Velog 포스트](https://velog.io/@jiseong_98/series/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4)에서도 확인하실 수 있어요!

향후에는 **절차적 프로그래밍**, **GoF 디자인 패턴**, **리팩토링 사례**, **실무 패턴 예시** 등도 추가해나갈 예정입니다.

---

## 📚 현재 정리된 내용

### 1️⃣ 객체 지향 프로그래밍 4대 특성

| 개념 | 설명 | 예시 |
|------|------|------|
| 캡슐화 (Encapsulation) | 데이터와 메서드를 하나로 묶고, 외부로부터 보호 | `Car` 클래스의 `private` 필드와 `refuel()` 메서드 |
| 상속 (Inheritance) | 공통 기능을 상위 클래스로 묶고, 재사용성 증가 | `Vehicle` → `Car` 상속 구조 |
| 추상화 (Abstraction) | 불필요한 세부사항은 숨기고 필요한 인터페이스만 노출 | `abstract class Vehicle` 정의 |
| 다형성 (Polymorphism) | 같은 메서드 이름이 상황에 따라 다르게 동작 | `startDrive()` 오버라이드 예시 |

---

### 2️⃣ SOLID 원칙

| 원칙 | 핵심 설명 | 비유 | 요점 요약 |
|------|-----------|------|----------------|
| SRP (단일 책임) | 클래스는 하나의 책임만 가져야 한다 | 자동차 클래스가 운전도 하고 정비 일정도 관리한다면 과도한 책임!
→ Car는 운전, MaintenanceManager는 정비 | 클래스는 오직 하나의 변경 이유만 가져야 함 |
| OCP (개방/폐쇄) | 확장에 열려있고, 수정에는 닫혀야 한다 | 전기차(ElectricCar)를 만들기 위해 기존 Car 클래스를 수정하면 위험!
→ 새로운 클래스로 확장해야 함 |기존 코드는 건드리지 않고, 새 기능은 확장으로 |
| LSP (리스코프 치환) | 부모 클래스를 자식으로 대체해도 문제 없어야 한다 | Vehicle을 사용하는 코드에서 Truck, ElectricCar를 넣어도 문제 없어야 함
→ 전기차인데 refuel() 구현 강요는 ❌ | 자식은 부모의 계약을 어기지 않아야 함 |
| ISP (인터페이스 분리) | 불필요한 기능 구현 강요하면 안된다 | CarService에 chargeElectric()이 있으면 휘발유차도 구현 강제됨!
→ 인터페이스는 기능별로 나누자 | 인터페이스는 작고 역할별로 분리해야 함 |
| DIP (의존 역전) | 구체 구현보다 추상화에 의존해야 한다 | 운전자는 어떤 Engine인지 몰라도 운전 가능해야 함
→ GasEngine이든 ElectricEngine이든 상관 없음 | 상위 모듈은 하위 구현이 아닌 추상화에 의존해야 함 |

---

## 💻 폴더 구조 예시
📁 design-pattern/ 
│ 
├── Object-Oriented Programming/
│ ├── 4가지 핵심 개념/
│ │ ├── car.encapsulation.ts 
│ │ ├── car.inheritance.ts 
│ │ ├── car.abstraction.ts 
│ │ └── car.polymorphism.ts 
│ │
│ └── SOLID 원칙/
│   ├── srp.ts 
│   ├── ocp.ts 
│   ├── lsp.ts 
│   ├── isp.ts 
│   └── dip.ts 
│ 
└── README.md


---
## 🔮 앞으로 추가될 계획
- ✅ 객체지향 프로그래밍 4대 개념
- ✅ SOLID 원칙
- ⏳ 절차적 프로그래밍 (PP: Procedure Programming)
- ⏳ GoF 디자인 패턴
- ⏳ 리팩토링 예시 및 코드 스멜 제거
- ⏳ 실무 코드 패턴 (예: 전략 패턴, 책임 연쇄 등)

---
## 🙌 기여 & 피드백
이 레포는 학습과 공유를 위한 오픈 프로젝트입니다.
좋은 예시나 개선 사항이 있다면 자유롭게 PR이나 Issue를 남겨주세요!
