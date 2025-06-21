package week1.FinancialForecasting;

public class ForecastCalculator {

    // Recursive method to calculate future value
    public static double predictValueRecursive(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return predictValueRecursive(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    // Optimized using iteration (non-recursive)
    public static double predictValueIterative(double currentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + growthRate);
        }
        return currentValue;
    }
}

