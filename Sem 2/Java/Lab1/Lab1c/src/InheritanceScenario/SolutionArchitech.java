package InheritanceScenario;

public class SolutionArchitech extends CEO{
	String name;
	public SolutionArchitech() {
		super();
		this.name = "Oliver Amersty";
		System.out.println("Hello from Solution Architech : " +this.name);
	}
	public static void main(String[] args) {
		SolutionArchitech v = new SolutionArchitech();
	}
}
