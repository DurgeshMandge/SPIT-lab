package Java;

import java.util.Scanner;

public class Lab1{
    public static void main(String[] args) {
        // multiplicationTable(5);
        // System.out.println(gcd(80, 120));
        // System.out.println(calculator(34, 12, '/'));
        // fibo(0);
        // reverse("Durgesh");
        // Scanner s = new Scanner(System.in);
        // System.out.println(s.nextLine());
        // s.close();;
        triangle(5);
    }

    //1.      To Generate Multiplication Table
    static void multiplicationTable(int a){
        int c =10;
        while(c-->0){
            System.out.print(a*(10-c) + " ");
        }
    }

    //2.      To Find GCD of two Numbers
    static int gcd(int a, int b){
        int gcd =1;
        for(int i =1; i<=a && i<=b ; i++){
            if(a%i==0 && b%i==0){
                gcd=i;
            }
        }
        return gcd;
    }

    //3.      Calculator Program in Java
    static int calculator(int a, int b, char ch){
        switch (ch) {
            case '+':
                return a+b;
            case '-':
                return a-b;
            case '*':
                return a*b;
            case '/':
                return a/b;
        
            default:
                return 0;
        }
    }

    //4.      To calculate Fibonacci Series up to n numbers.
    static void fibo(int a){
        int first =0, second=1;
        if(a==0){
            System.out.print("0 ");
            return;
        }
        if(a==1){
            System.out.print("0 1");
            return;
        }
        System.out.print("0 ");
        for(int i=1; i<a; i++){
            System.out.print(second + " ");
            int t = first;
            first=second;
            second+=t;
        }
    }

    //5.      W.A.P to reverse your First Name using Strings .
    static void reverse(String name){
        char[] c = name.toCharArray();
        for(int i=0; i<c.length/2; i++){
            swap(i,c.length-1-i,c);
        }
        System.out.println(c.toString());
    }


    private static void swap(int f, int s, char[] c) {
        char temp = c[f];
        c[f]=c[s];
        c[s]=temp;
    }
    //6.      W.A.P to Print one number at a time , input must be from the user


    //7.      W.A.P to print your Personal details ( Name , Gender, Address , Phone No.,College Name )


    //8.      W.A.P to check whether a number is  Odd or even
    static boolean isOdd(int n){
        return n%2==0;
    }
    //9.       W.A.P to check whether a number is palindrome or Not. 
    static boolean palindrome(int n){
        
    }
    //10.     W.A.P to add 10  numbers of one series .(Example :- If the user inputs 3 then its should take  numbers from 3,4,5……..12)
    static void series(int n){
        for(int i=0;i<10;i++){
            System.out.println(n+i);
        }
    }
    //11.      W.A.P to print your Age based on your Birth date
    
    // 12.      W.A.P to create  the following output :-
    //          1
    //          11
    //          111
    //          1111
    //          11111  
    static void triangle(int n){
        for(int i=0; i<n; i++){
            for(int j=0;j<=i; j++){
                System.out.print(1);
            }
            System.out.println();
        }
    }

    //13.  W.A.P to accept any two numbers and perform division on it ( If the number is in decimal value then convert them into a whole number)
    

    //14.  W.A.P to convert number in characters (E.g. 123 , Output One Two Three )
    static void numToChar(int n){
        String ans = "";
        switch (n) {
            case 1:
                ans+="one ";
                break;
        
            case 2:
                ans+="two ";
                break;
            
            case 3:
                ans+="three";
                break;
            
            case 4:
                
                break;
        
            case 5:
                
                break;
    
            case 6:
                
                break;

            case 7:
                
                break;

            case 8:
                
                break;
        
            default:
                break;
        }
    }
    // 15.  To convert Number to word
    // 16.  Java Program to Check Whether a Number is Prime or Not using different control structure
    // 17. To Check a Leap year
    // 18. To check whether a number is positive or negative
    // 19. To calculate the sum of Natural Numbers
    // 20. To Find the factorial of a Number
    // 21.To display all prime numbers from 1 to N.
    // 22.To check whether Input character is Vowel or Not.
    // 23.To calculate simple Interest
    // 24.To convert octal to decimal conversion
    // 25. Conclude what is the difference between JAVA and C++.
    //1. Java do not have concept of pointers it is all call by reference by default
    //


}