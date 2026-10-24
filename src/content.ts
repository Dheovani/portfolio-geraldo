import type { ImageMetadata } from 'astro'
import arthurJordanPhoto from './assets/people/arthur-jordan.jpg'
import brunoFortePhoto from './assets/people/bruno-forte.jpeg'
import dheovaniXavierPhoto from './assets/people/dheovani-xavier.png'

export type Testimonial = {
  name: string
  role: string
  quote: string
  photo?: ImageMetadata
  bio?: string
}

export type Offering = {
  id: string
  number: string
  label: string
  title: string
  description: string
  facts: string[]
  price: string
  modules?: string[]
  testimonials?: Testimonial[]
}

export const instagramUrl = 'https://www.instagram.com/gjdosreis/'
export const whatsappUrl = 'https://wa.me/5531991048239'

export const featuredTestimonial: Testimonial = {
  name: 'Arthur Jordan',
  role: 'Professor do IFCE · Mestre em Teologia Sistemática (UNICAP)',
  quote: 'A obra teológica de Geraldo dos Reis é um testemunho luminoso contra aquelas narrativas que limitam o fazer teológico profundo e confiável aos muros universitários hodiernos. Não se quer dizer com isso que a obra não seja acadêmica. Pelo contrário, o equilíbrio entre o rigor metodológico e a exposição sistematizada talvez seja aquela nota que exerça maior atração no público, suscitando-lhes o desejo de passarem de leitores a alunos, exatamente como ocorrera no princípio das universidades europeias. Recomendo com entusiasmo os cursos de Geraldo, com os auspícios de que esteja apenas no início!',
  photo: arthurJordanPhoto,
  bio: 'Arthur Jordan é professor efetivo no Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE). É bacharel em Teologia pela Universidade Católica Dom Bosco (UCDB), mestre em Teologia Sistemática pela Universidade Católica de Pernambuco (UNICAP), doutorando em Filosofia pela Universidade Federal do Ceará (UFC) e doutor em Engenharia Civil por esta mesma instituição. Atua como assessor de ecumenismo da CNBB NE 1, integra o Conselho Editorial-Científico da revista Encontros Teológicos e é membro do The Global Working Group on Vatican II: Theology, Proclamation, Evangelization, da Sociedade Brasileira de Teologia Sistemática e da Sociedade de Teologia e Ciências da Religião. Na Teologia, desenvolve pesquisas sobre teologia sistemática católica, temas fronteiriços entre teologia e filosofia, protestantismo dos séculos XVI e XVII e diálogo ecumênico. É autor dos livros “As 95 Teses de Lutero: Um Comentário Católico” e “Debatendo a Reforma”.',
}

export const offerings: Offering[] = [
  {
    id: 'curso-maior',
    number: '01',
    label: 'Curso de teologia',
    title: 'Curso Maior de Introdução à Teologia Católica',
    description: 'Uma introdução à teologia católica com aulas gravadas e discussões sobre os temas estudados.',
    facts: ['Aulas quinzenais gravadas', 'Disputas mensais entre os alunos, mediadas pelo professor', 'Bate-papo pelo WhatsApp sobre os temas das aulas'],
    price: 'R$ 350,00 por mês',
    modules: [
      'Lógica',
      'Estilística',
      'Retórica',
      'Método',
      'Filologia',
      'Filosofia',
      'Teologia natural',
      'Teologia fundamental',
      'Teologia dogmática geral',
      'Noções de teologia dogmática especial',
    ],
    // Relatos de alunos: nome completo e, de preferência, foto em src/assets/people/
    testimonials: [
      {
        name: 'Dheovani Xavier',
        role: 'Aluno',
        quote: 'O curso de teologia se mostrou muito mais do que eu imaginei. O conteúdo das aulas é excelente, a organização do curso mostra um domínio exímio dos assuntos, a disposição interdisciplinar dos módulos e aulas é perfeita. Além disso tudo, os alunos trabalham em conjunto para evoluir e auxiliar uns aos outros - o que começou como uma simples turma tem se tornado uma comunidade intelectual. O professor Geraldo é um excelente teólogo, filósofo, amigo e ser humano. Além de capacitado, dedicado e humilde, está sempre disposto a nos auxiliar em questões intelectuais, espirituais ou meramente pessoais.',
        photo: dheovaniXavierPhoto
      },
      {
        name: 'Bruno Forte',
        role: 'Aluno',
        quote: 'O professor Geraldo foi um presente de Deus na minha vida. Estava sem rumo na minha vida intelectual, não sabia como começar e qual rumo seguir. Quando eu conheci e conversei com o professor eu imediatamente percebi que se tratava de uma pessoas diferenciada. O curso de teologia é a prova disso, o professor consegue sintetizar e transmitir nas aulas uma tradição filosófica e teológica robusta e na minha opinião isso faz do professor Geraldo um verdadeiro mestre, além de um grande amigo.',
        photo: brunoFortePhoto
      }
    ],
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
