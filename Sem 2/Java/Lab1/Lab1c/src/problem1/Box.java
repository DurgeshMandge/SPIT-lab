package problem1;

public class Box {
    private double depth;
    private double height;
    private double width;

    // Constructor to initialize dimensions
    public Box(double depth, double height, double width) {
        this.depth = depth;
        this.height = height;
        this.width = width;
    }

    // Method to calculate volume
    public double calculateVolume() {
        return depth * height * width;
    }

    // Method to display volume
    public void displayVolume() {
        System.out.println("Volume of the box: " + calculateVolume());
    }

    public static void main(String[] args) {
        // Creating an instance of the Box class
        Box myBox = new Box(5.0, 3.0, 2.0);

        // Displaying the volume of the box
        myBox.displayVolume();
    }
}
