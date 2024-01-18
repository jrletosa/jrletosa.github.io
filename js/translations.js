// Retrieve the current language from localStorage or use the default (English)
var currentLanguage = localStorage.getItem('currentLanguage') || 'en';

export function getTranslation(key) {
  // Use an object to store language-specific translations
  const translations = {
    "en": {
      "Home": "Home",
      "About": "About"
      // Add more translations for English
    },
    "es": {
      "Home": "Inicio",
      "About": "Sobre"
      // Add more translations for Spanish
    }
  }

  return translations[currentLanguage][key] || key
}

export function changeLanguage(language) {
  currentLanguage = language;
  console.log("Language changed to " + language);

  // Save the current language in localStorage
  localStorage.setItem('currentLanguage', currentLanguage);
  // You might want to refresh or update the page content here
  location.reload();
}
