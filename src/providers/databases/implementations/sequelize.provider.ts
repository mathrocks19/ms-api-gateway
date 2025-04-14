import { Sequelize } from "sequelize-typescript";
import { UserEntity } from "../../../models/user/user.entity";

const sequelizeConnection = new Sequelize({
   database: 'mms_user',     // Nome do banco de dados
   dialect: senac,          // Tipo do banco (ex: 'postgres', 'mysql'). 'senac' aqui é incomum.
   username: senac,
   password: senha,
   logging: false,          // Desativa logs do Sequelize
   pool: {                  // Configuração do pool de conexões
       max: 3,
       min: 1
   },
   models: [UserEntity]      // Modelos que o Sequelize vai gerenciar
});

// Tenta sincronizar os modelos com o banco (pode criar tabelas)
sequelizeConnection.sync().catch((e) => {
   return;
});


export { sequelizeConnection };