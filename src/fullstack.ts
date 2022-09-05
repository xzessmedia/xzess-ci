import s from 'shelljs';
import path from 'path';

function InitFullstack(projectname: string, basefolder: string) {
    let app_path = path.join(basefolder, projectname);
    s.echo(`Bootstrapping Fullstack Application ${projectname}...`);
    s.mkdir(app_path);
    s.exec(`cd ${app_path} && git clone https://github.com/xzessmedia/xzess-Api.git ${projectname}-backend && cd ..`);
    s.exec(`cd ${app_path} && git clone https://github.com/xzessmedia/xzess-react-redux-materialui-typescript-boilerplate.git ${projectname}-frontend`);
    s.exec(`cd ${app_path} && cd ${projectname}-backend && npm install --force && cd ..`);
    s.exec(`cd ${app_path} && cd ${projectname}-frontend && npm install --force && cd ..`);
    s.echo(`Fullstack Application ${projectname} has been bootstrapped and is ready for development`);
}

function InitApi(projectname: string, basefolder: string) {
    let app_path = path.join(basefolder, projectname);
    s.echo(`Bootstrapping API Application ${projectname}...`);
    s.mkdir(app_path);
    s.exec(`cd ${app_path} && git clone https://github.com/xzessmedia/xzess-Api.git ${projectname}-backend && cd ..`);
    s.exec(`cd ${app_path} && cd ${projectname}-backend && npm install --force && cd ..`);
    s.echo(`API Application ${projectname} has been bootstrapped and is ready for development`);
}

function InitFrontend(projectname: string, basefolder: string) {
    let app_path = path.join(basefolder, projectname);
    s.echo(`Bootstrapping Fullstack Application ${projectname}...`);
    s.mkdir(app_path);
    s.exec(`cd ${app_path} && git clone https://github.com/xzessmedia/xzess-react-redux-materialui-typescript-boilerplate.git ${projectname}-frontend`);
    s.exec(`cd ${app_path} && cd ${projectname}-frontend && npm install --force && cd ..`);
    s.echo(`Frontend Application ${projectname} has been bootstrapped and is ready for development`);
}

function InitTypescript(projectname: string, basefolder: string) {
    let app_path = path.join(basefolder, projectname);
    s.echo(`Bootstrapping Typescript Application ${projectname}...`);
    s.mkdir(app_path);
    s.exec(`cd ${app_path} && git clone https://github.com/xzessmedia/typescript-boilerplate.git ${projectname} && cd ..`);
    s.exec(`cd ${app_path} && cd ${projectname} && npm install --force && cd ..`);
    s.echo(`Typescript Application ${projectname} has been bootstrapped and is ready for development`);
}

function InitCI(projectname: string, basefolder: string) {
    let app_path = path.join(basefolder, projectname);
    s.echo(`Bootstrapping CI Application ${projectname}...`);
    s.mkdir(app_path);
    s.exec(`cd ${app_path} && git clone https://github.com/xzessmedia/xci-boilerplate.git ${projectname} && cd ..`);
    s.exec(`cd ${app_path} && cd ${projectname} && npm install --force && cd ..`);
    s.echo(`CI Application ${projectname} has been bootstrapped and is ready for development`);
}


function basename(pathName: string) {
    const res = path.basename(path.resolve(pathName));
    console.log('basename', pathName, '=>', `'${res}'`);
}

function currentDir() {
    return process.env.INIT_CWD;
}

export {
    basename,
    currentDir,
    InitFullstack,
    InitApi,
    InitFrontend,
    InitCI,
    InitTypescript
}