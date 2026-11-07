import ThemeToggle from './components/theme-toggle';
import { about, comingSoon, howIWork, links, tagline, work } from './content';

const Root = () => (
  <div className="wrap">
    <header className="top">
      <a className="mark" href="#top" aria-label="Kaio Silveira, home">
        K.S.
      </a>
      <ThemeToggle />
    </header>

    <main>
      <section className="hero" id="top">
        <p className="kicker">Software Architect</p>
        <h1 className="name">
          <span className="first">Kaio</span> <span className="last">Silveira</span>
        </h1>
        <div className="hero-foot">
          <p className="role">
            <b>Software architect</b>
            <br />
            Lisbon, building at Bloqit
          </p>
          <p className="tagline">{tagline}</p>
        </div>
      </section>

      <section className="block" aria-labelledby="about-h">
        <h2 className="label" id="about-h">
          About
        </h2>
        <div className="prose">
          <p className="lead">{about.lead}</p>
          {about.paragraphs.map(p => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="how-h">
        <h2 className="label" id="how-h">
          How I work
        </h2>
        <ol className="principles prose">
          {howIWork.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="block" aria-labelledby="work-h">
        <h2 className="label" id="work-h">
          Selected work
        </h2>
        <div className="cards">
          {work.map(w => (
            <a className="card" href={w.href} key={w.href} target="_blank" rel="noopener noreferrer">
              <span className="go" aria-hidden="true">
                ↗
              </span>
              <p className="src">
                After {w.author}, <i>{w.book}</i>
              </p>
              <h3>{w.title}</h3>
              <p className="desc">{w.description}</p>
              <ul className="tags">
                {w.tags.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          ))}
          <div className="card soon">
            <p className="src">Coming soon</p>
            <h3>{comingSoon.title}</h3>
            <p className="desc">{comingSoon.description}</p>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="links-h">
        <h2 className="label" id="links-h">
          Elsewhere
        </h2>
        <ul className="links prose">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer me">
                {l.label} <span>{l.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>

    <footer>
      <span>© {new Date().getFullYear()} Kaio Silveira</span>
    </footer>
  </div>
);

export default Root;
