export class ClientProjectclass {
    empId: number = 0
    empName: string = ""
    empEmailId: string = ""
    empCode: string = ""
    empDesignation: string = ""
    projectName: string = ""
    startDate: string = ""
    expectedEndDate: string = ""
    clientName: string = ""
    clientProjectId: number = 0


    constructor(init?: Partial<ClientProjectclass>){
        Object.assign(this,init)
    }
}