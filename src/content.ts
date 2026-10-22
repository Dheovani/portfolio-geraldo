export type Offering = {
  id: string
  number: string
  label: string
  title: string
  description: string
  facts: string[]
  price: string
}

export const instagramUrl = 'https://www.instagram.com/gjdosreis/'
export const whatsappUrl = 'https://wa.me/5531991048239'

export const offerings: Offering[] = [
  {
    id: 'curso-maior',
    number: '01',
    label: 'Curso de teologia',
    title: 'Curso Maior de Introdução à Teologia Católica',
    description: 'Uma introdução à teologia católica com aulas gravadas e discussões sobre os temas estudados.',
    facts: ['Aulas quinzenais gravadas', 'Disputas mensais entre os alunos, mediadas pelo professor', 'Bate-papo pelo WhatsApp sobre os temas das aulas'],
    price: 'R$ 350,00 por mês',
  },
  {
    id: 'catequese',
    number: '02',
    label: 'Formação catequética',
    title: 'Comentário ao Catecismo Romano',
    description: 'Comentários quinzenais para o estudo e a explicação do Catecismo Romano.',
    facts: ['Comentários quinzenais', 'Estudo do Catecismo Romano'],
    price: 'R$ 15,00 por mês',
  },
  {
    id: 'consultoria',
    number: '03',
    label: 'Acompanhamento personalizado',
    title: 'Consultoria Filosófico-Teológica',
    description: 'Apoio ao estudo, à reflexão crítica e à construção de teses e argumentos, com referência à tradição católica e à filosofia clássica.',
    facts: ['Métodos de estudo', 'Reflexão crítica', 'Teses e argumentos'],
    price: 'R$ 400,00 por mês',
  },
]
