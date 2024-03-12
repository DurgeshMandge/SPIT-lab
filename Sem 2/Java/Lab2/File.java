import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class File {
    public static void main(String[] args) {
        try {
            readAndSquareNumber("even.txt");
        } catch (IOException e) {
            System.out.println("Exception occurred: " + e.getMessage());
        }

        buildArrayOutOfIndex();
    }

    public static void readAndSquareNumber(String fileName) throws IOException {
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line = reader.readLine();
            if (line == null) {
                throw new IOException("File is empty");
            }
            int number = Integer.parseInt(line);
            System.out.println("Square of the number present in the file: " + (number * number));
        } catch (NumberFormatException e) {
            throw new IOException("Invalid number format in the file");
        }
    }

    public static void buildArrayOutOfIndex() {
        int[] array = new int[10];
        for (int i = 1; i <= 10; i++) {
            array[i - 1] = i;
        }
        try {
            // Accessing the 11th element from the index (which doesn't exist)
            int value = array[10];
            System.out.println("Value at index 10: " + value);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Exception occurred: " + e.getMessage());
        }
    }
}
