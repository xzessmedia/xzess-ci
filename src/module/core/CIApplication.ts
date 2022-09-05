import { Command } from 'commander';
import {xciCommand} from "../../models/xciCommand";
const program = new Command();

export class CIApplication {
    _programname: string;
    _programdescription: string;
    _version: string;
    _commands: Array<xciCommand>;
    _commandsraw: Array<Command>;

    constructor(name: string, description: string, version: string) {
        this._programname = name;
        this._programdescription = description;
        this._version = version;
        this._commands = new Array<xciCommand>();
        this._commandsraw = [];


        this._Init();
    }

    _Init() {
        program
            .name(this._programname)
            .description(this._programdescription)
            .version(this._version);

        this.Init();
    }

    GetProgram(program: Command) {
        return program;
    }

    AddCommand(command: xciCommand) {
        this._commands.push(command);
    }

    protected Init() {

    }

    LoadCommands() {
        this._commands.forEach((cmd: xciCommand) => {
            let command = program.command(cmd.command);
            command = command.description(cmd.description);
            if(cmd.argument !== undefined) {
                command = command.argument(cmd.argument.name, cmd.argument.description, cmd.argument.defaultValue);
            }
            cmd.options.forEach((option) => {
                if (option.fn === undefined && option.defaultvalue === undefined && option.regex === undefined) {
                    command = command.option(option.flags, option.description);
                } else {
                    if (option.fn !== undefined) {
                        command = command.option(option.flags, option.description,option.fn);
                    }

                    if (option.defaultvalue !== undefined) {
                        command = command.option(option.flags, option.description, option.defaultvalue);
                    }

                    if (option.regex !== undefined) {
                        command = command.option(option.flags, option.description, option.regex);
                    }
                }

            })
            command = command.action(cmd.action);
            this._commandsraw.push(command);
        })
    }

    ExecuteCI() {
        this.LoadCommands();
        program.parse(process.argv);
    }

}