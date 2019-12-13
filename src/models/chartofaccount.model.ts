import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'ChartOfAccount'}}
})
export class Chartofaccount extends Entity {
  @property({
    type: Number,
    required: true,
    scale: 0,
    id: 1,
    postgresql: {"columnName":"chartofaccountid","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"NO"},
  })
  chartofaccountid: Number;

  @property({
    type: String,
    required: true,
    postgresql: {"columnName":"chartOfAccountName","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"NO"},
  })
  chartofaccountname: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"description","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  description?: String;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"parentChartOfAccountId","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  parentchartofaccountid?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"chartOfAccountTypeIdl","dataType":"smallint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  chartofaccounttypeidl?: Number;

  @property({
    type: Number,
    required: false,
    precision: 53,
    postgresql: {"columnName":"balance","dataType":"float","dataLength":null,"dataPrecision":53,"dataScale":null,"nullable":"YES"},
  })
  balance?: Number;

  @property({
    type: Date,
    required: false,
    postgresql: {"columnName":"balanceAsOfDate","dataType":"timestamp with time zone","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  balanceasofdate?: Date;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"chartOfAccountDetailTypeId","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  chartofaccountdetailtypeid?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"thirdpartyChartOfAccountId","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  thirdpartychartofaccountid?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"currencyBaseId","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  currencybaseid?: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"Classification","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  classification?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"Code","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  code?: String;

  @property({
    type: Number,
    required: true,
    scale: 0,
    postgresql: {"columnName":"companyId","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"NO"},
  })
  companyid: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"organization","dataType":"character varying","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  organization?: String;

  @property({
    type: Boolean,
    required: false,
    postgresql: {"columnName":"isDefault","dataType":"boolean","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  isdefault?: Boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Chartofaccount>) {
    super(data);
  }
}

export interface ChartofaccountRelations {
  // describe navigational properties here
}

export type ChartofaccountWithRelations = Chartofaccount & ChartofaccountRelations;
