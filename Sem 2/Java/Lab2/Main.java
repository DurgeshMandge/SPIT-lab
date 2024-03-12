class SpecialCharacterException extends Exception {
    public SpecialCharacterException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        int a = 77;  
        try {
            if (isPrime(a)) {
                throw new IllegalArgumentException("The given number is prime.");
            }
            containsSpecialCharacter("&");  // Convert 'a' to string to check for special characters
            System.out.println("No exceptions occurred.");
        } catch (IllegalArgumentException iae) {
            System.out.println("Exception occurred due to prime number: " + iae.getMessage());
        } catch (SpecialCharacterException sce) {
            System.out.println("Exception occurred due to special character: " + sce.getMessage());
        } catch (Exception e) {
            System.out.println("An unexpected exception occurred: " + e.getMessage());
        }
    }

    public static boolean isPrime(int number) {
        if (number < 2) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void containsSpecialCharacter(String str) throws SpecialCharacterException {
        String specialCharacters = "!@#$%^&*()-+";
        for (int i = 0; i < str.length(); i++) {
            if (specialCharacters.contains(Character.toString(str.charAt(i)))) {
                throw new SpecialCharacterException("String contains a special character.");
            }
        }
    }
}
