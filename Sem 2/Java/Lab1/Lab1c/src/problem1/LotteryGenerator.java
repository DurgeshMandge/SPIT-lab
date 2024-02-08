package problem1;

import java.util.Random;

public class LotteryGenerator {
    public static void main(String[] args) {
        int[] lotteryNumbers = generateLotteryNumbers(6);
        
        System.out.println("Lottery Numbers:");
        for (int number : lotteryNumbers) {
            System.out.print(number + " ");
        }
    }

    public static int[] generateLotteryNumbers(int count) {
        Random random = new Random();
        int[] numbers = new int[count];
        boolean[] used = new boolean[50]; // Array to keep track of used numbers, initialized as false

        for (int i = 0; i < count; i++) {
            int num;
            do {
                num = random.nextInt(49) + 1; // Generate a random number between 1 and 49
            } while (used[num]); // Check if the number is already used

            numbers[i] = num;
            used[num] = true; // Mark the number as used
        }

        return numbers;
    }
}

