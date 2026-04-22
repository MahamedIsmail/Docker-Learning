# Hello_Flask Project

This project marks my first deep dive into containerization. The goal was simple: build a landing page that successfully displays the current version of an SQL database, proving a successful connection between two isolated services.

### 📈 The Journey: Docker vs. Docker Compose
The "Manual" Phase :
Before using Compose, I learned to build and run containers using standard Docker CLI commands. This phase was crucial for learning "the truth" about container management:

The Struggle: While debugging individual containers was straightforward, managing the infrastructure was a massive drag.

The Maintenance Trap: Manually setting up networks, linking containers, and rebuilding the entire environment after every small change was repetitive and error-prone.

The Docker Compose Revelation
Implementing Docker Compose changed everything. I realized that if managing just two containers manually was a pain, doing it for 5 or 10 would be impossible.

Efficiency: Compose turned a series of complex commands into a single docker-compose up.

Scalability: It automated the network and volume setup, allowing me to focus on code rather than infrastructure maintenance.
