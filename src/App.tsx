import { useState } from 'react'
import scholasticStudy from './assets/art/hero-scholastic.jpg'
import gesu from './assets/art/gesu-interior.jpg'
import jesuitEmblem from './assets/art/jesuit-ihs.svg'
import { community, instagramUrl, offerings, type Offering } from './content'
import './App.css'

function InterestLink({ children = 'Conversar pelo Instagram' }: { children?: string }) {
  return <a className="interest-link" href={instagramUrl} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">↗</span></a>
}

function OfferingRow({ offering }: { offering: Offering }) {
  return (
    <article className="offering-row" id={offering.id}>
      <div className="offering-index"><span>{offering.number}</span><i aria-hidden="true" /></div>
      <div className="offering-main">
        <p className="eyebrow">{offering.label}</p>
        <h3>{offering.title}</h3>
        <p className="offering-description">{offering.description}</p>
      </div>
      <div className="offering-more">
        <details>
          <summary>Informações <span aria-hidden="true">＋</span></summary>
          <div className="details-content">
            <ul>{offering.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
            {offering.publishedPrice && <p className="price-note">Valor divulgado: {offering.publishedPrice}. Sujeito a confirmação com o professor.</p>}
            <InterestLink>Consultar interesse</InterestLink>
          </div>
        </details>
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div className="top-rule" aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Prof. Geraldo Justiniano, voltar ao início">
            <img className="brand-mark" src={jesuitEmblem} alt="" aria-hidden="true" width="52" height="52" />
            <span className="brand-text"><strong>Geraldo Justiniano</strong><small>Filosofia &amp; Teologia</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'Fechar' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          </button>
          <nav id="main-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navegação principal">
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#atividades" onClick={closeMenu}>Formações</a>
            <a href="#apresentacao" onClick={closeMenu}>O professor</a>
            <a href="#comunidade" onClick={closeMenu}>Comunidade</a>
            <a className="nav-contact" href="#contato" onClick={closeMenu}>Entrar em contato <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-visual" aria-hidden="true"><img src={scholasticStudy} alt="" fetchPriority="high" /></div>
          <div className="hero-ring" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker"><span className="gold-line" /> Fides · Ratio · Traditio</p>
              <h1 id="hero-title">A busca da Verdade,<br />à luz da <em>Tradição.</em></h1>
              <p className="hero-lead">Um convite ao estudo da teologia católica e da filosofia clássica, em diálogo com o patrimônio intelectual da Igreja.</p>
              <div className="hero-actions">
                <a className="primary-link" href="#atividades">Conhecer as formações <span aria-hidden="true">↗</span></a>
                <a className="secondary-link" href="#apresentacao">Sobre o professor <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="hero-bottom">
              <span>Estudo visual · conteúdo em revisão</span>
              <a href="#apresentacao">Descubra <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="introduction" id="apresentacao" aria-labelledby="introduction-title">
          <div className="container introduction-grid">
            <div className="introduction-copy">
              <p className="eyebrow">O professor</p>
              <h2 id="introduction-title">Geraldo <em>Justiniano.</em></h2>
              <div className="introduction-footer">
                <p>Geraldo Justiniano dos Reis é teólogo autônomo e bacharel em Filosofia. Seu trabalho concentra-se no estudo da Escolástica, sobretudo da tradição suareziana. Atua oferecendo cursos e consultorias.</p>
                <span className="section-flourish" aria-hidden="true">✣</span>
              </div>
            </div>
          </div>
        </section>

        <section className="offerings" id="atividades" aria-labelledby="offerings-title">
          <div className="container">
            <div className="offerings-heading">
              <div><p className="eyebrow">Cursos e consultoria</p><h2 id="offerings-title">Caminhos de <em>estudo</em></h2></div>
              <p>Três formas de aprofundamento, cada uma com sua proposta. Selecione “Informações” para ver os dados atualmente disponíveis.</p>
            </div>
            <div className="offering-list">{offerings.map(offering => <OfferingRow key={offering.id} offering={offering} />)}</div>
          </div>
        </section>

        <section className="interlude" aria-label="Referência artística">
          <div className="interlude-image"><img src={gesu} alt="Interior da Igreja do Gesù, em Roma" loading="lazy" /></div>
          <div className="interlude-text">
            <p className="eyebrow">Arte e pensamento</p>
            <p>A riqueza da tradição visual. <em>A clareza necessária à leitura.</em></p>
            <span>Referência visual: Igreja do Gesù, Roma</span>
          </div>
        </section>

        <section className="community" id="comunidade" aria-labelledby="community-title">
          <div className="container community-grid">
            <div className="community-seal" aria-hidden="true"><span>EP</span><small>Comunidade</small></div>
            <div className="community-copy">
              <p className="eyebrow">Um espaço coletivo</p>
              <h2 id="community-title">{community.title}</h2>
              <p>{community.description}</p>
              <ul>{community.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
              <p className="community-note">Valor da assinatura e programação ainda não confirmados.</p>
            </div>
            <div className="community-action"><InterestLink>Conhecer a comunidade</InterestLink></div>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div><p className="eyebrow">Contato</p><h2 id="contact-title">Continue a <em>conversa.</em></h2></div>
            <div className="contact-side"><p>Para saber mais sobre as atividades e manifestar interesse, use o canal público do professor.</p><InterestLink>Visitar o Instagram</InterestLink></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main"><span>Prof. Geraldo Justiniano</span><a href="#inicio">Voltar ao início ↑</a></div>
        <div className="container credits">
          <span>Protótipo visual · Conteúdo em revisão</span>
          <span>Imagem conceitual do protótipo fornecido pelo usuário · <a href="https://commons.wikimedia.org/wiki/File:Interior_Gesu_Rome.jpg" target="_blank" rel="noopener noreferrer">Igreja do Gesù: Jastrow, domínio público</a>. Cortes e ajustes de cor aplicados.</span>
        </div>
      </footer>
    </>
  )
}

export default App
