def fizzbuzz(n):
    arr = []
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            arr.append("Fizzbuzz")
        elif i % 3 == 0:
            arr.append("Fizz")
        elif i % 5 == 0:
            arr.append("Buzz")
        else:
            arr.append(i)
    return arr

print(fizzbuzz(10))
