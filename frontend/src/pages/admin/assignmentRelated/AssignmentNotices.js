import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Paper } from '@mui/material';

const AssignmentNotices = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/assignments`);
        setAssignments(res.data);
      } catch (error) {
        console.error('Failed to load assignments', error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Typography variant="h5" gutterBottom>
        Assignment Notices
      </Typography>

      {assignments.length === 0 ? (
        <Typography>No assignments uploaded yet.</Typography>
      ) : (
        assignments.map((assignment) => (
          <Paper key={assignment._id} sx={{ p: 2, mb: 2, background: '#f5f5f5' }}>
            <Typography variant="h6">{assignment.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              Uploaded by: {assignment.uploadedBy} ({assignment.role}) — {new Date(assignment.createdAt).toLocaleString()}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {assignment.description}
            </Typography>
          </Paper>
        ))
      )}
    </Box>
  );
};

export default AssignmentNotices;
