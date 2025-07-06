export type UserRole = 'user' | 'admin'

export interface User {
    id: number;
    email: string;
    passwordHash: string;
    role: UserRole;
}