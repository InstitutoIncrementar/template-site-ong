import { Container } from './Container'
import { Button } from './Button'
import { hasValue } from '../lib/utils'

export function Hero({ hero }) {
  return (
    <section id="top" aria-label="Apresentação" className="py-16 md:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          {hasValue(hero.eyebrow) && (
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              {hero.eyebrow}
            </span>
          )}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{hero.title}</h1>
          <p className="max-w-xl text-lg text-ink/70">{hero.subtitle}</p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            {hasValue(hero.primaryCta?.label) && (
              <Button href={hero.primaryCta.url}>{hero.primaryCta.label}</Button>
            )}
            {hasValue(hero.secondaryCta?.label) && (
              <Button href={hero.secondaryCta.url} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            )}
          </div>
        </div>

        {hasValue(hero.image) && (
          <img src={hero.image} alt="" className="mx-auto w-full max-w-md rounded-3xl" />
        )}
      </Container>
    </section>
  )
}
