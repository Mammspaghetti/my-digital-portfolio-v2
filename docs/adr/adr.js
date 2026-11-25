// Theme toggle: follows the OS preference until the reader chooses explicitly.
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme');

  function systemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function stored() {
    try { return localStorage.getItem('adr-theme'); } catch (e) { return null; }
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (button) {
      button.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    }
  }

  apply(stored() || systemTheme());

  if (button) {
    button.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('adr-theme', next); } catch (e) { /* storage unavailable */ }
    });
  }
})();
