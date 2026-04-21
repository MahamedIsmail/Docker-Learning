from flask import Flask,render_template
import geocoder
import redis 

import os

from faker import Faker
from faker.providers import internet
fake = Faker()
fake.add_provider(internet)
   

Redis_host = os.getenv('Redis_host')
Redis_port = os.getenv('Redis_port')
Message = os.getenv('MESSAGE')
Binding_IP=os.getenv('Binding_IP')
APP_PORT=os.getenv('APP_PORT')
Maps_API_KEY=os.getenv('Maps_API_KEY')
app=Flask(__name__)
r = redis.Redis(host=Redis_host, port=Redis_port, decode_responses=True,socket_connect_timeout=1)
def get_random_city():
    ip = fake.ipv4_public()
    if ip:
     g = geocoder.ip(ip)
     g.city
     
    else:
        ip = '1.1.1.1'
        g = geocoder.ip(ip) 
    return  ip, g.city,g.latlng



@app.route('/')
def home():
    raw_count = r.get('visitors')
    count = int(raw_count) if raw_count else 0
    
    growth = count * 12.5
  
    return render_template('home.html', growth=growth+1) 

@app.route('/count')
def count():
    value =r.incr('visitors')
    data=get_random_city()
    return render_template('count.html' ,  count=value, Maps_API_KEY=Maps_API_KEY,lat=data[2][0], lng=data[2][1], city=data[1],ip=data[0])
    #return render_template('count.html' ,  count=value, Maps_API_KEY=Maps_API_KEY,lat=get_random_city()[2][0], lng=get_random_city()[2][1], city=get_random_city()[1],ip=get_random_city()[0])

@app.route('/about')
def about():
    return render_template('about.html')


if __name__ == '__main__':
 app.run(host=Binding_IP, port=APP_PORT,debug=True)
  
    