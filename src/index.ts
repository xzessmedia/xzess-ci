import './module/dotenv/dotenv';
import * as pkg from '../package.json';
import {CIApplication} from "./module/core/CIApplication";
import {xciArgument} from "./models/xciArgument";
import {xciOption} from "./models/xciOption";
import {currentDir, InitApi, InitCI, InitFrontend, InitFullstack} from "./fullstack";

const appname = process.env.CI_APP_NAME || '';
const description = process.env.DESCRIPTION || '';

const CIApp = new CIApplication(appname, description, pkg.version);

CIApp.AddCommand({
    command: 'fullstack',
    argument: {
        name: '<projectname>',
        description: 'projectname',
    },
    description: 'Bootstrapps a new Fullstack App',
    options: [],
    action: (str, options) => {
        InitFullstack(str, './');
    }
})

CIApp.AddCommand({
    command: 'CI',
    argument: {
        name: '<projectname>',
        description: 'projectname',
    },
    description: 'Bootstrapps a new CommandLine App',
    options: [],
    action: (str, options) => {
        InitCI(str, './');
    }
})

CIApp.AddCommand({
    command: 'frontend',
    argument: {
        name: '<projectname>',
        description: 'projectname',
    },
    description: 'Bootstrapps a new Frontend App',
    options: [],
    action: (str, options) => {
        InitFrontend(str, './');
    }
})

CIApp.AddCommand({
    command: 'api',
    argument: {
        name: '<projectname>',
        description: 'projectname',
    },
    description: 'Bootstrapps a new API App',
    options: [],
    action: (str, options) => {
        InitApi(str, './');
    }
})

CIApp.ExecuteCI();