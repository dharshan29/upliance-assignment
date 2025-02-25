import Counter from "../components/Counter";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useSpring, animated } from "@react-spring/web";
import UserForm from "../components/UserForm";
import { Box, Stack } from "@mui/material";
import TextEditor from "../components/RichTextEditor";

const Home = () => {
    const count = useSelector((state: RootState) => state.counter.count);

    // Spring animation for vertical fill
    const styles = useSpring({
        height: `${Math.min(count * 10, 100)}%`, // Cap at 100%
        config: { tension: 170, friction: 26 },
    });

    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {/* Animated Background Fill */}
            <animated.div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#4FD132",
                    ...styles,
                    zIndex: -1, 
                    transition: "height 0.1s cubic-bezier(0.42, 0, 0.58, 1)",
                }}
            />

            {/* Main Content */}
            <Stack
                sx={{
                    zIndex: 1,
                    color: "#000",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "16px",
                }}
            >
                <Box sx={{ flex: {xs: "1" ,md: "1 1 40%"}, minWidth: "300px" }}>
                    <Counter count={count} />
                </Box>
                
                <Box sx={{ flex: {xs: "1" ,md: "1 1 40%"}, minWidth: "300px" }}>
                    <TextEditor />
                </Box>

                <Box sx={{ flex: "1 1 100%", minWidth: "300px" }}>
                    <UserForm />
                </Box>
            </Stack>
        </div>
    );
};

export default Home;
