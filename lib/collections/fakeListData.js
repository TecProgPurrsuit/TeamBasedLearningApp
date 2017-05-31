/**
* This file is responsible for generating some fake data to be validated
*
* @summary Fake data for one list
*/

import SCHEMASLIST from './schemas';

const LISTSCHEMA = SCHEMASLIST.List;

const QUESTIONALTERNATIVES = [
  {
    alternativeDescription: 'Épico',
    alternativePoints: 0,
  },
  {
    alternativeDescription: 'Capability',
    alternativePoints: 0,
  },
  {
    alternativeDescription: 'Requisitos não funcionais',
    alternativePoints: 4,
  },
  {
    alternativeDescription: 'Feature',
    alternativePoints: 0,
  },
];

const FIRSTQUESTION = {
  description: 'De acordo com o modelo de requisitos do SAFe, um item de backlog pode ser, EXCETO:',
  alternatives: QUESTIONALTERNATIVES,
};

const FIRSTLIST = {
  title: 'Lista Teste 01',
  description: 'Essa é a primeira lista para testes.',
  discipline: 'Requisitos de Software',
  enable: false,
  closed: false,
  questions: [FIRSTQUESTION],
};

// Just to make sure that this fake data matches schema validation.
LISTSCHEMA.validate(FIRSTLIST);

// Export the data
export default FIRSTLIST;
