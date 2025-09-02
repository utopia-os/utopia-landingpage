import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const browserLanguage =
  typeof navigator !== "undefined"
    ? (navigator.languages && navigator.languages.length > 0
        ? navigator.languages[0]
        : navigator.language)
        .split("-")[0]
    : "en";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Hero_Heading: "Maps to connect and create",
      Hero_Intro:
        "<b>Grow your Community with our Collaborative Maps</b> that empower everyone to build decentralized real-life networks to co-create positive change - in your area and everywhere in the world.",
      Explainer_Heading: "What is Utopia and how does it work?",
      Usecases_Heading: "Explore the ways our maps are used",
      Usecases_Intro:
        "Different communities, different maps. We focus on making real connections and bringing about positive change in the world.",
      Usecases_Question: "Do you already have your network?",
      Usecases_Button: "Get your Custom Map",
      Steps_Heading: "How you can connect and take the first steps",
      Team_Heading: "Who's behind Utopia?",
      Team_Button: "Join us Building Utopia",
      Show_Map_Button: "Show Map",
      Future_Heading: "Your contribution decides what’s coming next",
      Future_Intro:
        "Utopia grows through all of us.  Our platform evolves organically – one feature at a time, with the community. With every donation, you cast your vote for a module and directly support its creation.",
      Future_Step1_Title: "Discover Modules",
      Future_Step1_Desc: "Learn about the planned features and their benefits.",
      Future_Step2_Title: "Support & Vote",
      Future_Step2_Desc:
        "Donate to your favorite module and cast your vote for it.",
      Future_Step3_Title: "Track Development",
      Future_Step3_Desc:  "See in real-time how many votes and funds each module has received.",
      Future_Button1: "Propose your Ideas",
      Future_Button2: "Join us Building Utopia",
    },
  },
  de: {
    translation: {
      Hero_Heading: "Utopia - Maps für Communitys",
      Hero_Intro:
        "<b>Erschaffe deine Community mit unseren kollaborativen Maps</b>, die es dir ermöglichen, dezentrale, reale Netzwerke aufzubauen, um positive Veränderungen zu gestalten - in deiner Region und überall auf der Welt.",
      Explainer_Heading: "Was ist Utopia und wie funktioniert es?",
      Usecases_Heading: "So werden unsere Karten genutzt",
      Usecases_Intro:
        "Unterschiedliche Communities, unterschiedliche Karten. Unser Fokus liegt darauf, echte Verbindungen zu schaffen und einen positiven Wandel in der Welt zu bewirken.",
      Usecases_Question: "Du hast bereits eine Netzwerk?",
      Usecases_Button: "Starte deine Map",
      Steps_Heading: "Wie du dich verbinden und die ersten Schritte gehen kannst",
      Team_Heading: "Wer baut Utopia?",
      Team_Button: "Werde Teil von Utopia  ",
      Show_Map_Button: "Besuche die Map",
      Future_Heading: "Deine Spende entscheidet, was als Nächstes entsteht",
      Future_Intro:
        "Utopia entsteht durch uns alle. Unsere Plattform entwickelt sich organisch weiter – Feature für Feature, gemeinsam mit der Community. Mit jeder Spende gibst du deine Stimme für ein Modul ab – und unterstützt direkt seine Umsetzung.",
      Future_Step1_Title: "Module entdecken",
      Future_Step1_Desc:
        "Informiere dich über die geplanten Features und deren Nutzen.",
      Future_Step2_Title: "Unterstützen & Voten",
      Future_Step2_Desc:
        "Spende für dein favorisiertes Modul und gib ihm damit deine Stimme.",
      Future_Step3_Title: "Entwicklung verfolgen",
      Future_Step3_Desc:
        "Sieh in Echtzeit, wie viele Stimmen und Mittel jedes Modul erhalten hat.",
      Future_Button1: "Idee vorschlagen",
      Future_Button2: "Helfe bei der Umsetzung",
    },
  },
  hsb: {
    translation: {
      Hero_Heading: "Utopia - mapy za communityje",
      Hero_Intro:
        "<b>Wutwor swoje community z našimi kolaboratiwnymi mapami / b >, kotrež ći zmóžnjeja, decentralne, realne syće natwarić, zo by pozitiwne změny wuhotował - w twojim regionje a wšudźe na swěće.",
      Explainer_Heading: "Što je utopia a kak to funguje?",
      Usecases_Heading: "Tak so naše karty wužiwaja",
      Usecases_Intro:
        "Rozdźělne communitije, rozdźělne karty. Naš fokus leži na to, woprawdźite zwiski wutworić a pozitiwne změny na swěće wuskutkować.",
      Usecases_Question: "Maš hižo syć?",
      Usecases_Button: "Startuj swoju mapu",
      Steps_Heading: "Kak móžeš so zwjazać a prěnje kroki činić",
      Team_Heading: "Štó twari utopiju?",
      Team_Button: "Budź dźěl utopije",
      Show_Map_Button: "Wopytaj mapu",
      Future_Heading: "Twój dar rozsudźi, što jako přichodne nastawa",
      Future_Intro:
        "Utopia nastawa přez nas wšitkich. Naša platforma wuwiwa so organisce dale – feature za feature, zhromadnje z community. Z kóždym darom daš swój hłós za modul wot – a podpěruješ direktnje jeho přesadźenje.",
      Future_Step1_Title: "Module wotkryć",
      Future_Step1_Desc:
        "Informuj so wo planowanych featurach a jich wužitku.",
      Future_Step2_Title: "Podpěra & Voten.",
      Future_Step2_Desc:
        "Dar za swój faworizowany modul a daj jemu z tym swój hłós.",
      Future_Step3_Title: "Wuwiće sćěhować",
      Future_Step3_Desc:
        "Hladaj we woprawdźitym času, kelko hłosow a srědkow je kóždy modul dóstał.",
      Future_Button1: "Ideju namjetować",
      Future_Button2: "Pomoc při zwoprawdźenju",
    },
  },
  dsb: {
    translation: {
      Hero_Heading: "Utopia - mapy za communitys",
      Hero_Intro:
        "<b>Stwóŕ twórje community z našymi kolaboratiwnymi mapami / b >, kótarež śi zmóžnjaju, decentralne, realne seśi natwariś, aby pozitiwne změny wugótował – w twójom regionje a wšuźi na swěśe.",
      Explainer_Heading: "Co jo utopija a kak wóno funkcioněrujo?",
      Usecases_Heading: "Tak se wužywaju naše kórty",
      Usecases_Intro:
        "Rozdźělne communities, rozdźělne kórty. Naš fokus lažy na tom, wopšawdne zwiski twóriś a pozitiwnu změnu na swěśe wustatkowaś.",
      Usecases_Question: "Ty maš južo seś?",
      Usecases_Button: "Startuj twóju mapu",
      Steps_Heading: "Kak móžoš se zwězaś a pśedne kšace cyniś",
      Team_Heading: "Chto twari utopia?",
      Team_Button: "Buź źěl utopije",
      Show_Map_Button: "Woglědaj se do mapy",
      Future_Heading: "Twój dar rozsuźijo, co ako pśiduce nastawa",
      Future_Intro:
        "Utopija nastawa pśez nas wšykne. Naša platforma wuwija se organiski dalej – featury za featury, zgromadnje z community. Z kuždym darom dajoš swój głos za modul wót – a pódpěrujoš direktnje jogo pśesajźenje.",
      Future_Step1_Title: "module spóznawaju.",
      Future_Step1_Desc:
        "Informěruj se wó planowanej featurje a jogo wužytku.",
      Future_Step2_Title: "Pódpěraś & spotow",
      Future_Step2_Desc:
        "Daj za twój faworizěrowany modul a daj jomu z tym twój głos.",
      Future_Step3_Title: "wuwiśe slědowaś",
      Future_Step3_Desc:
        "Glědaj za napšawdny cas, kak wjele głosow a srědkow jo kuždy modul dostał.",
      Future_Button1: "ideju naraźiś",
      Future_Button2: "Pomoc při zwoprawdźenju",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: browserLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;
