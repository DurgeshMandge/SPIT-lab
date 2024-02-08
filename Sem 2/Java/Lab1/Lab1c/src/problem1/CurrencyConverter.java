package problem1;

import java.util.Scanner;

public class CurrencyConverter {
    // Conversion rates
    private static final double USD_RATE = 0.014; // 1 INR = 0.014 USD
    private static final double EUR_RATE = 0.012; // 1 INR = 0.012 EUR
    private static final double GBP_RATE = 0.011; // 1 INR = 0.011 GBP

    // Convert INR to USD
    public static double convertToUSD(double amountINR) {
        return amountINR * USD_RATE;
    }

    // Convert INR to EUR
    public static double convertToEUR(double amountINR) {
        return amountINR * EUR_RATE;
    }

    // Convert INR to GBP
    public static double convertToGBP(double amountINR) {
        return amountINR * GBP_RATE;
    }
    public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
        double amountINR = sc.nextDouble(); // Amount in Indian Rupees
        sc.close();
        // Conversion
        double amountUSD = convertToUSD(amountINR);
        double amountEUR = convertToEUR(amountINR);
        double amountGBP = convertToGBP(amountINR);
        // Display results
        System.out.println("Amount in INR: " + amountINR);
        System.out.println("Converted to USD: " + amountUSD + " USD");
        System.out.println("Converted to EUR: " + amountEUR + " EUR");
        System.out.println("Converted to GBP: " + amountGBP + " GBP");
    }
}

