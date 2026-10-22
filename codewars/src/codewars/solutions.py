from collections.abc import Callable

def _if(bool, func1: Callable, func2: Callable):
    if bool:
        return func1()
    else:
        return func2()


# Who ate the cookie 
def cookie(x):
    if isinstance(x, str):
        return "Who ate the last cookie? It was Zach!"
    elif isinstance(x, (float, int)) and not isinstance(x, bool):
        return "Who ate the last cookie? It was Monica!"
    else: 
        return "Who ate the last cookie? It was the dog!"     

# // Even or Odd 
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else: 
        return "Odd"

# // Multiply

def multiply(a, b):
   return (a * b)

# Do I get a bonus?
def bonus_time(salary, bonus):
    total = salary * 10 if bonus else salary
    return f"${total}"

    
    