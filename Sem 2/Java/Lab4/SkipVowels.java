import java.io.*;

public class SkipVowels {
    public static void main(String[] args) {
        String fileName = "first.txt";

        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            int character;
            while ((character = br.read()) != -1) {
                char ch = (char) character;
                if (!isVowel(ch)) {
                    System.out.print(ch);
                }
            }
        } catch (FileNotFoundException e) {
            System.err.println("Error: File not found: " + fileName);
        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }
    }

    // Method to check if a character is a vowel
    private static boolean isVowel(char ch) {
        ch = Character.toLowerCase(ch);
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }
}
