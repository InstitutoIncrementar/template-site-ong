const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'border border-primary text-primary hover:bg-primary-light',
}

export function Button({ href, variant = 'primary', external = false, children }) {
  const externalProps = external ? { target: '_blank', rel: 'noreferrer noopener' } : {}

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${variants[variant]}`}
    >
      {children}
    </a>
  )
}
