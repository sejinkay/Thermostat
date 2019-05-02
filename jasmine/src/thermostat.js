function Thermostat() {
  this.temp = 20
  this.MinTemp = 10
  this.MaxTemp = 25
  this.PSM = true
};

Thermostat.prototype.increase = function() {
  if(this.temp === this.MaxTemp){
    throw new TypeError ("You reached the maximum temprature!");
  };
    this.temp += 1
};

Thermostat.prototype.decrease = function() {
  if(this.temp === this.MinTemp){
    throw new TypeError ("You reached the minimum temprature!");
  };
    this.temp -= 1
  };

Thermostat.prototype.switchOff = function() {
  this.PSM = false
  this.MaxTemp = 32
};

Thermostat.prototype.switchOn = function() {
  this.PSM = true
  this.MaxTemp = 25
};

Thermostat.prototype.reset = function() {
  this.temp = 20
};

Thermostat.prototype.usage = function() {
    if(this.temp < 18){
    return "low-usage"
  } else if(this.temp < 25){
    return "medium-usage"
  } else {
    return "high-usage"
  };
};
