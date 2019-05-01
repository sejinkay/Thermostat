import unittest
from airport import Airport

class TestAirport(unittest.TestCase):
    def test_landing(self, plane):
        planes = []
        self.assertEqual(landing("plane"), ["plane"])


if __name__ == '__main__':
    unittest.main()
