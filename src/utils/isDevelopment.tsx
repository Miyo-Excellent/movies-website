export default function isDevelopment():boolean {
    return process.env.NODE_ENV === 'development';
}