package inheritance;

class Programmer extends Employee {
	 private String[] programmingLanguages;

	 public Programmer(String name, int employeeId, String department, String[] programmingLanguages) {
	     super(name, employeeId, department);
	     this.programmingLanguages = programmingLanguages;
	 }

	 public String[] getProgrammingLanguages() {
	     return programmingLanguages;
	 }

	 // Overriding the work method
	 @Override
	 public void work() {
	     System.out.println("Programmer is coding...");
	 }
	}
