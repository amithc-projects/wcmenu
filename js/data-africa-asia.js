const COUNTRIES_AFRICA_ASIA = [
  // ===== CAF (Africa) =====
  {
    id: "morocco", name: "Morocco", flag: "🇲🇦", confederation: "CAF",
    intro: "Moroccan cuisine is an aromatic masterpiece — spice-laden tagines, hand-rolled couscous and floral orange-blossom pastries.",
    menu: {
      starter: {
        name: "Harira",
        description: "Morocco's soul-warming tomato and lentil soup with chickpeas, fragrant spices and a squeeze of lemon.",
        servings: 6, prepTime: "20 min", cookTime: "50 min",
        ingredients: [
          {amount:"200g", item:"lamb or chicken, diced small"},
          {amount:"200g", item:"canned chickpeas, drained"},
          {amount:"150g", item:"red lentils, rinsed"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"1", item:"large onion, diced"},
          {amount:"3 cloves", item:"garlic, minced"},
          {amount:"1 tsp", item:"ground ginger"},
          {amount:"1 tsp", item:"ground cinnamon"},
          {amount:"1 tsp", item:"ground cumin"},
          {amount:"½ tsp", item:"turmeric"},
          {amount:"large handful", item:"fresh coriander and parsley"},
          {amount:"1 L", item:"water or light stock"},
          {amount:"3 tbsp", item:"olive oil"},
          {amount:"2 tbsp", item:"lemon juice"},
          {amount:"1 tbsp", item:"flour or rice flour (for thickening)"}
        ],
        instructions: [
          "Brown lamb in olive oil. Add onion and garlic, cook 5 minutes.",
          "Add all spices and stir well. Add tomatoes, lentils, chickpeas and water.",
          "Bring to a boil, skim, simmer 35 minutes until lentils are very tender.",
          "Mix flour with a little cold water into a paste. Whisk into soup to thicken.",
          "Simmer 10 more minutes. Stir in lemon juice and fresh herbs.",
          "Serve hot with dates, chebakia pastries and crusty bread for Ramadan tradition."
        ],
        youtube: { search: "Harira recipe authentic Moroccan soup", url: "https://www.youtube.com/results?search_query=Harira+recipe+authentic+Moroccan+soup" }
      },
      main: {
        name: "Lamb Tagine with Apricots & Couscous",
        description: "Tender lamb shoulder slow-cooked in Moroccan spices with dried apricots, almonds and honey.",
        servings: 6, prepTime: "30 min", cookTime: "2 hrs",
        ingredients: [
          {amount:"1.2 kg", item:"lamb shoulder, cut into large cubes"},
          {amount:"2", item:"onions, diced"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"200g", item:"dried apricots"},
          {amount:"50g", item:"flaked almonds, toasted"},
          {amount:"2 tbsp", item:"honey"},
          {amount:"2 tsp", item:"ras el hanout"},
          {amount:"1 tsp", item:"ground cinnamon"},
          {amount:"1 tsp", item:"ground ginger"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"300 ml", item:"lamb or chicken stock"},
          {amount:"4 tbsp", item:"olive oil"},
          {amount:"500g", item:"couscous"},
          {amount:"to garnish", item:"fresh coriander, harissa"}
        ],
        instructions: [
          "Brown lamb in olive oil in a tagine or heavy casserole. Remove.",
          "Fry onions until golden. Add garlic and all spices, cook 2 minutes.",
          "Return lamb. Add tomatoes, stock and half the apricots.",
          "Cover and simmer very gently for 1.5–2 hours until lamb is falling apart.",
          "Add remaining apricots and honey for last 15 minutes.",
          "Prepare couscous: pour boiling stock over couscous, cover, rest 5 minutes, fluff with a fork.",
          "Serve tagine over couscous, scatter almonds and coriander. Serve harissa on the side."
        ],
        youtube: { search: "Moroccan lamb tagine recipe authentic apricot couscous", url: "https://www.youtube.com/results?search_query=Moroccan+lamb+tagine+recipe+authentic" }
      },
      dessert: {
        name: "Bastilla au Lait",
        description: "Crisp filo rounds filled with almond cream and drizzled with warm milk — a refined Moroccan dessert.",
        servings: 6, prepTime: "30 min", cookTime: "25 min",
        ingredients: [
          {amount:"12 sheets", item:"filo pastry"},
          {amount:"80g", item:"butter, melted"},
          {amount:"200g", item:"ground almonds"},
          {amount:"100g", item:"icing sugar"},
          {amount:"1 tsp", item:"orange blossom water"},
          {amount:"1 tsp", item:"cinnamon"},
          {amount:"400 ml", item:"whole milk"},
          {amount:"2 tbsp", item:"sugar (for warm milk)"},
          {amount:"1 tsp", item:"orange blossom water (for milk)"},
          {amount:"icing sugar and cinnamon", item:"for dusting"}
        ],
        instructions: [
          "Mix ground almonds, icing sugar, cinnamon and orange blossom water.",
          "Lay 2 sheets filo, brush with butter, add more layers. Cut into large rounds.",
          "Place a spoonful of almond filling on a filo round. Top with another round, press edges.",
          "Brush with butter. Bake at 190°C for 12–15 minutes until golden.",
          "Heat milk with sugar and orange blossom water until gently simmering.",
          "Dust bastilla rounds with icing sugar and cinnamon. Serve with warm milk poured around."
        ],
        youtube: { search: "Bastilla au lait recipe Moroccan almond pastry milk", url: "https://www.youtube.com/results?search_query=Bastilla+au+lait+recipe+Moroccan" }
      }
    }
  },

  {
    id: "senegal", name: "Senegal", flag: "🇸🇳", confederation: "CAF",
    intro: "Senegalese cuisine is West Africa's finest — thieboudienne is considered one of the world's great rice dishes.",
    menu: {
      starter: {
        name: "Accara (Black-Eyed Pea Fritters)",
        description: "Crispy fried black-eyed pea fritters with Scotch bonnet heat — Senegal's favourite street snack.",
        servings: 20, prepTime: "30 min + soaking overnight", cookTime: "20 min",
        ingredients: [
          {amount:"400g", item:"dried black-eyed peas, soaked overnight"},
          {amount:"1", item:"small onion, roughly chopped"},
          {amount:"1", item:"Scotch bonnet pepper, seeded"},
          {amount:"1 tsp", item:"salt"},
          {amount:"oil", item:"for deep frying"}
        ],
        instructions: [
          "Rub soaked peas between hands to remove skins. The skins will float — discard them.",
          "Blend peas, onion and Scotch bonnet to a thick, smooth batter.",
          "Season with salt. The batter should hold its shape.",
          "Heat oil to 175°C.",
          "Drop tablespoons of batter into the oil. Fry 3–4 minutes until golden all over.",
          "Serve hot with tomato-onion sauce (ceep u onion: blend tomato, onion, garlic)."
        ],
        youtube: { search: "Accara recipe Senegalese black eyed pea fritters", url: "https://www.youtube.com/results?search_query=Accara+recipe+Senegalese+black+eyed+pea+fritters" }
      },
      main: {
        name: "Thiéboudienne (Rice and Fish)",
        description: "Senegal's national dish and the foundation of all West African jollof — fish and rice slow-cooked in tomato and herb sauce.",
        servings: 6, prepTime: "40 min", cookTime: "1.5 hrs",
        ingredients: [
          {amount:"1 kg", item:"firm white fish fillets (red snapper or sea bream)"},
          {amount:"500g", item:"parboiled or jasmine rice"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"3 tbsp", item:"tomato paste"},
          {amount:"2", item:"large onions, sliced"},
          {amount:"stuffing:", item:"½ bunch parsley, 3 cloves garlic, 1 dried chilli, 1 tsp cumin — blended fine"},
          {amount:"selection", item:"of vegetables: yuca, sweet potato, carrot, cabbage wedges, eggplant"},
          {amount:"4 tbsp", item:"vegetable oil"},
          {amount:"2 cubes", item:"fish stock"},
          {amount:"1 L", item:"hot water"},
          {amount:"to serve", item:"lime wedges, tamarind paste"}
        ],
        instructions: [
          "Cut slits in fish fillets. Stuff with parsley-garlic-chilli mixture. Season with salt.",
          "Fry fish in oil 3 minutes per side. Remove.",
          "In same pot, fry onions until golden. Add tomatoes and tomato paste, cook 15 minutes.",
          "Add hot water, stock cubes and all vegetables. Simmer 20 minutes.",
          "Return fish on top, cook 10 minutes more.",
          "Remove fish and vegetables. Add rice to the tomato broth. Cover tightly and cook on low 20 minutes.",
          "Arrange rice on a large platter, place fish and vegetables on top. Serve with lime and tamarind."
        ],
        youtube: { search: "Thiéboudienne recipe Senegalese rice fish national dish", url: "https://www.youtube.com/results?search_query=Thiéboudienne+recipe+Senegalese+rice+fish" }
      },
      dessert: {
        name: "Thiakry (Millet Couscous with Sweetened Yogurt)",
        description: "Steamed millet couscous tossed with creamy spiced yogurt, raisins and coconut — a Senegalese celebration dessert.",
        servings: 6, prepTime: "20 min", cookTime: "20 min",
        ingredients: [
          {amount:"300g", item:"millet couscous (thiakry) or fine bulgur"},
          {amount:"400 ml", item:"warm water"},
          {amount:"400 ml", item:"plain yogurt"},
          {amount:"200 ml", item:"sweetened condensed milk"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"½ tsp", item:"ground nutmeg"},
          {amount:"3 tbsp", item:"raisins"},
          {amount:"3 tbsp", item:"desiccated coconut"}
        ],
        instructions: [
          "Pour warm water over millet couscous. Cover and steam (or microwave 3 minutes) until tender.",
          "Fluff with a fork. Allow to cool.",
          "Mix yogurt, condensed milk, vanilla and nutmeg until smooth.",
          "Fold couscous into yogurt mixture.",
          "Stir in raisins and coconut.",
          "Refrigerate 1 hour. Serve chilled in cups, topped with extra coconut and a sprinkle of nutmeg."
        ],
        youtube: { search: "Thiakry recipe Senegalese millet yogurt dessert", url: "https://www.youtube.com/results?search_query=Thiakry+recipe+Senegalese+dessert" }
      }
    }
  },

  {
    id: "ivory-coast", name: "Ivory Coast", flag: "🇨🇮", confederation: "CAF",
    intro: "Ivorian cuisine is West African cooking at its most vibrant — grilled fish, peanut stews and the must-try attieké.",
    menu: {
      starter: {
        name: "Kedjenou de Poulet",
        description: "Chicken slow-steamed in a sealed pot with peppers and tomatoes — no added water needed.",
        servings: 4, prepTime: "15 min", cookTime: "1 hr",
        ingredients: [
          {amount:"1.5 kg", item:"chicken pieces"},
          {amount:"3", item:"tomatoes, diced"},
          {amount:"2", item:"onions, diced"},
          {amount:"2", item:"green peppers, diced"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"1", item:"Scotch bonnet, whole"},
          {amount:"3 sprigs", item:"fresh thyme"},
          {amount:"2 bay leaves", item:""},
          {amount:"salt and pepper", item:"to taste"}
        ],
        instructions: [
          "Place all ingredients except salt in a heavy Dutch oven or clay pot. Do not add water.",
          "Season generously with salt and pepper. Toss together.",
          "Seal the lid tightly (use dough or foil to seal if needed).",
          "Cook over the lowest possible heat for 50–60 minutes, shaking the pot occasionally.",
          "The chicken will steam in its own juices and the vegetable liquid.",
          "Open carefully — fragrant steam will burst out. Serve with attiéké, plantain or rice."
        ],
        youtube: { search: "Kedjenou recipe Ivorian chicken stew authentic", url: "https://www.youtube.com/results?search_query=Kedjenou+recipe+Ivorian+chicken+stew" }
      },
      main: {
        name: "Attiéké with Grilled Fish & Aloko",
        description: "Fermented cassava couscous alongside chargrilled whole fish and fried sweet plantains (aloko).",
        servings: 4, prepTime: "25 min", cookTime: "30 min",
        ingredients: [
          {amount:"4", item:"whole medium fish (tilapia or bream), gutted and scaled"},
          {amount:"400g", item:"attiéké (fermented cassava couscous, from African shop)"},
          {amount:"400 ml", item:"hot water (for attiéké)"},
          {amount:"2", item:"ripe plantains, peeled and sliced diagonally"},
          {amount:"marinade:", item:"4 garlic cloves, 1 onion, 1 Scotch bonnet, 2 tbsp oil, 1 tbsp lime juice, 1 tsp salt, 1 tsp cumin"},
          {amount:"oil", item:"for frying plantains"},
          {amount:"fresh tomato sauce", item:"(blend 2 tomatoes, 1 onion, 1 pepper, fry in oil 15 min)"}
        ],
        instructions: [
          "Score fish deeply on both sides. Blend marinade to a paste, rub all over and inside fish. Marinate 20 min.",
          "Grill fish on a hot charcoal grill or griddle, 6–8 minutes per side until charred and cooked through.",
          "Prepare attiéké: pour hot water over, fluff with a fork, rest 5 minutes. Season with salt.",
          "Fry plantain slices in oil until golden (aloko).",
          "Fry tomato sauce in oil until thick and red.",
          "Serve fish on a large platter with attiéké, aloko and tomato sauce."
        ],
        youtube: { search: "Attiéké grilled fish recipe Ivorian Côte d'Ivoire", url: "https://www.youtube.com/results?search_query=Attieke+grilled+fish+recipe+Cote+Ivoire" }
      },
      dessert: {
        name: "Alloco with Vanilla Ice Cream",
        description: "Caramelised deep-fried plantains — Ivory Coast's everyday street dessert, elevated with ice cream.",
        servings: 4, prepTime: "5 min", cookTime: "15 min",
        ingredients: [
          {amount:"4", item:"very ripe plantains (black spots ideal), sliced diagonally"},
          {amount:"oil", item:"for deep frying"},
          {amount:"2 tbsp", item:"sugar (optional caramelised version)"},
          {amount:"pinch", item:"cinnamon"},
          {amount:"4 scoops", item:"vanilla ice cream"}
        ],
        instructions: [
          "Heat oil to 175°C.",
          "Fry plantain slices 3–4 minutes per side until deep golden and caramelised.",
          "Drain on paper towels.",
          "Optional: toss in sugar and cinnamon while still hot for extra caramelisation.",
          "Serve hot plantains alongside a scoop of vanilla ice cream.",
          "The contrast of warm, sweet plantain and cold ice cream is the point."
        ],
        youtube: { search: "Alloco fried plantain recipe Ivorian sweet", url: "https://www.youtube.com/results?search_query=Alloco+fried+plantain+recipe+Ivorian" }
      }
    }
  },

  {
    id: "egypt", name: "Egypt", flag: "🇪🇬", confederation: "CAF",
    intro: "Egyptian cuisine is ancient and filling — fava beans, lentils and the extraordinary koshari have fed civilisations.",
    menu: {
      starter: {
        name: "Ful Medames",
        description: "Egypt's ancient fava bean breakfast — slow-cooked, mashed and dressed with lemon, garlic and cumin.",
        servings: 4, prepTime: "10 min", cookTime: "45 min",
        ingredients: [
          {amount:"500g", item:"cooked or canned fava beans (ful)"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"juice of 2", item:"lemons"},
          {amount:"4 tbsp", item:"extra-virgin olive oil"},
          {amount:"1 tsp", item:"ground cumin"},
          {amount:"½ tsp", item:"chilli flakes"},
          {amount:"to serve", item:"chopped tomato, diced onion, boiled egg, pita bread"}
        ],
        instructions: [
          "Simmer fava beans in a small amount of water 20–30 minutes until very tender.",
          "Drain, keeping some liquid. Mash roughly — leave some whole.",
          "Add garlic, lemon juice, olive oil and cumin. Mash together.",
          "Season with salt. Add a splash of bean cooking water for consistency.",
          "Serve in a flat bowl, drizzle with more olive oil, scatter chilli flakes.",
          "Top with diced tomato and onion. Serve with warm pita bread and a boiled egg."
        ],
        youtube: { search: "Ful Medames recipe Egyptian authentic fava beans", url: "https://www.youtube.com/results?search_query=Ful+Medames+recipe+Egyptian+authentic" }
      },
      main: {
        name: "Koshari",
        description: "Egypt's beloved street food — layers of rice, lentils and pasta topped with crispy onions and spiced tomato sauce.",
        servings: 6, prepTime: "30 min", cookTime: "1 hr",
        ingredients: [
          {amount:"300g", item:"white rice"},
          {amount:"200g", item:"green lentils, cooked"},
          {amount:"200g", item:"macaroni or penne pasta"},
          {amount:"100g", item:"vermicelli noodles"},
          {amount:"3", item:"large onions, thinly sliced"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"4 tbsp", item:"white wine vinegar"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"1 tsp", item:"ground cumin"},
          {amount:"½ tsp", item:"cayenne"},
          {amount:"oil", item:"for frying onions"},
          {amount:"garlic vinegar sauce:", item:"4 garlic cloves blended with 100ml vinegar and salt"}
        ],
        instructions: [
          "Fry onions in plenty of oil over medium heat, 30–40 minutes, until deeply crispy. Drain on paper towels.",
          "Cook rice with lentils and vermicelli (brown vermicelli in oil first).",
          "Cook pasta separately. Drain.",
          "For tomato sauce: fry garlic, add tomatoes, cumin, cayenne and vinegar. Simmer 20 minutes.",
          "Layer in bowls: rice/lentil mixture, then pasta, then crispy onions.",
          "Pour tomato sauce over. Offer garlic vinegar sauce and hot sauce on the side."
        ],
        youtube: { search: "Koshari recipe Egyptian street food authentic", url: "https://www.youtube.com/results?search_query=Koshari+recipe+Egyptian+street+food" }
      },
      dessert: {
        name: "Om Ali (Egyptian Bread Pudding)",
        description: "Egypt's classic dessert — torn pastry baked in sweet cream with nuts and coconut.",
        servings: 8, prepTime: "15 min", cookTime: "25 min",
        ingredients: [
          {amount:"6 sheets", item:"filo or puff pastry, baked until crispy"},
          {amount:"800 ml", item:"whole milk"},
          {amount:"200 ml", item:"double cream"},
          {amount:"4 tbsp", item:"sugar"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"50g", item:"raisins"},
          {amount:"50g", item:"flaked almonds"},
          {amount:"50g", item:"pistachio, chopped"},
          {amount:"50g", item:"desiccated coconut"},
          {amount:"ground cinnamon", item:"to serve"}
        ],
        instructions: [
          "Preheat oven to 200°C. Break baked pastry into chunks and arrange in a deep baking dish.",
          "Scatter raisins, almonds, pistachios and coconut over the pastry.",
          "Heat milk, cream, sugar and vanilla until sugar dissolves. Pour over pastry — it should soak in.",
          "Bake 20–25 minutes until golden and bubbling on top.",
          "Serve warm, dusted with cinnamon. It should be creamy and slightly crusty on top."
        ],
        youtube: { search: "Om Ali recipe Egyptian bread pudding authentic", url: "https://www.youtube.com/results?search_query=Om+Ali+recipe+Egyptian+bread+pudding" }
      }
    }
  },

  {
    id: "south-africa", name: "South Africa", flag: "🇿🇦", confederation: "CAF",
    intro: "South African food is a rainbow of influences — Cape Malay spices, Zulu braai culture and Afrikaner heritage baking.",
    menu: {
      starter: {
        name: "Boerewors Rolls",
        description: "Coiled spiced pork and beef sausage grilled and served in a roll with chakalaka or tomato sauce.",
        servings: 4, prepTime: "20 min", cookTime: "20 min",
        ingredients: [
          {amount:"600g", item:"boerewors sausage (South African spiced coiled sausage)"},
          {amount:"4", item:"soft long bread rolls"},
          {amount:"chakalaka:", item:"1 onion + 1 carrot + 1 can baked beans + 1 tsp curry powder + 1 tomato, cooked together"},
          {amount:"to serve", item:"tomato sauce, mustard, caramelised onions"}
        ],
        instructions: [
          "Make chakalaka: fry diced onion and grated carrot in oil, add curry powder, add beans and tomato, simmer 15 minutes.",
          "Grill boerewors on a hot braai or griddle pan, keeping it coiled.",
          "Cook 8–10 minutes per side until charred outside and cooked through.",
          "Slice roll, place boerewors inside.",
          "Spoon chakalaka over, add tomato sauce and mustard.",
          "Serve immediately with cold beer."
        ],
        youtube: { search: "Boerewors roll recipe South African braai", url: "https://www.youtube.com/results?search_query=Boerewors+roll+recipe+South+African+braai" }
      },
      main: {
        name: "Braai Lamb Chops with Pap & Chakalaka",
        description: "Fire-grilled lamb chops with maize meal porridge and the spicy vegetable relish that defines South African braai culture.",
        servings: 4, prepTime: "20 min", cookTime: "1 hr",
        ingredients: [
          {amount:"8", item:"lamb loin chops or T-bone chops"},
          {amount:"2 tbsp", item:"olive oil"},
          {amount:"1 tbsp", item:"dried rosemary"},
          {amount:"1 tbsp", item:"garlic, minced"},
          {amount:"1 tsp", item:"cayenne"},
          {amount:"pap:", item:"500g coarse maize meal (mealie meal) + 1.2L water + 1 tsp salt"},
          {amount:"chakalaka:", item:"as above — onion, carrot, beans, curry powder, tomato"}
        ],
        instructions: [
          "Marinate chops with oil, rosemary, garlic and cayenne for 30 minutes.",
          "Make pap: bring salted water to a boil, whisk in maize meal, stir until thick, cover and steam 30 minutes.",
          "Prepare chakalaka as in starter recipe (make a larger batch).",
          "Grill lamb chops on very hot braai or cast iron grill, 3–4 minutes per side for medium.",
          "Rest chops 3 minutes.",
          "Serve chops with mounds of stiff pap and chakalaka. Braai is the experience as much as the food."
        ],
        youtube: { search: "South African braai lamb chops pap chakalaka recipe", url: "https://www.youtube.com/results?search_query=South+African+braai+lamb+chops+pap+recipe" }
      },
      dessert: {
        name: "Melktert (South African Milk Tart)",
        description: "A delicate pastry shell filled with lightly set vanilla-cinnamon milk custard — an Afrikaner treasure.",
        servings: 8, prepTime: "30 min", cookTime: "45 min",
        ingredients: [
          {amount:"200g", item:"plain flour"},
          {amount:"100g", item:"cold butter"},
          {amount:"2 tbsp", item:"icing sugar"},
          {amount:"1", item:"egg yolk"},
          {amount:"3 tbsp", item:"ice water"},
          {amount:"750 ml", item:"whole milk"},
          {amount:"3", item:"eggs"},
          {amount:"100g", item:"caster sugar"},
          {amount:"3 tbsp", item:"cornflour"},
          {amount:"1 tbsp", item:"plain flour"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"cinnamon and sugar", item:"for dusting generously"}
        ],
        instructions: [
          "Make pastry: rub butter into flour and sugar. Add egg yolk and water. Chill 30 minutes.",
          "Press pastry into a 23 cm tart tin (this is a fragile pastry — press rather than roll). Bake blind at 190°C for 15 minutes.",
          "Heat milk until just simmering.",
          "Whisk eggs, sugar, cornflour and flour. Pour hot milk over slowly, whisking.",
          "Return to heat, stir until thickened. Add vanilla.",
          "Pour into pastry case. Bake at 160°C for 25 minutes until just set.",
          "Cool completely. Dust very generously with cinnamon and sugar before serving."
        ],
        youtube: { search: "Melktert recipe authentic South African milk tart", url: "https://www.youtube.com/results?search_query=Melktert+recipe+authentic+South+African+milk+tart" }
      }
    }
  },

  {
    id: "tunisia", name: "Tunisia", flag: "🇹🇳", confederation: "CAF",
    intro: "Tunisian food is North Africa's spiciest and most sophisticated — harissa heat, seafood and the elegance of brik pastry.",
    menu: {
      starter: {
        name: "Brik à l'Oeuf (Tuna and Egg Pastry)",
        description: "Paper-thin pastry folded over tuna, capers and a raw egg that cooks inside — crispy perfection.",
        servings: 4, prepTime: "15 min", cookTime: "10 min",
        ingredients: [
          {amount:"4 sheets", item:"malsouka or brick pastry (or spring roll wrappers)"},
          {amount:"1 can (160g)", item:"tuna in oil, drained and flaked"},
          {amount:"4", item:"eggs"},
          {amount:"4 tbsp", item:"finely diced onion"},
          {amount:"2 tbsp", item:"capers, chopped"},
          {amount:"handful", item:"flat-leaf parsley, chopped"},
          {amount:"1 tsp", item:"harissa"},
          {amount:"oil", item:"for frying"},
          {amount:"lemon wedges", item:"to serve"}
        ],
        instructions: [
          "Mix tuna, onion, capers, parsley and harissa together.",
          "Heat a thin layer of oil in a large frying pan.",
          "Place one pastry sheet in pan. Quickly add a spoonful of tuna mixture in the centre.",
          "Make a small well in the filling. Crack an egg into the well.",
          "Fold pastry in half immediately to encase the egg.",
          "Fry 2 minutes per side until crispy and golden — the egg inside should be just set.",
          "Serve immediately with lemon wedges."
        ],
        youtube: { search: "Brik à l'oeuf recipe Tunisian tuna egg pastry", url: "https://www.youtube.com/results?search_query=Brik+oeuf+recipe+Tunisian+pastry" }
      },
      main: {
        name: "Couscous à l'Agneau (Lamb Couscous)",
        description: "Slow-cooked lamb in a spiced vegetable broth poured over hand-rolled couscous — North Africa's great dish.",
        servings: 6, prepTime: "30 min", cookTime: "2 hrs",
        ingredients: [
          {amount:"1.2 kg", item:"lamb shoulder, on the bone, large pieces"},
          {amount:"500g", item:"couscous, medium grain"},
          {amount:"2", item:"onions, quartered"},
          {amount:"3", item:"carrots, chunked"},
          {amount:"3", item:"courgettes, chunked"},
          {amount:"2", item:"turnips, quartered"},
          {amount:"1 can", item:"chickpeas, drained"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"1 tsp", item:"harissa"},
          {amount:"1 tsp", item:"ras el hanout"},
          {amount:"1 tsp", item:"cinnamon"},
          {amount:"saffron, pinch", item:"soaked in warm water"},
          {amount:"4 tbsp", item:"olive oil"}
        ],
        instructions: [
          "Brown lamb in oil in a large pot. Add onions and all spices, cook 5 minutes.",
          "Add tomatoes, saffron water and enough water to cover. Simmer 1 hour.",
          "Add carrots and turnips. Simmer 30 minutes more.",
          "Add courgettes and chickpeas for the final 15 minutes.",
          "Season and stir in harissa.",
          "Steam couscous according to packet, fluff with butter and salt.",
          "Mound couscous on a large platter. Arrange lamb and vegetables around. Pour broth over generously."
        ],
        youtube: { search: "Couscous agneau Tunisien recipe authentic lamb", url: "https://www.youtube.com/results?search_query=Couscous+agneau+Tunisien+recipe+authentic" }
      },
      dessert: {
        name: "Makroudh (Date-Filled Semolina Cookies)",
        description: "Diamond-shaped semolina pastries stuffed with dates and orange blossom, soaked in honey.",
        servings: 24, prepTime: "40 min", cookTime: "25 min",
        ingredients: [
          {amount:"500g", item:"fine semolina"},
          {amount:"150g", item:"butter, melted"},
          {amount:"150 ml", item:"warm water"},
          {amount:"1 tsp", item:"orange blossom water"},
          {amount:"pinch", item:"salt"},
          {amount:"300g", item:"dates, pitted and mashed"},
          {amount:"1 tsp", item:"cinnamon"},
          {amount:"1 tsp", item:"orange blossom water (for filling)"},
          {amount:"honey and sesame seeds", item:"for soaking and coating"}
        ],
        instructions: [
          "Mix semolina, melted butter, salt and orange blossom water. Add warm water gradually to form a dough. Rest 20 minutes.",
          "Mix mashed dates with cinnamon and orange blossom water.",
          "Divide dough into two logs. Press a channel down the middle. Fill with date mixture. Press dough over to seal.",
          "Cut diagonally into diamond shapes.",
          "Deep fry or bake at 180°C until golden (20 minutes if baking).",
          "While warm, soak briefly in warmed honey. Sprinkle with sesame seeds. Cool before serving."
        ],
        youtube: { search: "Makroudh recipe Tunisian date cookies semolina", url: "https://www.youtube.com/results?search_query=Makroudh+recipe+Tunisian+date+cookies" }
      }
    }
  },

  {
    id: "algeria", name: "Algeria", flag: "🇩🇿", confederation: "CAF",
    intro: "Algerian cuisine blends Berber, Arab and Mediterranean influences — aromatic soups, flatbreads and honey sweets.",
    menu: {
      starter: {
        name: "Chorba Frik (Cracked Wheat and Lamb Soup)",
        description: "Algeria's fragrant Ramadan soup — lamb, tomatoes and green wheat with coriander.",
        servings: 4, prepTime: "15 min", cookTime: "1 hr",
        ingredients: [
          {amount:"400g", item:"lamb on the bone, small pieces"},
          {amount:"150g", item:"freekeh (green cracked wheat) or barley"},
          {amount:"2", item:"tomatoes, grated"},
          {amount:"1 tbsp", item:"tomato paste"},
          {amount:"1", item:"onion, finely diced"},
          {amount:"3 cloves", item:"garlic"},
          {amount:"1 tsp", item:"ras el hanout"},
          {amount:"½ tsp", item:"cinnamon"},
          {amount:"1 L", item:"water"},
          {amount:"large bunch", item:"fresh coriander and parsley"},
          {amount:"2 tbsp", item:"olive oil"},
          {amount:"lemon", item:"to serve"}
        ],
        instructions: [
          "Brown lamb in olive oil. Add onion and garlic, cook 5 minutes.",
          "Add ras el hanout and cinnamon, stir 1 minute.",
          "Add grated tomatoes, tomato paste, freekeh and water.",
          "Bring to a boil, skim, then simmer 45 minutes until lamb is tender and wheat is soft.",
          "Add most of the coriander. Season.",
          "Serve with a squeeze of lemon and crusty bread."
        ],
        youtube: { search: "Chorba Frik recipe Algerian lamb wheat soup", url: "https://www.youtube.com/results?search_query=Chorba+Frik+recipe+Algerian+soup" }
      },
      main: {
        name: "Chakhchoukha",
        description: "Torn flatbread drenched in a rich lamb and vegetable stew — Algeria's most festive dish.",
        servings: 6, prepTime: "30 min", cookTime: "1.5 hrs",
        ingredients: [
          {amount:"4–6", item:"mlewi flatbreads or large tortillas, torn into pieces"},
          {amount:"800g", item:"lamb shoulder, cubed"},
          {amount:"2", item:"onions, diced"},
          {amount:"3", item:"tomatoes, diced"},
          {amount:"2", item:"courgettes, diced"},
          {amount:"1 can", item:"chickpeas, drained"},
          {amount:"1 tsp", item:"ras el hanout"},
          {amount:"1 tsp", item:"sweet paprika"},
          {amount:"saffron", item:"pinch soaked in water"},
          {amount:"1 L", item:"lamb or chicken stock"},
          {amount:"3 tbsp", item:"olive oil"}
        ],
        instructions: [
          "Brown lamb in olive oil. Add onion and spices, cook 5 minutes.",
          "Add tomatoes, stock and saffron water. Simmer 1 hour.",
          "Add courgettes and chickpeas for last 20 minutes.",
          "To serve: arrange torn flatbread in a large deep dish.",
          "Pour the lamb stew and all its broth over the bread generously.",
          "Leave 5 minutes for bread to absorb the broth before serving. Sprinkle with coriander."
        ],
        youtube: { search: "Chakhchoukha recipe Algerian festive bread stew", url: "https://www.youtube.com/results?search_query=Chakhchoukha+recipe+Algerian+stew" }
      },
      dessert: {
        name: "Zlabia (Algerian Honey Funnel Cakes)",
        description: "Crispy deep-fried spirals of batter drenched in rose water and orange blossom honey syrup.",
        servings: 20, prepTime: "15 min + 1 hr fermenting", cookTime: "20 min",
        ingredients: [
          {amount:"300g", item:"plain flour"},
          {amount:"1 tsp", item:"yeast"},
          {amount:"300 ml", item:"warm water"},
          {amount:"pinch", item:"saffron (for colour)"},
          {amount:"oil", item:"for deep frying"},
          {amount:"syrup:", item:"300g sugar + 200ml water + 1 tsp rose water + 1 tsp orange blossom water — boiled 5 minutes"}
        ],
        instructions: [
          "Mix flour, yeast, saffron and warm water to a thin, smooth batter.",
          "Leave to ferment at room temperature 1 hour.",
          "Make syrup: boil sugar and water, add rose water and orange blossom. Keep warm.",
          "Heat oil to 180°C. Pour batter into a piping bag or squeezy bottle.",
          "Pipe in circular or spiral shapes directly into the oil. Fry 2 minutes per side until golden.",
          "Remove and immediately plunge into warm syrup for 30 seconds. Drain and serve."
        ],
        youtube: { search: "Zlabia recipe Algerian fried pastry honey syrup", url: "https://www.youtube.com/results?search_query=Zlabia+recipe+Algerian+fried+pastry" }
      }
    }
  },


  // ===== AFC (Asia) =====
  {
    id: "japan", name: "Japan", flag: "🇯🇵", confederation: "AFC",
    intro: "Japanese cuisine is built on umami, precision and seasonality — from delicate miso broths to rich ramen and perfect mochi.",
    menu: {
      starter: {
        name: "Miso Soup with Tofu & Wakame",
        description: "Japan's daily comfort soup — rich dashi broth with miso, silken tofu and sea vegetables.",
        servings: 4, prepTime: "10 min", cookTime: "10 min",
        ingredients: [
          {amount:"1 L", item:"dashi stock (or 1 L water + 2 tsp instant dashi powder)"},
          {amount:"4 tbsp", item:"white or red miso paste"},
          {amount:"300g", item:"silken tofu, cubed"},
          {amount:"10g", item:"dried wakame seaweed, soaked in water 5 minutes"},
          {amount:"2", item:"spring onions, thinly sliced"},
          {amount:"optional:", item:"1 tsp sesame oil"}
        ],
        instructions: [
          "Heat dashi stock until just below boiling — never boil miso soup.",
          "Dissolve miso paste in a ladle of hot stock, then whisk back into the pot.",
          "Add drained wakame and tofu cubes.",
          "Warm gently for 2 minutes.",
          "Ladle into bowls. Top with spring onions and a drop of sesame oil.",
          "Serve alongside rice and pickles as part of a full Japanese breakfast or starter."
        ],
        youtube: { search: "miso soup recipe authentic Japanese dashi tofu", url: "https://www.youtube.com/results?search_query=miso+soup+recipe+authentic+Japanese" }
      },
      main: {
        name: "Tonkotsu Ramen",
        description: "Creamy, milky pork bone broth with wavy noodles, chashu pork belly, soft-boiled egg and nori.",
        servings: 4, prepTime: "30 min + overnight chashu marinating", cookTime: "4 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"pork trotters and neck bones"},
          {amount:"2 L", item:"water"},
          {amount:"1", item:"head of garlic, halved"},
          {amount:"4 cm", item:"piece of ginger, sliced"},
          {amount:"400g", item:"pork belly (for chashu — rolled, tied)"},
          {amount:"chashu sauce:", item:"4 tbsp soy sauce, 2 tbsp mirin, 2 tbsp sake, 1 tbsp sugar"},
          {amount:"400g", item:"fresh ramen noodles"},
          {amount:"4", item:"eggs (soft-boiled 6½ minutes, marinated in soy/mirin)"},
          {amount:"toppings:", item:"nori sheets, spring onions, bamboo shoots, sesame seeds, mayu (burnt garlic oil)"}
        ],
        instructions: [
          "Blanch pork bones in boiling water 5 minutes, drain, scrub clean.",
          "Boil bones vigorously (not simmer — vigorous boil creates the creamy broth) with garlic and ginger for 3–4 hours. Top up water as needed.",
          "Meanwhile, sear pork belly, then braise in chashu sauce with water for 2 hours. Cool and slice.",
          "Strain broth through a sieve. Season with soy sauce and salt.",
          "Cook noodles according to packet. Drain.",
          "Ladle hot broth into deep bowls. Add noodles. Top with chashu slices, halved marinated egg, nori and spring onion."
        ],
        youtube: { search: "Tonkotsu ramen recipe authentic Japanese from scratch", url: "https://www.youtube.com/results?search_query=Tonkotsu+ramen+recipe+authentic+Japanese" }
      },
      dessert: {
        name: "Matcha Mochi Ice Cream",
        description: "Chewy rice cake parcels filled with green tea ice cream — Japan's most photogenic dessert.",
        servings: 8, prepTime: "30 min + freezing", cookTime: "5 min",
        ingredients: [
          {amount:"200g", item:"mochiko (glutinous rice flour)"},
          {amount:"180g", item:"caster sugar"},
          {amount:"300 ml", item:"water"},
          {amount:"2 tsp", item:"matcha powder"},
          {amount:"cornstarch", item:"for dusting generously"},
          {amount:"500 ml", item:"matcha or green tea ice cream"},
          {amount:"a few drops", item:"food colouring green (optional)"}
        ],
        instructions: [
          "Scoop ice cream into 8 balls, place on baking paper, freeze solid (at least 2 hours).",
          "Whisk mochiko, sugar, matcha and water until smooth.",
          "Microwave mochi mixture 2 minutes, stir, microwave 2 more minutes, stir until translucent and elastic.",
          "Pour onto a cornstarch-dusted surface. Flatten, cut into 8 squares while still warm.",
          "Working quickly (mochi firms as it cools), wrap each ice cream ball in a mochi square, pinching to seal.",
          "Dust with cornstarch. Keep frozen until ready to serve (30 min out of freezer)."
        ],
        youtube: { search: "matcha mochi ice cream recipe Japanese daifuku", url: "https://www.youtube.com/results?search_query=matcha+mochi+ice+cream+recipe+Japanese" }
      }
    }
  },

  {
    id: "south-korea", name: "South Korea", flag: "🇰🇷", confederation: "AFC",
    intro: "Korean cuisine balances fermented depth with bold flavours — kimchi, gochujang and the art of banchan.",
    menu: {
      starter: {
        name: "Haemul Pajeon (Seafood & Spring Onion Pancake)",
        description: "Crispy Korean savoury pancake studded with squid, shrimp and spring onions, served with dipping sauce.",
        servings: 4, prepTime: "15 min", cookTime: "15 min",
        ingredients: [
          {amount:"200g", item:"plain flour"},
          {amount:"2 tbsp", item:"potato starch"},
          {amount:"300 ml", item:"ice-cold water"},
          {amount:"1", item:"egg"},
          {amount:"200g", item:"mixed seafood (squid rings, small shrimp)"},
          {amount:"8", item:"spring onions, cut into 8 cm lengths"},
          {amount:"3 tbsp", item:"vegetable oil"},
          {amount:"dipping sauce:", item:"3 tbsp soy sauce, 1 tbsp rice vinegar, 1 tsp sesame oil, ½ tsp gochugaru, 1 tsp sesame seeds"}
        ],
        instructions: [
          "Mix flour, starch, egg and ice-cold water to a thin batter. Season with salt.",
          "Heat oil in a wide non-stick pan over medium-high heat.",
          "Pour half the batter in. Lay spring onions in lines across the pancake.",
          "Scatter seafood over. Pour remaining batter over top.",
          "Cook 5–6 minutes until bottom is deeply golden and crispy.",
          "Flip carefully. Cook 4 minutes more.",
          "Cut into wedges. Mix dipping sauce ingredients. Serve immediately."
        ],
        youtube: { search: "Haemul Pajeon recipe Korean seafood pancake authentic", url: "https://www.youtube.com/results?search_query=Haemul+Pajeon+recipe+Korean+seafood+pancake" }
      },
      main: {
        name: "Bibimbap",
        description: "Korea's iconic mixed rice bowl — vegetables, beef, fried egg and gochujang all tossed together at the table.",
        servings: 4, prepTime: "40 min", cookTime: "30 min",
        ingredients: [
          {amount:"4 cups", item:"cooked short-grain white rice"},
          {amount:"300g", item:"beef mince or sliced ribeye"},
          {amount:"3 tbsp", item:"soy sauce + 1 tbsp sugar + 1 tsp sesame oil + 2 garlic cloves (minced) — for beef"},
          {amount:"200g", item:"spinach, blanched and seasoned with sesame oil and garlic"},
          {amount:"200g", item:"bean sprouts, blanched and seasoned"},
          {amount:"2", item:"carrots, julienned and stir-fried"},
          {amount:"4", item:"shiitake mushrooms, sliced and sautéed"},
          {amount:"1", item:"courgette, julienned and sautéed"},
          {amount:"4", item:"eggs, fried sunny-side up"},
          {amount:"4 tbsp", item:"gochujang (Korean chilli paste)"},
          {amount:"sesame oil and seeds", item:"to finish"}
        ],
        instructions: [
          "Marinate beef in soy sauce, sugar, sesame oil and garlic 15 minutes. Stir-fry until cooked.",
          "Prepare each vegetable separately: blanch/sauté and season individually with salt, garlic and sesame.",
          "Scoop hot rice into large bowls.",
          "Arrange each vegetable and the beef in separate sections over the rice.",
          "Place fried egg in the centre.",
          "Add a spoonful of gochujang. Drizzle with sesame oil and scatter sesame seeds.",
          "At the table, each person mixes everything together vigorously before eating."
        ],
        youtube: { search: "Bibimbap recipe authentic Korean mixed rice bowl", url: "https://www.youtube.com/results?search_query=Bibimbap+recipe+authentic+Korean" }
      },
      dessert: {
        name: "Bingsu (Shaved Ice with Red Bean)",
        description: "Fluffy shaved milk ice crowned with sweet red bean, rice cakes, fruit and condensed milk.",
        servings: 2, prepTime: "10 min + freezing", cookTime: "45 min (red bean)",
        ingredients: [
          {amount:"500 ml", item:"whole milk + 3 tbsp sugar, frozen into a solid block"},
          {amount:"200g", item:"dried red beans (azuki), cooked with sugar to a sweet paste"},
          {amount:"100g", item:"tteok (Korean rice cakes, small)"},
          {amount:"4 tbsp", item:"sweetened condensed milk"},
          {amount:"1 tsp", item:"matcha powder or 2 tbsp red bean paste", item2:"additional toppings"},
          {amount:"fresh fruit", item:"mango, strawberries, or lychee to garnish"}
        ],
        instructions: [
          "Freeze sweetened milk in a shallow tray. When solid, shave with a fork or snow cone machine to fluffy ice.",
          "Cook red beans: simmer with sugar 45 minutes until very soft. Cool.",
          "Pile shaved milk ice into large bowls — it should be mountain-high.",
          "Spoon sweet red bean paste over.",
          "Add tteok pieces and fresh fruit.",
          "Drizzle with condensed milk. Serve and eat immediately before it melts."
        ],
        youtube: { search: "Bingsu recipe Korean shaved ice red bean", url: "https://www.youtube.com/results?search_query=Bingsu+recipe+Korean+shaved+ice+red+bean" }
      }
    }
  },

  {
    id: "australia", name: "Australia", flag: "🇦🇺", confederation: "AFC",
    intro: "Australian food reflects a multicultural nation with incredible produce — fresh seafood, quality lamb and an obsession with coffee culture.",
    menu: {
      starter: {
        name: "Grilled Barramundi Bites with Aioli",
        description: "Australia's signature fish — barramundi fillets grilled until golden with lemon and fresh herbs.",
        servings: 4, prepTime: "15 min", cookTime: "10 min",
        ingredients: [
          {amount:"600g", item:"barramundi fillets, cut into chunks"},
          {amount:"2 tbsp", item:"olive oil"},
          {amount:"1 tbsp", item:"lemon zest"},
          {amount:"1 tsp", item:"ground coriander"},
          {amount:"salt and pepper", item:""},
          {amount:"aioli:", item:"4 tbsp good mayonnaise + 2 cloves garlic minced + 1 tbsp lemon juice"},
          {amount:"to serve", item:"lemon wedges, fresh flat-leaf parsley, toasted sourdough"}
        ],
        instructions: [
          "Toss barramundi chunks in olive oil, lemon zest, coriander, salt and pepper.",
          "Mix aioli ingredients together. Refrigerate.",
          "Grill or pan-fry fish pieces over high heat, 2–3 minutes per side until golden and cooked.",
          "Toast sourdough slices until charred.",
          "Arrange fish on toasted bread.",
          "Spoon aioli generously over. Serve with lemon wedges and parsley."
        ],
        youtube: { search: "barramundi recipe grilled Australian fish", url: "https://www.youtube.com/results?search_query=barramundi+recipe+grilled+Australian" }
      },
      main: {
        name: "Lamb Cutlets with Roasted Vegetables & Mint Sauce",
        description: "Quality Australian lamb cutlets with a simple rosemary crust and a classic fresh mint sauce.",
        servings: 4, prepTime: "20 min", cookTime: "30 min",
        ingredients: [
          {amount:"12", item:"lamb cutlets (French-trimmed)"},
          {amount:"3 tbsp", item:"olive oil"},
          {amount:"2 tbsp", item:"rosemary, finely chopped"},
          {amount:"2 cloves", item:"garlic, minced"},
          {amount:"2", item:"large sweet potatoes, cubed"},
          {amount:"2", item:"courgettes, chunked"},
          {amount:"1", item:"red onion, wedged"},
          {amount:"mint sauce:", item:"large handful mint leaves + 2 tsp sugar + 2 tbsp boiling water + 2 tbsp white wine vinegar"}
        ],
        instructions: [
          "Toss vegetables in olive oil, salt and pepper. Roast at 200°C for 25–30 minutes.",
          "Rub lamb cutlets with rosemary, garlic, olive oil and salt. Rest 10 minutes.",
          "Make mint sauce: dissolve sugar in hot water. Add finely chopped mint and vinegar. Rest 20 minutes.",
          "Grill or pan-sear cutlets on very high heat, 2–3 minutes per side for pink.",
          "Rest 3 minutes.",
          "Serve 3 cutlets per person over roasted vegetables with mint sauce and a squeeze of lemon."
        ],
        youtube: { search: "Australian lamb cutlets recipe rosemary mint sauce", url: "https://www.youtube.com/results?search_query=Australian+lamb+cutlets+recipe+rosemary" }
      },
      dessert: {
        name: "Lamingtons",
        description: "Iconic Australian sponge squares dipped in chocolate icing and rolled in desiccated coconut.",
        servings: 16, prepTime: "30 min", cookTime: "30 min",
        ingredients: [
          {amount:"4", item:"eggs"},
          {amount:"150g", item:"caster sugar"},
          {amount:"150g", item:"self-raising flour"},
          {amount:"30g", item:"butter, melted"},
          {amount:"2 tbsp", item:"hot water"},
          {amount:"300g", item:"icing sugar"},
          {amount:"60g", item:"cocoa powder"},
          {amount:"100 ml", item:"boiling water"},
          {amount:"30g", item:"butter (for icing)"},
          {amount:"200g", item:"desiccated coconut"}
        ],
        instructions: [
          "Preheat oven to 180°C. Whisk eggs and sugar until thick and tripled in volume.",
          "Fold in flour, melted butter and hot water.",
          "Pour into a greased 25×20 cm tin. Bake 25 minutes. Cool completely. Refrigerate 1 hour (easier to cut cold).",
          "Cut into 16 squares.",
          "Make icing: whisk icing sugar, cocoa, boiling water and melted butter until smooth.",
          "Dip each square in chocolate icing, letting excess drip. Immediately roll in coconut.",
          "Set on a rack to firm. Best eaten same day."
        ],
        youtube: { search: "Lamingtons recipe authentic Australian chocolate coconut", url: "https://www.youtube.com/results?search_query=Lamingtons+recipe+authentic+Australian" }
      }
    }
  },

  {
    id: "saudi-arabia", name: "Saudi Arabia", flag: "🇸🇦", confederation: "AFC",
    intro: "Saudi cuisine is fragrant and generous — aromatic rice dishes, slow-roasted meats and sweet dates in every household.",
    menu: {
      starter: {
        name: "Mutabbaq (Stuffed Pancake)",
        description: "Flaky folded pancakes filled with spiced minced lamb, egg and spring onion — a Saudi street favourite.",
        servings: 8, prepTime: "30 min", cookTime: "20 min",
        ingredients: [
          {amount:"500g", item:"plain flour"},
          {amount:"300 ml", item:"water"},
          {amount:"1 tsp", item:"salt"},
          {amount:"300g", item:"lamb mince"},
          {amount:"3", item:"eggs, beaten"},
          {amount:"4", item:"spring onions, chopped"},
          {amount:"1 tsp", item:"cumin"},
          {amount:"½ tsp", item:"turmeric"},
          {amount:"½ tsp", item:"baharat spice mix"},
          {amount:"butter or ghee", item:"for cooking"}
        ],
        instructions: [
          "Make thin, stretchy dough with flour, salt and water. Rest 30 minutes.",
          "Brown lamb with cumin, turmeric and baharat. Cool. Mix with beaten eggs and spring onions.",
          "Pull dough paper-thin on an oiled surface (like stretching strudel).",
          "Place filling in the centre. Fold dough over to form a package.",
          "Cook in butter on a flat griddle, pressing firmly, 3–4 minutes per side until golden and crispy.",
          "Cut into squares. Serve with yogurt dip."
        ],
        youtube: { search: "Mutabbaq recipe Saudi Arabian stuffed pancake", url: "https://www.youtube.com/results?search_query=Mutabbaq+recipe+Saudi+Arabian+stuffed+pancake" }
      },
      main: {
        name: "Kabsa (Spiced Chicken and Rice)",
        description: "Saudi Arabia's national dish — long-grain rice cooked in spiced broth with roasted chicken and dried limes.",
        servings: 6, prepTime: "30 min", cookTime: "1.5 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"chicken pieces"},
          {amount:"500g", item:"basmati rice, washed"},
          {amount:"2", item:"large onions, diced"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"2", item:"dried limes (loomi), pierced"},
          {amount:"3", item:"cardamom pods"},
          {amount:"2", item:"cinnamon sticks"},
          {amount:"1 tsp", item:"ground cloves"},
          {amount:"1 tsp", item:"ground cumin"},
          {amount:"1 tsp", item:"turmeric"},
          {amount:"1 tsp", item:"black pepper"},
          {amount:"1 L", item:"chicken stock"},
          {amount:"3 tbsp", item:"ghee or clarified butter"},
          {amount:"to garnish", item:"fried onions, raisins, toasted almonds"}
        ],
        instructions: [
          "Brown chicken in ghee. Remove. Fry onions until golden.",
          "Add garlic and all spices, cook 2 minutes.",
          "Add tomatoes, dried limes and stock. Return chicken.",
          "Simmer covered 40 minutes until chicken is cooked.",
          "Remove chicken. Add washed rice to the broth (should have about 700 ml left). Bring to a boil.",
          "Cover tightly, cook on low heat 20 minutes. Rest 10 minutes.",
          "Roast chicken in oven at 200°C for 15 minutes to colour skin. Serve on rice, garnished."
        ],
        youtube: { search: "Kabsa recipe authentic Saudi Arabian national dish", url: "https://www.youtube.com/results?search_query=Kabsa+recipe+authentic+Saudi+Arabian" }
      },
      dessert: {
        name: "Luqaimat (Honey Dumplings)",
        description: "Golden fried dough balls drizzled with date molasses and sesame — crispy outside, fluffy inside.",
        servings: 30, prepTime: "15 min + 1 hr proving", cookTime: "20 min",
        ingredients: [
          {amount:"300g", item:"plain flour"},
          {amount:"7g", item:"instant yeast"},
          {amount:"1 tsp", item:"sugar"},
          {amount:"½ tsp", item:"salt"},
          {amount:"½ tsp", item:"ground cardamom"},
          {amount:"300 ml", item:"warm water"},
          {amount:"oil", item:"for deep frying"},
          {amount:"date molasses or honey", item:"for drizzling"},
          {amount:"sesame seeds", item:"to scatter"}
        ],
        instructions: [
          "Mix flour, yeast, sugar, salt and cardamom. Add warm water, beat to a smooth thick batter.",
          "Cover and prove 1 hour until bubbly.",
          "Heat oil to 175°C.",
          "Drop teaspoon-sized balls of batter into oil.",
          "Fry 3–4 minutes until deep golden, turning occasionally.",
          "Drain on paper towels. Pile into a bowl. Drizzle generously with date molasses. Scatter sesame seeds."
        ],
        youtube: { search: "Luqaimat recipe Saudi Arabian honey dumplings authentic", url: "https://www.youtube.com/results?search_query=Luqaimat+recipe+Saudi+Arabian+honey+dumplings" }
      }
    }
  },

  {
    id: "iran", name: "Iran", flag: "🇮🇷", confederation: "AFC",
    intro: "Persian cuisine is one of the world's oldest — fragrant herb stews, saffron-golden rices and rosewater-scented sweets.",
    menu: {
      starter: {
        name: "Ash Reshteh (Persian Noodle Soup)",
        description: "A thick, hearty Persian New Year soup with noodles, spinach, herbs and a swirl of kashk (whey).",
        servings: 6, prepTime: "20 min", cookTime: "1 hr",
        ingredients: [
          {amount:"200g", item:"Persian reshteh noodles or linguine, broken"},
          {amount:"1 can", item:"chickpeas, drained"},
          {amount:"1 can", item:"kidney beans, drained"},
          {amount:"1 can", item:"lentils (or 100g dried, cooked)"},
          {amount:"200g", item:"fresh spinach, roughly chopped"},
          {amount:"large bunch", item:"fresh parsley, coriander and dill, chopped"},
          {amount:"2 L", item:"vegetable stock"},
          {amount:"1 tsp", item:"turmeric"},
          {amount:"1 tsp", item:"dried fenugreek"},
          {amount:"2", item:"onions, 1 diced (for soup), 1 sliced and fried golden (garnish)"},
          {amount:"to serve", item:"kashk (sour whey/Greek yogurt), dried mint fried in butter, walnuts"}
        ],
        instructions: [
          "Sauté diced onion until soft. Add turmeric, cook 2 minutes.",
          "Add stock, chickpeas, kidney beans and lentils. Simmer 20 minutes.",
          "Add noodles and cook according to packet.",
          "Add spinach and fresh herbs. Simmer 5 minutes.",
          "Add dried fenugreek. Season well. Soup should be very thick.",
          "Serve topped with a swirl of kashk or thick yogurt, crispy onions and dried mint fried in butter."
        ],
        youtube: { search: "Ash Reshteh recipe authentic Persian noodle soup", url: "https://www.youtube.com/results?search_query=Ash+Reshteh+recipe+authentic+Persian+noodle+soup" }
      },
      main: {
        name: "Ghormeh Sabzi (Persian Herb Stew)",
        description: "Iran's beloved slow-cooked herb and kidney bean stew with lamb and dried limes — fragrant and deeply savoury.",
        servings: 6, prepTime: "30 min", cookTime: "2.5 hrs",
        ingredients: [
          {amount:"700g", item:"lamb shoulder, cubed"},
          {amount:"1 can", item:"kidney beans, drained"},
          {amount:"large bunch", item:"flat-leaf parsley, finely chopped"},
          {amount:"large bunch", item:"fenugreek leaves or 2 tbsp dried"},
          {amount:"large bunch", item:"chives or spring onions, chopped"},
          {amount:"3", item:"dried limes (loomi), pierced, or 2 tbsp lime juice"},
          {amount:"1 tsp", item:"turmeric"},
          {amount:"1", item:"onion, diced"},
          {amount:"3 tbsp", item:"vegetable oil"},
          {amount:"salt and pepper", item:"to taste"},
          {amount:"to serve", item:"saffron rice (chelow)"}
        ],
        instructions: [
          "Dry-fry all chopped herbs in a heavy pan 15–20 minutes until very dark and fragrant. This is essential for flavour.",
          "Brown lamb in oil with onion. Add turmeric.",
          "Add fried herbs, kidney beans, dried limes and enough water to cover.",
          "Bring to a boil, then simmer covered for 2 hours, stirring occasionally.",
          "Remove limes before serving. Taste — it should be sour, herby and complex.",
          "Serve with chelow: fluffy saffron-topped steamed basmati rice with a crispy tahdig crust."
        ],
        youtube: { search: "Ghormeh Sabzi recipe authentic Persian herb stew", url: "https://www.youtube.com/results?search_query=Ghormeh+Sabzi+recipe+authentic+Persian" }
      },
      dessert: {
        name: "Sholeh Zard (Saffron Rice Pudding)",
        description: "Persian saffron-scented rice pudding decorated with cinnamon, rose petals and pistachios.",
        servings: 8, prepTime: "10 min", cookTime: "1 hr",
        ingredients: [
          {amount:"200g", item:"short-grain rice"},
          {amount:"1.5 L", item:"water"},
          {amount:"250g", item:"caster sugar"},
          {amount:"generous pinch", item:"saffron, steeped in 2 tbsp rosewater"},
          {amount:"3 tbsp", item:"rosewater"},
          {amount:"2 tbsp", item:"butter"},
          {amount:"½ tsp", item:"ground cardamom"},
          {amount:"to decorate", item:"ground cinnamon, chopped pistachios, dried rose petals"}
        ],
        instructions: [
          "Boil rice in water 30 minutes until completely soft and starchy.",
          "Add sugar, stir until dissolved. Cook 10 more minutes.",
          "Add saffron-rosewater, rosewater, butter and cardamom.",
          "Cook on low heat, stirring frequently, 20 minutes until thick and creamy.",
          "Pour into a flat serving dish or individual bowls.",
          "While warm, decorate with cinnamon patterns, pistachios and rose petals. Serve at room temperature."
        ],
        youtube: { search: "Sholeh Zard recipe Persian saffron rice pudding", url: "https://www.youtube.com/results?search_query=Sholeh+Zard+recipe+Persian+saffron+rice+pudding" }
      }
    }
  },

  {
    id: "qatar", name: "Qatar", flag: "🇶🇦", confederation: "AFC",
    intro: "Qatari cuisine blends Gulf Arab tradition with pearling culture — fragrant spiced rice, slow-cooked meats and syrup-soaked sweets.",
    menu: {
      starter: {
        name: "Thareed (Bread and Vegetable Stew)",
        description: "Qatari slow-cooked stew poured over dry flatbread — the region's version of bread and broth.",
        servings: 4, prepTime: "15 min", cookTime: "1 hr",
        ingredients: [
          {amount:"400g", item:"lamb on the bone, cubed"},
          {amount:"2", item:"potatoes, diced"},
          {amount:"2", item:"carrots, diced"},
          {amount:"2", item:"tomatoes, diced"},
          {amount:"1", item:"courgette, diced"},
          {amount:"1", item:"onion, diced"},
          {amount:"1 tsp", item:"baharat"},
          {amount:"1 tsp", item:"cumin"},
          {amount:"1 tsp", item:"turmeric"},
          {amount:"1 L", item:"water or stock"},
          {amount:"3 tbsp", item:"olive oil"},
          {amount:"4", item:"pieces khubz (Arabic flatbread), dried or toasted"}
        ],
        instructions: [
          "Brown lamb in olive oil. Add onion and cook 5 minutes.",
          "Add all spices, stir well. Add tomatoes and cook down 5 minutes.",
          "Add stock and bring to a boil. Simmer 30 minutes.",
          "Add potatoes, carrots and courgette. Simmer 25 more minutes.",
          "Break dried flatbread into large pieces in the bottom of a deep serving bowl.",
          "Ladle the stew over — the bread absorbs the broth completely. Serve immediately."
        ],
        youtube: { search: "Thareed recipe Qatari Gulf bread stew authentic", url: "https://www.youtube.com/results?search_query=Thareed+recipe+Qatari+Gulf+stew" }
      },
      main: {
        name: "Machboos (Qatari Spiced Meat and Rice)",
        description: "Qatar's national dish — basmati rice layered with spiced lamb or chicken, dried limes and rose water.",
        servings: 6, prepTime: "30 min", cookTime: "1.5 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"chicken or lamb pieces"},
          {amount:"500g", item:"basmati rice, soaked 30 minutes"},
          {amount:"2", item:"large onions, sliced"},
          {amount:"3", item:"tomatoes, diced"},
          {amount:"3", item:"dried limes (loomi), pierced"},
          {amount:"2 tbsp", item:"baharat spice mix"},
          {amount:"1 tsp", item:"cinnamon"},
          {amount:"1 tsp", item:"turmeric"},
          {amount:"1 tsp", item:"ground cloves"},
          {amount:"3 tbsp", item:"ghee"},
          {amount:"1 L", item:"chicken or lamb stock"},
          {amount:"2 tbsp", item:"rosewater"},
          {amount:"to garnish", item:"caramelised onions, raisins, toasted pine nuts"}
        ],
        instructions: [
          "Fry sliced onions in ghee until deep golden. Add spices and cook 2 minutes.",
          "Add chicken, brown all sides. Add tomatoes, dried limes and stock.",
          "Simmer covered 45 minutes until chicken is cooked. Remove chicken.",
          "Measure remaining broth — add water to make 750 ml. Bring to a boil.",
          "Add drained rice. Cover with foil then lid. Cook on very low heat 20 minutes.",
          "Sprinkle rosewater over rice while resting. Serve rice on platter, topped with chicken and garnishes."
        ],
        youtube: { search: "Machboos recipe Qatari national dish spiced rice", url: "https://www.youtube.com/results?search_query=Machboos+recipe+Qatari+national+dish" }
      },
      dessert: {
        name: "Balaleet (Sweet Vermicelli with Cardamom Omelette)",
        description: "Sweet saffron-cardamom vermicelli topped with a thin egg omelette — Qatar's beloved breakfast dessert.",
        servings: 4, prepTime: "15 min", cookTime: "25 min",
        ingredients: [
          {amount:"300g", item:"vermicelli noodles"},
          {amount:"4 tbsp", item:"ghee"},
          {amount:"150g", item:"caster sugar"},
          {amount:"1 tsp", item:"ground cardamom"},
          {amount:"½ tsp", item:"ground cinnamon"},
          {amount:"saffron pinch", item:"steeped in 2 tbsp rosewater"},
          {amount:"4", item:"eggs"},
          {amount:"pinch", item:"saffron (for omelette)"},
          {amount:"to garnish", item:"toasted pistachios"}
        ],
        instructions: [
          "Brown vermicelli in ghee, stirring constantly, until golden.",
          "Pour boiling water over to cover. Cook 5 minutes until just tender. Drain.",
          "Return to pan with sugar, cardamom, cinnamon and saffron rosewater. Toss together.",
          "Cook on low heat 5 minutes until sugar melts and vermicelli is fragrant.",
          "Whisk eggs with saffron. Cook as a thin omelette in a separate pan.",
          "Serve vermicelli with omelette draped on top, garnished with pistachios."
        ],
        youtube: { search: "Balaleet recipe Qatari sweet vermicelli breakfast", url: "https://www.youtube.com/results?search_query=Balaleet+recipe+Qatari+sweet+vermicelli" }
      }
    }
  },


  // ===== OFC =====
  {
    id: "new-zealand", name: "New Zealand", flag: "🇳🇿", confederation: "OFC",
    intro: "New Zealand's food reflects Māori heritage and Pacific freshness — whitebait, hangi earth ovens and the iconic pavlova.",
    menu: {
      starter: {
        name: "Whitebait Fritters",
        description: "New Zealand's beloved springtime delicacy — tiny whitebait fish bound in egg batter and pan-fried.",
        servings: 4, prepTime: "10 min", cookTime: "10 min",
        ingredients: [
          {amount:"300g", item:"fresh whitebait (or small shrimp as substitute)"},
          {amount:"3", item:"eggs, beaten"},
          {amount:"2 tbsp", item:"plain flour"},
          {amount:"salt and pepper", item:""},
          {amount:"butter", item:"for frying"},
          {amount:"to serve", item:"white bread with butter, lemon wedges, chilli sauce"}
        ],
        instructions: [
          "Gently fold whitebait, beaten eggs and flour together. Do not over-mix.",
          "Season with salt and pepper.",
          "Heat generous knob of butter in a frying pan over medium heat.",
          "Pour small circles of batter into the pan.",
          "Cook 2–3 minutes per side until golden and just set through.",
          "Serve immediately on fresh white bread with butter and a squeeze of lemon."
        ],
        youtube: { search: "New Zealand whitebait fritters recipe authentic", url: "https://www.youtube.com/results?search_query=New+Zealand+whitebait+fritters+recipe" }
      },
      main: {
        name: "Hāngī (Māori Earth Oven Lamb and Vegetables)",
        description: "New Zealand's traditional feast — lamb and root vegetables slow-cooked in an earth pit using heated stones.",
        servings: 8, prepTime: "1 hr", cookTime: "3–4 hrs",
        ingredients: [
          {amount:"2 kg", item:"bone-in lamb shoulder"},
          {amount:"500g", item:"kumara (sweet potato), peeled and chunked"},
          {amount:"500g", item:"pumpkin, chunked"},
          {amount:"4", item:"potatoes, halved"},
          {amount:"seasoning:", item:"salt, pepper, garlic, fresh thyme"},
          {amount:"optional (home version):", item:"use a large clay pot or Dutch oven in the oven at 160°C for 4 hours"}
        ],
        instructions: [
          "Traditional method: heat smooth river stones in a fire for 2 hours until glowing.",
          "Season lamb and vegetables generously.",
          "Lower stones into the pit using a shovel. Place wire baskets containing lamb and vegetables on stones.",
          "Wet sacking and foil go over the baskets. Cover with earth for 3–4 hours.",
          "Home method: in a large Dutch oven, layer seasoned vegetables, then lamb. Add 100ml water.",
          "Seal tightly with foil and lid. Cook at 150°C for 4 hours. Lamb will be falling off the bone.",
          "Serve on a communal platter — the meal is always shared."
        ],
        youtube: { search: "Hangi recipe Māori earth oven New Zealand traditional", url: "https://www.youtube.com/results?search_query=Hangi+recipe+Maori+earth+oven+New+Zealand" }
      },
      dessert: {
        name: "Pavlova",
        description: "A mountain of crisp meringue with a soft marshmallow interior, crowned with whipped cream and fresh fruit.",
        servings: 8, prepTime: "30 min", cookTime: "1.5 hrs + cooling",
        ingredients: [
          {amount:"6", item:"egg whites, at room temperature"},
          {amount:"pinch", item:"salt"},
          {amount:"300g", item:"caster sugar"},
          {amount:"2 tsp", item:"cornflour"},
          {amount:"1 tsp", item:"white wine vinegar"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"400 ml", item:"double cream, whipped to soft peaks"},
          {amount:"3 tbsp", item:"icing sugar"},
          {amount:"to top:", item:"strawberries, kiwi, passion fruit, blueberries"}
        ],
        instructions: [
          "Preheat oven to 130°C. Draw a 22 cm circle on baking paper on a tray.",
          "Whisk egg whites and salt to stiff peaks. Add sugar one tablespoon at a time, whisking.",
          "Meringue should be thick, glossy and the sugar dissolved.",
          "Fold in cornflour, vinegar and vanilla.",
          "Spread meringue onto the circle, building up the edges higher than the centre.",
          "Bake 1.5 hours. Turn oven off. Cool completely inside the oven — do not open.",
          "Top with whipped cream and fresh fruit just before serving."
        ],
        youtube: { search: "Pavlova recipe New Zealand authentic meringue cream", url: "https://www.youtube.com/results?search_query=Pavlova+recipe+New+Zealand+authentic" }
      }
    }
  },
  {
    id: "cape-verde", name: "Cape Verde", flag: "🇨🇻", confederation: "CAF",
    intro: "Cape Verdean food is island Creole — slow-cooked corn-and-bean stews, fresh Atlantic fish and Portuguese-leaning sweets.",
    menu: {
      starter: {
        name: "Caldo de Peixe (Fish Soup)",
        description: "A clear, fragrant island fish soup with tuna, sweet potato, cassava and a squeeze of lime.",
        servings: 6, prepTime: "20 min", cookTime: "40 min",
        ingredients: [
          {amount:"600g", item:"tuna or grouper, cubed"},
          {amount:"1", item:"onion, sliced"},
          {amount:"2", item:"tomatoes, chopped"},
          {amount:"2", item:"garlic cloves"},
          {amount:"300g", item:"sweet potato, chunked"},
          {amount:"300g", item:"cassava, chunked"},
          {amount:"1", item:"green pepper, sliced"},
          {amount:"2 tbsp", item:"olive oil"},
          {amount:"1", item:"bay leaf, fresh coriander"},
          {amount:"1", item:"lime, to serve"}
        ],
        instructions: [
          "Soften onion, garlic, tomato and pepper in olive oil.",
          "Add sweet potato, cassava, bay leaf and water to cover.",
          "Simmer until the root vegetables are nearly tender.",
          "Slip in the fish and poach gently 8–10 minutes.",
          "Season and stir through plenty of coriander.",
          "Serve with lime wedges to squeeze over."
        ],
        youtube: { search: "Caldo de peixe Cape Verde fish soup recipe", url: "https://www.youtube.com/results?search_query=Caldo+de+peixe+Cape+Verde+fish+soup+recipe" }
      },
      main: {
        name: "Cachupa",
        description: "Cape Verde's national dish: a slow-simmered stew of hominy corn, beans, vegetables and pork or fish.",
        servings: 8, prepTime: "30 min + overnight soaking", cookTime: "3 hr",
        ingredients: [
          {amount:"400g", item:"hominy corn, soaked overnight"},
          {amount:"300g", item:"dried beans, soaked overnight"},
          {amount:"400g", item:"pork belly, cubed"},
          {amount:"200g", item:"chorizo or linguiça, sliced"},
          {amount:"1", item:"onion, chopped"},
          {amount:"2", item:"tomatoes, chopped"},
          {amount:"300g", item:"cassava and sweet potato, chunked"},
          {amount:"¼", item:"cabbage, shredded"},
          {amount:"2 tbsp", item:"olive oil"},
          {amount:"1", item:"bay leaf, paprika, coriander"}
        ],
        instructions: [
          "Boil the soaked corn and beans together until starting to soften, about 1.5 hours.",
          "In another pan brown the pork and sausage with onion and tomato.",
          "Combine everything with paprika and bay leaf; add water to cover.",
          "Simmer slowly 1 hour, topping up liquid as needed.",
          "Add cassava, sweet potato and cabbage; cook until everything is meltingly tender.",
          "Rest before serving — cachupa always tastes better reheated the next day."
        ],
        youtube: { search: "Cachupa Cape Verde national dish recipe authentic", url: "https://www.youtube.com/results?search_query=Cachupa+Cape+Verde+national+dish+recipe" }
      },
      dessert: {
        name: "Pudim de Queijo",
        description: "A silky baked cheese caramel custard — Cape Verde's take on the Portuguese pudim.",
        servings: 8, prepTime: "20 min", cookTime: "50 min",
        ingredients: [
          {amount:"200g", item:"sugar (for caramel)"},
          {amount:"400 ml", item:"condensed milk"},
          {amount:"400 ml", item:"evaporated milk"},
          {amount:"4", item:"eggs"},
          {amount:"150g", item:"cream cheese or fresh curd"},
          {amount:"1 tsp", item:"vanilla"},
          {amount:"zest", item:"of 1 lemon"}
        ],
        instructions: [
          "Melt the sugar to an amber caramel and pour into a ring mould, swirling to coat.",
          "Blend condensed and evaporated milk, eggs, cheese, vanilla and lemon zest until smooth.",
          "Pour over the set caramel.",
          "Bake in a water bath at 170°C for about 45 minutes until just set with a slight wobble.",
          "Cool, then chill thoroughly.",
          "Invert onto a plate so the caramel runs down the sides."
        ],
        youtube: { search: "Pudim de queijo cheese flan recipe Portuguese", url: "https://www.youtube.com/results?search_query=Pudim+de+queijo+cheese+flan+recipe" }
      }
    }
  },
  {
    id: "dr-congo", name: "DR Congo", flag: "🇨🇩", confederation: "CAF",
    intro: "Congolese cooking is Central African comfort — peanutty greens, palm-rich chicken stews and sweet fried dough.",
    menu: {
      starter: {
        name: "Fumbwa (Wild Spinach Stew)",
        description: "Wild greens slow-cooked with ground peanuts, tomato and smoked fish into a rich, earthy stew.",
        servings: 6, prepTime: "20 min", cookTime: "45 min",
        ingredients: [
          {amount:"400g", item:"fumbwa or spinach, chopped"},
          {amount:"100g", item:"smoked fish, flaked"},
          {amount:"4 tbsp", item:"peanut butter"},
          {amount:"2", item:"tomatoes, chopped"},
          {amount:"1", item:"onion, chopped"},
          {amount:"3 tbsp", item:"palm or vegetable oil"},
          {amount:"2", item:"garlic cloves"},
          {amount:"1", item:"chilli, chopped"},
          {amount:"salt", item:"to taste"}
        ],
        instructions: [
          "Soften onion, garlic and tomato in the oil.",
          "Add the greens and a little water; cook down until wilted.",
          "Stir in the smoked fish and chilli.",
          "Loosen the peanut butter with hot water and stir through.",
          "Simmer 25–30 minutes until thick and the oil rises.",
          "Season and serve with rice, fufu or plantain."
        ],
        youtube: { search: "Fumbwa Congolese wild spinach stew recipe", url: "https://www.youtube.com/results?search_query=Fumbwa+Congolese+wild+spinach+stew+recipe" }
      },
      main: {
        name: "Poulet à la Moambe",
        description: "DR Congo's national dish: chicken braised in a deep, tangy palm-nut sauce, served with rice and greens.",
        servings: 6, prepTime: "20 min", cookTime: "1 hr",
        ingredients: [
          {amount:"1.2 kg", item:"chicken, jointed"},
          {amount:"400g", item:"moambe (palm nut) sauce or pulp"},
          {amount:"1", item:"onion, chopped"},
          {amount:"2", item:"tomatoes, chopped"},
          {amount:"3", item:"garlic cloves"},
          {amount:"1", item:"chilli (piri piri)"},
          {amount:"2 tbsp", item:"oil"},
          {amount:"1", item:"bay leaf"},
          {amount:"salt & pepper", item:"to taste"},
          {amount:"rice & greens", item:"to serve"}
        ],
        instructions: [
          "Brown the chicken pieces all over and set aside.",
          "Soften onion, garlic and tomato in the same pot.",
          "Stir in the moambe sauce and a little water to loosen.",
          "Return the chicken with bay leaf and chilli.",
          "Simmer gently 40–45 minutes until the chicken is tender and the sauce is rich and oily.",
          "Season and serve with rice and a side of greens."
        ],
        youtube: { search: "Poulet a la moambe Congolese palm nut chicken recipe", url: "https://www.youtube.com/results?search_query=Poulet+a+la+moambe+Congolese+chicken+recipe" }
      },
      dessert: {
        name: "Mikate (Congolese Doughnuts)",
        description: "Light, slightly sweet fried dough balls — the beloved street snack and teatime treat.",
        servings: 20, prepTime: "20 min + 1 hr rising", cookTime: "20 min",
        ingredients: [
          {amount:"300g", item:"plain flour"},
          {amount:"60g", item:"sugar"},
          {amount:"7g", item:"instant yeast"},
          {amount:"200 ml", item:"warm water"},
          {amount:"1", item:"banana, mashed (optional)"},
          {amount:"pinch", item:"salt & nutmeg"},
          {amount:"oil", item:"for deep-frying"}
        ],
        instructions: [
          "Mix flour, sugar, yeast, salt and nutmeg.",
          "Add warm water (and mashed banana) and beat to a thick, sticky batter.",
          "Cover and leave to rise about 1 hour until bubbly.",
          "Heat oil to 170°C.",
          "Drop in spoonfuls of batter and fry until golden and puffed, turning once.",
          "Drain and dust with sugar; eat warm."
        ],
        youtube: { search: "Mikate Congolese doughnuts recipe authentic", url: "https://www.youtube.com/results?search_query=Mikate+Congolese+doughnuts+recipe" }
      }
    }
  },
  {
    id: "ghana", name: "Ghana", flag: "🇬🇭", confederation: "CAF",
    intro: "Ghanaian cooking is vibrant West African heat — smoky jollof rice, spiced fried plantain and golden street doughnuts.",
    menu: {
      starter: {
        name: "Kelewele",
        description: "Cubes of ripe plantain tossed in ginger, chilli and spices, then fried until caramelised and crisp.",
        servings: 4, prepTime: "15 min", cookTime: "15 min",
        ingredients: [
          {amount:"4", item:"ripe plantains, cubed"},
          {amount:"1 tbsp", item:"fresh ginger, grated"},
          {amount:"2", item:"garlic cloves, crushed"},
          {amount:"1 tsp", item:"cayenne or chilli powder"},
          {amount:"½ tsp", item:"ground nutmeg"},
          {amount:"½ tsp", item:"ground aniseed or cloves"},
          {amount:"1 tsp", item:"salt"},
          {amount:"oil", item:"for frying"}
        ],
        instructions: [
          "Mix ginger, garlic, cayenne, nutmeg, aniseed and salt with a splash of water into a paste.",
          "Toss the plantain cubes in the spice paste and leave 10 minutes.",
          "Heat oil to 175°C.",
          "Fry the plantain in batches until deep golden and caramelised at the edges.",
          "Drain on paper.",
          "Serve hot as a snack, with roasted peanuts on the side."
        ],
        youtube: { search: "Kelewele Ghanaian spicy plantain recipe authentic", url: "https://www.youtube.com/results?search_query=Kelewele+Ghanaian+spicy+plantain+recipe" }
      },
      main: {
        name: "Ghanaian Jollof Rice with Chicken",
        description: "Smoky long-grain rice cooked in a rich tomato-and-pepper base, served with spiced roast chicken.",
        servings: 6, prepTime: "25 min", cookTime: "50 min",
        ingredients: [
          {amount:"500g", item:"long-grain rice, rinsed"},
          {amount:"6", item:"chicken thighs"},
          {amount:"4", item:"tomatoes"},
          {amount:"2", item:"red peppers"},
          {amount:"2", item:"Scotch bonnets (to taste)"},
          {amount:"2", item:"onions"},
          {amount:"4 tbsp", item:"tomato purée"},
          {amount:"100 ml", item:"oil"},
          {amount:"2", item:"bay leaves, curry powder, thyme"},
          {amount:"500 ml", item:"chicken stock"}
        ],
        instructions: [
          "Season and roast or fry the chicken until browned; set aside.",
          "Blend tomatoes, peppers, Scotch bonnet and one onion to a smooth purée.",
          "Fry the second chopped onion in oil, add tomato purée and the blended sauce; cook down until thick and the oil rises.",
          "Stir in spices, bay leaves and the rice, coating every grain.",
          "Add hot stock, cover tightly and steam on low until the rice is tender and the bottom lightly smoky.",
          "Fluff and serve with the chicken."
        ],
        youtube: { search: "Ghanaian jollof rice recipe authentic chicken", url: "https://www.youtube.com/results?search_query=Ghanaian+jollof+rice+recipe+authentic+chicken" }
      },
      dessert: {
        name: "Bofrot (Ghanaian Doughnuts)",
        description: "Round, golden spiced doughnuts — crisp outside, soft and cakey within. Known as 'puff puff' across West Africa.",
        servings: 20, prepTime: "20 min + 1 hr rising", cookTime: "20 min",
        ingredients: [
          {amount:"300g", item:"plain flour"},
          {amount:"80g", item:"sugar"},
          {amount:"7g", item:"instant yeast"},
          {amount:"200 ml", item:"warm water"},
          {amount:"½ tsp", item:"grated nutmeg"},
          {amount:"pinch", item:"salt"},
          {amount:"oil", item:"for deep-frying"}
        ],
        instructions: [
          "Whisk flour, sugar, yeast, nutmeg and salt.",
          "Add warm water and beat to a smooth, thick batter.",
          "Cover and prove about 1 hour until doubled and bubbly.",
          "Heat oil to 170°C.",
          "Scoop balls of batter with wet hands or a spoon and fry until golden, turning for an even colour.",
          "Drain and roll in sugar; serve warm."
        ],
        youtube: { search: "Bofrot Ghanaian doughnuts puff puff recipe", url: "https://www.youtube.com/results?search_query=Bofrot+Ghanaian+doughnuts+puff+puff+recipe" }
      }
    }
  },
  {
    id: "iraq", name: "Iraq", flag: "🇮🇶", confederation: "AFC",
    intro: "Iraqi cuisine is Mesopotamian heritage — smoky grilled river fish, fragrant spiced rice and date-filled pastries.",
    menu: {
      starter: {
        name: "Shorbat Adas (Lentil Soup)",
        description: "A smooth, warming red-lentil soup brightened with cumin, turmeric and lemon.",
        servings: 6, prepTime: "15 min", cookTime: "35 min",
        ingredients: [
          {amount:"300g", item:"red lentils, rinsed"},
          {amount:"1", item:"onion, chopped"},
          {amount:"1", item:"carrot, diced"},
          {amount:"2", item:"garlic cloves"},
          {amount:"1 tsp", item:"ground cumin"},
          {amount:"1 tsp", item:"turmeric"},
          {amount:"2 tbsp", item:"olive oil"},
          {amount:"1.5 L", item:"vegetable stock"},
          {amount:"1", item:"lemon, juiced"},
          {amount:"fried bread & parsley", item:"to serve"}
        ],
        instructions: [
          "Soften onion, carrot and garlic in olive oil.",
          "Stir in cumin and turmeric and cook until fragrant.",
          "Add lentils and stock; simmer 25–30 minutes until the lentils collapse.",
          "Blend until smooth, loosening with water if needed.",
          "Sharpen with lemon juice and season.",
          "Serve with crisp fried bread and chopped parsley."
        ],
        youtube: { search: "Shorbat adas Iraqi lentil soup recipe authentic", url: "https://www.youtube.com/results?search_query=Shorbat+adas+Iraqi+lentil+soup+recipe" }
      },
      main: {
        name: "Masgouf",
        description: "Iraq's national dish: butterflied river fish marinated in tamarind, slow-grilled by the fire until smoky and tender.",
        servings: 4, prepTime: "25 min", cookTime: "45 min",
        ingredients: [
          {amount:"1", item:"large carp or sea bass, butterflied"},
          {amount:"3 tbsp", item:"olive oil"},
          {amount:"2 tbsp", item:"tamarind paste"},
          {amount:"4", item:"garlic cloves, crushed"},
          {amount:"1 tbsp", item:"tomato purée"},
          {amount:"1 tsp", item:"turmeric"},
          {amount:"1 tsp", item:"curry powder"},
          {amount:"2", item:"tomatoes, sliced"},
          {amount:"1", item:"onion, sliced"},
          {amount:"salt, lemon", item:"to serve"}
        ],
        instructions: [
          "Open the fish out flat, skin-side down.",
          "Mix oil, tamarind, garlic, tomato purée, turmeric and curry powder; rub all over the flesh.",
          "Marinate 30 minutes.",
          "Grill flesh-side up over a low fire (or hot oven) until almost cooked, basting often.",
          "Top with sliced tomato and onion and finish until the fish is smoky and just done.",
          "Serve with flatbread, lemon and pickles."
        ],
        youtube: { search: "Masgouf Iraqi grilled fish recipe authentic", url: "https://www.youtube.com/results?search_query=Masgouf+Iraqi+grilled+fish+recipe" }
      },
      dessert: {
        name: "Kleicha",
        description: "Iraq's national cookie: tender spiced pastry spirals filled with date paste and scented with cardamom and rose.",
        servings: 30, prepTime: "40 min", cookTime: "20 min",
        ingredients: [
          {amount:"400g", item:"plain flour"},
          {amount:"150g", item:"butter, melted"},
          {amount:"1 tsp", item:"instant yeast"},
          {amount:"1 tsp", item:"ground cardamom"},
          {amount:"100 ml", item:"warm milk"},
          {amount:"300g", item:"date paste"},
          {amount:"2 tbsp", item:"butter (for filling)"},
          {amount:"1 tsp", item:"rose or orange-blossom water"},
          {amount:"1", item:"egg yolk + sesame seeds, to glaze"}
        ],
        instructions: [
          "Rub melted butter into flour with yeast and cardamom; add warm milk and knead to a soft dough. Rest 30 minutes.",
          "Soften the date paste with butter and rose water.",
          "Roll the dough thin, spread with date paste, and roll up into a log.",
          "Slice into rounds and lay cut-side up on a tray.",
          "Brush with egg yolk and scatter sesame seeds.",
          "Bake at 180°C for about 18 minutes until golden."
        ],
        youtube: { search: "Kleicha Iraqi date cookies recipe authentic", url: "https://www.youtube.com/results?search_query=Kleicha+Iraqi+date+cookies+recipe" }
      }
    }
  },
  {
    id: "jordan", name: "Jordan", flag: "🇯🇴", confederation: "AFC",
    intro: "Jordanian cuisine is Levantine generosity — creamy hummus, the great communal lamb feast of mansaf, and cheese-filled knafeh.",
    menu: {
      starter: {
        name: "Hummus",
        description: "Silky chickpea purée whipped with tahini, lemon and garlic, finished with olive oil and paprika.",
        servings: 6, prepTime: "15 min + overnight soaking", cookTime: "1 hr",
        ingredients: [
          {amount:"250g", item:"dried chickpeas, soaked overnight"},
          {amount:"1 tsp", item:"bicarbonate of soda"},
          {amount:"120g", item:"tahini"},
          {amount:"2", item:"lemons, juiced"},
          {amount:"2", item:"garlic cloves"},
          {amount:"1 tsp", item:"salt"},
          {amount:"olive oil, paprika, cumin", item:"to finish"},
          {amount:"warm flatbread", item:"to serve"}
        ],
        instructions: [
          "Boil the soaked chickpeas with bicarbonate until very soft, about 1 hour; reserve a few whole.",
          "Blend the warm chickpeas with garlic and salt until smooth.",
          "Add tahini and lemon juice and blend, loosening with iced water until pale and fluffy.",
          "Taste and adjust lemon and salt.",
          "Spread on a plate with a swirl, pooling olive oil in the centre.",
          "Dust with paprika and cumin, scatter reserved chickpeas, and serve with flatbread."
        ],
        youtube: { search: "Hummus recipe authentic Levantine tahini", url: "https://www.youtube.com/results?search_query=Hummus+recipe+authentic+Levantine+tahini" }
      },
      main: {
        name: "Mansaf",
        description: "Jordan's national dish: lamb slow-cooked in fermented dried-yogurt jameed, served over rice and flatbread with nuts.",
        servings: 8, prepTime: "30 min", cookTime: "2 hr 30 min",
        ingredients: [
          {amount:"1.5 kg", item:"lamb shoulder, on the bone"},
          {amount:"500g", item:"jameed (dried yogurt) or 1 L thick yogurt"},
          {amount:"500g", item:"basmati rice"},
          {amount:"2", item:"shrak / markook flatbreads"},
          {amount:"100g", item:"toasted almonds & pine nuts"},
          {amount:"1 tsp", item:"ground cardamom"},
          {amount:"1", item:"cinnamon stick"},
          {amount:"2 tbsp", item:"ghee"},
          {amount:"salt & pepper", item:"to taste"}
        ],
        instructions: [
          "Simmer the lamb with cardamom and cinnamon until very tender, about 2 hours; skim well.",
          "Dissolve the jameed in warm water (or whisk yogurt with cornflour to stop it splitting).",
          "Add the jameed to the lamb and simmer gently, stirring one direction, until the sauce is creamy.",
          "Cook the rice with a little ghee until fluffy.",
          "Line a large platter with flatbread, top with rice, then the lamb.",
          "Ladle over the hot jameed sauce and shower with toasted nuts."
        ],
        youtube: { search: "Mansaf Jordanian lamb jameed recipe authentic", url: "https://www.youtube.com/results?search_query=Mansaf+Jordanian+lamb+jameed+recipe" }
      },
      dessert: {
        name: "Knafeh",
        description: "Warm stretchy white cheese under a crisp orange semolina crust, drenched in rose-scented syrup.",
        servings: 10, prepTime: "25 min", cookTime: "30 min",
        ingredients: [
          {amount:"400g", item:"kataifi (shredded pastry) or fine semolina"},
          {amount:"200g", item:"butter, melted"},
          {amount:"500g", item:"akkawi or mozzarella, soaked and sliced"},
          {amount:"300g", item:"sugar"},
          {amount:"200 ml", item:"water"},
          {amount:"1 tbsp", item:"lemon juice"},
          {amount:"1 tbsp", item:"rose or orange-blossom water"},
          {amount:"orange food colour & crushed pistachios", item:"to finish"}
        ],
        instructions: [
          "Make a syrup: simmer sugar, water and lemon, then add blossom water; cool.",
          "Toss the shredded pastry with melted butter (and a touch of colour).",
          "Press half into a buttered pan, layer the cheese, then top with the rest.",
          "Bake at 200°C until deep golden and crisp, about 30 minutes.",
          "Invert onto a platter while hot so the crust faces up.",
          "Soak with the cool syrup and scatter with pistachios. Serve warm and stretchy."
        ],
        youtube: { search: "Knafeh recipe authentic cheese kunafa", url: "https://www.youtube.com/results?search_query=Knafeh+recipe+authentic+cheese+kunafa" }
      }
    }
  },
  {
    id: "uzbekistan", name: "Uzbekistan", flag: "🇺🇿", confederation: "AFC",
    intro: "Uzbek cuisine is Silk Road feasting — fragrant rice plov cooked in a cauldron, hearty lamb soups and lacquered honey sweets.",
    menu: {
      starter: {
        name: "Shurpa (Lamb Soup)",
        description: "A clear, hearty lamb and vegetable soup perfumed with cumin and fresh herbs.",
        servings: 6, prepTime: "20 min", cookTime: "1 hr 30 min",
        ingredients: [
          {amount:"800g", item:"lamb on the bone, cut up"},
          {amount:"2", item:"onions, sliced"},
          {amount:"3", item:"carrots, chunked"},
          {amount:"3", item:"potatoes, chunked"},
          {amount:"2", item:"tomatoes, chopped"},
          {amount:"1", item:"bell pepper, sliced"},
          {amount:"1 tsp", item:"cumin seeds"},
          {amount:"2", item:"bay leaves"},
          {amount:"coriander & dill", item:"to finish"}
        ],
        instructions: [
          "Cover the lamb with cold water, bring to a boil and skim carefully.",
          "Add onions, cumin and bay; simmer gently 1 hour.",
          "Add carrots, then potatoes, tomato and pepper.",
          "Cook until the meat is tender and the vegetables soft, about 30 minutes more.",
          "Season the clear broth well.",
          "Serve scattered with coriander and dill, with flatbread alongside."
        ],
        youtube: { search: "Shurpa Uzbek lamb soup recipe authentic", url: "https://www.youtube.com/results?search_query=Shurpa+Uzbek+lamb+soup+recipe" }
      },
      main: {
        name: "Plov (Osh)",
        description: "Uzbekistan's national dish: rice slow-cooked with lamb, caramelised carrots, cumin and whole garlic.",
        servings: 8, prepTime: "30 min", cookTime: "1 hr 30 min",
        ingredients: [
          {amount:"600g", item:"lamb, cubed"},
          {amount:"500g", item:"long-grain rice, rinsed"},
          {amount:"500g", item:"carrots, julienned"},
          {amount:"3", item:"onions, sliced"},
          {amount:"2", item:"whole garlic bulbs"},
          {amount:"150 ml", item:"oil or lamb fat"},
          {amount:"1 tbsp", item:"cumin seeds"},
          {amount:"1 tsp", item:"coriander seeds"},
          {amount:"2 tsp", item:"salt"},
          {amount:"1", item:"chilli (optional)"}
        ],
        instructions: [
          "Heat the oil in a heavy cauldron (kazan) and brown the lamb.",
          "Add onions and fry until golden, then the carrots; cook until softened.",
          "Add cumin, coriander, salt and water to cover; simmer 30 minutes to make the zirvak base.",
          "Spread the rinsed rice evenly on top and add hot water to just cover.",
          "Nestle in the whole garlic bulbs, cover, and cook on low until the rice is tender and fluffy.",
          "Mound onto a platter, meat and garlic on top; serve with pickled salad."
        ],
        youtube: { search: "Uzbek plov osh recipe authentic kazan", url: "https://www.youtube.com/results?search_query=Uzbek+plov+osh+recipe+authentic+kazan" }
      },
      dessert: {
        name: "Chak-Chak",
        description: "Crunchy fried dough sticks bound in hot honey syrup and pressed into a glossy golden mound.",
        servings: 12, prepTime: "30 min", cookTime: "20 min",
        ingredients: [
          {amount:"300g", item:"plain flour"},
          {amount:"3", item:"eggs"},
          {amount:"1 tbsp", item:"sugar"},
          {amount:"pinch", item:"salt"},
          {amount:"oil", item:"for frying"},
          {amount:"250g", item:"honey"},
          {amount:"100g", item:"sugar (for syrup)"},
          {amount:"2 tbsp", item:"water"}
        ],
        instructions: [
          "Beat eggs with sugar and salt, work in the flour to a soft dough; rest 20 minutes.",
          "Roll thin and cut into small matchsticks.",
          "Deep-fry in batches until golden and crisp; drain.",
          "Boil honey, sugar and water to a thick syrup (a drop should set firm).",
          "Pour the hot syrup over the fried dough and toss quickly to coat.",
          "Pile into a mound or dome, press lightly, cool to set, then cut to serve."
        ],
        youtube: { search: "Chak-chak Uzbek honey dessert recipe authentic", url: "https://www.youtube.com/results?search_query=Chak-chak+Uzbek+honey+dessert+recipe" }
      }
    }
  }
];
