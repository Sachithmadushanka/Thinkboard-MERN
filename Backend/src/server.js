import express from 'express';
import notesRoutes from './routes/notesRouts.js';
import { connectDB} from './config/db.js';
import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js';
import cors from "cors"

dotenv.config();

const app = express();
const PORT= process.env.PORT || 5001;

app.use (cors({
  origin:"http://localhost:5173",
}
));

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);


connectDB().then(()=>{
    app.listen(PORT, () => {
    console.log('Server is running on port :',PORT);
  });
});




// mongodb+srv://jonimadushanka010414:jglEK2HefA5CGvNH@cluster0.m5vegxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0