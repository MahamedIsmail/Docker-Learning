
# Redis  


Custom Redis 8.0.0 built from source for better control and smaller image size.

### **Build Strategy (Multi-Stage Docker)**

* **Builder Stage(1):** Ubuntu 20.04 with GCC & CMake
* **Process:** Compiles Redis 8.0.0 from source
* **Optimization:** Uses all CPU cores for faster builds
* **Extra:** TLS enabled for secure connections

### **Stage 2: The Production Image (ProductionStage)**

**Goal: Minimal Attack Surface.**

**Result: I extracted only the final redis-server binary from the Builder stage.**

**Benefit: The production image does not contain compilers, source code, or build tools, making it significantly smaller and more secure.**

---
### Config & Networking 

* Access (bind 0.0.0.0)
Allows Redis to accept connections from other containers on the Docker network, so the Flask app can connect easily via service name.

* Dev Mode (protected-mode no):
Disables strict protection to simplify communication between services during development, avoiding extra setup like authentication.

* Persistence (save 900 1):
Redis saves data to disk every 15 minutes if at least one change occurs, helping keep data safe across container restarts.

