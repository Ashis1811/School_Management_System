import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentAssignmentSubmit = () => {
  const [assignments, setAssignments] = useState([]);
  const [assignmentId, setAssignmentId] = useState('');
  const [studentId, setStudentId] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/assignments')
      .then((res) => setAssignments(res.data))
      .catch((err) => console.log(err));
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert('Please upload a document');

    const formData = new FormData();
    formData.append('assignmentId', assignmentId);
    formData.append('studentId', studentId);
    formData.append('file', file);


    try {
      await axios.post('http://localhost:5000/api/submissions/upload', formData);
      alert('Assignment submitted!');
      setAssignmentId('');
      setStudentId('');
      setFile(null);
    } catch (error) {
      console.error(error);
      alert('Failed to submit assignment.');
    }
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Assignment (Student)</h3>
      <select
        value={assignmentId}
        onChange={(e) => setAssignmentId(e.target.value)}
        required
      >
        <option value="">Select Assignment</option>
        {assignments.map((a) => (
          <option key={a._id} value={a._id}>
            {a.title}
          </option>
        ))}
      </select>
      <br />
      <input
        type="text"
        placeholder="Your Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        required
      />
      <br />
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <br />
      <button type="submit">Upload</button>
    </form>
  );
};


export default StudentAssignmentSubmit;
