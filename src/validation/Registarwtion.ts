import { z } from 'zod';

export const registrationSchema = z
    .object({
        email: z.string().email({ message: 'Invalid email address' }),
        password: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters long' })
            .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
            .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
            .regex(/[0-9]/, { message: 'Password must contain at least one number' })
            .regex(/[\W_]/, { message: 'Password must contain at least one special character' }),
        confirm_password: z.string(),
        location: z.string().min(1, { message: 'Location is required' }),
        phone_number: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
        acceptTerms: z.boolean().refine((val) => val === true, { message: 'You must accept the Terms and Policy' })
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "Passwords don't match",
        path: ['confirmPassword']
    });
