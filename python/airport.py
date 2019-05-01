from random import *

planes = []

class Airport():
    def landing(self, plane):
        planes.append(plane)

    def take_off(self):
        planes.pop()

    def weather(self):
        if(randint(1, 100) > 85):
            print("stormy")
        else:
            print("sunny")


# port = Airport()
# port.landing("plane")
# print(planes)
# port.take_off()
# print(planes)
# port.weather()
