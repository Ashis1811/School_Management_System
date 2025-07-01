import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';

const UploadAssignment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.userInfo); // Get logged-in user info

  const handleUpload = async () => {
    if (!title || !description) {
      return alert('Please fill in all fields.');
    }

    if (!user || !user._id || !user.role) {
      return alert('User information missing. Cannot upload.');
    }

    setLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/assignments`, {
        title,
        description,
        role: user.role,         // "Admin" or "Teacher"
        uploadedBy: user._id     // backend expects an identifier
      });

      alert(' Assignment uploaded successfully!');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Upload failed:', error);
      alert(' Upload failed. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h5" gutterBottom>
        Upload Assignment
      </Typography>
      <TextField
        label="Assignment Title"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description"
        fullWidth
        margin="normal"
        multiline
        rows={6}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? 'Submitting...' : 'Submit Assignment'}
      </Button>
    </Box>
  );
};

export default UploadAssignment;
