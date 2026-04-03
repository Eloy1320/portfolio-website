(function () {
  var isViewsPage = window.location.pathname.indexOf('/views/') !== -1;
  var translationsPath = isViewsPage
    ? '../locales/{{lng}}/translation.json'
    : 'locales/{{lng}}/translation.json';

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      element.textContent = i18next.t(element.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
      element.innerHTML = i18next.t(element.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (element) {
      element.setAttribute('placeholder', i18next.t(element.getAttribute('data-i18n-placeholder')));
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function (element) {
      element.setAttribute('value', i18next.t(element.getAttribute('data-i18n-value')));
    });

    var currentLanguage = i18next.resolvedLanguage || i18next.language || 'es';
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll('[data-change-language]').forEach(function (button) {
      var isActive = button.getAttribute('data-change-language') === currentLanguage;
      button.classList.toggle('active', isActive);
    });

    var typedRoles = i18next.t('hero.roles', { returnObjects: true });
    if (window.initializeTypedEffect && Array.isArray(typedRoles)) {
      window.initializeTypedEffect(typedRoles);
    }
  }

  function changeLanguage(language) {
    i18next.changeLanguage(language, function () {
      applyTranslations();
    });
  }

  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'es',
      supportedLngs: ['es', 'en'],
      nonExplicitSupportedLngs: true,
      load: 'languageOnly',
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
      },
      backend: {
        loadPath: translationsPath
      }
    }, function () {
      applyTranslations();
    });

  document.querySelectorAll('[data-change-language]').forEach(function (button) {
    button.addEventListener('click', function () {
      changeLanguage(button.getAttribute('data-change-language'));
    });
  });
})();
