import { CameraAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [registerFormData, setRegisterFormData] = useState({
    avatar: null,
    name: "",
    bio: "",
    username: "",
    password: "",
  });

  const handleLoginData = (e: any) => {
    setLoginFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterData = (e: any) => {
    setRegisterFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAvatar = (e: any) => {
    setRegisterFormData((prev) => ({ ...prev, avatar: e.target.files[0] }));
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(loginFormData);
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    console.log(registerFormData);
  };
  return (
    <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <div>
            <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>
              Login
            </Typography>
            <form style={{ width: "100%" }} onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                name="username"
                label="Username"
                margin="normal"
                variant="outlined"
                value={loginFormData.username}
                onChange={handleLoginData}
              />
              <TextField
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={loginFormData.password}
                onChange={handleLoginData}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Typography sx={{ mt: 2, textAlign: "center" }}>OR</Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                Register
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>
              Register
            </Typography>
            <form style={{ width: "100%" }} onSubmit={handleRegister}>
              <Stack
                position="relative"
                margin="auto"
                alignItems="center"
                justifyContent="center"
                width="100px"
                height="100px"
              >
                <Avatar
                  sx={{ width: 100, height: 100, objectFit: "contain" }}
                  src={
                    registerFormData.avatar
                      ? URL.createObjectURL(registerFormData.avatar)
                      : ""
                  }
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 33,
                    right: 33,
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": { bgcolor: "rgba(0,0,0,0.7)" },
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                  component={"label"}
                >
                  <CameraAlt />
                  <VisuallyHiddenInput type="file" onChange={handleAvatar} />
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                margin="normal"
                variant="outlined"
                value={registerFormData.name}
                onChange={handleRegisterData}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                name="bio"
                margin="normal"
                variant="outlined"
                value={registerFormData.bio}
                onChange={handleRegisterData}
              />
              <TextField
                required
                fullWidth
                label="Username"
                name="username"
                margin="normal"
                variant="outlined"
                value={registerFormData.username}
                onChange={handleRegisterData}
              />
              <TextField
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={registerFormData.password}
                onChange={handleRegisterData}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Register
              </Button>
              <Typography sx={{ mt: 2, textAlign: "center" }}>OR</Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                Login
              </Button>
            </form>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
