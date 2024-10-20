import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { register } from "../actions/userActions";
import FormContainer from "../Components/FormContainer";

import {
  Typography,
  Avatar,
  Box,
  TextField,
  Button,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}

function RegisterPage() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("reader"); // Default user type is reader
  const [message, setMessage] = useState("");
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      // Dispatch register action with user type
      dispatch(register(name, email, password, userType));
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div style={{
      width: '98.9vw',
      height: '147vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '47vh'
    }}>
    <FormContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Avatar sx={{ m: 1, bgcolor: "#a85488" }}>
            <PersonAddAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "#a85488" }}>
            Sign Up
          </Typography>
          {error && (
            <Message
              severity="error"
              variant="filled"
              sx={{ backgroundColor: "#f3969a" }}
            >
              {message}
            </Message>
          )}
          <Box component="form" onSubmit={submitHandler} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#a85488 !important",
                  backgroundColor: "#fff !important",
                },
                "& label.Mui-focused": {
                  color: "#a85488 !important", // Change label color when focused
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a85488 !important", // Change border color when focused
                },
                "& input": {
                  color: "black !important", // Change input text color
                  borderColor: "#a85488 !important", // Change border color when focused
                },
                "& .MuiInputLabel-root": {
                  color: "#a85488 !important", // Change label color
                  borderColor: "#a85488 !important", // Change border color when focused
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#a85488 !important", // Change border color on hover
                  },
                "& .MuiOutlinedInput-root:active": {
                  color: "white !important",
                  borderColor: "#a85488 !important",
                },
                "& .input": {
                  color: "white !important",
                  borderColor: "#a85488 !important",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#a85488 !important",
                  backgroundColor: "#fff !important",
                },
                "& label.Mui-focused": {
                  color: "#a85488 !important", // Change label color when focused
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a85488 !important", // Change border color when focused
                },
                "& input": {
                  color: "black !important", // Change input text color
                  borderColor: "#a85488 !important", // Change border color when focused
                },
                "& .MuiInputLabel-root": {
                  color: "#a85488 !important", // Change label color
                  borderColor: "#a85488 !important", // Change border color when focused
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#a85488 !important", // Change border color on hover
                  },
                "& .MuiOutlinedInput-root:active": {
                  color: "white !important",
                  borderColor: "#a85488 !important",
                },
                "& .input": {
                  color: "white !important",
                  borderColor: "#a85488 !important",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#a85488 !important",
                  backgroundColor: "#fff !important",
                },
                "& label.Mui-focused": {
                  color: "#a85488 !important", // Change label color when focused
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a85488 !important", // Change border color when focused
                },
                "& input": {
                  color: "black !important", // Change input text color
                },
                "& .MuiInputLabel-root": {
                  color: "#a85488 !important", // Change label color
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#a85488 !important", // Change border color on hover
                  },
                "& .MuiOutlinedInput-root:active": {
                  color: "white !important",
                  borderColor: "#a85488 !important",
                },
                "& .input": {
                  color: "white !important",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              autoComplete="confirmPassword"
              autoFocus
              type={showConfirmPassword ? "text" : "password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#a85488 !important",
                  backgroundColor: "#fff !important",
                },
                "& label.Mui-focused": {
                  color: "#a85488 !important", // Change label color when focused
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a85488 !important", // Change border color when focused
                },
                "& input": {
                  color: "black !important", // Change input text color
                },
                "& .MuiInputLabel-root": {
                  color: "#a85488 !important", // Change label color
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#a85488 !important", // Change border color on hover
                  },
                "& .MuiOutlinedInput-root:active": {
                  color: "white !important",
                  borderColor: "#a85488 !important",
                },
                "& .input": {
                  color: "white !important",
                },
              }}
            />

            {/* <Form.Group controlId="userType" style={{ marginTop: "10px" }}>
              <Form.Label
                style={{
                  color: "#a85488",
                  fontFamily: "Helvetica",
                  fontSize: "1rem",
                }}
              >
                User Type *
              </Form.Label>
              <Form.Control
                as="select"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="styled-select"
              >
                <option value="reader">Reader</option>
                <option value="creator">Creator</option>
              </Form.Control>
            </Form.Group> */}

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                mt: 3,
                mb: 2,
                color: "white",
                borderColor: "#cf8083 !important",
                backgroundColor: "#f3969a",
                "&:hover": {
                  backgroundColor: "#cf8083",
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Typography
                  component={Link}
                  to={redirect ? `/login?redirect=${redirect}` : "/login"}
                  sx={{ color: "#a85488" }}
                >
                  {"Already have an account? Sign In"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </FormContainer>
    </div>
  );
}

export default RegisterPage;
