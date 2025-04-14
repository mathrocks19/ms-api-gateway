import { IMailAccess, IMessageMail } from "../imail-access.interface";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

// Classe que implementa o envio de e-mails via Mailtrap (geralmente para teste/dev)
export class MailTrap implements IMailAccess {
    // Guarda a instância do transportador Nodemailer
    private transporter: Mail;

    constructor() {
        // Configura o transportador Nodemailer para usar o Mailtrap
        this.transporter = nodemailer.createTransport({

            host: "",  // <<< Host SMTP do Mailtrap (ex: "smtp.mailtrap.io")
            port: 0,   // <<< Porta do Mailtrap (ex: 2525)
            auth: {
                user: "", // <<<  usuário Mailtrap
                pass: ""  // <<<  senha Mailtrap
            }
            //
        });
    }

    // Envia o e-mail usando o transportador Mailtrap configurado
    async send(mail: IMessageMail): Promise<void> {
        await this.transporter.sendMail({
            // Mapeia os dados da interface IMessageMail para o formato do Nodemailer
            to: {
                name: mail.to.name,
                address: mail.to.email,
            },
            from: {
                name: mail.from.name,
                address: mail.from.email,
            },
            subject: mail.subject,
            html: mail.body,
        });
    }
}