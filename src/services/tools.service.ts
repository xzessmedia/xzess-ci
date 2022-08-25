import moment, {Moment} from "moment";
import 'moment/locale/de'
import 'moment-range';
import 'moment-timezone';

class ToolsService {
    async asyncForEach(array: Array<any>, callback: any) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    }

    CreateDate(input?: moment.MomentInput) {
        return this.CreateMoment(input).toDate();
    }

    CreateMoment(input?: moment.MomentInput) {
        return moment(input).tz("Europe/Berlin");
    }

    CreateISOString(moment: moment.Moment) {
        return moment.utc(true).toISOString()
    }

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

    /**
     * Fix Json when keys have no doublequotes
     * @param text
     * @param pretty
     * @constructor
     */
    FixJson(text: string, pretty: boolean = true) {
        let source = text;
        for (let i = 0; i < text.length; i++) {
            source = source.replace(" ",'');
        }


        let el = source.split(':');

        let raw: string = '';

        //console.log(`Elements`,el)


        el.forEach((str) => {
            let pointer = '';
            let index = str.length-1;
            while(pointer !== '\n') {
                pointer = str.charAt(index);
                index--;
            }
            let start = str.substring(0, index+2);
            raw += `${start}"${str.substring(index+2, str.length)}":`;
        })
        raw = raw.replace('"},', '},')
        raw = raw.replace('};":', '}')

        for (let i = 0; i < raw.length; i++) {
            raw = raw.replace("'",'"');
        }

        // Remove Invalid Commas
        for (let i = 0; i < raw.length; i++) {
            raw = raw.replace(",\n}",'\n}');
            raw = raw.replace("},\n}",'}\n}');
            raw = raw.replace(",\n}\n}",'\n}\n}');
            raw = raw.replace('},\n"}','}\n}');
        }
        //console.log(`Result`, JSON.stringify(raw));
        //console.log(`Result`, raw);
        let fixed = JSON.parse(raw);
        //console.log(`Fixed`, fixed);
        if (pretty === true) {
            return JSON.stringify(fixed,null, 2);
        } else {
            return JSON.stringify(fixed);
        }
    }

}

const TOOLS = new ToolsService();
export default TOOLS;