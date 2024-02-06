// W.A.P on to print " Hello World ".

// Create a class cart in a shopping store. The class should have Product Name, Product Id , Product purchase date ,Product Category ( Apply respective data structure).Implement a method to add Total Products purchased and Final values of Each day purchase. Use appropriate Objects and Constructors wherever needed.

// Create a class Laptop with specifications and assign suitable data types to its feature Make use of suitable methods and Constructors and display the output.

// Define a class subject . Take input string as name "Java " Show the o/p as J.V. using conversion to char[]. Then using CharAt() show the o/p.

// W.A.P based on Is-  A relationship in a context of Organisation which have Employee & Programmer "Is-A" relationship.

// W.A.P and explain the "Has-A" relationship.

// W.A.P based on the concept of Inheritance using Shape class of various geometrical figures.Calculate Area for different shapes

// W.A.P to define a Class "Animal" and a subclass "Lion"

// Find out the Error in the following program-  Inheritance using Bank Class ,rectify if any.

//  import java.lang.*; import java.util.*; 

 class Account

{


String Name; int acno; double balance; double checkbal()

{


return balance;


}


}


class AccountEx extends Account


{


AccountEx (String Name,int a,double b)


{


this.Name=Name; acno=a; balance=b;

}


void withdraw(double amt)


{


balance=balance-amt; if(balance < 500)

{


System.out.println("Can't Withdraw minimum balance should be greater than 500");


}


}


void deposit(double amt)


{


balance=balance+amt;


}


void transfer(Account b, double k)


{


balance=balance-k; if(balance<500.00)


{


transfer");



"+balance); b.balance);


}


}


else


System.out.println("You don't have sufficient balance to



b.balance=b.balance+k; System.out.println("acno:"+acno+" "+"balance is"+"

System.out.println("acno:"+b.acno+" " +"balance is"+"


}


class AccountInheritance


{


public static void main(String args[])


{


AccountEx s = new AccountEx("Pradnya",1,55000.00); System.out.println("The balance is:"+s.checkbal());


System.out.println("Enter the withdrawing amt"); Scanner sc = new Scanner(System.in); double i = sc.nextDouble(); s.withdraw(i);

System.out.println("The balance is:"+s.checkbal());


System.out.println("Enter the Deposit amt"); Scanner sc1 = new Scanner(System.in); double j = sc1.nextDouble();


s.deposit(j);


System.out.println("The balance is:"+s.checkbal()); AccountEx b = new AccountEx("Nameeta",2,65000.00);


System.out.println("Enter amt to transfer:"); Scanner sc2 = new Scanner(System.in); double k = sc2.nextDouble();


s.transfer(b,k);


}


}

W.A.P to print command line arguments using for loop

W.A.P to create a Class"Currency Convertor" to convert Rupees into Different Currencies

W.A.P to generate Lottery Numbers (1 to 49)

W.A.P to generate a random sequence of capital letters such that in one line only 6 letters can be seen.

W.A.P using Constructor and Destructor for a Class " Box " using depth, height and width as parameters for Volume.

Identify the error in the give program class Circle

{


private double radius;


String color;


/* Constructor defination*/

public Circle(double r , String c)


{


radius = r; color = c;

}




public double getRadius()


{


return radius;


}


public double findArea()


{


return radius*radius*Math.PI;


}


} // close circle class defination public class TestObject

{


public static void main(String args[])


{


Circle myc = new Circle(5.0,&quot;blue&quot;); printCircle(myc); colorCircle(myc,&quot;black&quot;); printCircle(myc);

}


public static void colorCircle(Circle c , String color)




1




{


c.color = color;


}


public static void printCircle(Circle c)


{


System.out.println(&quot;The Area of the Circle of the radius&quot;+c.getRadius()+&quot; is &quot;+c.findArea()); System.out.println(&quot;The Color of the circle is: &quot;+c.color);

}


}



Execute the code and Demonstrate the significance of how Super Keyword is used in the Program. class Parent

{


int a;


public Parent(int val)


{


a = val;


}

}


public class Child extends Parent


{


int b=9,c; public Child()

{


super(5);


}


public void add()


{


c = a+b;


}


public void show()


{


System.out.println(&quot;Addition is: &quot;+c);


}


public static void main(String args[])


{


Child ch = new Child(); ch.add();

ch.show();




1

}


}

W.A.P to create Bank Account Class using Interfaces

W.A.P to create Bank Account Class using Abstract Classes

Execute the following code and demonstrate how the concept of Wrapper class can be implemented in the program.


class Abs


{


private int size=8; /* protect the instance variables */


/* provide public getters and setters method */ public int getSize()

{


return size;


}


public void setSize(int newSize)


{


size = newSize;


}


} // close Abs class defination public class Abstract

{


public static void main(String args[])


{


Abs a = new Abs();


// a.size = 8; /* can not accessed instance variable ( Encapsulted) */

a.setSize(67);


System.out.println(&quot;Size value is: &quot;+a.getSize()); Abs a1 = new Abs();

System.out.println(&quot;Size value is : &quot;+a1.getSize());


}


}

Demonstrate the significance of Package in the Program package MyPackage1;

//import java.io.*; import java.util.*;

//Factorial


public class Factorial


{


public void Factorial()


{


System.out.println(&quot;Enter Number To Find Factorial:&quot;); Scanner sc = new Scanner(System.in);

int n=sc.nextInt(); int f=1;

for(int i=n;i&gt;0;i--)


{


f=f*i;


}


System.out.println(&quot;\nFactorial of &quot;+ n +&quot; is:&quot;+f);

}


}


//Maxinum


public class MaxNum


{


public void MaxNum()


{


System.out.println(&quot;\n1st number : &quot;); Scanner sc = new Scanner(System.in);

int mn1=sc.nextInt();




System.out.println(&quot;2nd number : &quot;); int mn2=sc.nextInt();



1




if(mn1&gt;=mn2)


{




}


else


{


}


System.out.println(&quot;\nMax Num is 1st Number&quot;);

System.out.println(&quot;\nMax Num is 2nd Number&quot;);




}


}




//Rectangle


package MyPackage3;




import java.util.*; public class Rectangle

{


public void RectArea()


{


System.out.println(&quot;\nEnter Length of the Rectangle :&quot;); Scanner sc = new Scanner(System.in);

int l=sc.nextInt();




System.out.println(&quot;Enter Breadth of the Rectangle :&quot;); int b=sc.nextInt();

int area=l*b;


System.out.println(&quot;\nArea of Rectangle is = &quot; +area);


}

}




1




//Main


import MyPackage1.*; import MyPackage2.*; import MyPackage3.*; import java.io.*; import java.util.*; class Main

{


public static void main(String args[])


{


Factorial F=new Factorial(); MaxNum MN=new MaxNum(); Rectangle R=new Rectangle(); F.Factorial();

MN.MaxNum();


R.RectArea();


}


}


// Execute the given code , Identify the error in the output. Implement "this" keyword wherever necessary and describe the difference in the output.


class Student{

int rollno; String name; float fee;

Student(int rollno,String name,float fee){ rollno=rollno;

name=name; fee=fee;

}

void display(){System.out.println(rollno+" "+name+" "+fee);}

}

class TestThis1{

public static void main(String args[]){ Student s1=new Student(111,"ankit",5000f);

Student s2=new Student(112,"sumit",6000f); s1.display();

s2.display();

}}