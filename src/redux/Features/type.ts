export interface userProps {
    id: number;
    name: string;
    email: string;
    password: string;
    phone_number: string;
    role: string;
    location: string;
    created_at: string;
}

export interface serverSuccessResponse {
    message: string;
}

export interface resTypeProps {
    userInfo: userProps;
}
