export function Header({ title, children }) {
  return <>
    {/* <Head>
      <title>{title}</title>
    </Head> */}
    <header className="hero is-small">
      <div className="hero-head">{children}</div>
    </header>
  </>
}