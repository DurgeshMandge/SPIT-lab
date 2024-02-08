import java.util.Arrays;
import java.util.HashMap;

public class FractionalKnapsack {
    
    static HashMap<Integer,Integer> m1 = new HashMap<>();
    static HashMap<Integer,Integer> m = new HashMap<>();
    public static void main(String[] args) {
        int[] val = {35, 71, 107, 143, 179, 215, 251, 287, 323, 359};
        int[] wt = {6, 7, 8, 9, 10, 1, 2, 3, 4, 5};
        int[] valPerWt = new int[10];
        int W = 35;
        for(int i=0;i<10;i++){
            valPerWt[i]= val[i]/wt[i];
            m1.put(valPerWt[i],wt[i]);
        }

        int target = knapsack(val,wt,W,valPerWt);
        System.out.println(target);
    }
    
    private static int knapsack(int[] val, int[] wt, int W,int[] valPerWt) {
        for(int i=0;i<10;i++){
            m.put(wt[i],val[i]);
        }
        
        Arrays.sort(valPerWt);
        int available = W, max =0;
        for(int i=0;i<10;i++){
            if(available>0 && available>=wt[i]){
                max+= valPerWt[i] * m1.get(valPerWt[i]);
                available-= valPerWt[i] * m1.get(valPerWt[i]);
            }else if(available>0 && available<wt[i]){
                int ratio = valPerWt[i]*available;
                max+=ratio;
            }
            else{
                break;
            }
        }
        return max;
    }
}
