import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Company, CompanyWithRelations } from './company.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'Address'}}
})
export class Address extends Entity {
  @property({
    type: Number,
    required: true,
    scale: 0,
    id: 1,
    postgresql: {"columnName":"id","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"NO"},
  })
  id: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"street_name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  streetName?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"building_name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  buildingName?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"city_name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  cityName?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"postal_zone","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  postalZone?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"state","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  state?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"address_line1","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  addressLine1?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"address_line2","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  addressLine2?: String;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"address_type","dataType":"smallint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  addressType?: Number;

  @belongsTo(() => Company)
  company_id: number;

  @property({
    type: Boolean,
    required: false,
    postgresql: {"columnName":"is_active","dataType":"boolean","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  isActive?: Boolean;

  @property({
    type: Boolean,
    required: false,
    postgresql: {"columnName":"is_deleted","dataType":"boolean","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  isDeleted?: Boolean;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"country","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  country?: String;

  @property({
    type: Date,
    required: false,
    postgresql: {"columnName":"created_at","dataType":"date","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  createdAt?: Date;

  @property({
    type: Date,
    required: false,
    postgresql: {"columnName":"updated_at","dataType":"date","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  updatedAt?: Date;

  @property({
    type: Date,
    required: false,
    postgresql: {"columnName":"deleted_at","dataType":"date","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  deletedAt?: Date;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"building_number","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  buildingNumber?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  company?: CompanyWithRelations
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
