
# 🐍 Flask Service

This directory houses the core web application, responsible for orchestrating the user interface, backend logic and third-party API integrations.

## 🛠️ Technical Stack
* Backend: Python / Flask

* Frontend: HTML & Tailwind CSS

* API Integration: Google Maps Geocoding API

* Client-Side Logic: Vanilla JavaScript

## 🔑 Key Features

* **🖌️ Modern UI**:
The interface is built using Tailwind CSS, a utility-first framework that ensures a responsive and lightweight design without the overhead of massive CSS files.

* **🗺️ Dynamic Geolocation Strategy**:
To visualize visitor data, I integrated the Google Maps API. Rather than displaying static data, the application processes visitor information and renders an interactive map where geographic markers are generated in real-time based on backend records(This project uses generated mock data; can be swapped for real data with proper access).


* **The Flask Docker Image**:
  Uses a slimmed-down Python base image to minimize the attack surface and keep the image size small.

* **Automation**:
The Dockerfile automates the installation of all dependencies via requirements.txt and sets up the environment for production.


## Workflow/Setup

* The Flask(webbapp) app communicates with redis_DB(my redis datbase servername in docker-compse file) via its default port. Access is strictly governed by default config,
handled via custom configurations that override default behavior see [DB/README.md](./DB/README.md) for more details.

* Decoupled Configuration (Environment Variables)
To keep the application logic separate from the infrastructure, all connection strings are managed via a .env file.

* Implementation(with .env file): Use the provided .env.example template to configure your local environment. Simply copy it to a new file named .env and update the values to match your specific setup
