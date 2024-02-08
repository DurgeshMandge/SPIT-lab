package problem1;


class Circle{
	private double radius;
	String color;
	/* Constructor defination*/
	
	public Circle(double r , String c){
        radius = r; 
        color = c;
	}
	
	public double getRadius(){
	    return radius;
	}
	
	
	public double findArea(){	
		return radius*radius*Math.PI;
	}
} // close circle class defination public 
class TestObject{
	
	public static void main(String args[]){
		Circle myc = new Circle(5.0,"&quot;blue&quot;"); 
		printCircle(myc); 
		colorCircle(myc,"&quot;black&quot;"); 
		printCircle(myc);
	}
	public static void colorCircle(Circle c , String color){
			c.color = color;
	}
	public static void printCircle(Circle c){
		System.out.println("The Area of the Circle of the radius "+c.getRadius()+" is  "+c.findArea());
		System.out.println("The Color of the circle is: "+c.color);
	}
}
