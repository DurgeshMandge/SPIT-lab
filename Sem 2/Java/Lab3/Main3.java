class GenAB<A, B> {
    private A a;
    private B b;

    public GenAB(A a, B b) {
        this.a = a;
        this.b = b;
    }

    public A getA() {
        return a;
    }

    public void setA(A a) {
        this.a = a;
    }

    public B getB() {
        return b;
    }

    public void setB(B b) {
        this.b = b;
    }
}

class GenDemo {
    private GenAB<?, ?> obj;

    public GenDemo(GenAB<?, ?> obj) {
        this.obj = obj;
    }

    public void display() {
        System.out.println("A: " + obj.getA() + ", B: " + obj.getB());
    }
}

public class Main3 {
    public static void main(String[] args) {
        // Creating an instance of GenAB with different data types for A and B
        GenAB<Integer, Double> genObjIntDouble = new GenAB<>(10, 3.14); // A is Integer, B is Double
        GenAB<String, Boolean> genObjStrBool = new GenAB<>("Hello", true); // A is String, B is Boolean

        // Using GenDemo with GenAB instances
        GenDemo demoObj1 = new GenDemo(genObjIntDouble);
        GenDemo demoObj2 = new GenDemo(genObjStrBool);

        // Displaying the values
        demoObj1.display(); // Output: A: 10, B: 3.14
        demoObj2.display(); // Output: A: Hello, B: true
    }
}