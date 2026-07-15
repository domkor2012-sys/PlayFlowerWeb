<!doctype html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="PlayFlower — klimatyczny serwer Minecraft z Survivalem, OneBlockiem, WaterBlockiem i wyjątkowymi minigrami.">
  <meta name="theme-color" content="#080b18">
  <meta property="og:title" content="PlayFlower — Minecraft Network">
  <meta property="og:description" content="Wejdź do świata PlayFlower. Survival, OneBlock, WaterBlock, minigry i wyjątkowa społeczność.">
  <meta property="og:image" content="logo-playflower.png">
  <title>PlayFlower — Minecraft Network</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="stats.css">
</head>
<body>
  <div class="ambient" aria-hidden="true"><span></span><span></span><span></span></div>

  <header class="header" id="header">
    <a class="brand" href="#start" aria-label="PlayFlower — strona główna">
      <img src="logo-playflower.png" alt="Logo PlayFlower">
      <span><b>PlayFlower</b><small>Minecraft Network</small></span>
    </a>
    <button class="menu-button" id="menuButton" aria-label="Otwórz menu" aria-expanded="false"><i></i><i></i><i></i></button>
    <nav class="nav" id="nav">
      <a href="#tryby">Tryby</a><a href="#dlaczego">Dlaczego my?</a><a href="#dolacz">Jak dołączyć?</a>
      <a class="nav-discord" href="https://discord.gg/nn8P6C8NCT" target="_blank" rel="noopener">Discord <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section class="hero" id="start">
      <div class="hero-copy reveal">
        <div class="badge checking" id="serverBadge"><span></span><b id="serverBadgeText">Sprawdzanie serwera…</b></div>
        <h1>Twój świat.<br><span>Twoja przygoda.</span></h1>
        <p>Odkrywaj, buduj i rywalizuj na klimatycznym serwerze Minecraft, na którym zawsze znajdziesz coś dla siebie.</p>
        <div class="hero-actions">
          <button class="primary copy-ip" data-ip="playflower.blackhost.pl"><span>playflower.blackhost.pl</span><b>Skopiuj IP</b></button>
          <a class="secondary" href="https://discord.gg/nn8P6C8NCT" target="_blank" rel="noopener">Dołącz do Discorda <span>↗</span></a>
        </div>
        <div class="hero-notes"><span>✓ Minecraft Java</span><span>✓ Aktywna społeczność</span><span>✓ Regularne eventy</span></div>
      </div>

      <div class="hero-visual reveal">
        <div class="visual-glow"></div>
        <div class="server-window">
          <div class="window-bar"><div><i></i><i></i><i></i></div><span>playflower.network</span><b>✦</b></div>
          <div class="server-content">
            <div class="logo-wrap"><div class="logo-ring"></div><img src="logo-playflower.png" alt="PlayFlower"></div>
            <p class="mini-label">WITAJ W</p><h2>PlayFlower</h2><p>Survival · OneBlock · WaterBlock · Minigry</p>
            <div class="live-status"><span class="pulse"></span><div><small>STATUS SERWERA</small><b id="statusText">ONLINE</b></div><strong id="playerCount">DOŁĄCZ DO NAS</strong></div>
          </div>
        </div>
        <div class="float-card card-one"><span>✿</span><div><b>Kwiatki</b><small>Unikalna ekonomia</small></div></div>
        <div class="float-card card-two"><span>🏆</span><div><b>Eventy</b><small>Rywalizuj i wygrywaj</small></div></div>
      </div>
      <a class="scroll" href="#tryby" aria-label="Przewiń do trybów"><span>↓</span> Odkryj więcej</a>
    </section>

    <section class="stats-strip" aria-label="Statystyki serwera PlayFlower">
      <div class="stats-head reveal">
        <div><p class="kicker">PLAYFLOWER NA ŻYWO</p><h2>Nasza społeczność w liczbach</h2></div>
        <small id="statsUpdated">Aktualizowanie danych…</small>
      </div>
      <div class="stats-grid">
        <article class="stat-card reveal"><span class="stat-icon green">●</span><div><strong id="statOnline">—</strong><p>graczy online</p></div></article>
        <article class="stat-card reveal"><span class="stat-icon cyan">7D</span><div><strong id="statWeek">—</strong><p>graczy w tygodniu</p></div></article>
        <article class="stat-card reveal"><span class="stat-icon violet">30D</span><div><strong id="statMonth">—</strong><p>graczy w miesiącu</p></div></article>
        <article class="stat-card reveal"><span class="stat-icon gold">★</span><div><strong id="statRecord">—</strong><p>rekord online</p></div></article>
      </div>
    </section>

    <section class="section modes" id="tryby">
      <div class="section-heading reveal"><div><p class="kicker">WYBIERZ SWÓJ ŚWIAT</p><h2>Przygoda dla każdego</h2></div><p>Od spokojnego budowania i rozwijania ekonomii po dynamiczne minigry pełne emocji.</p></div>
      <div class="mode-grid">
        <article class="mode-card featured reveal"><div class="mode-top"><span class="icon violet">⛏</span><span class="tag">KLASYKA</span></div><h3>Survival</h3><p>Buduj, eksploruj i rozwijaj własną historię w świecie z wyjątkową ekonomią opartą na Kwiatkach.</p><div class="mode-meta"><span>🌍 Otwarty świat</span><span>✿ Ekonomia</span></div></article>
        <article class="mode-card reveal"><div class="mode-top"><span class="icon blue">◈</span></div><h3>OneBlock</h3><p>Zacznij od jednego bloku i stwórz z niego niezwykłą, rozbudowaną wyspę.</p><div class="mode-meta"><span>🧱 Rozwój wyspy</span></div></article>
        <article class="mode-card reveal"><div class="mode-top"><span class="icon cyan">≋</span></div><h3>WaterBlock</h3><p>Nietypowy wodny start, który sprawdzi Twoją pomysłowość i umiejętność przetrwania.</p><div class="mode-meta"><span>💧 Wodne wyzwanie</span></div></article>
        <article class="mode-card reveal"><div class="mode-top"><span class="icon gold">✦</span></div><h3>LuckyBlock</h3><p>Rozbij blok i sprawdź szczęście. Czeka na Ciebie nagroda albo niebezpieczna pułapka.</p><div class="mode-meta"><span>🎁 Losowe nagrody</span></div></article>
        <article class="mode-card compact reveal"><span class="icon red">▦</span><div><h3>TNT Run</h3><p>Biegnij po znikających blokach i zostań na arenie najdłużej.</p></div></article>
        <article class="mode-card compact reveal"><span class="icon blue">➤</span><div><h3>BoatRun</h3><p>Dynamiczna walka o punkty na wodzie — liczą się szybkość i refleks.</p></div></article>
        <article class="mode-card compact reveal"><span class="icon pink">◇</span><div><h3>Flower Build</h3><p>Buduj na czas, oceniaj innych i pokaż wszystkim swoją kreatywność.</p></div></article>
        <article class="mode-card compact reveal"><span class="icon green">♫</span><div><h3>Strefa odpoczynku</h3><p>Chill music, tryb AFK i nagrody podczas spokojnego odpoczynku.</p></div></article>
      </div>
    </section>

    <section class="why" id="dlaczego">
      <div class="why-inner">
        <div class="why-copy reveal"><p class="kicker">WIĘCEJ NIŻ SERWER</p><h2>Miejsce, do którego chce się wracać</h2><p>PlayFlower łączy dopracowaną rozgrywkę, przyjazną atmosferę i systemy, które nagradzają Twoją aktywność.</p><a href="https://discord.gg/nn8P6C8NCT" target="_blank" rel="noopener">Poznaj naszą społeczność <span>→</span></a></div>
        <div class="benefits">
          <article class="reveal"><span>✿</span><div><h3>Kwiatki</h3><p>Zdobywaj walutę serwera za aktywność i wymieniaj ją na nagrody.</p></div></article>
          <article class="reveal"><span>🎁</span><div><h3>Codzienne bonusy</h3><p>Wracaj każdego dnia po nowe nagrody i rozwijaj swoją serię.</p></div></article>
          <article class="reveal"><span>♫</span><div><h3>Chill AFK</h3><p>Odpocznij przy muzyce i zdobywaj bonusy między rozgrywkami.</p></div></article>
          <article class="reveal"><span>🏆</span><div><h3>Eventy</h3><p>Bierz udział w wydarzeniach, rywalizuj i zdobywaj wyjątkowe nagrody.</p></div></article>
        </div>
      </div>
    </section>

    <section class="join section" id="dolacz">
      <div class="join-box reveal">
        <div class="join-copy"><p class="kicker">GOTOWY NA START?</p><h2>Dołącz do PlayFlower</h2><p>Trzy proste kroki dzielą Cię od rozpoczęcia nowej przygody.</p></div>
        <div class="steps"><article><b>01</b><span>Uruchom</span><h3>Minecraft Java</h3></article><i>→</i><article><b>02</b><span>Wybierz</span><h3>Tryb wieloosobowy</h3></article><i>→</i><article><b>03</b><span>Dodaj adres</span><h3>playflower.blackhost.pl</h3></article></div>
        <div class="join-actions"><button class="primary copy-ip" data-ip="playflower.blackhost.pl"><span>playflower.blackhost.pl</span><b>Skopiuj IP</b></button><a class="secondary" href="https://discord.gg/nn8P6C8NCT" target="_blank" rel="noopener">Discord <span>↗</span></a></div>
      </div>
    </section>
  </main>

  <footer><div class="footer-main"><a class="brand" href="#start"><img src="logo-playflower.png" alt=""><span><b>PlayFlower</b><small>Minecraft Network</small></span></a><p>Twój świat. Twoja przygoda.<br>Dołącz i zostań na dłużej.</p><nav><a href="#tryby">Tryby gry</a><a href="#dlaczego">Dlaczego my?</a><a href="#dolacz">Jak dołączyć?</a></nav><div class="footer-contact"><a href="https://discord.gg/nn8P6C8NCT" target="_blank" rel="noopener">Discord ↗</a><a href="mailto:playflowersupport@gmail.com">playflowersupport@gmail.com</a></div></div><div class="footer-bottom"><span>© <span id="year"></span> PlayFlower. Wszelkie prawa zastrzeżone.</span><span>Nie jesteśmy powiązani z Mojang Studios.</span></div></footer>
  <div class="toast" id="toast"><span>✓</span><div><b>Skopiowano adres!</b><small>playflower.blackhost.pl</small></div></div>
  <script src="script.js"></script>
</body>
</html>
