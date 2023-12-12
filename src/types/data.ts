/*********** USER ***********/
export interface IUser {
    id: number | string
}

export interface IMessage {
    _id: string | number
    text: string
    createdAt: Date | number
    user: IUser
    image?: string
    video?: string
    audio?: string
    system?: boolean
    sent?: boolean
    received?: boolean
    pending?: boolean
    quickReplies?: QuickReplies
}

interface Reply {
    title: string
    value: string
    messageId?: any
}

interface QuickReplies {
    type: 'radio' | 'checkbox'
    values: Reply[]
    keepIt?: boolean
}

export interface IRegistr {
    email?: string
    phone?: string
    password?: string
    passwordConfirmation?: string
    accessToken?: string
}

export interface ILogout{
    email?: string
    password?: string
}

export interface IPasswordReset{
    email?: string
}

export interface IConfirmCode {
    code: string
}

export interface IRole {
    role: string
}

export interface ClientRegistData {
    name?: string
    reg?: string
    city?: string
    street?: string
    home?: string
    room?: string
}

export interface IClientDateRes {
    name?: string
    lastName?: string
    middleName?: string
    region?: string
    city?: string
    street?: string
    house?: string
    flat?: string
}
