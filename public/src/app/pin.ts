export class Pin {
    constructor(
        public source_link: string = '', 
        public title: string = '',
        public image: string = '',
        public description: string = '', 
        public board: string = '', 
        public repinned: boolean = false,
        public repins = 0,
        public comments = [],
        public _user = null,
        public _id = null,
    ){}
}
