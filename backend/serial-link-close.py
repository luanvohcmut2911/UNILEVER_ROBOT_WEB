import serial
import time

ser = serial.Serial("/dev/ttyACM0", 9600, timeout=1)

ser.setDTR(False)
time.sleep(1)
ser.flushInput()
ser.setDTR(True)
time.sleep(2)

while True:

    print('Telling the Arduino to start blinking...')
    ser.write(b'0')

    # read to get the acknowledgement from the Arduino
    while True:
        ack = ser.read()
        if ack == b'A':
            break
    print('Arduino sent back %s' % ack)

    