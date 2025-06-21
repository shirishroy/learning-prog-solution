package week1.EcommerceSearchExample;

import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Backpack", "Accessories"),
            new Product(105, "Watch", "Fashion")
        };

        
        String target = "Watch";
        Product foundLinear = SearchAlgorithms.linearSearch(products, target);
        System.out.println("Linear Search Result: " + (foundLinear != null ? foundLinear : "Not Found"));

        // Sort the array by name for binary search
        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));

        // 🔍 Binary Search
        Product foundBinary = SearchAlgorithms.binarySearch(products, target);
        System.out.println("Binary Search Result: " + (foundBinary != null ? foundBinary : "Not Found"));

        // ⏱️ Time Complexity Discussion
        System.out.println("\n--- Time Complexity ---");
        System.out.println("Linear Search: O(n)");
        System.out.println("Binary Search: O(log n) [Only works on sorted data]");
        System.out.println("\nBinary search is more efficient for large, sorted datasets. "
            + "Linear search is simple but slower for large arrays.");
    }
}
