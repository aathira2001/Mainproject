#pendind to configure gps module and camera module
import RPi.GPIO as gpio
import pyrebase
import Adafruit_DHT
import time
import datetime
import sys

#connection established session start
firebaseConfig = {
  "apiKey": "AIzaSyBlS0mE8sbWgxFylFepeIN2fMQ6NtnGxjU",
  "authDomain": "vacctrac-ec9b4.firebaseapp.com",
  "databaseURL": "https://vacctrac-ec9b4-default-rtdb.firebaseio.com",
  "projectId": "vacctrac-ec9b4",
  "storageBucket": "vacctrac-ec9b4.appspot.com",
  "messagingSenderId": "210962153093",
  "appId": "1:210962153093:web:52fdde6d0784bd0e38f3ec",
  "measurementId": "G-34Q934DEBH"
}
#connection established session end 

firebase = pyrebase.initialize_app(firebaseConfig)
database=firebase.database()
gpio.setwarnings(False)
gpio.setmode(gpio.BOARD)

gpio.setup(12,gpio.IN)
#gpio.output(3,gpio.HIGH)
database.child("project data")
data = {"Ir":None,"temp":None}
#database.set(data)
while(1):
    try:
        sensorstatus=gpio.input(12)
        
        humidity,temperature=Adafruit_DHT.read_retry(11,2)
        database.child("project data").update({"Ir":sensorstatus,"temp":temperature})
        print(temperature)
        time.sleep(2)
        if gpio.input(12)==0:
            print(gpio.input(12)," present\n")
        else:
        
       print(gpio.input(12)," Absent\n")
    except:
        continue




