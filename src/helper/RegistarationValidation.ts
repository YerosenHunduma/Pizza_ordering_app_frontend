import { ZodError } from 'zod';

interface FieldErrors {
    [key: string]: string | null;
}

export const extractValidationErrors = (error: ZodError): FieldErrors => {
    const fieldErrors: FieldErrors = {};

    error.errors.forEach((err) => {
        const path = err.path[0] as string;
        if (!fieldErrors[path]) {
            fieldErrors[path] = err.message;
        }
    });

    return fieldErrors;
};
