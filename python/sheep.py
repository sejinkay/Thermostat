sheeps = []

class Pen:
    def crowd(self, sheep):
        sheeps.append(sheep)
    def list(self):
        for sheep in sheeps:
            print(sheep.name)

class Sheep:
    def __init__(self, name):
        self.name = name
    def sayName(self):
        print("Hello, " + self.name)

pen = Pen()
dory = Sheep("Dory")
nemo = Sheep("Nemo")

pen.crowd(dory)
pen.crowd(nemo)
pen.list()

dory.sayName()
