export type Offering = {
  id: string
  number: string
  label: string
  title: string
  description: string
  facts: string[]
  publishedPrice?: string
}

export const instagramUrl = 'https://www.instagram.com/gjdosreis/'

export const offerings: Offering[] = [
  {
    id: 'curso-maior',
    number: '01',
    label: 'Curso de teologia',
    title: 'Curso Maior de Introdução à Teologia Católica',
    description: 'Uma introdução à teologia católica em aulas quinzenais.',
    facts: ['Aulas quinzenais', '20h', 'Discord ou Google Meet'],
    publishedPrice: 'R$ 350,00 por mês',
  },
  {
    id: 'catequese',
    number: '02',
    label: 'Formação catequética',
    title: 'Comentário ao Catecismo Romano',
    description: 'Comentários quinzenais para o estudo e a explicação do Catecismo Romano.',
    facts: ['Comentários quinzenais', 'Estudo do Catecismo Romano'],
    publishedPrice: 'R$ 15,00 por mês',
  },
  {
    id: 'consultoria',
    number: '03',
    label: 'Acompanhamento personalizado',
    title: 'Consultoria Filosófico-Teológica',
    description: 'Apoio ao estudo, à reflexão crítica e à construção de teses e argumentos, com referência à tradição católica e à filosofia clássica.',
    facts: ['Métodos de estudo', 'Reflexão crítica', 'Teses e argumentos'],
    publishedPrice: 'R$ 350,00 por mês',
  },
]

export const community = {
  title: 'Escritório Papal',
  description: 'Uma comunidade de estudos no WhatsApp, com diferentes professores e discussões sobre diversos assuntos.',
  facts: ['Comunidade no WhatsApp', 'Diferentes professores', 'Assinatura mensal'],
}
