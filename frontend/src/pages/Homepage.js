import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

// 🔹 Features Array
const features = [
  {
    icon: "🔐",
    title: "Role-Based Login",
    description: "Secure login portals for Admin, Teacher, and Student with JWT and Google Sign-In support.",
  },
  {
    icon: "🧑‍🏫",
    title: "Teacher & Student Management",
    description: "Add, view, edit, or delete students and teachers. Assign teachers to specific classes and subjects.",
  },
  {
    icon: "📚",
    title: "Subject & Class Assignment",
    description: "Create classes and subjects, and automatically associate them with students and teachers.",
  },
  {
    icon: "📂",
    title: "Smart Assignment Module",
    description: "Upload assignments (PDF/DOC) and track student submissions efficiently.",
  },
  {
    icon: "📊",
    title: "Attendance Tracking",
    description: "View subject-wise attendance using interactive tables and charts.",
  },
  {
    icon: "📢",
    title: "Notices & Complaints",
    description: "Admins publish notices; students raise complaints – streamlining school communication.",
  },
];

const Homepage = () => {
  return (
    <StyledContainer>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
          <Box sx={{ width: '95%', maxWidth: '700px', height: '90%' }}>
            <img
              src={Students}
              alt="students"
              style={{
                width: '95%',
                height: '100%',
                objectFit: 'contain',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledPaper>
            <StyledTitle>
              Welcome to <br />
              School Management <br />
              System
            </StyledTitle>
            <StyledText>
              Effortlessly manage school operations, streamline class and faculty organization, and simplify student enrollment.
              Track attendance, monitor academic performance, and deliver timely feedback.
              Access student records, view exam results, and foster seamless communication — all in one place.
            </StyledText>
            <StyledBox>
              <StyledLink to="/choose">
                <LightPurpleButton variant="contained" fullWidth>
                  Login
                </LightPurpleButton>
                </StyledLink>
              <StyledText>
                Don't have an account?{' '}
                <Link to="/Adminregister" style={{ color: "rgb(38, 11, 143)" }}>
                  Sign up
                </Link>
              </StyledText>
            </StyledBox>
          </StyledPaper>
        </Grid>
      </Grid>

      {/* 🔹 Feature Section */}
      <Box sx={{ backgroundColor: "#f3f3f3", py: 6 }}>
        <FeatureSection>
            <StyledFeaturesTitle>✨ Key Features</StyledFeaturesTitle>
            <Grid container spacing={3} justifyContent="center" sx={{ px: 4 }}>
            {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
        <FeatureBox>
          <FeatureIcon>{feature.icon}</FeatureIcon>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
        </FeatureBox>
      </Grid>
    ))}
  </Grid>
</FeatureSection>
      </Box>
    </StyledContainer>
  );
};

export default Homepage;

// 🔹 Styled Components
const StyledContainer = styled(Container)`
  background-color: rgb(184, 209, 93);
  padding: 0;
  max-width: 100% !important;
`;

const StyledPaper = styled.div`
  padding: 40px 24px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  letter-spacing: normal;
  line-height: 1.2;
`;

const StyledText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 1.6;
  text-align: left;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const StyledOutlineButton = styled(Button)`
  margin-top: 8px;
  border-color: #6c8cff !important;
  color: #6c8cff !important;

  &:hover {
    background-color: #6c8cff !important;
    color: #fff !important;
  }
`;

const FeatureSection = styled(Box)`
  background:rgb(88, 224, 212);
  padding: 64px 24px;
  color: black;
`;

const StyledFeaturesTitle = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const FeatureBox = styled.div`
  background-color:rgb(113, 88, 52);
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  text-align: center;
  transition: all 0.3s ease-in-out;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    background-color: #282828;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #dcdcdc;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: #b0b0b0;
  line-height: 1.5;
`;