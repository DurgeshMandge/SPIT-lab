import java.util.Arrays;

/**
 * Demo
 */
public class Demo {

    public static void main(String[] args) {
        int[] val = new int[10];
        int[] wt = new int[10];
        for(int i=0;i<10;i++){
            val[i]= 32+(33)*i;
        }
        for(int i=0;i<10;i++){
            wt[i]= ((32+i)%10) + 1;
        }
        System.out.println(Arrays.toString(val));
        System.out.println(Arrays.toString(wt));
    }
}