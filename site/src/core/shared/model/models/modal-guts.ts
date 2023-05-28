export class ModalGuts {
    constructor(
        public title: string,
        public texts: string[],
        public tasks: ModalTask[],
        public errors: boolean,
        public success: boolean,
        public cancelTasks?: ModalTask[],
        public footer?: { modal?: { btn: string }, confirmModal?: { leftBtn: string, rightBtn: string } }) { }

    static blank(): ModalGuts {
        return new ModalGuts('', [], [], false, false);
    }

    static build({ title = '', texts = [] as string[], tasks = [] as ModalTask[], errors = false, success = false, cancelTasks = [] as ModalTask[], footer = undefined }): ModalGuts {
        return new ModalGuts(title, texts, tasks, errors, success, cancelTasks, footer);
    }

    static modalGuts(title = '', texts: string[] = [], tasks = [] as ModalTask[], errors = false, success = false): ModalGuts {
        return new ModalGuts(title, texts, tasks, errors, success);
    }

    static errorModalGuts(title = '', texts: string[] = [], tasks = [] as ModalTask[], errors = true, success = false): ModalGuts {
        return new ModalGuts(title, texts, tasks, errors, success);
    }

    static successModalGuts({ title = '', texts = [] as string[], tasks = [] as ModalTask[] }): ModalGuts {
        return new ModalGuts(title, texts, tasks, false, true);
    }
}

type ModalTask = () => void
