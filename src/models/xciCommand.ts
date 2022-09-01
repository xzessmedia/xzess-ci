import {xciOption} from "./xciOption";
import {xciArgument} from "./xciArgument";

export type xciCommand = {
    command: string,
    description: string,
    argument?: xciArgument,
    options: Array<xciOption>,
    action: (...args: any[]) => void | Promise<void>
}