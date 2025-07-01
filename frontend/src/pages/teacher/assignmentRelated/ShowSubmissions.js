// src/pages/assignmentRelated/ShowSubmissions.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper, Typography, Button } from '@mui/material';

const ShowSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/submissions/all`);
        setSubmissions(res.data);
      } catch (err) {
        console.error("Error fetching submissions", err);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Assignment Submissions
      </Typography>
      {submissions.map((submission) => (
        <Paper key={submission._id} sx={{ p: 2, mb: 2 }}>
  <Typography variant="h6">{submission.assignmentTitle}</Typography>
  <Typography variant="body2" color="textSecondary">
    Submitted By: {submission.studentName}
  </Typography>
  <Typography variant="body2" color="textSecondary">
    Submitted At: {submission.submittedAt ? new Date(submission.submittedAt).toLocaleString() : 'N/A'}
  </Typography>

  <Button
  variant="outlined"
  color="primary"
  href={`${process.env.REACT_APP_BASE_URL}/uploads/${submission.filePath.split('/').pop()}`}
  target="_blank"
  rel="noopener noreferrer"
>
  View Submitted File
</Button>

</Paper>

      ))}
    </Box>
  );
};

export default ShowSubmissions;
