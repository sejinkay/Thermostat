import unittest
from thermostat import Thermostat

thermostat = Thermostat()

class TestThermostat(unittest.TestCase):
    def test_increase(self):
        thermostat.increase()
        self.assertEqual(thermostat.temp,21)


if __name__ == '__main__':
    unittest.main()
