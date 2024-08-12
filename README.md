# Bank Account Kata

### Project Architecture

Test application for bank account kata:

- **Backend**: Built with Node.js and Express, utilizing TypeScript for added type safety.
- **Frontend**: Crafted with React and TypeScript, styled with MUI for a seamless user experience.
- **Database**: Leveraging MongoDB Atlas and Mongoose for efficient data management.

---

## Development Setup

### Prerequisites

Before you begin, ensure you have the following installed:

1. **[Node.js](https://nodejs.org/en)** – The runtime environment for executing JavaScript on the server.
2. **[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)** – The package manager for managing dependencies.

### Technologies Used

- **Backend**: Node.js with Express (TypeScript)
- **Database**: MongoDB with Mongoose
- **Frontend**: React (TypeScript), MUI for styling

---

### Starting Project Using Docker

The project is containerized, making it easy to start:

1. **Replace DB URL**:
   - In the `docker-compose.yml` file, change `YOUR_MONGO_URI` to your MongoDB URI.

2. **Run the following command for Docker**:
   ```bash
   docker-compose up --build
