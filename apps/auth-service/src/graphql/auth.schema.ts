
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class RegisterUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export abstract class IQuery {
    abstract getAuthMessage(): Nullable<string> | Promise<Nullable<string>>;

    abstract getNotification(): Nullable<string> | Promise<Nullable<string>>;
}

export abstract class IMutation {
    abstract registerUser(userInput?: Nullable<RegisterUserInput>): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
