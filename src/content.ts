import type { ImageMetadata } from 'astro'
import arthurJordanPhoto from './assets/people/arthur-jordan.jpg'
import brunoFortePhoto from './assets/people/bruno-forte.jpeg'
import dheovaniXavierPhoto from './assets/people/dheovani-xavier.png'
import douglasRodriguesPhoto from './assets/people/douglas-rodrigues.jpeg'
import lucasCarvalhoPhoto from './assets/people/lucas-carvalho.jpeg'
import fabioVieiraPhoto from './assets/people/fabio-vieira.jpeg'
import maverickYliasterPhoto from './assets/people/maverick-yliaster.png'

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
      },
      {
        name: 'Douglas Rodrigues',
        role: 'Aluno',
        quote: 'Entre tantas graças que Deus nos concede, não é pequena aquela de encontrar bons mestres, capazes de nos conduzir, com segurança e profundidade, ao conhecimento das verdades divinas. Poucas coisas são tão nobres, como nos ensinam os grandes Doutores da Igreja, quanto dedicar a inteligência ao conhecimento de Deus e colocar os frutos desse estudo a serviço de outras almas. E é precisamente isso que tenho encontrado no Curso Maior de Introdução à Teologia Católica. Sou particularmente grato ao professor pela riqueza dos ensinamentos, pela seriedade com que aborda cada questão e, sobretudo, pela fidelidade à doutrina da Igreja. Tenho plena convicção de que são raríssimos, no Brasil e mesmo fora dele, os teólogos que possuem a capacidade intelectual do professor Geraldo. E que Nosso Senhor continue a abençoar este trabalho e a fazer frutificar tudo aquilo que nele aprendemos.',
        photo: douglasRodriguesPhoto
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
    testimonials: [
      {
        name: 'Lucas Carvalho de Almeida',
        role: 'Catequizando',
        quote: 'Em geral, as catequeses no Brasil, tanto paroquiais quanto vinculadas a comunidades de leigos, padecem do problema de não fornecerem razões que justifiquem as proposições mais elementares da fé (como o Credo ou as petições do Pai-Nosso), mesmo à luz dos textos fornecidos pelo Magistério. Os comentários do Prof.º Geraldo, muito embora focados em capítulos curtos do Catecismo Romano, têm este poder explanatório que falta às catequeses comuns; além disso,  procedem de maneira intensiva, não extensiva, o que favorece a meditação dos dogmas de fé elucidados, seja ao modo intelectual, seja ao modo devocional, como o mistério da Encarnação que perpassa os Mistérios Gozosos do Santo Rosário.',
        photo: lucasCarvalhoPhoto
      },
      {
        name: 'Fábio V. Blangis',
        role: 'Catequizando',
        quote: 'Em meio ao meu retorno ao Catolicismo, conheci o Professor Geraldo, de quem já ouvira as melhores referências. Não poderia ter feito escolha melhor ao ingressar em seu curso: minhas expectativas eram altas e, ainda assim, fui positivamente surpreendido. Geraldo é um jovem erudito, profundo conhecedor da Filosofia Escolástica, de seus fundamentos e de suas aplicações. O ensino cristão que ministra nos livra da nefasta ideologia modernista que corrói a sociedade. Como seu aluno, vejo realizadas nele as palavras de São João Paulo II: “A fé e a razão constituem como que as duas asas pelas quais o espírito humano se eleva para a contemplação da verdade”.',
        photo: fabioVieiraPhoto
      },
      {
        name: 'Emmanuel Braga',
        role: 'Catequizando',
        quote: 'O grande mérito dos comentários é apresentar um traço do método escolástico com a clareza da catequese. Ao levantar objeções reais e aplicar distinções metafísicas de forma acessível, a leitura deixa de ser mero repasse de informações para agregar de fato à formação do intelecto na medida em que instiga bastante ao estudo.'
      }
    ]
  },
  {
    id: 'consultoria',
    number: '03',
    label: 'Acompanhamento personalizado',
    title: 'Consultoria Filosófico-Teológica',
    description: 'Apoio ao estudo, à reflexão crítica e à construção de teses e argumentos, com referência à tradição católica e à filosofia clássica.',
    facts: ['Métodos de estudo', 'Reflexão crítica', 'Teses e argumentos'],
    price: 'R$ 400,00 por mês',
    testimonials: [
      {
        name: 'Maverick Yliaster',
        role: 'Consulente',
        quote: 'A consultoria que tive com o professor foi uma das grandes experiências da minha vida e um guia importantíssimo para meus estudos. Eu não sabia ao certo o que estudar e encontrava na internet apenas métodos mecânicos. O professor, porém, adotou outra abordagem, buscando identificar minhas inclinações intelectuais e compreender quais áreas seriam mais adequadas aos meus interesses e potencialidades. Isso me ensinou a direcionar meus esforços de maneira mais consciente e proveitosa.',
        photo: maverickYliasterPhoto
      },
      {
        name: 'Arthur Vinícius',
        role: 'Consulente',
        quote: 'A consultoria que tive com o professor Geraldo foi muitíssimo satisfatória! Eram diversas dúvidas e questões que já estavam me perturbando já há alguns meses. Tais problemas me incomodavam e me faziam enxergar a dinâmica da Graça de Deus em nossa vida de uma forma completamente equivocada. E foi incrível como o professor conseguiu clarear todas as trevas em tão pouco tempo! O trabalho pedagógico do professor era de outro nível, ele conseguia deixar com que eu expunha meu raciocínio incorreto e, com total controle, me conduzia a enxergar os problemas no meu pensamento e a entender a posição correta com justificativas muito satisfatórias. O Geraldo não é mesmo qualquer teólogo, recomendo o seu trabalho de olhos fechados.'
      }
    ]
  },
]
