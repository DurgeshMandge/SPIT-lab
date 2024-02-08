package Laptop;

public class Laptop {

	int price;
	int generation;
	int ram;
	String company;
	String processor;
	
	public Laptop(String comp, String proc, int price, int gen, int ram) {
		this.company=comp;
		this.generation=gen;
		this.price=price;
		this.ram=ram;
		this.processor=proc;
	}
	
	public void display() {
		System.out.println("Laptop name : "+ this.company);
		System.out.println("Laptop Generation : "+ this.generation);
		System.out.println("Laptop price : "+ this.price);
		System.out.println("Laptop RAM : "+this.price);
		System.out.println("Laptop processor : "+this.processor);
	}
	
	public static void main(String[] args) {
		Laptop obj = new Laptop("Dell", "intel", 40000, 7, 8);
		obj.display();

	}

}
