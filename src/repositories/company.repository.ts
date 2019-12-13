import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {Company, CompanyRelations, Address} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { AddressRepository } from './address.repository';
import { Contact } from '../models/contact.model';
import { ContactRepository } from './contact.repository';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.id,
  CompanyRelations
> {
 public readonly addressess: HasManyRepositoryFactory<Address, typeof Company.prototype.id>;
 public readonly contacts: HasManyRepositoryFactory<Contact, typeof Company.prototype.id>;
  constructor(
    @repository.getter('AddressRepository') private addressRepoGetter:Getter<AddressRepository>,
    @repository.getter('ContactRepository') private contactRepoGetter:Getter<ContactRepository>,
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Company, dataSource);
    this.addressess = this.createHasManyRepositoryFactoryFor('address', addressRepoGetter);
    this.registerInclusionResolver('address', this.addressess.inclusionResolver);
    this.contacts = this.createHasManyRepositoryFactoryFor('contacts', contactRepoGetter);
    this.registerInclusionResolver('contacts', this.contacts.inclusionResolver);
  
  }
}
