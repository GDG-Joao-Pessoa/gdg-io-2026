export const EVENT_DATE = '2026-07-18T08:00:00-03:00'

export const stats = [
  { n: '+500', l: 'participantes esperados' },
  { n: '24', l: 'keynotes, palestras e oficinas' },
  { n: '8h', l: 'de conteúdo e networking' },
  { n: '100%', l: 'feito pela comunidade' },
]

export const tracks = [
  { color: 'var(--blue)', name: 'IA + Dados', desc: 'Gemini, Build with AI, machine learning e ciência de dados.' },
  { color: 'var(--red)', name: 'Mobile', desc: 'Android, Flutter e desenvolvimento mobile moderno.' },
  { color: 'var(--green)', name: 'Web + Cloud', desc: 'Front-end, back-end, Firebase e Google Cloud.' },
  { color: 'var(--yellow)', name: 'Carreira', desc: 'Comunidade, soft skills e crescimento na carreira tech.' },
]

export const tickets = [
  {
    id: '1lot',
    name: '1º Lote',
    price: 'R$ 70',
    features: ['Melhor preço', 'Acesso a todas as palestras', 'Workshop hands-on', 'Kit + certificado'],
    ctaLabel: 'Encerrado',
    ctaHref: 'https://www.sympla.com.br/evento/google-i-o-extended-joao-pessoa/3464603',
    featured: false,
  },
  {
    id: '2lot',
    name: '2º Lote',
    price: 'R$ 80',
    open: true,
    features: ['Acesso a todas as palestras', 'Workshop hands-on', 'Kit + certificado'],
    ctaLabel: 'Inscreva-se agora',
    ctaHref: 'https://www.sympla.com.br/evento/google-i-o-extended-joao-pessoa/3464603',
    featured: true,
  },
  {
    id: '3lot',
    name: '3º Lote',
    price: 'Em breve',
    features: ['Acesso a todas as palestras', 'Workshop hands-on', 'Kit + certificado'],
    ctaLabel: 'Abre 04 JUL',
    ctaHref: 'https://www.sympla.com.br/evento/google-i-o-extended-joao-pessoa/3464603',
    featured: false,
  },
  {
    id: '4lot',
    name: '4º Lote',
    price: 'Em breve',
    features: ['Acesso a todas as palestras', 'Workshop hands-on', 'Kit + certificado'],
    ctaLabel: 'Abre 10 JUL',
    ctaHref: 'https://www.sympla.com.br/evento/google-i-o-extended-joao-pessoa/3464603',
    featured: false,
  },
]

export const faqItems = [
  {
    q: 'O evento é gratuito?',
    a: 'As inscrições funcionam por lotes com preços progressivos. O 2º lote está aberto por R$ 80. Os próximos lotes abrem em 04/07 e 10/07.',
    open: true,
  },
  {
    q: 'Preciso ser desenvolvedor para participar?',
    a: 'Não! O evento é aberto a estudantes, curiosos, profissionais de tecnologia e qualquer pessoa interessada em IA, desenvolvimento e na comunidade Google.',
    open: false,
  },
  {
    q: 'Vou receber certificado?',
    a: 'Sim. Todos os participantes inscritos recebem certificado de participação após o evento.',
    open: false,
  },
  {
    q: 'Como envio uma palestra (Call for Papers)?',
    a: 'O formulário de Call for Papers será aberto em breve. Acompanhe o anúncio no Instagram @gdgjoaopessoa para enviar sua proposta dentro do prazo.',
    open: false,
  },
  {
    q: 'Como me torno voluntário?',
    a: 'Abriremos um formulário de inscrição para voluntários em breve. As vagas são limitadas e divulgadas pelas nossas redes.',
    open: false,
  },
  {
    q: 'Tem estacionamento no local?',
    a: 'Sim, o UNIESP Centro Universitário (Cabedelo-PB) conta com estacionamento. Recomendamos chegar com antecedência no credenciamento, às 08h.',
    open: false,
  },
]

export const scheduleItems = {
  morning: [
    { time: '08:00', title: 'Credenciamento & café', sub: 'Boas-vindas e networking inicial', type: 'br', label: 'Abertura' },
    { time: '09:00', title: 'Abertura oficial', sub: 'Boas-vindas do GDG João Pessoa', type: 'br', label: 'Abertura' },
    { time: '09:20', title: 'Keynote 1', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
    { time: '10:00', title: 'Keynote 2', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
    { time: '10:40', title: 'Keynote 3', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
    { time: '11:20', title: 'Keynote 4', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
  ],
  afternoon: [
    {
      trackClass: 'b', trackName: 'IA + Dados', location: 'Palco Principal',
      items: [
        { time: '13:00', title: 'Palestra', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
        { time: '13:40', title: 'Palestra', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
        { time: '14:20', title: 'Palestra', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
      ],
    },
    {
      trackClass: 'r', trackName: 'Mobile', location: 'Trilha Mobile',
      items: [
        { time: '13:00', title: 'Workshop', sub: 'Em breve · até 14h20', tba: true, type: 'w', label: 'Workshop' },
        { time: '14:20', title: 'Workshop', sub: 'Em breve', tba: true, type: 'w', label: 'Workshop' },
      ],
    },
    {
      trackClass: 'g', trackName: 'Web + Cloud', location: 'Trilha Web + Cloud',
      items: [
        { time: '13:00', title: 'Workshop', sub: 'Em breve · até 14h20', tba: true, type: 'w', label: 'Workshop' },
        { time: '14:20', title: 'Workshop', sub: 'Em breve', tba: true, type: 'w', label: 'Workshop' },
      ],
    },
    {
      trackClass: 'y', trackName: 'Carreira', location: 'Trilha Carreira',
      items: [
        { time: '13:00', title: 'Workshop', sub: 'Em breve · até 14h20', tba: true, type: 'w', label: 'Workshop' },
        { time: '14:20', title: 'Workshop', sub: 'Em breve', tba: true, type: 'w', label: 'Workshop' },
      ],
    },
    {
      trackClass: 'ink', trackName: 'Laboratório 1', location: 'Laboratório 1',
      items: [
        { time: '13:00', title: 'Oficina', sub: 'Até 15h00 · 2h de duração', type: 'w', label: 'Oficina' },
      ],
    },
    {
      trackClass: 'ink', trackName: 'Laboratório 2', location: 'Laboratório 2',
      items: [
        { time: '13:00', title: 'Oficina', sub: 'Até 15h00 · 2h de duração', tba: true, type: 'w', label: 'Oficina' },
      ],
    },
  ],
  closing: [
    { time: '15:30', title: 'Keynote 5', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
    { time: '16:10', title: 'Keynote 6', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
    { time: '17:00', title: 'Encerramento, sorteios e foto oficial 🎬', sub: 'Agradecimentos finais', type: 'br', label: 'Encerramento' },
  ],
}
