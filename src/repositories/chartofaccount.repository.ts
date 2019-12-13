import {DefaultCrudRepository} from '@loopback/repository';
import {Chartofaccount, ChartofaccountRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ChartofaccountRepository extends DefaultCrudRepository<
  Chartofaccount,
  typeof Chartofaccount.prototype.id,
  ChartofaccountRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Chartofaccount, dataSource);
  }
}
