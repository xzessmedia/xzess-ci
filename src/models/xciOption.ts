export type xciOption = {
    flags: string,
    description: string,
    defaultvalue?: string | boolean | Array<string>,
    fn?: (value: string) => void,
    regex?: RegExp
}