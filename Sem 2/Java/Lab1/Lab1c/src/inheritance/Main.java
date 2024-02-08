package inheritance;

public class Main {

	public static void main(String[] args) {
		// Instance of child class
		Lion simba = new Lion("simba",5,"Roar");
		
		//accessing methods from parent and child
		System.out.println("Name: " + simba.getName());
        System.out.println("Age: " + simba.getAge());
        simba.eat(); // Inherited from Animal class
        simba.sleep(); // Inherited from Animal class
	}

}
