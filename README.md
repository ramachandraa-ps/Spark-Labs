# SparkLabs Agent Platform - V1 Shell

This repository contains the foundational shell for the SparkLabs Agent Platform. It includes a Next.js frontend and a Python FastAPI backend, with a basic user authentication system.

## Prerequisites

- Node.js (v18 or later recommended)
- Python (v3.10 or later recommended)
- `pip` for Python package management
- `npm` for Node.js package management

## Project Structure

- `/frontend`: The Next.js web application.
- `/backend`: The Python microservices.
  - `/backend/agent_orchestrator`: The first service, handling user authentication.

## Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend/agent_orchestrator
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv env
   source env/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server:**
   The server will start on `http://localhost:8000`.
   ```bash
   uvicorn main:app --reload
   ```

## Frontend Setup

The frontend development environment has some known issues in certain sandboxed environments. The following steps include a workaround for a common `npm` installation problem.

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **(Important) Configure npm prefix:**
   Before installing, run this command to ensure packages are installed locally in the `node_modules` directory. This is a crucial step to avoid installation issues.
   ```bash
   npm config set prefix ''
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   The server will start on `http://localhost:3000`.
   ```bash
   npm run dev
   ```

## Running the Application

1. Open two terminal windows.
2. In the first terminal, start the backend server as described in the "Backend Setup" section.
3. In the second terminal, start the frontend server as described in the "Frontend Setup" section.
4. Open your browser and navigate to `http://localhost:3000` to use the application.
