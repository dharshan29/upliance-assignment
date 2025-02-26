import Counter from "../components/Counter";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useSpring, animated } from "@react-spring/web";
import UserForm from "../components/UserForm";
import { Box, Stack } from "@mui/material";
import TextEditor from "../components/RichTextEditor";
import UserDetails from "../components/UserDetails";

const Home = () => {
    const count = useSelector((state: RootState) => state.counter.count);


    const styles = useSpring({
        height: `${Math.min(count * 10, 100)}%`,
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
            <Box
                sx={{
                    height: "100%",
                    overflowY: "scroll"
                }}
            >
                <Stack
                    sx={{
                        zIndex: 1,
                        color: "#000",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "16px",
                        width: "90%",
                        margin: "auto"
                    }}
                >
                    <Stack sx={{ flex: {xs: "1" ,md: "1 1 40%"}, mx: {xs: 0, md: "20px"}, my: "20px", minWidth: "300px", justifyContent: "center" }}>
                        <Counter count={count} />
                    </Stack>
                    
                    <Box sx={{ flex: {xs: "1" ,md: "1 1 40%"}, mx: {xs: 0, md: "20px"}, my: "20px", minWidth: "300px" }}>
                        <TextEditor />
                    </Box>

                    <Box sx={{ flex: "1 1 40%", minWidth: "300px", mx: {xs: 0, md: "20px"}, my: "20px" }}>
                        <UserForm />
                    </Box>

                    <Box sx={{ flex: "1 1 40%", minWidth: "300px", mx: {xs: 0, md: "20px"}, my: "20px" }}>
                        <UserDetails />
                    </Box>
                </Stack>
            </Box>
        </div>
    );
};

export default Home;
