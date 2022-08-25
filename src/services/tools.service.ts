class ToolsService {
    RandomRangeFloat(min: number,max: number){
        return min + Math.random() * (max - min);
    }

    RandomRangeInteger(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

    RandomBool() {
        let res = this.RandomRangeInteger(0,1);
        return res === 1;
    }
}

const TOOLS = new ToolsService();
export default TOOLS;