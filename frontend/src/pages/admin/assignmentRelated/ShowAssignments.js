import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper} from '@mui/material';
//import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ShowAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  const fetchAssignments = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/assignments`);
      setAssignments(res.data);
    } catch (err) {
      console.error("Failed to fetch assignments:", err);
    }
  };

  // const handleDelete = async (id) => {
  //   const confirm = window.confirm("Are you sure you want to delete this assignment?");
  //   if (!confirm) return;

  //   try {
  //     await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/assignments/${id}`);
  //     // Refresh the list after deletion
  //     fetchAssignments();
  //   } catch (err) {
  //     console.error("Failed to delete assignment:", err);
  //     alert("Failed to delete. Please try again.");
  //   }
  // };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Assignment Notices
      </Typography>
      {assignments.map((assignment) => (
        <Paper key={assignment._id} sx={{ p: 2, mb: 2, position: 'relative' }}>
          <Typography variant="h6">{assignment.title}</Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            Uploaded by: {assignment.role} — {new Date(assignment.createdAt).toLocaleString()}
          </Typography>
          <Typography variant="body1">{assignment.description}</Typography>

          {/* <Tooltip title="Delete Assignment">
            <IconButton
              onClick={() => handleDelete(assignment._id)}
              sx={{ position: 'absolute', top: 8, right: 8 }}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip> */}
        </Paper>
      ))}
    </Box>
  );
};

export default ShowAssignments;
