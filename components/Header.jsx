'use client'

import { useState } from 'react'
import { Container } from './Container'
import { Button } from './Button'
import { hasValue } from '../lib/utils'

export function Header({ settings, links, cta }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <Container className="relative flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3" aria-label={`${settings.siteName} — início`}>
          <img src={settings.logo} alt="" className="h-9 w-9" />
          <span className="text-base font-bold">{settings.siteName}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-ink/80 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          {hasValue(cta.formUrl) && (
            <Button href={cta.formUrl} external>
              {cta.formLabel}
            </Button>
          )}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Navegação principal"
            className="absolute inset-x-0 top-full flex flex-col gap-5 border-t border-ink/10 bg-paper px-6 py-6 shadow-lg md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  )
}
