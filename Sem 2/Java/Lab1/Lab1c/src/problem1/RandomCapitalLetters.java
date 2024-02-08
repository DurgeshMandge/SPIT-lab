package problem1;
import java.util.Random;
public class RandomCapitalLetters {
    public static void main(String[] args) {
        int lettersPerLine = 6;
        int totalLetters = 30; // Total number of letters to generate
        
        // Generate random sequence of capital letters
        String sequence = generateRandomSequence(totalLetters);

        // Display the sequence with 6 letters per line
        displaySequence(sequence, lettersPerLine);
    }

    public static String generateRandomSequence(int length) {
        Random random = new Random();
        StringBuilder sequence = new StringBuilder();

        for (int i = 0; i < length; i++) {
            char letter = (char) (random.nextInt(26) + 'A'); // Generate a random capital letter (A-Z)
            sequence.append(letter);
        }

        return sequence.toString();
    }

    public static void displaySequence(String sequence, int lettersPerLine) {
        int length = sequence.length();
        int lines = length / lettersPerLine;

        for (int i = 0; i < lines; i++) {
            System.out.println(sequence.substring(i * lettersPerLine, (i + 1) * lettersPerLine));
        }

        // Print the remaining letters if any
        if (length % lettersPerLine != 0) {
            System.out.println(sequence.substring(lines * lettersPerLine));
        }
    }
}
