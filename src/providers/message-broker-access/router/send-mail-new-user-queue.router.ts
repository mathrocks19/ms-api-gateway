import { sendMailNewUserController } from "../../../../app/send-mail-new-user"; // Ajuste o path se necessário
import { IMessagerAccessRequest, IMessagerBrokerAccess, IRouterMessageBroker } from "../imessager-broker-access.interface"; // Ajuste o path se necessário

export class SendMailNewUserQueue implements IRouterMessageBroker {

    handle(messagerBorkerT: IMessagerBrokerAccess) {
        messagerBorkerT.listenRPC('send-email-new-user', async (data: IMessagerAccessRequest) => {
            return await sendMailNewUserController.handle(data);
        });
    }
}