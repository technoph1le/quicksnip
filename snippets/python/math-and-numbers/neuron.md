---
title: Basic Neuron Class
description: A Python class representing a single artificial neuron that computes the weighted sum of inputs and applies an optional activation function.
tags: python, machine-learning, neural-networks
author: jimmydin7
---

```py
import numpy as np

class Neuron:
    def __init__(self, inputs, weights, bias):
        self.inputs = inputs
        self.weights = weights
        self.bias = bias

    def get_output(self):
        weighted_sum = np.dot(self.inputs, self.weights) + self.bias
        return weighted_sum

# Example usage
inputs = np.array([1.0, 2.0, 3.0])
weights = np.array([0.2, 0.8, -0.5])
bias = 2.0

neuron = Neuron(inputs, weights, bias)
output = neuron.get_output()   (you can add an activation function)
print(f"Neuron output: {output}")
```
