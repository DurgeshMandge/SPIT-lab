package Refractor;

import java.util.Scanner;

class Account{

	String Name; 
	int acno; 
	double balance; 
	
	//rectification
	Account(String name,int acno,double bal){
		this.Name=name;
		this.acno=acno;
		this.balance=bal;
	}
	
	double checkbal(){
		return balance;
	}
}


class AccountEx extends Account{
	AccountEx (String Name,int a,double b){
		super(Name,a,b);
	}
	
	void withdraw(double amt){
		balance=balance-amt; 
		if(balance < 500){
			System.out.println("Can't Withdraw minimum balance should be greater than 500");
		}
	}
	void deposit(double amt){
		balance=balance+amt;
	}
	void transfer(Account b, double k){
		balance=balance-k; 
		if(balance<500.00){
			System.out.println("You don't have sufficient balance transfer");
		}else{
			b.balance=b.balance+k;
			System.out.println("acno: "+acno+" "+"balance is"+" "+balance);
			System.out.println("acno:"+b.acno+" " +"balance is"+" "+b.balance);
		}
	}
}

class AccountInheritance{
	public static void main(String args[]){
	AccountEx s = new AccountEx("Pradnya",1,55000.00); 
	System.out.println("The balance is:"+s.checkbal());
	System.out.println("Enter the withdrawing amt");
	Scanner sc = new Scanner(System.in);
	double i = sc.nextDouble();
	s.withdraw(i);
	System.out.println("The balance is:"+s.checkbal());
	System.out.println("Enter the Deposit amt");
	Scanner sc1 = new Scanner(System.in);
	double j = sc1.nextDouble();
	s.deposit(j);
	System.out.println("The balance is:"+s.checkbal());
	AccountEx b = new AccountEx("Nameeta",2,65000.00);
	System.out.println("Enter amt to transfer:");
	Scanner sc2 = new Scanner(System.in);
	double k = sc2.nextDouble();
	s.transfer(b,k);
	sc.close();
	}
}