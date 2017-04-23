/**
* This file is responsible for generating some fake data to be validated
*
* @summary Fake data for one list
*/

import schemas from './schemas';
const listSchema = schemas.schemasList.List;

const firstQuestion = {
  description: 'Nessa questão, o item correto é: ',
  items: ['Item Correto', 'Item Errado', 'Outro Item Errado'],
  correctItems: [0],
};

const firstList = {
  title: 'Lista Teste 01',
  description: 'Essa é a primeira lista para testes.',
  enable: false,
  questions: [firstQuestion],
};

// Just to make sure that this fake data matches schema validation.
listSchema.validate(firstList);
