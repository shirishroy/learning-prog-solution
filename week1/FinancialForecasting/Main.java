package week1.FinancialForecasting;

public class Main {
    public static void main(String[] args) {
        double currentValue = 10000;   // ₹10,000
        double annualGrowthRate = 0.08; // 8%
        int years = 5;

        double futureValueRecursive = ForecastCalculator.predictValueRecursive(currentValue, annualGrowthRate, years);
        double futureValueIterative = ForecastCalculator.predictValueIterative(currentValue, annualGrowthRate, years);

        System.out.printf("Recursive Prediction after %d years: ₹%.2f%n", years, futureValueRecursive);
        System.out.printf("Iterative Prediction after %d years: ₹%.2f%n", years, futureValueIterative);

        // Analysis
        System.out.println("\n--- Analysis ---");
        System.out.println("Recursive Approach: Time Complexity = O(n), where n is the number of years.");
        System.out.println("Each recursive call computes 1 year's growth, building on the previous.");
        System.out.println("Optimized (iterative) approach avoids function call overhead.");
    }
}