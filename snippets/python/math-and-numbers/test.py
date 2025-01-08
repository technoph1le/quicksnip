import math

def factorial(n):
    if type(n) != int or n < 0: raise TypeError("Invalid type of input: '" + str(n) + "'") # Raises an error for invalid input
    if n == 0 or n == 1: return 1 # Returns 1 if n is 0 or 1
    else: return n * factorial(n-1) # Recall the factorial function

# Usage:
print(factorial(4)) # Returns 24
print(factorial(-4)) # Returns a type error