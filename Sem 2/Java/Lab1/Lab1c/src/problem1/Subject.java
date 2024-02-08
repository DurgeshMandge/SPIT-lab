package problem1;

import java.util.Scanner;

public class Subject {
	

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		char[] c = str.toCharArray();
		System.out.println(c[0]+"."+c[2]+".");
		sc.close();
	}

}
