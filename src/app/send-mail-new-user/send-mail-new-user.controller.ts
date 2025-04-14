import { IMessagerAccessRequest, IResponseAccessResponse } from "../../providers/message-broker-access/implementations/imessager-broker-access.interface";
import { SendMailNewUserApplication } from "./send-mail-new-user.application";

export class SendMailNewUserController {

    constructor(
        private readonly sendMailNewUserApplication: SendMailNewUserApplication
    ) {}

    async handle(req: IMessagerAccessRequest): Promise<IResponseAccessResponse> {
        await this.sendMailNewUserApplication.handle({
            email: req.body.email,
            name: req.body.name
        });

        return {
            code: 201,
            response: {
                message: 'E-mail enviado com sucesso!'
            }
        }
    }
}