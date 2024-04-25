import java.io.*;

public class FileCopyExample {
    public static void main(String[] args) {
        String sourceFileName = "try.txt";
        String destinationFileName = "second.txt";

        // Reading content of "try.txt" using FileInputStream and displaying it
        System.out.println("Content of try.txt:");
        try (FileInputStream fis = new FileInputStream(sourceFileName);
             InputStreamReader isr = new InputStreamReader(fis);
             BufferedReader br = new BufferedReader(isr)) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }

        // Copying content of "first.txt" to "second.txt" using BufferedReader
        try (BufferedReader reader = new BufferedReader(new FileReader("first.txt"));
             BufferedWriter writer = new BufferedWriter(new FileWriter(destinationFileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                writer.write(line);
                writer.newLine();
            }
            System.out.println("Content of first.txt copied to second.txt successfully.");
        } catch (IOException e) {
            System.err.println("Error copying the file: " + e.getMessage());
        }
    }
}
