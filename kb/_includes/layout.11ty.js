exports.render = (data) => `
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&family=Satisfy&display=swap">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>

    <link rel="stylesheet" href="/_assets/markdown-theme.css">
    <link rel="stylesheet" href="/_assets/ix-tp-kb.css">
  </head>
  <body>
      <header>
          <section>
            <a
                href="https://truepool.io"
                target="_blank"
                height="32px"
            >
                <img class="logo" src="/_assets/img/logo-with-text.png">
            </a>
    
            <div class="header-links">
                <a class="header-link" href="https://truepool.io/news" target="_blank">News</a>
                <a class="header-link" href="https://truepool.io/stats" target="_blank">Stats</a>
                <a class="header-link" href="https://truepool.io/farmers" target="_blank">Farmers</a>
                <a class="header-link" href="https://truepool.io/kb" target="_blank">Knowledge Base</a>
                <button class="join">
                    <a href="https://truepool.io/pages/join-truepool" target="_blank">Join</a>
                </button>
                <div class="mobile-menu-toggle" id="mobileMenuToggle" onclick="toggleMenu()">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
        </section>
    </header>

    <section class="content">
      <a href="/" style="margin-bottom: var(--space-md)">KNOWLEDGE BASE</a>
      ${data.content}
    </section>

    <section id="menuPanel">                  
        <a class="menu-link" href="https://truepool.io/news">News</a>
        <a class="menu-link" href="https://truepool.io/stats">Stats</a>
        <a class="menu-link" href="https://truepool.io/farmers">Farmers</a>
        <a class="menu-link" href="https://truepool.io/kb/v1/">Knowledge Base</a>
        <button class="join header-link">
            <a href="https://truepool.io/pages/join-truepool" target="_blank">Join</a>
        </button>
    </section>
    <script>
        function toggleMenu() {
            document.getElementById('menuPanel').classList.toggle('open');
            document.getElementById('mobileMenuToggle').classList.toggle('open')
        }
    </script>
  </body>
</html>
`;
