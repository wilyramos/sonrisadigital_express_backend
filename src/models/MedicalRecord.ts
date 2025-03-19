import {  Table, Column, Model, DataType, HasMany, Default, Unique, AllowNull} from 'sequelize-typescript';


@Table({
    tableName: 'medical_records'
})
class MedicalRecord extends Model {


}


export default MedicalRecord