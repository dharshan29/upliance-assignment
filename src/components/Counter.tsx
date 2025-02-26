
import { Button, Container, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

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
        border: "1px solid #00000021",
        borderRadius: "8px",
        padding: "16px",
        background: '#F1F1F15C',
        height: {md: "300px"}
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
            +
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </Box>
    </Container>
  );
};

export default Counter;
