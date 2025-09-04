import { Clientclass } from "../class/Client";
import { Employeeclass } from "../class/Employee";
import { ClientProjectclass } from "../class/ClientProject";

export interface IRoles {
    roleId: number;
    role: string;
}

interface IAPIResponseTemplate{
    message: string;
    result: boolean;
}

export interface IAPIRolesResponse extends IAPIResponseTemplate {
    data: IRoles[];
}

export interface IDesignations {
    designationId: number;
    designation: string;
}

export interface IAPIDesignationsResponse extends IAPIResponseTemplate {
    data: IDesignations[];
}

export interface IAPIClientsResponse extends IAPIResponseTemplate {
    data: Clientclass[];
}

export interface IAPIEmployeesResponse extends IAPIResponseTemplate {
    data: Employeeclass[];
}

export interface IAPIClientProjectsResponse extends IAPIResponseTemplate {
    data: ClientProjectclass[];
}

export interface IAPILoginResponse {
    result: boolean,
    accessToken: string;
}
