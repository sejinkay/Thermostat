describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("returns 1 when 1 is given", function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  })

  it("returns Fizz when 3 is given", function() {
    expect(fizzBuzz.play(3)).toEqual("Fizz");
  })

  it("returns Fizz when 6 is given", function() {
    expect(fizzBuzz.play(6)).toEqual("Fizz");
  })

  it("returns Buzz when 5 is given", function() {
    expect(fizzBuzz.play(5)).toEqual("Buzz");
  })

  it("returns Buzz when 10 is given", function() {
    expect(fizzBuzz.play(10)).toEqual("Buzz");
  })

  it("returns Fizzbuzz when 15 is given", function() {
    expect(fizzBuzz.play(15)).toEqual("Fizzbuzz");
  })
});
