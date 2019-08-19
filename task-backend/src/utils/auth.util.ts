import * as bcrypt from 'bcryptjs';

export async function hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
}
export async function validatePassword(password: string, salt: string, hashedPassword: string) {
    const hash = await bcrypt.hash(password, salt);
    return hash === hashedPassword;
}