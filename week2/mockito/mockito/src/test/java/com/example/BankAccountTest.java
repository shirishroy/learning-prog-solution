package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.*;

public class BankAccountTest {

    private BankAccount account;

    // ✅ Setup method – runs before each test
    @Before
    public void setUp() {
        account = new BankAccount("Shirish", 1000.0);
        System.out.println("Setup completed.");
    }

    // ✅ Teardown method – runs after each test
    @After
    public void tearDown() {
        System.out.println("Teardown executed.");
    }

    @Test
    public void testDeposit() {
        // Arrange done in @Before

        // Act
        account.deposit(500.0);

        // Assert
        assertEquals(1500.0, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdraw() {
        // Arrange done in @Before

        // Act
        account.withdraw(300.0);

        // Assert
        assertEquals(700.0, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdrawInsufficientFunds() {
        // Act & Assert
        try {
            account.withdraw(1500.0);
            fail("Expected an IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("Insufficient balance", e.getMessage());
        }
    }
}
