import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs";
import { Box, Button, Container, TextField } from "@mui/material";
import { addUser } from "../../services/userService";
import { AddUserRequest } from "../../types/interfaces/ApiRequest";
import { AxiosError } from "axios";

interface AddUserFormProps {
    successCallback: (arg: unknown) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ successCallback }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddUserRequest>(); // Initialize react-hook-form

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // Function to handle form submission
    const onSubmit = async (data: AddUserRequest) => {
        // Encrypt password before sending to backend
        const hashedPassword = await bcrypt.hash(data.password, 10);
        setError(null);

        // Create user object
        const newUser = {
            name: data.name,
            email: data.email,
            password: hashedPassword, // Encrypted password
        };

        try {
            // Make a POST request to the backend
            const response = await addUser(newUser);
            // Notify parent component of new user addition
            if (successCallback) {
                successCallback(response);
            }
        } catch (err: unknown) {
            // Handle any errors, including server errors

            if (err instanceof AxiosError) {
                setError(
                    err.response?.data.error ||
                        "An error occurred while adding the user.",
                );
            } else {
                console.error("An unknown error occurred:", error);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message as ReactNode}
                />

                {/* Email Field */}
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Invalid email format",
                        },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message as ReactNode}
                />

                {/* Password Field */}
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message as ReactNode}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                {/* Submit Button */}
                <Box mt={2}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Add User"}
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default AddUserForm;
