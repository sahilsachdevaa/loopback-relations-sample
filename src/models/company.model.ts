import {Entity, model, property, hasMany} from '@loopback/repository';
import { Address, AddressWithRelations } from './address.model';
import { Contact } from './contact.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'Company'}}
})
export class Company extends Entity {
  @property({
    type: Number,
    required: true,
    scale: 0,
    id: 1,
    postgresql: {"columnName":"id","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"NO"},
  })
  id: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"organization","dataType":"smallint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  organization?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"structure_type_id","dataType":"smallint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  structureTypeId?: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  name?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"legal_name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  legalName?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"company_email","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  companyEmail?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"website","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  website?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"sector","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  sector?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"register_code","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  registerCode?: String;

  @property({
    type: Date,
    required: false,
    postgresql: {"columnName":"registered_on_provider_date","dataType":"date","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  registeredOnProviderDate?: Date;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"invoice_payment_terms","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  invoicePaymentTerms?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"number_of_employees","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  numberOfEmployees?: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"company_blockchain_id","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  companyBlockchainId?: String;

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
    postgresql: {"columnName":"on_boarded_date","dataType":"date","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  onBoardedDate?: Date;

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
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"platform_id","dataType":"smallint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  platformId?: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"third_party_company_id","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  thirdPartyCompanyId?: String;



  @hasMany(()=>Address,{keyTo:"company_id",targetsMany:true})
  address?:Address[]

  @hasMany(()=>Contact,{keyTo:"companyid",targetsMany:true})
  contacts?:Contact[]



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Company>) {
    super(data);
  }
}

export interface CompanyRelations {
  address?:CompanyWithRelations[]
  contacts?:CompanyWithRelations[]
}

export type CompanyWithRelations = Company & CompanyRelations;
