package Refractor;

class Parent{
	int a;
	public Parent(int val){
		a = val;
	}
}
public class Child extends Parent{
	int b=9,c; public Child(){
		super(5);
	}
	public void add(){
		c = a+b;
	}
	public void show(){
		System.out.println("Addition is: "+c);
	}
	public static void main(String args[]){
		Child ch = new Child(); ch.add();
		ch.show();
	}
}

