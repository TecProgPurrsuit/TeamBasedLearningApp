/**
* This file is responsible for generating some fake data to be validated
*
* @summary Fake data for one list
*/

import { SCHEMASLIST } from './schemas';

const LISTSCHEMA = SCHEMASLIST.List;

const FIRSTALTERNATIVE = {
  alternativeDescription: 'Essa é a alternativa 1.',
  alternativePoints: 4,
};

const FIRSTQUESTION = {
  description: 'Nessa questão, o item correto é: ',
  alternatives: [FIRSTALTERNATIVE],
};

const FIRSTLIST = {
  title: 'Lista Teste 01',
  description: 'Essa é a primeira lista para testes.',
  enable: false,
  questions: [FIRSTQUESTION],
};

// Just to make sure that this fake data matches schema validation.
LISTSCHEMA.validate(FIRSTLIST);

// Export the data
export default FIRSTLIST;
