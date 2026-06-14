export const EVENT_DATE = '2026-07-18T08:00:00-03:00'

export const stats = [
  { n: '+500', l: 'participantes esperados' },
  { n: '14', l: 'keynotes, palestras e oficinas' },
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
    price: 'Em breve',
    features: ['Melhor preço', 'Acesso a todas as palestras', 'Workshop hands-on', 'Kit + certificado'],
    ctaLabel: 'Abre 15 JUN · 12h',
    ctaHref: '#',
    featured: true,
  },
  {
    id: '2lot',
    name: '2º Lote',
    price: 'Em breve',
    features: ['Acesso a todas as palestras', 'Workshop hands-on', 'Kit + certificado'],
    ctaLabel: 'Em breve',
    ctaHref: '#',
    featured: false,
  },
  {
    id: '3lot',
    name: '3º Lote',
    price: 'Em breve',
    features: ['Acesso a todas as palestras', 'Workshop hands-on', 'Kit + certificado'],
    ctaLabel: 'Em breve',
    ctaHref: '#',
    featured: false,
  },
  {
    id: '4lot',
    name: '4º Lote',
    price: 'Em breve',
    features: ['Acesso a todas as palestras', 'Workshop hands-on', 'Kit + certificado'],
    ctaLabel: 'Em breve',
    ctaHref: '#',
    featured: false,
  },
]

export const faqItems = [
  {
    q: 'O evento é gratuito?',
    a: 'As inscrições funcionam por lotes. Os valores e a data de abertura de cada lote serão divulgados em breve nas nossas redes — o 1º lote começa em 15 de junho, às 12h.',
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
    { time: '10:10', title: 'Keynote 2', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
    { time: '11:00', title: 'Keynote 3', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
  ],
  afternoon: [
    {
      trackClass: 'b', trackName: 'IA + Dados', location: 'Palco Principal',
      items: [
        { time: '13:30', title: 'Palestra 1', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
        { time: '14:20', title: 'Palestra 2', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
      ],
    },
    {
      trackClass: 'r', trackName: 'Mobile', location: 'Sala 1',
      items: [
        { time: '13:30', title: 'Palestra 3', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
        { time: '14:20', title: 'Palestra 4', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
      ],
    },
    {
      trackClass: 'g', trackName: 'Web + Cloud', location: 'Sala 2',
      items: [
        { time: '13:30', title: 'Palestra 5', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
        { time: '14:20', title: 'Palestra 6', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
      ],
    },
    {
      trackClass: 'y', trackName: 'Carreira', location: 'Sala 3',
      items: [
        { time: '13:30', title: 'Palestra 7', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
        { time: '14:20', title: 'Palestra 8', sub: 'Em breve', tba: true, type: 't', label: 'Palestra' },
      ],
    },
    {
      trackClass: 'ink', trackName: 'Oficinas hands-on', location: 'Laboratórios 1 e 2',
      items: [
        { time: '13:30', title: 'Oficina 1', sub: 'Em breve · Laboratório 1', tba: true, type: 'w', label: 'Oficina' },
        { time: '13:30', title: 'Oficina 2', sub: 'Em breve · Laboratório 2', tba: true, type: 'w', label: 'Oficina' },
      ],
    },
  ],
  closing: [
    { time: '15:40', title: 'Keynote 6', sub: 'Em breve', tba: true, type: 'k', label: 'Keynote' },
    { time: '16:40', title: 'Encerramento, sorteios e foto oficial 🎬', sub: 'Agradecimentos finais', type: 'br', label: 'Encerramento' },
  ],
}
