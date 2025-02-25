// src/pages/Login.tsx
import { Button, Card, CardContent, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebaseConfig";
// import backgroundImage from "../assets/background.jpg";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user)
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      }
    } catch (error) {
      console.error("Google login failed", error);
    }
  };


  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            padding: 4,
            boxShadow: 3,
            borderRadius: 2,
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Sign in to Continue
            </Typography>
            <Box mt={4} display="flex" justifyContent="center">
              <Button
                variant="contained"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
                sx={{
                  backgroundColor: "#4285F4",
                  color: "#fff",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#357ae8",
                  },
                }}
              >
                Login with Google
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
