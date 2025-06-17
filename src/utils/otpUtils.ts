
type otpRecord = {
    otp: string,
    expiresAt: Date,
    coolDown: Date
}

const otpStore = new Map<string, otpRecord>();

 const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export const setOtp = (email: string, otp: string, expiresAtMin: number, coolDownInSec: number)=> {
    const curr = Date.now();
    const expires = new Date(curr + expiresAtMin * 60 * 1000);
    const coolDownDate = new Date(curr + coolDownInSec * 1000);
    otpStore.set(email, { otp, expiresAt: expires, coolDown: coolDownDate });
    
}

export const getOtp = (email: string): otpRecord | undefined => { 
    return otpStore.get(email);
}

export const clearOtp = (email: string) => {
    otpStore.delete(email);
}

export const isInCooldown = ( email: string ) : boolean => {
    const record = otpStore.get(email);
    if (!record) return false;
    return new Date() < record.coolDown;    
    
}

export default generateOtp