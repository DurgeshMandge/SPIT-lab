import java.io.*;

public class FileOperations {
    public static void main(String[] args) {
        String fileName = "sample.txt"; // File name
        
        // Write content onto file
        writeToFile(fileName, "Hello, this is some content to write to the file.");

        // Reading content from file
        String content = readFromFile(fileName);
        System.out.println("Content read from file: " + content);

        // Get current path of file
        String currentPath = getCurrentPath(fileName);
        System.out.println("Current path of the file: " + currentPath);

        // File related operations
        renameFile(fileName, "renamed_sample.txt");
        displayLastModified(fileName);
        listFilesInDirectory(".");
    }

    // Write content onto file
    public static void writeToFile(String fileName, String content) {
        try (FileWriter writer = new FileWriter(fileName)) {
            writer.write(content);
            System.out.println("Content successfully written to file.");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file: " + e.getMessage());
        }
    }

    // Reading content from file
    public static String readFromFile(String fileName) {
        StringBuilder content = new StringBuilder();
        try (FileReader reader = new FileReader(fileName)) {
            int character;
            while ((character = reader.read()) != -1) {
                content.append((char) character);
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading from the file: " + e.getMessage());
        }
        return content.toString();
    }

    // Get current path of file
    public static String getCurrentPath(String fileName) {
        File file = new File(fileName);
        return file.getAbsolutePath();
    }

    // Rename file
    public static void renameFile(String oldName, String newName) {
        File oldFile = new File(oldName);
        File newFile = new File(newName);
        if (oldFile.renameTo(newFile)) {
            System.out.println("File renamed successfully.");
        } else {
            System.out.println("Failed to rename the file.");
        }
    }

    // Display last modification time of file
    public static void displayLastModified(String fileName) {
        File file = new File(fileName);
        long lastModified = file.lastModified();
        System.out.println("Last modified time of the file: " + lastModified);
    }

    // List files in specified directory
    public static void listFilesInDirectory(String directoryPath) {
        File directory = new File(directoryPath);
        File[] files = directory.listFiles();
        if (files != null) {
            System.out.println("Files in directory " + directoryPath + ":");
            for (File file : files) {
                System.out.println(file.getName());
            }
        } else {
            System.out.println("Specified directory does not exist or is not a directory.");
        }
    }
}
