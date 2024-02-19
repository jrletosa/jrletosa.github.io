// Retrieve the current language from localStorage or use the default (English)
var currentLanguage = localStorage.getItem('currentLanguage') || 'en';

export function getTranslation(key) {
  // Use an object to store language-specific translations
  const translations = {
    "en": {
      "Home": "Home",
      "Details": "Details",
      "Ceremony": "Ceremony",
      "Mingle & Photo shoot": "Mingle & Photo shoot",
      "Toast": "Toast",
      "Dinner": "Dinner",
      "Cake & Coffee": "Cake & Coffee",
      "Dance": "Dance",
      "Picnic": "Picnic",
      "Speeches & Performances": "Speeches & Performances",
      "Speech-text": `If you would like to give a speech, performance or provide
        entertainment, please contact our toastmaster, Anna Díaz at +46707231206
        or anna_diaz_@hotmail.com`,
      "Kids": "Kids",
      "Kids-text": `While we wish we could invite all your little ones, it is not possible
        and the invitation is for adults only. Nursing babies are, of course, welcome.
        let's discuss alternative solutions`,
      "Gifts": "Gifts",
      "Gifts-text": `Having you come to our wedding is all we wish for. If you still would like to gift something
        small honeymoon upgrades would feel truly special. For those who'd like to contribute,
        visit `
    },
    "es": {
      "Home": "Inicio",
      "Details": "Detalles",
      "Ceremony": "Ceremonia",
      "Mingle & Photo shoot": "Bienvenida & Sesión de fotos",
      "Toast": "Brindis",
      "Dinner": "Cena",
      "Cake & Coffee": "Tarta",
      "Dance": "Baile",
      "Picnic": "Picnic",
      "Speeches & Performances": "Discursos y Actuaciones",
      "Speech-text": `Si quieres dar un discurso, realizar una actuación o proporcionar 
        entretenimiento, por favor, ponte en contacto con nuestra maestra de ceremonias, 
        Anna Diaz, +46707231206 o anna_diaz_@hotmail.com`,
      "Kids": "Niños",
      "Kids-text": `Nos encantaria invitar a todos los pequeños pero, lamentablemente, no es posible y 
        la invitación es sólo para adultos. Los bebés lactantes son, por supuesto, bienvenidos.
        Contáctanos para buscar soluciones alternativas.`,
      "Gifts": "Regalos",
      "Gifts-text": `Todo lo que deseamos es tenerte en nuestra boda. Si, de todas formas, quieres hacer un regalo, 
        apreciaremos pequeñas contribuciones para mejorar nuestra luna de miel. Si deseas contribuir, visita `
    },
    "sv": {
      "Home": "Hem",
      "Details": "Detaljer",
      "Ceremony": "Ceremoni",
      "Mingle & Photo shoot": "Mingel & Fotosession",
      "Toast": "Skål",
      "Dinner": "Middag",
      "Cake & Coffee": "Tårta",
      "Dance": "Dans",
      "Picnic": "Picknick",
      "Speeches & Performances": "Tal & Framträdanden",
      "Speech-text": `Om du vill hälla ett tal, uppträda eller underhälla, vänligen kontakta var toastmaster, 
        Anna Diaz pa +46707231206 eller anna_diaz_@hotmail.com.`,
      "Kids": "Barn",
      "Kids-text": `While we wish we could invite all your little ones, it is not possible
        and the invitation is for adults only. Nursing babies are, of course, welcome.
        let's discuss alternative solutions`,
      "Gifts": "Presenter",
      "Gifts-text": `Er närvaro pả vảrt bröllop är allt vi önskar. Vill ni ända uppmärksamma vảr dag med
        en gava uppskattar vi smả uppgraderingar för vảr smekmänad. För er som önskar bidra,besök `
    },
    "pl": {
        "Home": "Strona główna",
        "Details": "Szczegóły",
        "Ceremony": "Ceremonia",
        "Mingle & Photo shoot": "Mingle & Sesja zdjeciowa",
        "Toast": "Toast",
        "Dinner": "Kolacja",
        "Cake & Coffee": "Tort",
        "Dance": "Tance",
        "Picnic": "Piknik",
        "Speeches & Performances": "Przemowy i Wystepy",
        "Speech-text": `Jesli chciarbys wygtosic premowe, wystapic lub dostarczy rozrywke albo zabawe,
          prosze skontaktowac sie z naszym Toastmasterem, Anna Diaz pod numerem +46707231206 lub anna_diaz_@hotmail.com`,
        "Kids": "Dzieci",
        "Kids-text": `Z checia zaprosilibysmy wszystkie dzieci naszych gosci, niestety nie jest to mozliwe,
          I zaproszenie dotyczy tylko dorostych.`,
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
