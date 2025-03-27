import { Box, Container, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { SignupRequest } from "../../types/interfaces/ApiRequest";
import { ReactNode } from "react";

const SignupPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupRequest>();

    const onSubmit = async (): Promise<boolean> => {
        return true;
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message as ReactNode}
                />
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                    helperText={errors.email?.message as ReactNode}
                />
                <TextField
                    label="Confirm Email"
                    fullWidth
                    margin="normal"
                    {...register("confirm_email", {
                        required: "Confirm Email",
                    })}
                    error={!!errors.confirm_email}
                    helperText={errors.confirm_email?.message as ReactNode}
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
                <TextField
                    label="Confirm Password"
                    fullWidth
                    margin="normal"
                    {...register("confirm_password", {
                        required: "Confirm Password",
                    })}
                    error={!!errors.confirm_password}
                    helperText={errors.confirm_password?.message as ReactNode}
                />
                <Box>
                    <button type="submit">Sign-up</button>
                </Box>
            </form>
            <div>This is the sign-up page</div>
        </Container>
    );
};

export default SignupPage;
