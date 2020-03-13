export interface LoginStateModel {
    token: string;
    username: string;
}

export interface LoginFormModel {
    username: string;
    password: string;
}

export function createLoginInitialState(): LoginStateModel {
    return {
        token: '',
        username: '',
    };
}
