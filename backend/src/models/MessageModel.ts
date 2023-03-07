import { DataTypes, Model, Optional } from 'sequelize';
import db from "../config/Database";

interface MessageAttributes {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

type MessageCreationAttributes = Optional<MessageAttributes, 'id'>;

const Message = db.define<Model<MessageAttributes, MessageCreationAttributes>>('Message', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING(1024),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'messages',
});

export default Message;
