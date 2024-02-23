import java.util.*;

public class FractionalKnapsack {

  
  static class Item {
    int weight, value;
    double valuePerUnitWeight;

    Item(int weight, int value) {
      this.weight = weight;
      this.value = value;

      valuePerUnitWeight = (double) (value) / (weight);
    }
  }

  static double getMax(int weight[], int value[], int capacity) {
    int n = weight.length;

    List<Item> list = new ArrayList<>();

    for (int i = 0; i < n; i++) {
      list.add(new Item(weight[i], value[i]));
    }

    Collections.sort(
      list,
      new Comparator<Item>() {

        public int compare(Item i1, Item i2) {
          if (i1.valuePerUnitWeight > i2.valuePerUnitWeight) return -1;
          return 1;
        }
      }
    );

    double ans = 0;

    for (int i = 0; i < n; i++) {
      int wt = list.get(i).weight;
      int val = list.get(i).value;
      double valuePerUnitWeight = list.get(i).valuePerUnitWeight;
      // If we can take the whole item.
      if (capacity >= wt) {
        // Adding value of current item.
        ans += val;

        // Reducing capacity by wt.
        capacity -= wt;
      }
      // Otherwise we can take a fraction.
      else {
        // Adding the value of the part that we can take.
        ans += valuePerUnitWeight * capacity;

        // Now we are left with no space so
        // we will terminate the loop.
        capacity = 0;
        break;
      }
    }
    // Returning the answer
    return ans;
  }

  public static void main(String args[]) {
    // Defining the weights and values
    // of the item.
    int weight[] = {3, 4, 5, 6, 7, 8, 9, 10, 1, 2 };
    int value[] = {32, 65, 98, 131, 164, 197, 230, 263, 296, 329 };
    int capacity = 60;

    System.out.println(
      "Maximum value that" +
      " can be obtained is " +
      getMax(weight, value, capacity)
    );
  }
}
