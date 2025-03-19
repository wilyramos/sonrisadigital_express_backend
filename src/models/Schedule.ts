import {  Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull} from 'sequelize-typescript';


@Table({
    tableName: 'schedules'
})
class Schedule extends Model {


}


export default Schedule