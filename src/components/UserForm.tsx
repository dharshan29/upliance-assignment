import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveUserData } from "../store/userSlice";
// import { RootState } from "../store/store";

const UserForm = () => {
    const dispatch = useDispatch();
    // const userData = useSelector((state: RootState) => state.user.userData);

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
    });


    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            const hasUnsavedChanges = Object.values(formData).some(value => value.trim() !== "");
            if (hasUnsavedChanges) {
                e.preventDefault();
                e.returnValue = "";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(saveUserData(formData));
        setFormData({ name: "", address: "", email: "", phone: "" });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                border: "1px solid #00000021",
                borderRadius: "8px",
                padding: "16px",
                background: '#F1F1F15C',
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "300px",
                margin: "0 auto",
            }}
        >
            <Typography variant="h4" textAlign="center">
                User Data Form
            </Typography>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextField
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Save
            </Button>
        </Box>
    );
};

export default UserForm;
