import { Container } from './Container'

export function Footer({ settings }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper-dark py-8">
      <Container className="flex flex-col gap-2 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
        <span className="flex items-center gap-2 font-semibold text-ink">
          <img src={settings.logo} alt="" className="h-6 w-6" />
          {settings.siteName}
        </span>
        <p>
          © {year} {settings.siteName}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}
