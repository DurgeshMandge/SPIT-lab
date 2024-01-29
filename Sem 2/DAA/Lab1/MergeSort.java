package Lab1;

import java.util.Arrays;

public class MergeSort {

    // r + (r+1)*i 
    // 32 + 33*i
    // = [ 64 96 128 160 192 224 256 288 320 352 ]
    public static void main(String[] args) {
        int[] arr = { 128, 192, 64, 288, 352, 160, 96, 256, 320, 224};
        int[] ans = mergeSort(arr);
        System.out.println(Arrays.toString(ans));
    }

    private static int[] mergeSort(int[] arr) {
        if(arr.length<=1){
            return arr;
        }
        int s = 0, e = arr.length;
        int m = (e+s)/2;
        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, m));
        int[] right = mergeSort(Arrays.copyOfRange(arr, m, e));
        return merge(left,right);
    }

    private static int[] merge(int[] left, int[] right) {
        int[] ans = new int[left.length+right.length];
        int i=0, j=0, k=0;
        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                ans[k]=left[i]; i++; k++;
            }else{
                ans[k]=right[j] ; j++; k++;
            }
        }
        while(i < left.length){
            ans[k] = left[i]; i++; k++;
        }
        while (j < right.length) {
            ans[k] = right[j]; j++; k++;
        }
        return ans;
    }
}