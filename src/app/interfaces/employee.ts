export interface Employee {
    [key: string]: string | number | undefined;

    id: string;
    departmentId: string | undefined;
    name: string;
    payRate: number;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
}