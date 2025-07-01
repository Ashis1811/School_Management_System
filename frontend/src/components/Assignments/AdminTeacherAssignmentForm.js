
import React, { useState } from 'react';
import axios from 'axios';


const AdminTeacherAssignmentForm = () => {
  const [assignment, setAssignment] = useState({
    title: '',
    description: '',
    uploadedBy: '',
    role: '', // Admin or Teacher
  });


  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/assignments/create', assignment);
      alert(' Assignment created successfully!');
      setAssignment({ title: '', description: '', uploadedBy: '', role: '' });
    } catch (error) {
      console.error(error);
      alert(' Failed to create assignment.');
    }
  };


  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Create Assignment (Admin/Teacher)</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={assignment.title}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={assignment.description}
        onChange={handleChange}
        required
        rows={6}
        style={styles.textarea}
      />

      <input
        type="text"
        name="uploadedBy"
        placeholder="Your Name"
        value={assignment.uploadedBy}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <select
        name="role"
        value={assignment.role}
        onChange={handleChange}
        required
        style={styles.select}
      >
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Teacher">Teacher</option>
      </select>

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};


const styles = {
  form: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    backgroundColor: '#fff'
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '22px'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical'
  },
  select: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};


export default AdminTeacherAssignmentForm;
