module.exports = (sequelize, DataTypes) => {

    const Historicos = sequelize.define('Historicos', {
        id: {

            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        colaboradorId: {

            type: DataTypes.INTEGER,
            allowNull: false,
            references: {

                model: 'Colaboradores',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        },
        cargos: {

            type: DataTypes.STRING,
        },
        dataInicio: {

            type: DataTypes.DATE,
            allowNull: false
        },
        dataFim: {

            type: DataTypes.DATE
        },
        createdAt: {

            type: DataTypes.DATE
        },
        updatedAt: {

            type: DataTypes.DATE
        },
        deletedAt: {

            type: DataTypes.DATE
        }
    },
        {

            createdAt: false,
            updatedAt: false,
            tableName: 'Historicos'
        })

    Historicos.associate = models => {

        Historicos.belongsTo(models.Colaboradores, {

            foreignKey: 'colaboradorId',
            as: 'colaboradores'
        })
    }
    return Historicos
}