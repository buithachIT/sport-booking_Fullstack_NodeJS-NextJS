# Sport Booking System

A full-stack application for booking sports facilities, built with Next.js and Node.js.

## Project Structure

The project consists of two main parts:

- `sport-booking-frontend`: Next.js frontend application
- `sport-booking-backend`: Node.js backend server

## Frontend (sport-booking-frontend)

Built with:

- Next.js 15.3.2
- React 19
- TypeScript
- TailwindCSS
- Axios for API calls

### Getting Started

1. Navigate to the frontend directory:

```bash
cd sport-booking-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.development` file with:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
```

4. Run the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Backend (sport-booking-backend)

Built with:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- bcrypt for password hashing

### Getting Started

1. Navigate to the backend directory:

```bash
cd sport-booking-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your configuration (see `.env.example` for reference)

4. Run the development server:

```bash
npm run dev
```

The backend will be available at `http://localhost:8080`

## Features

- User authentication
- Sport facility booking
- API endpoints for managing bookings
- Modern UI with TailwindCSS

## Development

- Frontend uses Next.js with TypeScript for type safety
- Backend uses Express.js with MongoDB for data persistence
- API communication handled through Axios
- Environment variables used for configuration

## License

ISC License
