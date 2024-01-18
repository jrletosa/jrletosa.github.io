const google = require('googleapis');
const drive = google.drive({ version: 'v3' });
const scope = 'https://www.googleapis.com/auth/drive';
const fileId = '[FILE_ID]'; // Replace with the actual file ID

const uploadRequest = {
  resource: {
    id: fileId,
    parents: ['[PARENT_ID]'], // Replace with the ID of the parent folder
    mimeType: 'image/jpeg',
  },
  media: {
    mimeType: 'image/jpeg',
    data: fileData, // Replace with the image data in base64 format
  },
};

drive.files.update(uploadRequest)
  .then(response => {
    console.log('Image uploaded successfully');
  })
  .catch(error => {
    console.error('Error uploading image:', error);
  });
