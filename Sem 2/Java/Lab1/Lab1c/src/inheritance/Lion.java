package inheritance;

public class Lion extends Animal{
	String sound;
	
	Lion(String name, int age, String sound){
		super(name, age);
		this.sound= sound;
	}
	
	void getSound() {
		System.out.println(getName() + " roars " + this.sound);
	}
}
