describe ("Airport", function() {
 var airport;

 beforeEach(function(){
   airport = new Airport();
 });

 it("lands the plane", function(){
   var plane;
   airport.landing(plane);
   expect(airport.planes).toEqual([plane]);
 });

 it("takes off the plane", function(){
   var plane;
   airport.landing(plane);
   airport.takeOff();
   expect(airport.planes).toEqual([]);
 });

  describe("weather", function() {
    beforeAll(function() {
      spyOn(Math, 'random').and.returnValue(90, 35);

     it("when the number is higher than 85, returns stormy", function(){
       expect(airport.weather()).toEqual("stormy");
     });
     it("when the number is lower than 85, returns sunny", function(){
       expect(airport.weather()).toEqual("sunny");
     });
    });
  });
});
