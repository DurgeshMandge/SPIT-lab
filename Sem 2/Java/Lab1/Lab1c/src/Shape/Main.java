package Shape;

import java.util.Scanner;

public class Main {
 public static void main(String[] args) {
     Scanner scanner = new Scanner(System.in);

     System.out.println("Calculate Area for Different Shapes");
     System.out.println("1. Rectangle");
     System.out.println("2. Circle");
     System.out.println("3. Triangle");
     System.out.print("Enter your choice: ");
     int choice = scanner.nextInt();

     switch (choice) {
         case 1:
             System.out.print("Enter length and width of rectangle: ");
             double length = scanner.nextDouble();
             double width = scanner.nextDouble();
             Rectangle rectangle = new Rectangle(length, width);
             System.out.println("Area of Rectangle: " + rectangle.calculateArea());
             break;
         case 2:
             System.out.print("Enter radius of circle: ");
             double radius = scanner.nextDouble();
             Circle circle = new Circle(radius);
             System.out.println("Area of Circle: " + circle.calculateArea());
             break;
         case 3:
             System.out.print("Enter base and height of triangle: ");
             double base = scanner.nextDouble();
             double height = scanner.nextDouble();
             Triangle triangle = new Triangle(base, height);
             System.out.println("Area of Triangle: " + triangle.calculateArea());
             break;
         default:
             System.out.println("Invalid choice");
     }
     scanner.close();
 }
}

