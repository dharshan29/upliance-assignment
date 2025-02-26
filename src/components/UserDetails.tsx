import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData } from "../store/userSlice";
import { RootState } from "../store/store";

const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userData);

  if (!userData) {
    return (
      <Typography variant="h6" textAlign="center" mt={4}>
        No user data available. Please fill the form to save data.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        border: "1px solid #00000021",
        borderRadius: "8px",
        padding: "16px",
        background: '#F1F1F15C',
      }}
    >
      <Typography variant="h5" mb={2}>
        Saved User Details
      </Typography>
      <Typography><strong>Name:</strong> {userData.name}</Typography>
      <Typography><strong>Address:</strong> {userData.address}</Typography>
      <Typography><strong>Email:</strong> {userData.email}</Typography>
      <Typography><strong>Phone:</strong> {userData.phone}</Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={() => dispatch(clearUserData())}
      >
        Clear Data
      </Button>
    </Box>
  );
};

export default UserDetails;
