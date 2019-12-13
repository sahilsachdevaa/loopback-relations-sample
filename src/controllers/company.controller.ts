import {
  Filter,
 repository,
 relation,
 } from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
 
} from '@loopback/rest';
import {Company, Chartofaccount, Companycontact} from '../models';
import {CompanyRepository, ChartofaccountRepository, CompanycontactRepository} from '../repositories';
import { filter } from 'minimatch';

export class CompanyController {
  constructor(
    @repository(CompanyRepository)
    public companyRepository : CompanyRepository,
        @repository(ChartofaccountRepository)
    public chartofaccountRepository: ChartofaccountRepository,

    @repository(CompanycontactRepository)
    public companycontactRepository: CompanycontactRepository,

  ) {}

  @get('/companies', {
    responses: {
      '200': {
        description: 'Array of Company model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Company)) filter?: Filter<Company>,
  ): Promise<Company[]> {
    let result = await  this.companyRepository.find({include:[{relation:'address'},{relation:'contacts'}]});
    return result;
  }
 
  @get('/companies/{id}', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: {'application/json': {schema: getModelSchemaRef(Company)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Company> {
    return this.companyRepository.findById(id,{include:[{relation:'address'},{relation:'contacts'}]});
  }
  @get('/company/{id}/chartsofaccounts', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Company) } },
      },
    },
  })
  async findCOAById(@param.path.number('id') id: number): Promise<Chartofaccount[]> {
    return this.chartofaccountRepository.find({ where: { 'companyid': id } })
  }


  @get('/company/{id}/customers', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Company) } },
      },
    },
  })
  async findCustomers(@param.path.number('id') id: number): Promise<Companycontact[]> {
    return this.companycontactRepository.find({
      where: { 'companyId': id, 'contactType': 1 }
    })
  }

  @get('/company/{id}/vendors', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Company) } },
      },
    },
  })
  async findVendors(@param.path.number('id') id: number): Promise<Companycontact[]> {
    return this.companycontactRepository.find({
      where: { 'companyId': id, 'contactType': 2 }
    })
  }
}
