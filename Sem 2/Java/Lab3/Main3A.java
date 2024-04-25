class Gen<T> {
    private T data;

    public Gen(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}

public class Main3A {
    public static void main(String[] args) {
        // Using Gen with Integer
        Gen<Integer> genInt = new Gen<>(10);
        System.out.println("Integer data: " + genInt.getData());

        // Using Gen with Double
        Gen<Double> genDouble = new Gen<>(3.14);
        System.out.println("Double data: " + genDouble.getData());

        // Using Gen with Character
        Gen<Character> genChar = new Gen<>('A');
        System.out.println("Character data: " + genChar.getData());

        // Using Gen with Boolean
        Gen<Boolean> genBoolean = new Gen<>(true);
        System.out.println("Boolean data: " + genBoolean.getData());

        // Using Gen with Byte
        Gen<Byte> genByte = new Gen<>((byte) 8);
        System.out.println("Byte data: " + genByte.getData());

        // Using Gen with Short
        Gen<Short> genShort = new Gen<>((short) 100);
        System.out.println("Short data: " + genShort.getData());

        // Using Gen with Long
        Gen<Long> genLong = new Gen<>(1000L);
        System.out.println("Long data: " + genLong.getData());

        // Using Gen with Float
        Gen<Float> genFloat = new Gen<>(3.14159f);
        System.out.println("Float data: " + genFloat.getData());
    }
}
