import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const basePath = path.resolve(process.env.BASE_DIR || "");

console.log('log zone');
console.log(basePath);
