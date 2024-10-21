import React, { useState, useEffect } from "react";

import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
  redirect,
} from "react-router-dom";

import { Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import FormContainer from "../Components/FormContainer";

import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}

function LoginPage() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, dispatch, redirect, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        width: "98.9vw",
        height: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80vh",
      }}
    >
      <FormContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Avatar sx={{ m: 1, bgcolor: "#a85488" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#a85488" }}>
              Sign in
            </Typography>
            {error && (
              <Message
                severity="error"
                variant="filled"
                sx={{ backgroundColor: "#f3969a" }}
              >
                {error.detail}
              </Message>
            )}
            <Box component="form" onSubmit={submitHandler} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
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
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
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

              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    sx={{
                      color: "#a85488", // Default color of the checkbox
                      "&.Mui-checked": {
                        color: "#a85488", // Color of the checkbox when checked
                      },
                    }}
                  />
                }
                label="Remember me"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#a85488",
                  },
                }}
              />

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
                Log In
              </Button>
              <Grid container>
                <Grid item>
                  <Typography
                    component={Link}
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                    sx={{ color: "#a85488" }}
                  >
                    {"Don't have an account? Sign Up"}
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

export default LoginPage;
