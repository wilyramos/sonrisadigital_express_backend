import {  Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull} from 'sequelize-typescript';


@Table({
    tableName: 'appointments'
})
class Appointment extends Model {


}


export default Appointment;