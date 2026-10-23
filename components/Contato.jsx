import { Container } from './Container'
import { SectionTitle } from './SectionTitle'
import { hasValue } from '../lib/utils'

export function Contato({ contato }) {
  return (
    <section id="contato" aria-label={contato.title} className="bg-primary py-20 text-white">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-md flex-col gap-6">
          <SectionTitle
            eyebrow={contato.eyebrow}
            title={contato.title}
            subtitle={contato.subtitle}
            tone="inverse"
          />
          {hasValue(contato.formUrl) && (
            <div>
              <a
                href={contato.formUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                {contato.formLabel}
              </a>
            </div>
          )}
        </div>

        <ul className="flex flex-col gap-4 text-base">
          {hasValue(contato.email) && (
            <li>
              <span className="block text-sm text-white/70">E-mail</span>
              <a href={`mailto:${contato.email}`} className="font-medium underline-offset-4 hover:underline">
                {contato.email}
              </a>
            </li>
          )}
          {hasValue(contato.phone) && (
            <li>
              <span className="block text-sm text-white/70">Telefone</span>
              <span className="font-medium">{contato.phone}</span>
            </li>
          )}
          {hasValue(contato.address) && (
            <li>
              <span className="block text-sm text-white/70">Endereço</span>
              <span className="font-medium">{contato.address}</span>
            </li>
          )}
          {contato.socials?.length > 0 && (
            <li>
              <span className="block text-sm text-white/70">Redes sociais</span>
              <span className="flex flex-wrap gap-x-4 gap-y-1">
                {contato.socials.map((social, index) => (
                  <a
                    key={`${social.label}-${index}`}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {social.label}
                  </a>
                ))}
              </span>
            </li>
          )}
        </ul>
      </Container>
    </section>
  )
}
