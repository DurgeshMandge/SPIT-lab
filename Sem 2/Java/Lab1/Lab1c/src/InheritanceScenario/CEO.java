package InheritanceScenario;

public class CEO {
	String name;
	public CEO() {
		this.name="Mark John";
		System.out.println("Hello from CEO : "+this.name);
	}
	void showEmployees() {
		System.out.println("Product Manager");
		System.out.println("Sales execute");
		System.out.println("Solution Architech");
	}
}
