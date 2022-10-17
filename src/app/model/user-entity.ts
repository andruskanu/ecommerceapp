export class UserEntity{
    id!:number;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    role!: string;
    locked!: boolean;
    enabled!: boolean;
}