import { DefaultCrudRepository, BelongsToAccessor, repository } from '@loopback/repository';
import { Usercompany, UsercompanyRelations, Company, UsercompanyWithRelations } from '../models';
import { PostgresDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { CompanyRepository } from './company.repository';

export class UsercompanyRepository extends DefaultCrudRepository<
  Usercompany,
  typeof Usercompany.prototype.id,
  UsercompanyRelations
  > {

  public readonly company: BelongsToAccessor<
    Company,
    typeof Usercompany.prototype.id
  >;

  constructor(
    @repository.getter('CompanyRepository') private compgetter: Getter<CompanyRepository>,
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Usercompany, dataSource);
    this.company = this.createBelongsToAccessorFor('companyid', compgetter);
    this.registerInclusionResolver('companyid', this.company.inclusionResolver);
  }
}
