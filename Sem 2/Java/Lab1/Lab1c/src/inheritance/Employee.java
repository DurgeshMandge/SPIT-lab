package inheritance;

//Parent class
class Employee {
 private String name;
 private int employeeId;
 private String department;

 public Employee(String name, int employeeId, String department) {
     this.name = name;
     this.employeeId = employeeId;
     this.department = department;
 }

 public String getName() {
     return name;
 }

 public int getEmployeeId() {
     return employeeId;
 }

 public String getDepartment() {
     return department;
 }

 public void work() {
     System.out.println("Employee is working...");
 }
}


