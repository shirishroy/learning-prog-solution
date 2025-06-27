BEGIN
  FOR rec IN (
    SELECT CustomerID, LoanID, DueDate
    FROM Loans
    WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || rec.LoanID || 
                         ' for Customer ' || rec.CustomerID || 
                         ' is due on ' || TO_CHAR(rec.DueDate, 'DD-Mon-YYYY'));
  END LOOP;
END;
/
