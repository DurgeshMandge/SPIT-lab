package inheritance;

public class Animal {
	String name;
	int age;
	
	Animal(String name, int age){
		this.age=age;
		this.name=name;
	}
	
	String getName() {
		return name;
	}
	int getAge() {
		return age;
	}
	void eat() {
		System.out.println(name + " is eating.");
	}
	void sleep() {
		System.out.println(name + " is sleeping.");
	}
}
