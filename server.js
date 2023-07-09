const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const publicFolderPath = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(publicFolderPath));

// Route for serving the object data as JSON
app.get('/data', (req, res) => {
  // Read the contents of the '/public' folder
  fs.readdir(publicFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Filter out only the directories
    const directories = files.filter(file =>
      fs.statSync(path.join(publicFolderPath, file)).isDirectory()
    );

    // Create an array of objects with folder name, link, and index
    const links = directories.map((directory, index) => ({
      folderName: directory,
      link: `/${directory.toLowerCase()}`,
      index: index,
    }));

    // Send the links data as JSON response
    res.json({ links });
  });
});


// Route for serving the index.html file
app.get('/', (req, res) => {
  const indexPath = path.join(publicFolderPath, 'index.html');
  res.sendFile(indexPath);
});

// Start the server
const port = 80;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
