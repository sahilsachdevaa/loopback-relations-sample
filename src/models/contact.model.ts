import {Entity, model, property, belongsTo} from '@loopback/repository';
import { CompanyWithRelations, Company } from './company.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'contact'}}
})
export class Contact extends Entity {
  @property({
    type: Number,
    required: true,
    scale: 0,
    id: 1,
    postgresql: {"columnName":"contactid","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"NO"},
  })
  contactid: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"name","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  name?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"telefax","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  telefax?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"email","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  email?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"position","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  position?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"telephone","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  telephone?: String;

  // @property({
  //   type: Number,
  //   required: false,
  //   scale: 0,
  //   postgresql: {"columnName":"companyid","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  // })
  // companyid?: Number;

  @belongsTo(() => Company)
  companyid: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Contact>) {
    super(data);
  }
}

export interface ContactRelations {
  company?:CompanyWithRelations
  // describe navigational properties here
}

export type ContactWithRelations = Contact & ContactRelations;
