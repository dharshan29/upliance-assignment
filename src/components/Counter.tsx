
import { Button, Container, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

// Define props type for Counter
interface CounterProps {
    count: number;
  }

const Counter: React.FC<CounterProps> = ({ count }) => {
  const dispatch = useDispatch();
  
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Count: {count}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
};

export default Counter;
