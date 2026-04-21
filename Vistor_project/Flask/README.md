
# 🐍 Flask Service Layer

This directory houses the core web application, responsible for orchestrating the user interface, backend logic, and third-party API integrations.

🛠️ Technical Stack
Backend: Python / Flask

Frontend: HTML5 & Tailwind CSS

API Integration: Google Maps Geocoding API

Client-Side Logic: Vanilla JavaScript

🔑 Key Features
🖌️ Modern UI & Navigation
The interface is built using Tailwind CSS, a utility-first framework that ensures a responsive and lightweight design without the overhead of massive CSS files. I implemented a centralized Navigation Bar to provide a seamless user experience, allowing for efficient state transitions between the dashboard and informational pages.

🗺️ Dynamic Geolocation Strategy
To visualize visitor data, I integrated the Google Maps API. Rather than displaying static data, the application processes visitor information and renders an interactive map where geographic markers are generated in real-time based on backend records.


The Flask Docker Image
Base Image: Uses a slimmed-down Python base image to minimize the attack surface and keep the image size small.

Automation: The Dockerfile automates the installation of all dependencies via requirements.txt and sets up the environment for production.

Container Identity: Within the docker-compose.yml stack, this service is defined as flask_app, allowing it to be easily targeted by the Nginx Load Balancer.


Service Connectivity (The Bridge)
The Flask application communicates with the Redis database through a secure internal Docker Network. This is handled using "Service Discovery":

Network Isolation: Both the Flask and Redis containers reside on a private internal network. This ensures the database is never exposed to the public internet, adding a critical layer of security.

Service Discovery: Instead of using hardcoded or unstable IP addresses, the Flask app connects to the database using the Service Name (e.g., redis or db) as the hostname. Docker’s internal DNS automatically resolves this to the correct container.

Environment Variables: Connection strings are managed via a .env file (e.g., REDIS_HOST=db). This allows us to change database settings instantly without modifying a single line of application code.
