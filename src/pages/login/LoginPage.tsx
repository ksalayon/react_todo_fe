import { Box, Button, Container, TextField } from "@mui/material";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginRequest } from "../../types/interfaces/ApiRequest";
import { authenticate } from "../../services/authService";
import { AxiosError } from "axios";

const LoginPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginRequest>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const onSubmit = async (data: LoginRequest) => {
        // Encrypt password before sending to backend
        setError(null);

        try {
            // Make a POST request to the backend
            const response = await authenticate(data);
        } catch (err: unknown) {
            // Handle any errors, including server errors
            if (err instanceof AxiosError) {
                setError(err.response?.data.error || "Login error.");
            } else {
                setError("Unknown error");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                    helperText={errors.email?.message as ReactNode}
                />
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    {...register("password", {
                        required: "Password is required",
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message as ReactNode}
                />
                <Box mt={2}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Login"}
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default LoginPage;
