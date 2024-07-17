const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({
  origin: ["https:/sb-frontend.vercel.app"],
  method: ["POST", "GET"],
  credentials: true
}));

mongoose.connect('mongodb+srv://jindalansh498:anshjindal2512@cluster0.eanq9ox.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// middleware to parse JSON 
app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//Resource 
const resourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  resourceType: String,
});

const Resource = mongoose.model('Resource', resourceSchema);

app.post('/resources', async (req, res) => {
  try {
    const { title, description, resourceType } = req.body;
    const newResource = new Resource({ title, description, resourceType });
    await newResource.save();
    res.status(201).json(newResource);
  } catch (error) {
    console.error('Error posting resource:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.get('/resources', async (req, res) => {
  try {
    const resources = await Resource.find(); 
    res.json(resources); 
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
