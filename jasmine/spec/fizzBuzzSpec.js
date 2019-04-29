describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("returns 1 when 1 is given", function() {
    expect(fizzBuzz.play(1)).toEqual("1");
  })

  it("returns list of numbers", function() {
    expect(fizzBuzz.play(2)).toEqual("1\n2");
  })
});
