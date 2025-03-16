# calculator
# features
This calculator includes basic arithmetic operations, memory functions, and additional features like square root and percentage calculations. Here's how each function works:

1. Basic Arithmetic Operations
Users can input numbers and perform addition (+), subtraction (-), multiplication (*), and division (/).

The = button evaluates the expression using JavaScript's eval() function while ensuring proper order of operations (BODMAS/BIDMAS).

If an error occurs (e.g., dividing by zero), it displays "Error".

2. Clear Display (C Button)
Clicking the C button clears the calculator display, resetting the input.

3. Percentage Calculation (% Button)
Converts a number into its percentage form (e.g., 50 becomes 0.5 when % is pressed).

Formula used: value / 100.

4. Square Root Calculation (√ Button)
Computes the square root of the entered number.

If the input is negative, it displays "Error" because square roots of negative numbers are not real.

5. Memory Functions
MS (Memory Save): Saves the current display value to memory.

MR (Memory Recall): Retrieves and appends the saved memory value to the display.

6. Error Handling
Prevents mathematical errors like division by zero.

Displays "Error" if an invalid operation is performed.
