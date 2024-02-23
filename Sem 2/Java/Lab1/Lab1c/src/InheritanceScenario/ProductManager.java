package InheritanceScenario;

public class ProductManager extends SolutionArchitech{
	String name ;
	public ProductManager() {
		super();
		this.name= "Sehwal Parjeet";
		System.out.println("Hello from PM : "+ this.name);
	}
	public static void main(String[] args) {
		ProductManager p = new ProductManager();
	}
}
