export interface UserAttributes {
    uid: number;
    name: string;
    email?: string;
    password: string;
    role: "user" | "admin";
}
export interface UserCreateDTO {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
}
export interface UserUpdateDTO {
    name?: string;
    email?: string;
    password?: string;
    role?: "user" | "admin";
}
export interface UserResponse {
    uid: number;
    name: string;
    email?: string;
    role: "user" | "admin";
}
export interface JwtUserPayload {
    id: number;
    email?: string;
    role: "user" | "admin";
}
