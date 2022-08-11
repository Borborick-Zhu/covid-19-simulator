import matplotlib.pyplot as plt
import matplotlib.animation as ani
import numpy as np
from manimlib import *


GREY = (0.78, 0.78, 0.78)
RED = (0.96, 0.15, 0.15)
GREEN = (0, 0.86, 0.03)
BLACK = (0, 0, 0)

class Person:
  def __init_(self, x, y, infected, recovered):
    self.x = x
    self.y = y
    self.infected = False
    self.recovered = False

