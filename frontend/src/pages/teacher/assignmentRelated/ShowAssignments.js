import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import axios from 'axios';


const ShowAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/assignments`);
        const teacherAssignments = res.data.filter(
          (assignment) => assignment.role === 'Teacher'
        );
        setAssignments(teacherAssignments);
      } catch (err) {
        console.error("Failed to fetch teacher assignments:", err);
      }
    };

    fetchAssignments();
  }, []);

  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Teacher Assignments
      </Typography>
      {assignments.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No assignments found.
        </Typography>
      ) : (
        assignments.map((assignment) => (
          <Paper key={assignment._id} sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">{assignment.title}</Typography>
            <Typography variant="body1">{assignment.description}</Typography>
            <Typography variant="caption">By: {assignment.uploadedBy} ({assignment.role}) — {new Date(assignment.createdAt).toLocaleString()}
              {new Date(assignment.createdAt).toLocaleString()}</Typography>
          </Paper>
        ))
      )}
    </Box>
  );
};


export default ShowAssignments;
