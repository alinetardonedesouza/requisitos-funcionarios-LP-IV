module.exports = (sequelize, DataTypes) => {

    const Feedbacks = sequelize.define('Feedbacks', {

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
    
              model: 'Feedbacks',
              key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
          },
          data: {
    
            type: DataTypes.DATE,
          },
          pontosPositivos: {
    
            type: DataTypes.STRING,
          },
          pontosNegativos: {
    
            type: DataTypes.STRING
          },
          acoesEsperadas: {
    
            type: DataTypes.STRING
          },
          metas: {
    
            type: DataTypes.STRING,
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
            tableName: 'Feedbacks'
        })

    Feedbacks.associate = models => {

        Feedbacks.belongsTo(models.Colaboradores, {

            foreignKey: 'colaboradorId',
            as: 'colaboradores'
        })
    }
    return Feedbacks
}