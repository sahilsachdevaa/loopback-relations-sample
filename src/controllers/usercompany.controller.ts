import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Usercompany, UsercompanyWithRelations } from '../models';
import { UsercompanyRepository } from '../repositories';

export class UsercompanyController {
  constructor(
    @repository(UsercompanyRepository)
    public usercompanyRepository: UsercompanyRepository,
  ) { }

  @post('/usercompanies', {
    responses: {
      '200': {
        description: 'Usercompany model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Usercompany) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usercompany, {
            title: 'NewUsercompany',
            exclude: ['id'],
          }),
        },
      },
    })
    usercompany: Omit<Usercompany, 'id'>,
  ): Promise<Usercompany> {
    return this.usercompanyRepository.create(usercompany);
  }

  @get('/usercompanies/count', {
    responses: {
      '200': {
        description: 'Usercompany model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Usercompany)) where?: Where<Usercompany>,
  ): Promise<Count> {
    return this.usercompanyRepository.count(where);
  }

  @get('/usercompanies')
  async find(): Promise<any> {
    let result = await this.usercompanyRepository.find({ include: [{ relation: 'companyid' }] })
    return result;
  }

  @patch('/usercompanies', {
    responses: {
      '200': {
        description: 'Usercompany PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usercompany, { partial: true }),
        },
      },
    })
    usercompany: Usercompany,
    @param.query.object('where', getWhereSchemaFor(Usercompany)) where?: Where<Usercompany>,
  ): Promise<Count> {
    return this.usercompanyRepository.updateAll(usercompany, where);
  }

  @get('/usercompanies/{id}', {
    responses: {
      '200': {
        description: 'Usercompany model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Usercompany) } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Usercompany> {
    return this.usercompanyRepository.findById(id);
  }

  @patch('/usercompanies/{id}', {
    responses: {
      '204': {
        description: 'Usercompany PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usercompany, { partial: true }),
        },
      },
    })
    usercompany: Usercompany,
  ): Promise<void> {
    await this.usercompanyRepository.updateById(id, usercompany);
  }

  @put('/usercompanies/{id}', {
    responses: {
      '204': {
        description: 'Usercompany PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usercompany: Usercompany,
  ): Promise<void> {
    await this.usercompanyRepository.replaceById(id, usercompany);
  }

  @del('/usercompanies/{id}', {
    responses: {
      '204': {
        description: 'Usercompany DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usercompanyRepository.deleteById(id);
  }
}
