/**
 * 단일 책임 원칙 (SRP, Single Responsibility Principle)
 * - 클래스는 하나의 책임만 가져야한다.
 * - 하나의 변경 이유만 존재해야 한다.
 */

/* 안 좋은 예 */
class Vehicle {
  drive() { /* 주행 */ }
  scheduleMaintenance() { /* 정비 일정 관리 */ }  // 책임 과다!
}

/* 개선 예 - 탈 것과 유지관리 클래스를 분리 */
// 탈 것 클래스
class Vehicle2 {
  drive() { /* 주행 */ }
}

// 유지관리 클래스
class MaintenanceManager {
  scheduleMaintenance() { /* 정비 일정 관리 */ }
}