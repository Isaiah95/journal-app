import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const app = express();


app.use(express.json());
app.use(cors({orgin: 'http://localhost:3000'}));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  app.post('/api/entries' , (req, res) => {
    const { title, content } = req.body;

    const newEntry = {
      id: uuidv4(),
      title: title,
      content: content,
      timestamp: new Date().toISOString()
    };

    console.log('New entry:', newEntry);

    res.status(200).json({message: 'Entry received!'})
    

   
  })
