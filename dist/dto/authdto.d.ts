export interface LoginRequestDTO {
    email: string;
    password: string;
}
export interface LoginResponseDTO {
    token: string;
}
export interface RegisterRequestDTO {
    name: string;
    email: string;
    password: string;
}
export interface RegisterResponseDTO {
    user: {
        uid: number;
        name: string;
        email: string;
        role: string;
    };
}
