import java.io.*;

public class NumberSquared {
    public static void main(String[] args) {
        String fileName = "even.txt";

        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = br.readLine()) != null) {
                try {
                    int number = Integer.parseInt(line);
                    if (number % 2 == 0) {
                        System.out.println("Square of " + number + ": " + (number * number));
                    } else {
                        System.out.println(number + " is not an even number.");
                    }
                } catch (NumberFormatException e) {
                    System.err.println("Error: The line does not contain a valid integer: " + line);
                }
            }
        } catch (FileNotFoundException e) {
            System.err.println("Error: File not found: " + fileName);
        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }
    }
}
