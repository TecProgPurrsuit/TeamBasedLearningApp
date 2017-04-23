const questionList = [{
      title: 'Questionário 01',
      description: 'Questionário para a atividade da aula 01.',
      created_at: 'Apr 14 2017 00:00:00',
      end_at: 'Apr 15 2017 12:00:00',
      available: true,
      answered: false,
      questions: [
        {
          description: 'De acordo com o modelo de requisitos do SAFe, um item de backlog pode ser, EXCETO:',
          id: "q1-1",
          alternatives: [
            {
              alternativeDescription: 'Épico',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Capacidade(Capability)',
              alternativePoints: 4,
              alternative: true,
            },
            {
              alternativeDescription: 'Requisitos Não funcionais',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Feature',
              alternativePoints: 0,
              alternative: false,
            },
          ],
        },
        {
          description: 'Sobre o nível de Portifólio, é INCORRETO afirmar:',
          id: "q1-2",
          alternatives: [
            {
              alternativeDescription: 'Os épicos do portifolio são elementos que permitem entender como os ARTs são gerenciados no SAFe.',
              alternativePoints: 4,
              alternative: true,
            },
            {
              alternativeDescription: 'Os épicos representam grandes iniciativas da organização.',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Cada épico requer análise de custo, impacto e oportunidade.',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Os épicos são aprovados antes de serem implementados.',
              alternativePoints: 0,
              alternative: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Questionário 02',
      description: 'Questionário para a atividade da aula 02.',
      created_at: 'Apr 14 2017 00:00:00',
      end_at: 'Apr 15 2017 12:00:00',
      available: true,
      answered: true,
      questions: [
        {
          description: 'De acordo com o modelo de requisitos do SAFe, um item de backlog pode ser, EXCETO:',
          id: "q2-1",
          alternatives: [
            {
              alternativeDescription: 'Épico',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Capacidade(Capability)',
              alternativePoints: 4,
              alternative: true,
            },
            {
              alternativeDescription: 'Requisitos Não funcionais',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Feature',
              alternativePoints: 0,
              alternative: false,
            },
          ],
        },
        {
          description: 'Sobre o nível de Portifólio, é INCORRETO afirmar:',
          id: "q2-2",
          alternatives: [
            {
              alternativeDescription: 'Os épicos do portifolio são elementos que permitem entender como os ARTs são gerenciados no SAFe.',
              alternativePoints: 4,
              alternative: true,
            },
            {
              alternativeDescription: 'Os épicos representam grandes iniciativas da organização.',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Cada épico requer análise de custo, impacto e oportunidade.',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Os épicos são aprovados antes de serem implementados.',
              alternativePoints: 0,
              alternative: false,
            },
          ],
        },
      ],
    }
];

export default function () {
  return questionList;
}
