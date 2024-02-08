package inheritance;

public class Organization {
	 public static void main(String[] args) {
	     // Creating an Employee object
	     Employee emp = new Employee("John Doe", 1001, "HR");
	     System.out.println("Employee Details:");
	     System.out.println("Name: " + emp.getName());
	     System.out.println("Employee ID: " + emp.getEmployeeId());
	     System.out.println("Department: " + emp.getDepartment());
	     emp.work();
	     System.out.println();

	     // Creating a Programmer object
	     String[] languages = {"Java", "Python", "JavaScript"};
	     Programmer prog = new Programmer("Alice Smith", 2001, "IT", languages);
	     System.out.println("Programmer Details:");
	     System.out.println("Name: " + prog.getName());
	     System.out.println("Employee ID: " + prog.getEmployeeId());
	     System.out.println("Department: " + prog.getDepartment());
	     System.out.println("Programming Languages: ");
	     for (String lang : prog.getProgrammingLanguages()) {
	         System.out.println("- " + lang);
	     }
	     prog.work();
	 }
	}