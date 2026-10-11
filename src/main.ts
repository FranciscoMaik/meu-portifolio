import './style.css'
import heroHexagonImg from './assets/hero-hexagon.jpg'
import campusImg from './assets/campus.jpg'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- CABEÇALHO & HERO -->
  <div class="header-hero-wrapper">
    <div class="container">
      <header class="navbar">
        <a href="#home" class="brand">
          <div class="brand-logo-wrap">
            <svg class="brand-hex-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="18,2 32,10 32,26 18,34 4,26 4,10"
                stroke="#10c695"
                stroke-width="2.5"
                fill="rgba(16, 198, 149, 0.15)"
              />
              <path
                d="M11 23V13L18 19L25 13V23"
                stroke="#10c695"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="brand-name">ABDUL MO<i class="dot-i">I</i>Z</span>
          </div>
          <span class="brand-role">DESIGNER DE UI/UX</span>
        </a>

        <div class="nav-right">
          <ul class="nav-links">
            <li><a href="#home" class="active">Início</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#about">Sobre Mim</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>

          <div class="search-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Pesquisar" aria-label="Pesquisar" />
            <div class="search-pill-cap"></div>
          </div>
        </div>
      </header>

      <section id="home" class="hero-section">
        <div class="hero-content">
          <p class="hero-greeting">Olá, <span>eu sou</span></p>
          <h1 class="hero-title">ABDUL MOIZ GHANI</h1>
          <p class="hero-subtitle">Designer de UI/UX e Designer de Logotipos</p>
          <p class="hero-description">
            Sou apaixonado por criar interfaces digitais intuitivas, modernas e
            centradas no usuário. Transformo ideias complexas em experiências
            visuais elegantes e funcionais para sites, aplicativos móveis e
            identidades visuais de marcas.
          </p>

          <button type="button" class="btn-chat" id="chatBtn">Vamos conversar</button>

          <div class="hero-social">
            <span class="hero-social-label">Siga-me em :</span>
            <!-- Twitter -->
            <a href="#contact" class="social-icon-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <!-- LinkedIn -->
            <a href="#contact" class="social-icon-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <!-- Facebook -->
            <a href="#contact" class="social-icon-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
              </svg>
            </a>
            <!-- Instagram -->
            <a href="#contact" class="social-icon-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hex-portrait-wrapper">
            <img src="${heroHexagonImg}" alt="Abdul Moiz Ghani" class="hex-portrait-img" />
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- QUEM SOU EU & O QUE EU FAÇO -->
  <section id="about" class="about-services-section">
    <div class="container">
      <div class="who-im-row">
        <div class="who-im-content">
          <h2 class="section-label-title">Quem <span class="accent-text">Sou Eu</span></h2>
          <h3 class="who-headline">Sou estudante e curso Ciência da Computação</h3>
          <p class="who-subheadline">na <span>UNIVERSIDADE DE KARACHI (UBIT)</span></p>
          <p class="who-tools">Utilizo o Adobe XD e também o Figma para <span>Designs de UI</span></p>
        </div>

        <div class="campus-image-card">
          <img src="${campusImg}" alt="Universidade de Karachi (UBIT)" />
        </div>
      </div>

      <div class="what-i-do-block">
        <div class="what-i-do-header">
          <h2 class="what-i-do-title">O Que Eu Faço</h2>
          <p class="what-i-do-subtitle">Meus <span>serviços</span></p>
        </div>

        <div class="services-grid">
          <!-- Card 1: DESIGNER DE UI/UX -->
          <div class="service-card">
            <h3 class="service-card-title">DESIGNER DE UI/UX</h3>
            <div class="service-icon-wrap">
              <svg width="96" height="80" viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Mesa -->
                <rect x="14" y="64" width="68" height="4" rx="2" fill="#e2e8f0" />
                <!-- Pessoa -->
                <circle cx="52" cy="24" r="9" fill="#f1c27d" />
                <path d="M43 21C43 16 47 13 52 13C57 13 61 16 61 21C58 19 46 19 43 21Z" fill="#1e293b" />
                <path d="M36 58C36 44 43 37 52 37C61 37 68 44 68 58H36Z" fill="#0f172a" />
                <!-- Gravata / colarinho -->
                <path d="M48 37L52 45L56 37" fill="#ffffff" />
                <path d="M51 41L52 52L53 41Z" fill="#ef4444" />
                <!-- Notebook -->
                <rect x="26" y="42" width="30" height="20" rx="2" fill="#cbd5e1" stroke="#334155" stroke-width="1.5" />
                <rect x="29" y="45" width="24" height="14" rx="1" fill="#ffffff" />
                <rect x="22" y="61" width="38" height="3" rx="1.5" fill="#94a3b8" />
                <!-- Caneca -->
                <rect x="65" y="54" width="8" height="10" rx="1.5" fill="#f8fafc" />
                <path d="M73 56H75C76.1 56 77 56.9 77 58V60C77 61.1 76.1 62 75 62H73" stroke="#f8fafc" stroke-width="1.5" />
              </svg>
            </div>
            <p class="service-card-desc">
              Criação de interfaces modernas, protótipos interativos e
              experiências de usuário fluidas focadas em usabilidade e resultados.
            </p>
          </div>

          <!-- Card 2: DESIGNER DE LOGOTIPOS -->
          <div class="service-card">
            <h3 class="service-card-title">DESIGNER DE LOGOTIPOS</h3>
            <div class="service-icon-wrap">
              <svg width="110" height="76" viewBox="0 0 110 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="33" y="30" width="4.5" height="18" rx="1" fill="#e2e8f0" />
                <rect x="40" y="23" width="4.5" height="25" rx="1" fill="#94a3b8" />
                <rect x="47" y="16" width="4.5" height="32" rx="1" fill="#e2e8f0" />
                <path
                  d="M72 22C69.2 19 65.3 17.5 61 17.5C53.5 17.5 48 23.2 48 31.5C48 39.8 53.5 45.5 61 45.5C65.3 45.5 69.2 44 72 41"
                  stroke="#e2e8f0"
                  stroke-width="6"
                  stroke-linecap="round"
                />
                <text x="55" y="62" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="600" letter-spacing="1.4">
                  SUA MARCA
                </text>
              </svg>
            </div>
            <p class="service-card-desc">
              Desenvolvimento de logotipos exclusivos e identidades visuais
              marcantes que transmitem a essência e os valores do seu negócio.
            </p>
          </div>

          <!-- Card 3: WEB DESIGN -->
          <div class="service-card">
            <h3 class="service-card-title">WEB DESIGN</h3>
            <div class="service-icon-wrap">
              <svg width="96" height="76" viewBox="0 0 96 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Moldura do Notebook -->
                <rect x="18" y="16" width="60" height="40" rx="3" fill="#1e293b" stroke="#cbd5e1" stroke-width="2" />
                <rect x="22" y="20" width="52" height="32" fill="#f8fafc" />
                <!-- Interface Web na tela -->
                <rect x="22" y="20" width="52" height="6" fill="#334155" />
                <circle cx="25.5" cy="23" r="1.2" fill="#ef4444" />
                <circle cx="29" cy="23" r="1.2" fill="#fbbf24" />
                <circle cx="32.5" cy="23" r="1.2" fill="#10c695" />
                <!-- Blocos de conteúdo -->
                <rect x="26" y="30" width="20" height="10" rx="1" fill="#94a3b8" />
                <rect x="49" y="30" width="21" height="3" rx="1" fill="#cbd5e1" />
                <rect x="49" y="35" width="16" height="3" rx="1" fill="#cbd5e1" />
                <rect x="26" y="43" width="13" height="6" rx="1" fill="#cbd5e1" />
                <rect x="41.5" y="43" width="13" height="6" rx="1" fill="#cbd5e1" />
                <rect x="57" y="43" width="13" height="6" rx="1" fill="#cbd5e1" />
                <!-- Base do Notebook -->
                <path d="M10 56H86L82 61H14L10 56Z" fill="#cbd5e1" />
              </svg>
            </div>
            <p class="service-card-desc">
              Planejamento e design de sites responsivos, páginas de destino e
              sistemas web com visual atraente e navegação intuitiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SEÇÃO DE PROJETOS -->
  <section id="projects" class="projects-section">
    <div class="projects-orb-left"></div>
    <div class="projects-orb-right"></div>

    <div class="container">
      <div class="projects-header">
        <h2 class="projects-title"><span>Projetos</span> que já realizei</h2>
        <p class="projects-desc">
          Confira alguns dos meus trabalhos recentes em design de interfaces
          móveis, sistemas web e identidade visual, desenvolvidos com atenção
          aos detalhes e foco na melhor experiência para o usuário.
        </p>
      </div>

      <div class="projects-grid">
        <!-- Card de Projeto 1 -->
        <div class="project-card">
          <div class="project-preview">
            <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="proj1Bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#8b7c8e" />
                  <stop offset="50%" stop-color="#a89fa3" />
                  <stop offset="100%" stop-color="#6b9e98" />
                </linearGradient>
              </defs>
              <rect width="280" height="150" fill="url(#proj1Bg)" />
              <!-- Tela 1 -->
              <rect x="18" y="25" width="52" height="100" rx="6" fill="#2b5856" stroke="#1f2937" stroke-width="1.5" />
              <circle cx="44" cy="55" r="10" fill="#10c695" opacity="0.7" />
              <rect x="28" y="75" width="32" height="4" rx="2" fill="#e2e8f0" opacity="0.8" />
              <rect x="33" y="83" width="22" height="3" rx="1.5" fill="#94a3b8" />
              <rect x="30" y="102" width="28" height="8" rx="4" fill="#ef4444" />

              <!-- Tela 2 -->
              <rect x="82" y="25" width="52" height="100" rx="6" fill="#1e293b" stroke="#0f172a" stroke-width="1.5" />
              <rect x="88" y="35" width="40" height="22" rx="3" fill="#334155" />
              <circle cx="96" cy="46" r="5" fill="#ef4444" />
              <rect x="88" y="63" width="18" height="22" rx="3" fill="#2b5856" />
              <rect x="110" y="63" width="18" height="22" rx="3" fill="#3b4252" />
              <rect x="88" y="91" width="40" height="18" rx="3" fill="#334155" />

              <!-- Tela 3 -->
              <rect x="146" y="25" width="52" height="100" rx="6" fill="#23393d" stroke="#0f172a" stroke-width="1.5" />
              <circle cx="172" cy="52" r="14" fill="#ef4444" opacity="0.85" />
              <rect x="154" y="74" width="36" height="5" rx="2" fill="#f8fafc" />
              <rect x="158" y="83" width="28" height="3" rx="1.5" fill="#94a3b8" />
              <rect x="156" y="102" width="32" height="9" rx="4" fill="#10c695" />

              <!-- Tela 4 -->
              <rect x="210" y="25" width="52" height="100" rx="6" fill="#1e293b" stroke="#0f172a" stroke-width="1.5" />
              <rect x="216" y="35" width="40" height="26" rx="3" fill="#ef4444" opacity="0.8" />
              <rect x="216" y="67" width="40" height="12" rx="2" fill="#334155" />
              <rect x="216" y="84" width="40" height="12" rx="2" fill="#334155" />
              <rect x="222" y="104" width="28" height="8" rx="4" fill="#10c695" />
            </svg>
          </div>
        </div>

        <!-- Card de Projeto 2 -->
        <div class="project-card">
          <div class="project-preview">
            <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg">
              <rect width="280" height="150" fill="#4b4436" />
              <!-- Página Esquerda -->
              <rect x="22" y="12" width="110" height="126" rx="2" fill="#f8fafc" />
              <circle cx="52" cy="40" r="18" fill="#eab308" />
              <rect x="78" y="26" width="44" height="5" rx="1" fill="#1e293b" />
              <rect x="78" y="35" width="36" height="3" rx="1" fill="#64748b" />
              <rect x="78" y="42" width="40" height="3" rx="1" fill="#94a3b8" />
              <rect x="32" y="70" width="90" height="4" rx="1" fill="#1e293b" />
              <rect x="32" y="80" width="84" height="3" rx="1" fill="#94a3b8" />
              <rect x="32" y="87" width="76" height="3" rx="1" fill="#94a3b8" />
              <polygon points="22,115 65,115 45,138 22,138" fill="#eab308" />
              <polygon points="65,122 132,105 132,138 50,138" fill="#1e293b" />

              <!-- Página Direita -->
              <rect x="146" y="12" width="112" height="126" rx="2" fill="#ffffff" />
              <rect x="146" y="12" width="38" height="126" fill="#1e293b" />
              <circle cx="165" cy="36" r="9" fill="#eab308" />
              <rect x="154" y="54" width="22" height="3" rx="1" fill="#f8fafc" />
              <rect x="154" y="62" width="18" height="2" rx="1" fill="#94a3b8" />
              <rect x="154" y="68" width="20" height="2" rx="1" fill="#94a3b8" />

              <rect x="194" y="24" width="52" height="6" rx="1" fill="#eab308" />
              <rect x="194" y="36" width="52" height="28" rx="2" fill="#f1f5f9" />
              <rect x="194" y="72" width="24" height="24" rx="2" fill="#eab308" opacity="0.85" />
              <rect x="222" y="72" width="24" height="24" rx="2" fill="#e2e8f0" />
              <rect x="194" y="104" width="52" height="4" rx="1" fill="#334155" />
              <rect x="194" y="112" width="40" height="3" rx="1" fill="#94a3b8" />
            </svg>
          </div>
        </div>

        <!-- Card de Projeto 3 -->
        <div class="project-card">
          <div class="project-preview">
            <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg">
              <rect width="280" height="150" fill="#94a3b8" />
              <!-- Tela 1 -->
              <rect x="16" y="20" width="54" height="110" rx="5" fill="#ffffff" />
              <rect x="22" y="30" width="42" height="6" rx="1" fill="#1e293b" />
              <rect x="22" y="42" width="42" height="3" rx="1" fill="#94a3b8" />
              <rect x="22" y="49" width="36" height="3" rx="1" fill="#94a3b8" />
              <rect x="22" y="60" width="42" height="32" rx="3" fill="#e2e8f0" />
              <rect x="22" y="98" width="42" height="20" rx="3" fill="#1e293b" />

              <!-- Tela 2 -->
              <rect x="80" y="20" width="54" height="110" rx="5" fill="#f8fafc" />
              <circle cx="107" cy="42" r="11" fill="#ef4444" />
              <rect x="88" y="60" width="38" height="4" rx="1" fill="#1e293b" />
              <rect x="92" y="68" width="30" height="3" rx="1" fill="#94a3b8" />
              <rect x="88" y="80" width="17" height="17" rx="3" fill="#fee2e2" />
              <rect x="109" y="80" width="17" height="17" rx="3" fill="#fee2e2" />
              <rect x="88" y="103" width="38" height="16" rx="3" fill="#ef4444" />

              <!-- Tela 3 -->
              <rect x="144" y="20" width="54" height="110" rx="5" fill="#ffffff" />
              <rect x="144" y="20" width="54" height="28" rx="5" fill="#ef4444" />
              <rect x="152" y="56" width="38" height="14" rx="2" fill="#f1f5f9" />
              <rect x="152" y="75" width="38" height="14" rx="2" fill="#f1f5f9" />
              <rect x="152" y="94" width="38" height="14" rx="2" fill="#f1f5f9" />
              <rect x="158" y="114" width="26" height="8" rx="4" fill="#ef4444" />

              <!-- Tela 4 -->
              <rect x="208" y="20" width="54" height="110" rx="5" fill="#1e293b" />
              <rect x="214" y="30" width="42" height="35" rx="3" fill="#ef4444" />
              <circle cx="235" cy="47" r="8" fill="#fbbf24" />
              <rect x="214" y="73" width="42" height="18" rx="3" fill="#334155" />
              <rect x="214" y="97" width="42" height="22" rx="3" fill="#ef4444" opacity="0.85" />
            </svg>
          </div>
        </div>
      </div>

      <div class="carousel-dots" id="projectDots">
        <button type="button" class="carousel-dot active" aria-label="Projeto 1"></button>
        <button type="button" class="carousel-dot" aria-label="Projeto 2"></button>
        <button type="button" class="carousel-dot" aria-label="Projeto 3"></button>
        <button type="button" class="carousel-dot" aria-label="Projeto 4"></button>
      </div>
    </div>
  </section>

  <!-- SEÇÃO DE DEPOIMENTOS -->
  <section class="testimonials-section">
    <div class="container">
      <div class="testimonials-header">
        <span class="testimonials-eyebrow">DEPOIMENTOS</span>
        <h2 class="testimonials-title">O que os clientes dizem</h2>
      </div>

      <div class="testimonials-grid">
        <!-- Cliente 1 -->
        <div class="testimonial-card">
          <div>
            <div class="testimonial-top">
              <div class="testimonial-avatar">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" fill="#1e293b" />
                  <circle cx="30" cy="23" r="11" fill="#e2b897" />
                  <path d="M19 20C19 13 24 10 30 10C36 10 41 13 41 20C37 17 23 17 19 20Z" fill="#27272a" />
                  <path d="M12 58C12 43 20 37 30 37C40 37 48 43 48 58H12Z" fill="#0f172a" />
                  <path d="M26 37L30 46L34 37" fill="#f8fafc" />
                </svg>
              </div>
              <div class="testimonial-author">
                <h4>James Gouse</h4>
                <p>DESIGNER DE UI/UX, ETC</p>
              </div>
            </div>
            <p class="testimonial-quote">
              Excelente profissional! Entregou o design do nosso aplicativo antes
              do prazo, com uma interface limpa, intuitiva e muito bem estruturada.
            </p>
          </div>
          <div class="testimonial-stars" aria-label="5 de 5 estrelas">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>

        <!-- Cliente 2 -->
        <div class="testimonial-card">
          <div>
            <div class="testimonial-top">
              <div class="testimonial-avatar">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" fill="#334155" />
                  <circle cx="30" cy="23" r="11" fill="#d4a373" />
                  <path d="M19 19C19 12 24 9 30 9C36 9 41 12 41 19C37 16 23 16 19 19Z" fill="#451a03" />
                  <path d="M12 58C12 43 20 37 30 37C40 37 48 43 48 58H12Z" fill="#1e293b" />
                  <path d="M25 37L30 45L35 37" fill="#38bdf8" />
                </svg>
              </div>
              <div class="testimonial-author">
                <h4>Michael Clarke</h4>
                <p>DESIGNER DE UI/UX, ETC</p>
              </div>
            </div>
            <p class="testimonial-quote">
              Fiquei impressionado com a qualidade e atenção aos detalhes. O novo
              layout do nosso site melhorou muito a experiência dos usuários.
            </p>
          </div>
          <div class="testimonial-stars" aria-label="5 de 5 estrelas">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>

        <!-- Cliente 3 -->
        <div class="testimonial-card">
          <div>
            <div class="testimonial-top">
              <div class="testimonial-avatar">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" fill="#3f3f46" />
                  <path d="M15 26C15 13 22 9 30 9C38 9 45 13 45 26C45 35 42 41 42 41H18C18 41 15 35 15 26Z" fill="#18181b" />
                  <circle cx="30" cy="24" r="10.5" fill="#f3d5b5" />
                  <path d="M14 58C14 44 21 38 30 38C39 38 46 44 46 58H14Z" fill="#be123c" />
                </svg>
              </div>
              <div class="testimonial-author">
                <h4>Amelia</h4>
                <p>DESIGNER DE UI/UX, ETC</p>
              </div>
            </div>
            <p class="testimonial-quote">
              Trabalho impecável na criação da identidade visual e dos protótipos
              no Figma. Comunicação clara e rápida durante todo o projeto.
            </p>
          </div>
          <div class="testimonial-stars" aria-label="5 de 5 estrelas">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>

        <!-- Cliente 4 -->
        <div class="testimonial-card">
          <div>
            <div class="testimonial-top">
              <div class="testimonial-avatar">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" fill="#475569" />
                  <path d="M16 27C16 14 22 10 30 10C38 10 44 14 44 27C44 36 41 42 41 42H19C19 42 16 36 16 27Z" fill="#451a03" />
                  <circle cx="30" cy="24" r="10.5" fill="#e6be9a" />
                  <path d="M14 58C14 44 21 38 30 38C39 38 46 44 46 58H14Z" fill="#0f766e" />
                </svg>
              </div>
              <div class="testimonial-author">
                <h4>Camilia</h4>
                <p>DESIGNER DE UI/UX, ETC</p>
              </div>
            </div>
            <p class="testimonial-quote">
              Superou todas as nossas expectativas! Transformou nossa ideia
              inicial em um produto visualmente incrível e muito fácil de usar.
            </p>
          </div>
          <div class="testimonial-stars" aria-label="5 de 5 estrelas">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RODAPÉ DE CONTATO -->
  <footer id="contact" class="contact-section">
    <div class="container">
      <h2 class="contact-title">Entre em Contato</h2>

      <div class="contact-grid">
        <div class="contact-socials">
          <a href="#contact" class="contact-social-item">
            <span class="contact-social-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </span>
            <span>ABDUL MOIZ GHANI</span>
          </a>

          <a href="#contact" class="contact-social-item">
            <span class="contact-social-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 3h-3a5 5 0 0 0-5 5v3H4v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </span>
            <span>ABDUL MOIZ GHANI</span>
          </a>

          <a href="#contact" class="contact-social-item">
            <span class="contact-social-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </span>
            <span>ABDUL MOIZ GHANI</span>
          </a>
        </div>

        <div class="contact-info-col">
          <p>TELEFONE : 03072285987</p>
          <p>E-MAIL : habibmoiz29@gmail.com</p>
          <p>Experiência : 8 Meses</p>
        </div>

        <div class="contact-right-col">
          <p>Suporte Completo ao Cliente</p>
          <p>Origem : PAQUISTÃO , KARACHI</p>
        </div>
      </div>
    </div>
  </footer>
`

// Indicadores interativos do carrossel
const dots = document.querySelectorAll<HTMLButtonElement>('#projectDots .carousel-dot')
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    dots.forEach((d) => d.classList.remove('active'))
    dot.classList.add('active')
  })
})

// Rolagem suave para a seção de contato ao clicar em "Vamos conversar"
const chatBtn = document.querySelector<HTMLButtonElement>('#chatBtn')
chatBtn?.addEventListener('click', () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
})
