package Lab1;

import java.util.Arrays;

public class QuickSort {

	public static void main(String[] args){
		int[] arr = { 128, 192, 64, 288, 352, 160, 96, 256, 320, 224 };
		int N = arr.length;

		quickSort(arr, 0, N - 1);
        System.out.println(Arrays.toString(arr));
	}

	static void swap(int[] arr, int i, int j){
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	static int partition(int[] arr, int low, int high){
		int pivot = arr[high];
		int i = (low - 1);
		for (int j = low; j <= high - 1; j++) {
			if (arr[j] < pivot) {
				i++;
				swap(arr, i, j);
			}
		}
		swap(arr, i + 1, high);
		return (i + 1);
	}

	static void quickSort(int[] arr, int low, int high){
		if (low < high) {
			int pi = partition(arr, low, high);
			quickSort(arr, low, pi - 1);
			quickSort(arr, pi + 1, high);
		}
	}
    
}

