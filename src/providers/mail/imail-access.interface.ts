/** Estrutura para um endereço de e-mail (nome e endereço) */
export interface IAddressMail {
    email: string;
    name: string;
}

/** Estrutura para uma mensagem de e-mail completa */
export interface IMessageMail {
    to: IAddressMail;
    from: IAddressMail;
    subject: string;
    body: string; // Conteúdo do e-mail (geralmente HTML)
}

/** Contrato para serviços que enviam e-mails */
export interface IMailAccess {
    /** Envia a mensagem de e-mail especificada */
    send(mail: IMessageMail): Promise<void>;
}