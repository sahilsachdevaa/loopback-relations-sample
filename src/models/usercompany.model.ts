import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Company, CompanyWithRelations } from './company.model';

@model({
  settings: { idInjection: false, postgresql: { schema: 'public', table: 'usercompany' } }
})
export class Usercompany extends Entity {
  @property({
    type: Number,
    required: true,
    scale: 0,
    postgresql: { "columnName": "userId", "dataType": "integer", "dataLength": null, "dataPrecision": null, "dataScale": 0, "nullable": "NO" },
  })
  userid: Number;

  @belongsTo(() => Company, { keyTo: 'id', keyFrom: 'companyid' })
  companyid: number;

  @property({
    type: Number,
    required: true,
    scale: 0,
    id: 1,
    postgresql: { "columnName": "id", "dataType": "integer", "dataLength": null, "dataPrecision": null, "dataScale": 0, "nullable": "NO" },
  })
  id: Number;

  @property({
    type: String,
    required: false,
    postgresql: { "columnName": "realmId", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "YES" },
  })
  realmid?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usercompany>) {
    super(data);
  }
}

export interface UsercompanyRelations {
  company?: UsercompanyWithRelations
}

export type UsercompanyWithRelations = Usercompany & UsercompanyRelations;
