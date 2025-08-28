export interface IRoles {
    roleId: number;
    role: string;
}

export interface IAPIRolesResponse {
    message: string;
    result: boolean;
    data: IRoles[];
}

export interface IDesignations {
    designationId: number;
    designation: string;
}

export interface IAPIDesignationsResponse {
    message: string;
    result: boolean;
    data: IDesignations[];
}

