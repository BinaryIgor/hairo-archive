export class Breakpoint {
    constructor(
        public className: string,
        public fromWidth: number,
        public toWidth: number,
        public fromHeight: number,
        public toHeight: number,
        public widthHeightRatioFrom: number,
        public widthHeightRatioTo: number,
        public callback?: () => void
    ) { }

    static init({ className = '', fromWidth = 0, toWidth = Infinity, fromHeight = 0, toHeight = Infinity, widthHeightRatioFrom = 0, widthHeightRatioTo = Infinity, callback = undefined }): Breakpoint {
        return new Breakpoint(className, fromWidth, toWidth, fromHeight, toHeight, widthHeightRatioFrom, widthHeightRatioTo, callback);
    }
};
