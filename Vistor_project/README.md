# 📍 Visitor Intelligence & Geo-Location System

**Purpose:** A high-performance web application designed to capture real-time visitor data, resolve geographical coordinates via the **Google Maps Geocoding API**, and visualize location-based insights through a distributed architecture.

---

## 🏗 System Architecture
The project is built with a microservice mindset, utilizing a decoupled and scalable directory structure:

### 🐍 [Flask Application](./Vistor_project/Flask)
* **The Engine:** Handles the core logic, frontend rendering, and secure communication with Google Cloud APIs.
* **Visitor Logic:** Processes incoming headers to extract visitor signatures and trigger location lookups.

### 🔴 [Redis High-Performance Store](./Vistor_project/DB)
* **Storage:** A custom-built, lightweight Redis instance for ultra-fast, persistent logging of visitor data.
* **Reliability:** Configured with disk-persistence to ensure data survives container restarts.

### ⚖️ [Nginx Load Balancer](./Vistor_project/Nginx)
* **Traffic Management:** Acts as a reverse proxy and load balancer to distribute real-time traffic.
* **Strategy:** Implements a **Round-Robin** algorithm in the configuration to ensure optimal resource utilization and high availability.

---

## 🔍 Deep Dives
For granular details regarding API implementations, security configurations, or custom database builds, please refer to the dedicated documentation in each subdirectory:

* **App Logic & API:** [Flask README](./Vistor_project/Flask/README.md)
* **Database & Persistence:** [DB README](./Vistor_project/DB/README.md)

---
*Built with focus on Scalability, Security, and Minimal Attack Surfaces.*
