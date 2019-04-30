function Airport() {
  this.planes = [];
};

Airport.prototype.landing = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function() {
  this.planes.pop();
};

Airport.prototype.weather = function() {
  if(Math.floor(Math.random() * 101) > 85) {
    return "stormy"
  }else{
    return "sunny"
  };
};
