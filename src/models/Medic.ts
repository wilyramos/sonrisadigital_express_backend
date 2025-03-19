import {  Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull} from 'sequelize-typescript';


@Table({
    tableName: 'medics'
})
class Medic extends Model {


}


export default Medic;