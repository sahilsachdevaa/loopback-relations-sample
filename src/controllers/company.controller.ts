import {
  Filter,
 repository,
 } from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
 
} from '@loopback/rest';
import {Company} from '../models';
import {CompanyRepository} from '../repositories';
import { filter } from 'minimatch';

export class CompanyController {
  constructor(
    @repository(CompanyRepository)
    public companyRepository : CompanyRepository,
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
    let result = await  this.companyRepository.find({include:[{'relation':'address'},{'relation':'contacts'}]});
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
}
