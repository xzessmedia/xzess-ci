import './module/dotenv/dotenv';
import * as pkg from '../package.json';
import {CIApplication} from "./module/core/CIApplication";
import {xciArgument} from "./models/xciArgument";
import {xciOption} from "./models/xciOption";

const appname = process.env.CI_APP_NAME || '';
const description = process.env.DESCRIPTION || '';

const CIApp = new CIApplication(appname, description, pkg.version);

CIApp.AddCommand({
    command: 'output',
    argument: {
        name: '<string>',
        description: 'string to output',
    },
    description: 'Outputs a text',
    options: [
        {
            flags: '-c, --capitalize',
            description: 'capitalize output',
        }
    ],
    action: (str, options) => {
        if (options.capitalize) {
            console.log(str.toUpperCase())
        } else {
            console.log(str);
        }
    }
})
CIApp.ExecuteCI();