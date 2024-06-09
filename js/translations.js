// Retrieve the current language from localStorage or use the default (English)
var currentLanguage = localStorage.getItem('currentLanguage') || 'en';

export function getTranslation(key) {
  // Use an object to store language-specific translations
  const translations = {
    "en": {
      "Home": "Home",
      "Agenda": "Agenda",
      "Wedding Weekend": "Wedding Weekend",
      "Saturday": "Saturday",
      "Sunday": "Sunday",
      "Saying Yes": "Saying Yes",
      "Arrival": "Arrival",
      "Arrival-text": "Feel free to enjoy the gardens and find your way to the orchard",
      "Ceremony starts": "Ceremony starts",
      "Ceremony-starts-text": "Please be seated",
      "Mingle & Photo shoot": "Mingle & Photo shoot",
      "Mingle-text": "The couple will disappear for portrait and group photos",
      "Toast": "Toast",
      "Toast-text": "The couple returns!",
      "Dinner": "Dinner",
      "Dinner-text": "Explore the greenhouses and find your seat",
      "Cake": "Cake & Coffee",
      "Cake-text": "Let there be cake!",
      "Dance": "Dance",
      "Dance-text": "Join us on the dance floor as we celebrate love and joy!",
      "Picnic": "Picnic",
      "Speeches": "Speeches",
      "Speeches & Performances": "Speeches & Performances",
      "Speech-text": `If you would like to give a speech, performance or provide
        entertainment, please contact our toastmaster, Anna Díaz at +46707231206
        or anna_diaz_@hotmail.com`,
      "Kids": "Kids",
      "Kids-text": `While we wish we could invite all your little ones, it is not possible
        and the invitation is for adults only. Nursing babies are, of course, welcome.
        let's discuss alternative solutions`,
      "Gifts": "Gifts",
      "Gifts-text": `Having you come to our wedding is all we wish for. If you still would like to gift something,
        small honeymoon upgrades would feel truly special. Some ideas:`,
      "Location": "Location",
      "Some inspiration to make our trip more memorable": "Some inspiration to make our trip more memorable",
      "honeymoon-breakfast": "Breakfast in the room",
      "honeymoon-ocean": "Ocean adventure",
      "honeymoon-dinner": "Romantic dinner"
    },
    "es": {
      "Home": "Inicio",
      "Agenda": "Agenda",
      "Wedding Weekend": "Fin de semana de la boda",
      "Saturday": "Sábado",
      "Sunday": "Domingo",
      "Saying Yes": "Decimos sí",
      "Arrival": "Llegada",
      "Arrival-text": "Disfruta de los jardines",
      "Ceremony starts": "Comienza la ceremonia",
      "Ceremony-starts-text": "Por favor, toma asiento",
      "Mingle & Photo shoot": "Bienvenida & Sesión de fotos",
      "Mingle-text": "La pareja desaparecerá para hacerse fotos",
      "Toast": "Brindis",
      "Toast-text": "¡La pareja regresa!",
      "Dinner": "Cena",
      "Dinner-text": "Explora los invernaderos y encuentra tu asiento",
      "Cake": "Tarta",
      "Cake-text": "¡Que saquen la tarta!",
      "Dance": "Baile",
      "Dance-text": "¡Únete a nosotros en la pista de baile mientras celebramos!",
      "Picnic": "Picnic",
      "Speeches": "Discursos",
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
        apreciaremos pequeñas contribuciones para mejorar nuestra luna de miel. Algunas ideas:`,
      "Location": "Lugar",
      "Honey-moon-text": "Honey Moon",
      "Some inspiration to make our trip more memorable": "Inspiración para hacer nuestro viaje memorable",
      "honeymoon-breakfast": "Desayuno en la habitación",
      "honeymoon-ocean": "Aventura en el océano",
      "honeymoon-dinner": "Cena romántica"
    },
    "sv": {
      "Home": "Hem",
      "Agenda": "Agenda",
      "Wedding Weekend": "Bröllopshelg",
      "Saturday": "Lördag",
      "Sunday": "Söndag",
      "Saying Yes": "Vi säger Ja",
      "Arrival": "Ankomst",
      "Arrival-text": "Njut av trädgården och hitta din plats i äppelträdgården",
      "Ceremony starts": "Ceremoni",
      "Ceremony-starts-text": "Vänligen sätt dig",
      "Mingle & Photo shoot": "Mingel & Fotosession",
      "Mingle-text": "Paret försvinner för porträtt och gruppfoton",
      "Toast": "Skål",
      "Toast-text": "Paret återvänder!",
      "Dinner": "Middag",
      "Dinner-text": "Utforska växthusen och hitta din plats",
      "Cake": "Tårta",
      "Cake-text": "Nu blir det tårta!",
      "Dance": "Dans",
      "Dance-text": "Följ med oss på dansgolvet när vi firar kärlek och glädje!",
      "Picnic": "Picknick",
      "Speeches": "Tal",
      "Speeches & Performances": "Tal & Framträdanden",
      "Speech-text": `Om du vill hälla ett tal, upptråda eller underhålla, vänligen kontakta var toastmaster, 
        Anna Diaz pa +46707231206 eller anna_diaz_@hotmail.com.`,
      "Kids": "Barn",
      "Kids-text": `While we wish we could invite all your little ones, it is not possible
        and the invitation is for adults only. Nursing babies are, of course, welcome.
        let's discuss alternative solutions`,
      "Gifts": "Presenter",
      "Gifts-text": `Er närvaro på vårt bröllop är allt vi önskar. Vill ni ända uppmärksamma vår dag med
        en gåva uppskattar vi små uppgraderingar för vår smekmänad. Några idéer:`,
      "Location": "Plats",
        "Some inspiration to make our trip more memorable": "Idéer för att göra vår resa minnesvärd",
      "honeymoon-breakfast": "Frukost på rummet",
      "honeymoon-ocean": "Havsupplevelse",
      "honeymoon-dinner": "Romantisk middag"
    },
    "pl": {
        "Home": "Home",
        "Agenda": "Agenda",
        "Wedding Weekend": "Weekend Ślubny",
        "Saturday": "Sobota",
        "Sunday": "Niedziela",
        "Saying Yes": "Mówiąc Tak",
        "Arrival": "Przyjazd",
        "Arrival-text": "Zapraszamy do ogrodu i na miejsce w sadzie",
        "Ceremony starts": "Ceremonia",
        "Ceremony-starts-text": "Prosimy o zajęcie miejsc",
        "Mingle & Photo shoot": "Mingiel & Sesja zdjęciowa",
        "Mingle-text": "Para zniknie na sesje zdjeciowa",
        "Toast": "Toast",
        "Toast-text": "Para powraca!",
        "Dinner": "Kolacja",
        "Dinner-text": "Zapraszamy do zwiedzania szklarni i do znalezienia miejsca",
        "Cake": "Tort",
        "Cake-text": "Czas na tort!",
        "Dance": "Tance",
        "Dance-text": "Dołącz do nas na parkiecie w czasie gdy świętujemy miłość i radość!",
        "Picnic": "Piknik",
        "Ceremony": "Ceremonia",
        "Speeches": "Przemowy",
        "Speeches & Performances": "Przemowy i Wystepy",
        "Speech-text": `Jeśli chciałbyś wygłosić przemowę, wystąpić lub dostarczyć rozrywkę albo zabawe, 
            proszę skontaktować się z naszym Toastmasterem, Anną Diaz pod numerem 
            +46707231206 lub anna_diaz_@hotmail.com`,
        "Kids": "Dzieci",
        "Kids-text": `Z checia zaprosilibysmy wszystkie dzieci naszych gosci, niestety nie jest to mozliwe,
          I zaproszenie dotyczy tylko dorostych.`,
      "Location": "Lokalizacja",
      "Gifts": "Prezenty",
      "Gifts-text": `Wasza obecność na naszym ślubie to wszystko czego pragniemy. Jeśli chcielibyście
          jednak podarować nam coś, docenilibyśmy małe ulepszenia naszego miesiąca miodowego. Kilka pomysłów:`,
      "Some inspiration to make our trip more memorable": "Inspiracje, aby nasza podróż była niezapomniana",
      "honeymoon-breakfast": "Śniadanie w pokoju",
      "honeymoon-ocean": "Przygoda nad oceanem",
      "honeymoon-dinner": "Romantyczna kolacja"
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
