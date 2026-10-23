import { Container } from './Container'
import { SectionTitle } from './SectionTitle'
import { hasValue } from '../lib/utils'

export function Projetos({ projetos }) {
  if (!projetos.items?.length) return null

  return (
    <section id="projetos" aria-label={projetos.title} className="py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle eyebrow={projetos.eyebrow} title={projetos.title} subtitle={projetos.intro} />

        <ul className="grid gap-6 md:grid-cols-3">
          {projetos.items.map((item, index) => (
            <li
              key={`${item.title}-${index}`}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white"
            >
              {hasValue(item.image) && (
                <img src={item.image} alt="" className="aspect-[4/3] w-full object-cover" />
              )}
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-ink/70">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
