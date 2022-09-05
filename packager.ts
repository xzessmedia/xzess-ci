import s from "shelljs";
import * as config from './tsconfig.json';
import dotenv from 'dotenv';
dotenv.config();

const appname = process.env.CI_APP_NAME || '';
s.mkdir('bin');
s.mv(`index-linux`, `${appname}-linux`);
s.mv(`index-macos`, `${appname}-macos`);
s.mv(`index-win.exe`, `${appname}-win.exe`);
s.cp(`${appname}-macos`, `./bin/${appname}-osx`);
s.cp(`${appname}-linux`, `./bin/${appname}-linux`);
s.cp(`${appname}-win.exe`, `./bin/${appname}.exe`);