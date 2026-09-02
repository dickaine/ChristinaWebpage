(function () {
  var translations = {
    nl: {
      'nav.about': 'Over mij',
      'nav.services': 'Diensten',
      'nav.cases': 'Cases',
      'nav.contact': 'Contact',
      'header.cta': 'Plan kennismaking',
      'hero.eyebrow': 'HR × HRtech consultant',
      'hero.title': 'Ik bouw de brug tussen HR en IT, zodat je HR-systeem werkt voor de mensen die het gebruiken.',
      'hero.lead': '15 jaar HR + HRtech-ervaring. Implementaties, vendor-selecties en optimalisaties voor Nederlandse scale-ups en corporates.',
      'hero.cta1': 'Plan een kennismaking',
      'hero.cta2': 'Bekijk hoe ik werk',
      'hero.logolabel': 'Gewerkt voor',
      'about.eyebrow': 'Over mij',
      'about.title': 'De komende 10 jaar gaat het systeem de mens weer dienen.',
      'about.lead': 'De afgelopen 10 jaar stonden in het teken van het standaardiseren van HR-systemen. De volgende fase vraagt iemand die beide talen spreekt: HR én IT.',
      'about.body': 'Ik ben Christina, <span id="age">36</span> jaar, en heb 15 jaar in het HR-vak gewerkt. De laatste vijf jaar als freelancer. Mijn specialisatie: organisaties helpen om HR-systemen niet alleen technisch goed te implementeren, maar ze ook echt te laten werken voor de mensen die ermee moeten werken. Momenteel werk ik bij Technische Unie als Business Process Architect.',
      'services.eyebrow': 'Diensten',
      'services.title': 'Drie manieren om samen te werken.',
      'services.lead': 'Geen open-eind consultancy. Iedere opdracht heeft een afgebakende scope, doorlooptijd en oplevering. Met hands-on ervaring in o.a. Workday, Oracle Cloud HCM, AFAS, ServiceNow en Shiftbase.',
      'services.meta.duration': 'Duur',
      'services.meta.fit': 'Wanneer dit past',
      'services.meta.track': 'Track record',
      'services.meta.invest': 'Indicatieve investering',
      'services.tbdprice': 'op aanvraag',
      'services.cta': 'Plan kennismaking',
      'services.1.name': 'HRIS Vendor Selection Sprint',
      'services.1.outcome': 'Een onderbouwde keuze voor het HR-systeem dat bij jullie organisatie past, zonder vendor-druk.',
      'services.1.scope1': 'Requirements-sessies met HR, IT en eindgebruikers',
      'services.1.scope2': 'Long- en shortlist van leveranciers',
      'services.1.scope3': "Gestructureerde demo's en scoring",
      'services.1.scope4': 'Onderbouwd selectie-advies',
      'services.1.duration': '4 weken',
      'services.1.fit': 'Je staat voor de eerste (of opnieuw) keuze van een HR-systeem.',
      'services.1.track': 'HR IT-scan met procesmodellering (BPMN) en vendor-analyse voor CERN.',
      'services.2.name': 'Implementatie &amp; Go-Live Begeleiding',
      'services.2.outcome': 'Een nieuwe HR-suite of -module die op tijd live gaat, en die HR én IT samen blijven dragen.',
      'services.2.scope1': 'Product owner / proces manager rol',
      'services.2.scope2': 'Brug tussen HR-business en technische consultants',
      'services.2.scope3': 'Sturen op scope, planning en go-live readiness',
      'services.2.scope4': 'Training en overdracht naar de staande organisatie',
      'services.2.duration': 'Per project',
      'services.2.fit': 'Je bent gestart met een implementatie en mist een eigenaar die beide werelden begrijpt.',
      'services.2.track': 'Oracle Cloud HCM bij KPN, Workday Recruitment bij Rituals, AFAS bij AFPRO Filters.',
      'services.3.name': 'Post-Implementation Optimalisatie',
      'services.3.outcome': 'Een bestaand HR-systeem dat draait, maar onderbenut is: terugbrengen naar wat het oorspronkelijk moest doen.',
      'services.3.scope1': 'Procesaudit met HR, IT en key-users',
      'services.3.scope2': 'Identificatie van quick wins en structurele issues',
      'services.3.scope3': 'Roadmap voor configuratie- en procesverbetering',
      'services.3.scope4': 'Begeleiding bij uitvoering of overdracht',
      'services.3.duration': '6 weken',
      'services.3.fit': 'Je hebt een systeem dat &quot;draait&quot; maar de adoptie of efficiëntie blijft achter.',
      'services.3.track': 'Get-well plan voor de onboarding journey bij KPN; HR Tech &amp; Analytics bij Jacobs Douwe Egberts.',
      'cases.eyebrow': 'Cases',
      'cases.title': 'Wat ik heb gebouwd.',
      'cases.result': 'Resultaat',
      'cases.1.title': 'Oracle Cloud HCM · Time &amp; Labor',
      'cases.1.context': 'KPN consolideerde meerdere legacy HR-platformen naar één Oracle Cloud HCM-suite. Als verantwoordelijke voor de Time &amp; Labor-module zorgde ik voor scope, go-live readiness en voorbereiding van de business.',
      'cases.1.result': 'Go-live januari 2022. Migratie vanuit meerdere legacy-platformen naar één standaard.',
      'cases.2.title': 'ServiceNow · Onboarding &amp; Offboarding',
      'cases.2.context': 'Als HR Product Owner verantwoordelijk voor het ontwerp en de bouw van de onboarding- en offboarding-modules in ServiceNow, inclusief de procedures eromheen.',
      'cases.2.result': 'Gestandaardiseerd in- en uitstroomproces voor de hele organisatie.',
      'cases.3.title': 'AFAS &amp; Shiftbase · Internationale rollout',
      'cases.3.context': 'Als interim projectmanager verantwoordelijk voor de internationale AFAS-implementatie bij AFPRO Filters: HR-processen gestroomlijnd en gestandaardiseerd over alle AFPRO-entiteiten en Filtrair, inclusief de adoptie van HR self-service door managers en medewerkers.',
      'cases.3.result': 'Eén gestandaardiseerd HR-landschap over alle internationale entiteiten. AFAS en Shiftbase live.',
      'cases.4.title': 'HR IT-scan &amp; Vendor-analyse',
      'cases.4.context': 'Voor CERN in Genève voerde ik als senior consultant een HR IT-scan uit: procesmodellering (BPMN) van het bestaande HR-landschap plus een onafhankelijke vendor-analyse als basis voor de volgende stap.',
      'cases.4.result': 'Onderbouwd beeld van het HR IT-landschap en een productonafhankelijk vendor-advies.',
      'cases.5.title': 'Global Recruitment · Workday &amp; Paradox',
      'cases.5.context': 'Als Global Test &amp; Hypercare Lead a.i. begeleidde ik de implementatie van het wereldwijde recruitmentproces bij Rituals, inclusief hiring- en payroll-integraties over Kaliber, Paradox, Workday Recruitment, Workday HCM en GlobalView.',
      'cases.5.result': 'Wereldwijd recruitmentproces live, inclusief keten-integraties van sollicitatie tot payroll.',
      'cases.6.title': 'HR IT-architectuur',
      'cases.6.context': 'Als Business Process Architect bij Technische Unie verantwoordelijk voor de volledige HR IT-architectuur: de brug tussen HR en IT, met als missie versimpelen en verbinden.',
      'cases.6.result': 'Lopend sinds februari 2026.',
      'testi.eyebrow': 'Testimonials',
      'testi.title': 'Wat opdrachtgevers zeggen.',
      'testi.q1': '"Christina was verantwoordelijk voor het opzetten van de Time &amp; Labor module in onze HR Transitie naar Oracle Cloud met een livegang van Jan 2022. Een uitdagende rol omdat KPN hiermee in staat werd gesteld om vanuit verschillende platformen en applicaties naar een standaard te migreren. Christina heeft veel waardering ontvangen voor de manier waarop zij ook de betreffende business onderdelen heeft voorbereid op deze transitie en deze heeft uitgevoerd. Zij is een gefocuste HR IT professional, met veel kennis en daarnaast aandacht voor de mens achter de IT implementatie. Tevens heeft zij interim verbeteringen en get-well plan uitgevoerd in de onboardings journey."',
      'testi.q2': '"Christina, dank voor je projectmatige aanpak voor de internationale Afas implementatie. Je hebt Afpro echt naar het next level gebracht. Onder de indruk van je kennis en kunde, veel succes in je volgende opdracht."',
      'feat.quote': '"De komende jaren verwacht ik dat de focus verschuift van het systeem naar de mens, dat het systeem de mens weer gaat dienen in plaats van andersom."',
      'feat.panel': 'Lees het panel',
      'feat.articles': 'Lees mijn artikelen',
      'feat.author': 'Ik schrijf ook voor HRtechArena. Over waarom de meeste HR-tech-stacks nog niet klaar zijn voor AI, de stap van generatieve naar agentic AI, en de belangrijkste trends van Unleash.',
      'news.title': 'Maandelijkse take op HR-tech in Nederland.',
      'news.sub': 'Wat werkt, wat niet, en waarom. Eén keer per maand. Geen spam.',
      'news.label': 'E-mailadres',
      'news.placeholder': 'jouw@email.nl',
      'news.button': 'Aanmelden',
      'contact.eyebrow': 'Contact',
      'contact.title': 'Even sparren?',
      'contact.lead': 'Soms moeten de koppen even bij elkaar om te zien of er een match is.',
      'contact.caltitle': 'Plan direct een kennismaking',
      'contact.calsub': '30 minuten · telefoon of video.',
      'footer.tagline': 'De brug tussen HR en IT.'
    },
    en: {
      'nav.about': 'About me',
      'nav.services': 'Services',
      'nav.cases': 'Cases',
      'nav.contact': 'Contact',
      'header.cta': 'Book an intro call',
      'hero.eyebrow': 'HR × HRtech consultant',
      'hero.title': 'I build the bridge between HR and IT, so your HR system works for the people who use it.',
      'hero.lead': '15 years of HR + HRtech experience. Implementations, vendor selections and optimisations for Dutch scale-ups and corporates.',
      'hero.cta1': 'Book an intro call',
      'hero.cta2': 'See how I work',
      'hero.logolabel': 'Worked for',
      'about.eyebrow': 'About me',
      'about.title': 'The next 10 years, the system will serve people again.',
      'about.lead': 'The past 10 years were all about standardising HR systems. The next phase calls for someone who speaks both languages: HR and IT.',
      'about.body': "I'm Christina, <span id=\"age\">36</span> years old, and I've worked in HR for 15 years. The last five as a freelancer. My specialisation: helping organisations implement HR systems not just technically well, but making them truly work for the people who have to use them. I currently work at Technische Unie as Business Process Architect.",
      'services.eyebrow': 'Services',
      'services.title': 'Three ways to work together.',
      'services.lead': 'No open-ended consultancy. Every engagement has a defined scope, timeline and deliverable. With hands-on experience in Workday, Oracle Cloud HCM, AFAS, ServiceNow and Shiftbase, among others.',
      'services.meta.duration': 'Duration',
      'services.meta.fit': 'When this fits',
      'services.meta.track': 'Track record',
      'services.meta.invest': 'Indicative investment',
      'services.tbdprice': 'on request',
      'services.cta': 'Book an intro call',
      'services.1.name': 'HRIS Vendor Selection Sprint',
      'services.1.outcome': 'A well-founded choice for the HR system that fits your organisation, without vendor pressure.',
      'services.1.scope1': 'Requirements sessions with HR, IT and end users',
      'services.1.scope2': 'Long- and shortlist of vendors',
      'services.1.scope3': 'Structured demos and scoring',
      'services.1.scope4': 'Substantiated selection advice',
      'services.1.duration': '4 weeks',
      'services.1.fit': "You're facing the first (or a renewed) choice of an HR system.",
      'services.1.track': 'HR IT scan with process modelling (BPMN) and vendor analysis for CERN.',
      'services.2.name': 'Implementation &amp; Go-Live Guidance',
      'services.2.outcome': 'A new HR suite or module that goes live on time, and that HR and IT keep supporting together.',
      'services.2.scope1': 'Product owner / process manager role',
      'services.2.scope2': 'Bridge between HR business and technical consultants',
      'services.2.scope3': 'Steering on scope, planning and go-live readiness',
      'services.2.scope4': 'Training and handover to the standing organisation',
      'services.2.duration': 'Per project',
      'services.2.fit': "You've started an implementation and are missing an owner who understands both worlds.",
      'services.2.track': 'Oracle Cloud HCM at KPN, Workday Recruitment at Rituals, AFAS at AFPRO Filters.',
      'services.3.name': 'Post-Implementation Optimisation',
      'services.3.outcome': 'An existing HR system that runs but is underused: bringing it back to what it was originally meant to do.',
      'services.3.scope1': 'Process audit with HR, IT and key users',
      'services.3.scope2': 'Identification of quick wins and structural issues',
      'services.3.scope3': 'Roadmap for configuration and process improvement',
      'services.3.scope4': 'Guidance during execution or handover',
      'services.3.duration': '6 weeks',
      'services.3.fit': 'You have a system that &quot;runs&quot; but adoption or efficiency is lagging.',
      'services.3.track': 'Get-well plan for the onboarding journey at KPN; HR Tech &amp; Analytics at Jacobs Douwe Egberts.',
      'cases.eyebrow': 'Cases',
      'cases.title': "What I've built.",
      'cases.result': 'Result',
      'cases.1.title': 'Oracle Cloud HCM · Time &amp; Labor',
      'cases.1.context': 'KPN consolidated multiple legacy HR platforms into one Oracle Cloud HCM suite. Responsible for the Time &amp; Labor module, I owned scope, go-live readiness and preparing the business.',
      'cases.1.result': 'Go-live January 2022. Migration from multiple legacy platforms to one standard.',
      'cases.2.title': 'ServiceNow · Onboarding &amp; Offboarding',
      'cases.2.context': 'As HR Product Owner responsible for the design and build of the onboarding and offboarding modules in ServiceNow, including the surrounding procedures.',
      'cases.2.result': 'Standardised inflow and outflow process for the entire organisation.',
      'cases.3.title': 'AFAS &amp; Shiftbase · International rollout',
      'cases.3.context': 'As interim project manager responsible for the international AFAS implementation at AFPRO Filters: HR processes streamlined and standardised across all AFPRO entities and Filtrair, including the adoption of HR self-service by managers and employees.',
      'cases.3.result': 'One standardised HR landscape across all international entities. AFAS and Shiftbase live.',
      'cases.4.title': 'HR IT scan &amp; vendor analysis',
      'cases.4.context': 'For CERN in Geneva I carried out an HR IT scan as senior consultant: process modelling (BPMN) of the existing HR landscape plus an independent vendor analysis as a basis for the next step.',
      'cases.4.result': 'A substantiated view of the HR IT landscape and a product-independent vendor recommendation.',
      'cases.5.title': 'Global Recruitment · Workday &amp; Paradox',
      'cases.5.context': 'As Global Test &amp; Hypercare Lead a.i. I guided the implementation of the global recruitment process at Rituals, including hiring and payroll integrations across Kaliber, Paradox, Workday Recruitment, Workday HCM and GlobalView.',
      'cases.5.result': 'Global recruitment process live, including chain integrations from application to payroll.',
      'cases.6.title': 'HR IT architecture',
      'cases.6.context': 'As Business Process Architect at Technische Unie responsible for the full HR IT architecture: the bridge between HR and IT, with a mission to simplify and connect.',
      'cases.6.result': 'Ongoing since February 2026.',
      'testi.eyebrow': 'Testimonials',
      'testi.title': 'What clients say.',
      'testi.q1': '"Christina was responsible for setting up the Time &amp; Labor module in our HR transition to Oracle Cloud, with a go-live in January 2022. A challenging role, as it enabled KPN to migrate from various platforms and applications to one standard. Christina received a lot of appreciation for the way she also prepared the business units involved for this transition and carried it out. She is a focused HR IT professional with a lot of knowledge, and an eye for the people behind the IT implementation. She also delivered interim improvements and a get-well plan in the onboarding journey." (translated from Dutch)',
      'testi.q2': '"Christina, thank you for your project-driven approach to the international AFAS implementation. You truly took AFPRO to the next level. Impressed by your knowledge and skill, good luck in your next assignment." (translated from Dutch)',
      'feat.quote': '"In the coming years I expect the focus to shift from the system to the people: the system will serve people again, instead of the other way around."',
      'feat.panel': 'Read the panel',
      'feat.articles': 'Read my articles',
      'feat.author': "I also write for HRtechArena. About why most HR tech stacks aren't ready for AI yet, the step from generative to agentic AI, and the key trends from Unleash.",
      'news.title': 'A monthly take on HR tech in the Netherlands.',
      'news.sub': "What works, what doesn't, and why. Once a month. No spam.",
      'news.label': 'Email address',
      'news.placeholder': 'you@email.com',
      'news.button': 'Subscribe',
      'contact.eyebrow': 'Contact',
      'contact.title': "Let's talk?",
      'contact.lead': "Sometimes it takes putting our heads together to see if there's a match.",
      'contact.caltitle': 'Book an intro call right away',
      'contact.calsub': '30 minutes · phone or video.',
      'footer.tagline': 'The bridge between HR and IT.'
    }
  };

  function refreshDynamic() {
    var year = document.getElementById('footer-year');
    if (year) year.textContent = new Date().getFullYear();
    var ageEl = document.getElementById('age');
    if (ageEl) {
      var birth = new Date(1990, 5, 13);
      var now = new Date();
      var age = now.getFullYear() - birth.getFullYear();
      if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) age--;
      ageEl.textContent = age;
    }
  }

  function apply(lang) {
    var dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value !== undefined) el.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var parts = el.getAttribute('data-i18n-attr').split(':');
      var value = dict[parts[1]];
      if (value !== undefined) el.setAttribute(parts[0], value);
    });
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    refreshDynamic();
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.getAttribute('data-lang'));
    });
  });

  var saved = 'nl';
  try { saved = localStorage.getItem('lang') || 'nl'; } catch (e) {}
  if (saved !== 'nl') {
    apply(saved);
  } else {
    apply('nl');
  }
})();
