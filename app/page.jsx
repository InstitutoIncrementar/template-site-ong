import { getContent } from '../lib/content'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Sobre } from '../components/Sobre'
import { Projetos } from '../components/Projetos'
import { Equipe } from '../components/Equipe'
import { Parceiros } from '../components/Parceiros'
import { Contato } from '../components/Contato'
import { Footer } from '../components/Footer'

export default function Home() {
  const settings = getContent('settings')
  const hero = getContent('hero')
  const sobre = getContent('sobre')
  const projetos = getContent('projetos')
  const equipe = getContent('equipe')
  const parceiros = getContent('parceiros')
  const contato = getContent('contato')

  // Listas vazias no CMS escondem a seção inteira (e o link no menu).
  const links = [
    { id: 'sobre', label: 'Sobre' },
    projetos.items?.length > 0 && { id: 'projetos', label: 'Projetos' },
    equipe.items?.length > 0 && { id: 'equipe', label: 'Equipe' },
    parceiros.items?.length > 0 && { id: 'parceiros', label: 'Parceiros' },
    { id: 'contato', label: 'Contato' },
  ].filter(Boolean)

  return (
    <>
      <Header settings={settings} links={links} cta={contato} />
      <main>
        <Hero hero={hero} />
        <Sobre sobre={sobre} />
        <Projetos projetos={projetos} />
        <Equipe equipe={equipe} />
        <Parceiros parceiros={parceiros} />
        <Contato contato={contato} />
      </main>
      <Footer settings={settings} contato={contato} />
    </>
  )
}
