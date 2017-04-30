/**
* This file is responsible for generating some fake data to be validated
*
* @summary Fake list data for use in other parts as needed
*/

import SCHEMASLIST from '../../lib/collections/schemas';

const FAKELISTS = [{
  // First List
  title: 'Questionário 01',
  description: 'Questionário para a atividade da aula 01.',
  discipline: 'Requisitos de Software',
  enable: true,
  closed: false,
  questions: [
    {
      description: 'De acordo com o modelo de requisitos do SAFe, um item de backlog pode ser, EXCETO:',
      alternatives: [
        {
          alternativeDescription: 'Épico',
          alternativePoints: 0,
        },
        {
          alternativeDescription: 'Capacidade(Capability)',
          alternativePoints: 4,
        },
        {
          alternativeDescription: 'Requisitos Não funcionais',
          alternativePoints: 0,
        },
        {
          alternativeDescription: 'Feature',
          alternativePoints: 0,
        },
      ],
    },
    {
      description: 'Sobre o nível de Portifólio, é INCORRETO afirmar:',
      alternatives: [
        {
          alternativeDescription: 'Os épicos do portifolio são elementos que permitem entender como os ARTs são gerenciados no SAFe.',
          alternativePoints: 4,
        },
        {
          alternativeDescription: 'Os épicos representam grandes iniciativas da organização.',
          alternativePoints: 0,
        },
        {
          alternativeDescription: 'Cada épico requer análise de custo, impacto e oportunidade.',
          alternativePoints: 0,
        },
        {
          alternativeDescription: 'Os épicos são aprovados antes de serem implementados.',
          alternativePoints: 0,
        },
      ],
    },
  ],
},
// Second List
{
  title: 'Questionário 02',
  description: 'Questionário para a atividade da aula 02.',
  enable: true,
  discipline: 'Requisitos de Software',
  closed: false,
  questions: [
    {
      description: 'De acordo com o modelo de requisitos do SAFe, um item de backlog pode ser, EXCETO:',
      alternatives: [
        {
          alternativeDescription: 'Épico',
          alternativePoints: 0,
        },
        {
          alternativeDescription: 'Capacidade(Capability)',
          alternativePoints: 4,
        },
        {
          alternativeDescription: 'Requisitos Não funcionais',
          alternativePoints: 0,
        },
        {
          alternativeDescription: 'Feature',
          alternativePoints: 0,
        },
      ],
    },
    {
      description: 'Sobre o nível de Portifólio, é INCORRETO afirmar:',
      alternatives: [
        {
          alternativeDescription: 'Os épicos do portifolio são elementos que permitem entender como os ARTs são gerenciados no SAFe.',
          alternativePoints: 4,
        },
        {
          alternativeDescription: 'Os épicos representam grandes iniciativas da organização.',
          alternativePoints: 0,
        },
        {
          alternativeDescription: 'Cada épico requer análise de custo, impacto e oportunidade.',
          alternativePoints: 0,
        },
        {
          alternativeDescription: 'Os épicos são aprovados antes de serem implementados.',
          alternativePoints: 0,
        },
      ],
    },
  ],
}];

/** Validates each list in the Array with the schema defined for the list DB.
  * This make sure that this data is similar to the data which will be saved in
  * the DB on the listCreator.
  */
SCHEMASLIST.List.validate(FAKELISTS[0]);
SCHEMASLIST.List.validate(FAKELISTS[1]);

// Export the fake list data so other files can acess the data as needed
export default function () {
  return FAKELISTS;
}
