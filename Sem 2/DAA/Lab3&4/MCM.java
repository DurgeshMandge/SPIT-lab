import java.util.Arrays;

public class MCM{
    // Function to find the minimum number of Multiplication
    //  steps required in multiplying chain of n matrices.
    private static int MatrixChainMultiplication(int mat[], int low, int high){
        // If we are left with one matrix then 
        // we don't need any multiplication steps.
        if(low==high)
            return 0;
        
        // Initializing minCost with very 
        // large value.
        int minCost=Integer.MAX_VALUE;
        
        // Iterating from low to high - 1
        for(int k=low;k<high;k++){
            /* 
             Cost = Cost of Multiplying chain on left side +
                    Cost of Multiplying chain on right side +
                    Cost of Multiplying matrix obtained from left 
                    and right side.
            */
            int cost=MatrixChainMultiplication(mat, low, k)+
                MatrixChainMultiplication(mat, k+1, high)+
                mat[low-1]*mat[k]*mat[high];
            
            // If the above cost is less than 
            // minCost find so far then update minCost.
            if(cost<minCost)
                minCost=cost;
        }
        // Returning the minCost
        return minCost;
    }
    // Main Function 
    public static void main(String args[]){
        // This matrix chain of length 5 represents 
        // 4 matrices of dimensions as follows - 
        // 2*4, 4*6, 6*8, and 8*6.
        int mat[]={32, 65, 98, 131, 164, 197, 230, 263, 296, 329};
        int n=mat.length;
        
        System.out.println("Given input of row and column is "+ Arrays.toString(mat));
        System.out.println("Minimum number of steps are - "+
                        MatrixChainMultiplication(mat, 1, n-1));
    }
}
