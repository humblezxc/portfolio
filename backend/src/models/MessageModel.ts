import { DataTypes, Model, Optional } from 'sequelize';
import db from "../config/Database";

interface MessageAttributes {
    id: number;
    fullName: string;
    email: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

type MessageCreationAttributes = Optional<MessageAttributes, 'id'>;

const Message = db.define<Model<MessageAttributes, MessageCreationAttributes>>('messages', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING(1024),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(1024),
        allowNull: false,
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
},{
    freezeTableName:true
});

export default Message;
