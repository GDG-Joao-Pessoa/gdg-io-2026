import { MetadataRoute } from 'next'

const BASE = 'https://gdgjoaopessoa.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                           lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/palestrantes`,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/programacao`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/call-for-papers`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/voluntario`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/parceiro`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/kit-de-patrocinio`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ]
}
