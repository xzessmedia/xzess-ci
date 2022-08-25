import './module/dotenv/dotenv';
import * as pkg from '../package.json';

console.log(`${process.env.APP_NAME} Version ${pkg.version} is running`);