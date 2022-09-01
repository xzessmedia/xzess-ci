import s from "shelljs";
import * as config from './tsconfig.json';
import dotenv from 'dotenv';
dotenv.config();

const appname = process.env.CI_APP_NAME || '';
s.mv(`index-linux`, `${appname}-linux`);
s.mv(`index-macos`, `${appname}-macos`);
s.mv(`index-win.exe`, `${appname}-win.exe`);