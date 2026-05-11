(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const media = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    const explicit = root.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') return explicit;
    return media.matches ? 'dark' : 'light';
  }

  function applyAria() {
    toggle.setAttribute('aria-pressed', currentTheme() === 'dark' ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    applyAria();
  });

  media.addEventListener('change', function () {
    if (!root.getAttribute('data-theme')) applyAria();
  });

  applyAria();
})();
