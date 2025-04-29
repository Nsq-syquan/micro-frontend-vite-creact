# Micro Frontends with Vite, React, and Shared Router

This project demonstrates a Micro Frontend architecture using two separate Vite + React applications:

- **remote-app**: Exposes routes/components via Module Federation.
- **host-app**: Loads remote routes dynamically and uses a shared router configuration.

Both projects share a router layout via a common `shared-router` package or module.

---

## 🗂️ Project Structure

