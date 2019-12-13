import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'CompanyContact'}}
})
export class Companycontact extends Entity {
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
    postgresql: {"columnName":"given_name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  givenName?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"full_name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  fullName?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"company_name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  companyName?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"display_name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  displayName?: String;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"contact_type","dataType":"smallint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  contactType?: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"phone","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  phone?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"email","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  email?: String;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"company_id","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  companyId?: Number;

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
    postgresql: {"columnName":"platform_owner_contact_id","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  platformOwnerContactId?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Companycontact>) {
    super(data);
  }
}

export interface CompanycontactRelations {
  // describe navigational properties here
}

export type CompanycontactWithRelations = Companycontact & CompanycontactRelations;
