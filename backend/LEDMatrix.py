import time
import sys

from rgbmatrix import RGBMatrix, RGBMatrixOptions
from PIL import Image

image_file = "/home/pi/Desktop/face.png"

image = Image.open(image_file)

#Configuration for the matrix
options = RGBMatrixOptions()
options.rows = 32
options.multiplexing = 1
options.cols = 64
options.gpio_slowdown = 4
options.chain_length = 1
options.parallel = 1
options.hardware_mapping = 'regular'
options.brightness = 10
options.disable_hardware_pulsing = False

matrix = RGBMatrix(options = options)

#Create a thumbnail that fits the screen
image.thumbnail((matrix.width, matrix.height), Image.ANTIALIAS)

matrix.SetImage(image.convert('RGB'), 16, 0)

try:
    print("Press CTRL+C to stop")
    while True:
        time.sleep(100)
except KeyboardInterrupt:
    sys.exit(0)