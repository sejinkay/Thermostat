class Thermostat:
    def __init__(self):
        self.temp = 20
        self.MinTemp = 10
        self.MaxTemp = 25
        self.PSM = True
        self.status = "ON"

    def increase(self):
        if self.temp >= self.MaxTemp:
            raise Exception("You reached the maximum temprature!")
        self.temp += 1
    def decrease(self):
        if self.temp == self.MinTemp:
            raise Exception("You reached the minimum temprature!")
        self.temp -= 1

    def switchOn(self):
        self.PSM = True
        self.MaxTemp = 25
        self.status = "ON"
    def switchOff(self):
        self.PSM = False
        self.MaxTemp = 32
        self.status = "OFF"

    def reset(self):
        self.temp = 20
    def usage(self):
        if self.temp < 18:
            return "low-usage"
        elif self.temp < 25:
            return "medium-usage"
        else:
            return "high-usage"
            
