import cors from 'cors';

// Add CORS middleware to your API routes
const corsMiddleware = cors({
    origin: 'https://budget-beta-ten.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
});

export default corsMiddleware