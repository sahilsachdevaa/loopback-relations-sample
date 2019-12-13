import {DefaultCrudRepository} from '@loopback/repository';
import {Companycontact, CompanycontactRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompanycontactRepository extends DefaultCrudRepository<
  Companycontact,
  typeof Companycontact.prototype.id,
  CompanycontactRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Companycontact, dataSource);
  }
}
