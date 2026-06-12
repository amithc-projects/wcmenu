// Maps countryId_courseType → Wikipedia article title used to fetch dish thumbnail images.
// Source: Wikipedia REST API  https://en.wikipedia.org/api/rest_v1/page/summary/{title}
const WIKIPEDIA_TITLES = {
  // Germany
  germany_starter:       "Lentil soup",
  germany_main:          "Sauerbraten",
  germany_dessert:       "Black Forest gateau",
  // France
  france_starter:        "French onion soup",
  france_main:           "Beef bourguignon",
  france_dessert:        "Crème brûlée",
  // Spain
  spain_starter:         "Gazpacho",
  spain_main:            "Paella",
  spain_dessert:         "Churros",
  // England
  england_starter:       "Prawn cocktail",
  england_main:          "Yorkshire pudding",
  england_dessert:       "Sticky toffee pudding",
  // Portugal
  portugal_starter:      "Caldo verde",
  portugal_main:         "Bacalhau à Brás",
  portugal_dessert:      "Pastel de nata",
  // Netherlands
  netherlands_starter:   "Erwtensoep",
  netherlands_main:      "Stamppot",
  netherlands_dessert:   "Stroopwafel",
  // Belgium
  belgium_starter:       "Moules-frites",
  belgium_main:          "Carbonnade flamande",
  belgium_dessert:       "Belgian waffle",
  // Croatia
  croatia_starter:       "Brudet",
  croatia_main:          "Peka (food)",
  croatia_dessert:       "Krempita",
  // Turkey
  turkey_starter:        "Mercimek çorbası",
  turkey_main:           "Adana kebabı",
  turkey_dessert:        "Baklava",
  // Austria
  austria_starter:       "Leberknödelsuppe",
  austria_main:          "Wiener Schnitzel",
  austria_dessert:       "Sachertorte",
  // Scotland
  scotland_starter:      "Cock-a-leekie",
  scotland_main:         "Haggis",
  scotland_dessert:      "Cranachan",
  // Argentina
  argentina_starter:     "Empanada",
  argentina_main:        "Asado",
  argentina_dessert:     "Alfajor",
  // Brazil
  brazil_starter:        "Coxinha",
  brazil_main:           "Feijoada",
  brazil_dessert:        "Brigadeiro",
  // Uruguay
  uruguay_starter:       "Spanish omelette",
  uruguay_main:          "Chivito (sandwich)",
  uruguay_dessert:       "Torta frita",
  // Colombia
  colombia_starter:      "Ajiaco",
  colombia_main:         "Bandeja paisa",
  colombia_dessert:      "Buñuelo",
  // Ecuador
  ecuador_starter:       "Locro",
  ecuador_main:          "Seco de pollo",
  ecuador_dessert:       "Espumilla",
  // Paraguay
  paraguay_starter:      "Sopa paraguaya",
  paraguay_main:         "Chipa guasú",
  paraguay_dessert:      "Kivevé",
  // USA
  usa_starter:           "Clam chowder",
  usa_main:              "Spare ribs",
  usa_dessert:           "Apple pie",
  // Canada
  canada_starter:        "Poutine",
  canada_main:           "Atlantic salmon",
  canada_dessert:        "Butter tart",
  // Mexico
  mexico_starter:        "Guacamole",
  mexico_main:           "Mole (sauce)",
  mexico_dessert:        "Tres leches cake",
  // Panama
  panama_starter:        "Ceviche",
  panama_main:           "Sancocho",
  panama_dessert:        "Arroz con leche",
  // Morocco
  morocco_starter:       "Harira",
  morocco_main:          "Tajine",
  morocco_dessert:       "Bastilla",
  // Senegal
  senegal_starter:       "Accara",
  senegal_main:          "Thiéboudienne",
  senegal_dessert:       "Thiakry",
  // Ivory Coast
  "ivory-coast_starter": "Kedjenou",
  "ivory-coast_main":    "Attiéké",
  "ivory-coast_dessert": "Alloco",
  // Egypt
  egypt_starter:         "Ful medames",
  egypt_main:            "Kushari",
  egypt_dessert:         "Om Ali",
  // South Africa
  "south-africa_starter":"Boerewors",
  "south-africa_main":   "Braai",
  "south-africa_dessert":"Melktert",
  // Tunisia
  tunisia_starter:       "Brik",
  tunisia_main:          "Couscous",
  tunisia_dessert:       "Makroudh",
  // Algeria
  algeria_starter:       "Chorba",
  algeria_main:          "Chakhchoukha",
  algeria_dessert:       "Zlabia",
  // Japan
  japan_starter:         "Miso soup",
  japan_main:            "Ramen",
  japan_dessert:         "Mochi",
  // South Korea
  "south-korea_starter": "Pajeon",
  "south-korea_main":    "Bibimbap",
  "south-korea_dessert": "Bingsu",
  // Australia
  australia_starter:     "Barramundi",
  australia_main:        "Roast lamb",
  australia_dessert:     "Lamington",
  // Saudi Arabia
  "saudi-arabia_starter":"Mutabbaq",
  "saudi-arabia_main":   "Kabsa",
  "saudi-arabia_dessert":"Luqaimat",
  // Iran
  iran_starter:          "Ash reshteh",
  iran_main:             "Ghormeh sabzi",
  iran_dessert:          "Sholeh zard",
  // Qatar
  qatar_starter:         "Tharid",
  qatar_main:            "Machboos",
  qatar_dessert:         "Balaleet",
  // New Zealand
  "new-zealand_starter": "Whitebait (food)",
  "new-zealand_main":    "Hāngī",
  "new-zealand_dessert": "Pavlova (food)",
  // Bosnia & Herzegovina
  bosnia_starter:        "Begova čorba",
  bosnia_main:           "Ćevapi",
  bosnia_dessert:        "Tufahija",
  // Czech Republic
  czechia_starter:       "Kulajda",
  czechia_main:          "Svíčková",
  czechia_dessert:       "Knedlík",
  // Norway
  norway_starter:        "Fish soup",
  norway_main:           "Fårikål",
  norway_dessert:        "Krumkake",
  // Sweden
  sweden_starter:        "Toast Skagen",
  sweden_main:           "Köttbullar",
  sweden_dessert:        "Princess cake",
  // Switzerland
  switzerland_starter:   "Vegetable soup",
  switzerland_main:      "Zürcher Geschnetzeltes",
  switzerland_dessert:   "Basler Läckerli",
  // Curaçao
  curacao_starter:       "Pastechi",
  curacao_main:          "Keshi yena",
  curacao_dessert:       "Banana bread",
  // Haiti
  haiti_starter:         "Soup joumou",
  haiti_main:            "Griot (food)",
  haiti_dessert:         "Sweet potato pie",
  // Cape Verde
  "cape-verde_starter":  "Fish soup",
  "cape-verde_main":     "Cachupa",
  "cape-verde_dessert":  "Crème caramel",
  // DR Congo
  "dr-congo_starter":    "Cassava",
  "dr-congo_main":       "Moambe chicken",
  "dr-congo_dessert":    "Beignet",
  // Ghana
  ghana_starter:         "Kelewele",
  ghana_main:            "Jollof rice",
  ghana_dessert:         "Puff-puff",
  // Iraq
  iraq_starter:          "Lentil soup",
  iraq_main:             "Masgouf",
  iraq_dessert:          "Kleicha",
  // Jordan
  jordan_starter:        "Hummus",
  jordan_main:           "Mansaf",
  jordan_dessert:        "Kanafeh",
  // Uzbekistan
  uzbekistan_starter:    "Shurpa",
  uzbekistan_main:       "Plov",
  uzbekistan_dessert:    "Çäkçäk"
};
