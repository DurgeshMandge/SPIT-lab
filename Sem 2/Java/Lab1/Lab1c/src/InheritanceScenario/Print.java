
package InheritanceScenario;
import java.util.Scanner;


public class Print {

	private static final String[] elevens = {
			"eleven", "twelve", "thirteen", "forteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
			"twenty", "Nine"
	};
	private static final String[] unitWords = {
			"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
			"Eight", "Nine"
	};
	private static final String[] tensWords = {
			"and", "One", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy",
			"Eighty", "Ninety"
	};
	public static void convertNumberToCharacters(int number) {
		String numStr = String.valueOf(number);
		
		int unit = number%10, tens=(number/10)%10, hundreds=(number/100)%10;
		if(hundreds>0) {
			if(tens==1) {
				System.out.println(unitWords[hundreds]+" hundred "+ elevens[unit]);
			}else {
				System.out.println(unitWords[hundreds]+" hundred "+ tensWords[tens]+ unitWords[unit]);
			}
		}else {
			if(tens==1) {
				System.out.println( elevens[unit]);
			}else {
				System.out.println(tensWords[tens]+ unitWords[unit]);
			}
		}
	
	}
			
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter a number: ");
		int number = scanner.nextInt();
		System.out.print("Equivalent characters: ");
		convertNumberToCharacters(number);
	}

}
