const COUNTRIES_AMERICAS = [
  // ===== CONMEBOL =====
  {
    id: "argentina", name: "Argentina", flag: "🇦🇷", confederation: "CONMEBOL",
    intro: "Argentine cuisine is a love affair with fire — empanadas, asado and dulce de leche are the holy trinity.",
    menu: {
      starter: {
        name: "Empanadas Salteñas",
        description: "Flaky baked pastry pockets filled with spiced beef, olives and hard-boiled egg.",
        servings: 12, prepTime: "45 min + 1 hr chilling", cookTime: "25 min",
        ingredients: [
          {amount:"500g", item:"plain flour"},
          {amount:"100g", item:"lard or butter"},
          {amount:"150 ml", item:"warm water"},
          {amount:"1 tsp", item:"salt"},
          {amount:"400g", item:"beef mince"},
          {amount:"2", item:"onions, finely diced"},
          {amount:"2 tsp", item:"sweet paprika"},
          {amount:"1 tsp", item:"ground cumin"},
          {amount:"½ tsp", item:"chilli flakes"},
          {amount:"2", item:"hard-boiled eggs, chopped"},
          {amount:"12", item:"green olives, pitted and halved"},
          {amount:"1", item:"egg yolk, for glazing"}
        ],
        instructions: [
          "Make pastry: rub lard into flour and salt. Add warm water, knead briefly. Chill 1 hour.",
          "Cook mince in a dry pan until browned. Add onions, cook 8 minutes.",
          "Add paprika, cumin and chilli. Season well. Cool completely.",
          "Fold in chopped eggs and olives.",
          "Roll pastry to 3 mm. Cut 12 cm circles. Place filling in centre, fold over, crimp edges with a fork.",
          "Brush with egg yolk. Bake at 200°C for 20–25 minutes until golden."
        ],
        youtube: { search: "Empanadas Salteñas recipe Argentine baked pastry", url: "https://www.youtube.com/results?search_query=Empanadas+Salteñas+recipe+Argentine" }
      },
      main: {
        name: "Asado — Argentine Mixed Grill",
        description: "The social ritual of Argentina: short ribs, chorizo, morcilla and offal cooked slowly over wood embers.",
        servings: 6, prepTime: "30 min", cookTime: "2 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"beef short ribs (tira de asado)"},
          {amount:"4", item:"Argentine chorizos"},
          {amount:"4", item:"morcilla (blood sausage)"},
          {amount:"500g", item:"chicken thighs"},
          {amount:"coarse salt", item:"only seasoning needed"},
          {amount:"chimichurri", item:"— 1 bunch parsley, 4 garlic cloves, ½ cup olive oil, ¼ cup red wine vinegar, 1 tsp dried oregano, 1 tsp chilli flakes, salt"},
        ],
        instructions: [
          "Light the fire 1 hour before cooking — hardwood for embers, not flames. Temperature should be moderate, not fierce.",
          "Season beef ribs generously with coarse salt only. Place bone-side down over embers.",
          "Cook ribs 1 hour bone-side down without turning — this is the Argentine way.",
          "Flip once, cook 30–40 minutes more. Grill chorizos, morcilla and chicken alongside.",
          "Make chimichurri: finely chop parsley and garlic, mix with all other ingredients. Rest 30 minutes.",
          "Slice ribs between bones. Serve on a wooden board with chimichurri and crusty bread."
        ],
        youtube: { search: "Argentine asado authentic recipe wood fire barbecue", url: "https://www.youtube.com/results?search_query=Argentine+asado+authentic+wood+fire+barbecue" }
      },
      dessert: {
        name: "Alfajores de Maicena",
        description: "Two delicate cornstarch shortbreads sandwiched with thick dulce de leche, rolled in coconut.",
        servings: 20, prepTime: "30 min + 30 min chilling", cookTime: "12 min",
        ingredients: [
          {amount:"200g", item:"plain flour"},
          {amount:"300g", item:"cornflour (maicena)"},
          {amount:"2 tsp", item:"baking powder"},
          {amount:"200g", item:"butter, softened"},
          {amount:"150g", item:"icing sugar"},
          {amount:"3", item:"egg yolks"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"zest", item:"of 1 lemon"},
          {amount:"400g", item:"dulce de leche"},
          {amount:"150g", item:"desiccated coconut"}
        ],
        instructions: [
          "Cream butter and icing sugar. Beat in egg yolks, vanilla and lemon zest.",
          "Sift flour, cornflour and baking powder together. Fold into butter mixture.",
          "Chill dough 30 minutes.",
          "Roll to 5 mm. Cut 4 cm rounds. Bake at 170°C for 10–12 minutes — they should be pale, not golden.",
          "Cool completely. Sandwich pairs with a generous layer of dulce de leche.",
          "Roll edges in coconut. Store in an airtight container — they improve overnight."
        ],
        youtube: { search: "Alfajores de Maicena recipe Argentine dulce de leche", url: "https://www.youtube.com/results?search_query=Alfajores+de+Maicena+recipe+Argentine" }
      }
    }
  },

  {
    id: "brazil", name: "Brazil", flag: "🇧🇷", confederation: "CONMEBOL",
    intro: "Brazilian food is bold, colourful and deeply rooted in African, Indigenous and Portuguese traditions.",
    menu: {
      starter: {
        name: "Coxinha (Chicken Croquettes)",
        description: "Teardrop-shaped fried croquettes filled with creamy shredded chicken and catupiry cheese.",
        servings: 20, prepTime: "50 min", cookTime: "20 min",
        ingredients: [
          {amount:"500g", item:"chicken breast, poached and shredded"},
          {amount:"200g", item:"cream cheese or catupiry"},
          {amount:"1", item:"onion, finely diced"},
          {amount:"3 cloves", item:"garlic, minced"},
          {amount:"1 tsp", item:"sweet paprika"},
          {amount:"500g", item:"plain flour"},
          {amount:"1 L", item:"chicken stock"},
          {amount:"2 tbsp", item:"butter"},
          {amount:"breadcrumbs", item:"for coating"},
          {amount:"2", item:"eggs, beaten"},
          {amount:"oil", item:"for deep frying"}
        ],
        instructions: [
          "Sauté onion and garlic in butter. Add shredded chicken and paprika. Season well. Cool.",
          "Mix in cream cheese to make a creamy filling.",
          "For the dough: bring stock and butter to a boil. Add flour all at once, stir vigorously until a dough forms. Cook 2 minutes.",
          "Cool dough slightly. Take a ball of dough, flatten in your palm, place a spoonful of filling in the centre.",
          "Close around the filling, shape into a teardrop.",
          "Dip in beaten egg, roll in breadcrumbs. Fry at 180°C for 3–4 minutes until golden."
        ],
        youtube: { search: "Coxinha recipe Brazilian chicken croquette authentic", url: "https://www.youtube.com/results?search_query=Coxinha+recipe+Brazilian+chicken+croquette" }
      },
      main: {
        name: "Feijoada",
        description: "Brazil's national dish — a rich black bean stew with pork, sausage and smoked meats, served with rice, farofa and orange.",
        servings: 8, prepTime: "30 min + overnight soaking", cookTime: "3 hrs",
        ingredients: [
          {amount:"500g", item:"dried black beans, soaked overnight"},
          {amount:"300g", item:"pork belly, cubed"},
          {amount:"200g", item:"smoked sausage (linguiça), sliced"},
          {amount:"200g", item:"chouriço or chorizo, sliced"},
          {amount:"200g", item:"smoked bacon lardons"},
          {amount:"2", item:"onions, diced"},
          {amount:"8 cloves", item:"garlic, minced"},
          {amount:"3", item:"bay leaves"},
          {amount:"1 tsp", item:"cumin"},
          {amount:"3 tbsp", item:"olive oil"},
          {amount:"to serve", item:"white rice, farofa (toasted cassava flour), orange slices, sautéed kale, hot sauce"}
        ],
        instructions: [
          "Drain soaked beans. Place in a large pot with plenty of fresh water. Simmer 1.5 hours.",
          "In a separate pan, fry bacon, pork belly and sausages until browned. Set aside.",
          "Sauté onion and garlic in oil until golden. Add cumin, cook 1 minute.",
          "Add all meats to the beans, along with the onion mixture and bay leaves.",
          "Simmer another 1–1.5 hours until beans are creamy and meat is very tender.",
          "For farofa: fry cassava flour in butter with diced onion and bacon until golden.",
          "Serve feijoada in a large bowl with white rice, farofa, sautéed kale and orange slices."
        ],
        youtube: { search: "Feijoada recipe authentic Brazilian black bean stew", url: "https://www.youtube.com/results?search_query=Feijoada+recipe+authentic+Brazilian+black+bean+stew" }
      },
      dessert: {
        name: "Brigadeiro",
        description: "Brazil's beloved chocolate fudge truffles rolled in chocolate sprinkles — made at every birthday.",
        servings: 30, prepTime: "5 min", cookTime: "15 min + 1 hr cooling",
        ingredients: [
          {amount:"395g", item:"can of sweetened condensed milk"},
          {amount:"3 tbsp", item:"good cocoa powder"},
          {amount:"30g", item:"unsalted butter"},
          {amount:"chocolate sprinkles", item:"(granulado) for rolling"},
          {amount:"paper cases", item:"for serving"}
        ],
        instructions: [
          "Place condensed milk, cocoa powder and butter in a heavy saucepan.",
          "Cook over medium-low heat, stirring constantly with a spatula.",
          "After 10–15 minutes the mixture will pull away from the sides cleanly — it's ready.",
          "Pour onto a greased plate and cool completely (at least 1 hour).",
          "With greased hands, roll into small balls (3 cm).",
          "Roll each in chocolate sprinkles. Place in paper cases. Keep at room temperature up to 3 days."
        ],
        youtube: { search: "Brigadeiro recipe authentic Brazilian chocolate truffles", url: "https://www.youtube.com/results?search_query=Brigadeiro+recipe+authentic+Brazilian" }
      }
    }
  },

  {
    id: "uruguay", name: "Uruguay", flag: "🇺🇾", confederation: "CONMEBOL",
    intro: "Uruguayan food is the quiet cousin of Argentine cuisine — quality beef, mate culture and hearty stews.",
    menu: {
      starter: {
        name: "Tortilla Española Uruguaya",
        description: "A thick omelette of slowly confit onions and potatoes — humble, perfect comfort food.",
        servings: 4, prepTime: "15 min", cookTime: "40 min",
        ingredients: [
          {amount:"600g", item:"waxy potatoes, peeled and thinly sliced"},
          {amount:"2", item:"large onions, thinly sliced"},
          {amount:"6", item:"eggs"},
          {amount:"200 ml", item:"olive oil"},
          {amount:"to taste", item:"salt"}
        ],
        instructions: [
          "Heat olive oil in a 24 cm frying pan. Add potatoes and onions, season with salt.",
          "Cook over medium-low heat 25 minutes until potatoes are tender but not crispy, turning occasionally.",
          "Beat eggs with salt. Strain potatoes and onions, reserving oil. Add to eggs, mix gently.",
          "Heat 2 tbsp reserved oil in the pan over medium heat. Pour in egg and potato mixture.",
          "Cook 5–6 minutes until edges are set but centre is still soft.",
          "Flip onto a plate, then slide back into pan. Cook another 4–5 minutes. Centre should be slightly soft.",
          "Cool 10 minutes before serving. Best at room temperature."
        ],
        youtube: { search: "Tortilla Española recipe authentic Spanish omelette", url: "https://www.youtube.com/results?search_query=Tortilla+Española+recipe+authentic" }
      },
      main: {
        name: "Chivito",
        description: "Uruguay's national sandwich — a towering construction of steak, ham, mozzarella, eggs, olives and vegetables.",
        servings: 2, prepTime: "20 min", cookTime: "15 min",
        ingredients: [
          {amount:"2", item:"thin beef loin steaks (churrasco), 150g each"},
          {amount:"2", item:"crusty bread rolls"},
          {amount:"4 slices", item:"ham (Virginia ham)"},
          {amount:"4 slices", item:"mozzarella"},
          {amount:"2", item:"fried eggs"},
          {amount:"4 strips", item:"smoked bacon"},
          {amount:"2 tbsp", item:"mayonnaise"},
          {amount:"1", item:"ripe tomato, sliced"},
          {amount:"handful", item:"lettuce"},
          {amount:"handful", item:"green olives"},
          {amount:"pickled peppers", item:"to taste"}
        ],
        instructions: [
          "Fry bacon until crispy. Set aside.",
          "Season steaks and sear in a very hot pan, 2 minutes per side. Place ham and mozzarella on top, cover pan briefly to melt cheese.",
          "Fry eggs to your liking.",
          "Slice bread rolls. Spread both sides with mayonnaise.",
          "Build in order: lettuce, tomato, steak with melted cheese, ham, bacon, fried egg, olives, peppers.",
          "Press together firmly and serve with chips."
        ],
        youtube: { search: "Chivito recipe Uruguayan national sandwich", url: "https://www.youtube.com/results?search_query=Chivito+recipe+Uruguayan+national+sandwich" }
      },
      dessert: {
        name: "Torta Frita (Fried Flat Bread) with Dulce de Leche",
        description: "Crispy deep-fried dough discs eaten with thick dulce de leche — a rainy-day Uruguayan tradition.",
        servings: 12, prepTime: "20 min + 30 min resting", cookTime: "20 min",
        ingredients: [
          {amount:"500g", item:"plain flour"},
          {amount:"7g", item:"instant yeast"},
          {amount:"1 tsp", item:"salt"},
          {amount:"2 tsp", item:"sugar"},
          {amount:"250 ml", item:"warm water"},
          {amount:"2 tbsp", item:"lard or butter"},
          {amount:"oil", item:"for deep frying"},
          {amount:"300g", item:"dulce de leche (thick caramel)"}
        ],
        instructions: [
          "Mix flour, yeast, salt and sugar. Rub in lard. Add warm water, knead 5 minutes.",
          "Rest 30 minutes.",
          "Divide into 12 balls. Roll each into a thin round (5 mm thick).",
          "Make a small hole in the centre of each (prevents puffing unevenly).",
          "Fry in hot oil (180°C) 2–3 minutes each side until golden.",
          "Drain on paper towels. Serve immediately with generous spoonfuls of dulce de leche on top."
        ],
        youtube: { search: "Torta Frita recipe Uruguayan fried bread", url: "https://www.youtube.com/results?search_query=Torta+Frita+recipe+Uruguayan+fried+bread" }
      }
    }
  },

  {
    id: "colombia", name: "Colombia", flag: "🇨🇴", confederation: "CONMEBOL",
    intro: "Colombian cuisine is wonderfully diverse — from Andean potato soups to coastal ceviches and the legendary bandeja paisa.",
    menu: {
      starter: {
        name: "Ajiaco Bogotano",
        description: "Colombia's heartwarming potato soup with three varieties of potato, chicken and guasca herb.",
        servings: 6, prepTime: "20 min", cookTime: "1 hr",
        ingredients: [
          {amount:"400g", item:"chicken thighs, bone-in"},
          {amount:"300g", item:"papa criolla (small yellow potatoes, or waxy potatoes)"},
          {amount:"300g", item:"papa pastusa (or Maris Piper), diced"},
          {amount:"300g", item:"papa sabanera (or King Edward), diced"},
          {amount:"2 L", item:"chicken stock"},
          {amount:"2", item:"corn on the cob, cut into 4 pieces"},
          {amount:"3 tbsp", item:"dried guasca herb (or substitute dried thyme + a splash of lemon)"},
          {amount:"1", item:"leek, sliced"},
          {amount:"3 spring onions", item:"sliced"},
          {amount:"to serve", item:"sour cream, capers, avocado slices"}
        ],
        instructions: [
          "Bring stock to a boil. Add chicken, leek and spring onions. Simmer 25 minutes.",
          "Remove chicken, shred meat. Discard bones.",
          "Add all three potato varieties and corn to the broth. Simmer 30 minutes.",
          "The papa criolla will dissolve, thickening the soup naturally.",
          "Add guasca herb and return shredded chicken. Simmer 10 minutes.",
          "Serve in deep bowls with sour cream, capers and avocado on the side for each person to add."
        ],
        youtube: { search: "Ajiaco Bogotano recipe Colombian potato chicken soup", url: "https://www.youtube.com/results?search_query=Ajiaco+Bogotano+recipe+Colombian" }
      },
      main: {
        name: "Bandeja Paisa",
        description: "Colombia's most iconic plate — red beans, rice, minced beef, chicharrón, fried egg, avocado, arepa and plantain.",
        servings: 4, prepTime: "30 min", cookTime: "1.5 hrs",
        ingredients: [
          {amount:"400g", item:"dried red kidney beans, soaked overnight"},
          {amount:"200g", item:"smoked bacon (for beans)"},
          {amount:"400g", item:"beef mince"},
          {amount:"300g", item:"pork belly, skin-on (for chicharrón)"},
          {amount:"4", item:"eggs"},
          {amount:"2 cups", item:"long-grain white rice"},
          {amount:"2", item:"ripe plantains, sliced and fried"},
          {amount:"2", item:"corn arepas (store-bought or homemade)"},
          {amount:"2", item:"avocados, sliced"},
          {amount:"1", item:"onion + 2 tomatoes + 2 cloves garlic (hogao sauce)"},
          {amount:"to taste", item:"cumin, salt, pepper"}
        ],
        instructions: [
          "Cook beans with bacon, cumin and salt until very tender (~1 hour). Mash some beans to thicken.",
          "Make hogao: fry diced onion, tomato and garlic until jammy. Season with cumin.",
          "Brown beef mince in hogao until cooked. Season.",
          "Fry pork belly pieces at high heat until skin is crackling-crisp (chicharrón).",
          "Cook rice. Fry plantain slices until golden. Fry eggs sunny-side up.",
          "Warm arepas on a griddle. Arrange everything on a large plate — rice, beans, beef, chicharrón, fried egg, plantain, arepa and avocado."
        ],
        youtube: { search: "Bandeja Paisa recipe authentic Colombian feast", url: "https://www.youtube.com/results?search_query=Bandeja+Paisa+recipe+authentic+Colombian" }
      },
      dessert: {
        name: "Buñuelos Colombianos",
        description: "Light, hollow fried cheese puffs — crispy outside, airy inside, traditionally eaten at Christmas.",
        servings: 20, prepTime: "15 min", cookTime: "15 min",
        ingredients: [
          {amount:"200g", item:"costeño cheese (or feta), finely crumbled"},
          {amount:"200g", item:"mozzarella, grated"},
          {amount:"2", item:"eggs"},
          {amount:"100g", item:"tapioca starch (almidón de yuca)"},
          {amount:"50g", item:"fine cornmeal"},
          {amount:"1 tsp", item:"baking powder"},
          {amount:"2 tbsp", item:"sugar"},
          {amount:"pinch", item:"salt"},
          {amount:"oil", item:"for deep frying"}
        ],
        instructions: [
          "Combine both cheeses, eggs, tapioca starch, cornmeal, baking powder, sugar and salt.",
          "Mix well — the dough should be soft and pliable.",
          "Shape into golf-ball-sized balls.",
          "Heat oil to 160°C (not too hot — they need time to puff and cook through).",
          "Fry 8–10 minutes, turning occasionally, until deeply golden and hollow-sounding when tapped.",
          "Drain on paper towels. Serve hot, ideally with Colombian hot chocolate."
        ],
        youtube: { search: "Buñuelos colombianos recipe authentic cheese puffs", url: "https://www.youtube.com/results?search_query=Bunuelos+colombianos+recipe+authentic" }
      }
    }
  },

  {
    id: "ecuador", name: "Ecuador", flag: "🇪🇨", confederation: "CONMEBOL",
    intro: "Ecuadorian food is built on native Andean ingredients — potatoes, corn and quinoa — with bold aji pepper heat.",
    menu: {
      starter: {
        name: "Locro de Papa (Ecuadorian Potato Soup)",
        description: "A thick Andean potato soup with avocado, melted cheese and fresh aji sauce.",
        servings: 4, prepTime: "15 min", cookTime: "35 min",
        ingredients: [
          {amount:"800g", item:"floury potatoes, peeled and diced"},
          {amount:"1", item:"white onion, diced"},
          {amount:"3 cloves", item:"garlic, minced"},
          {amount:"1 tsp", item:"ground cumin"},
          {amount:"1 tsp", item:"achiote (annatto) powder"},
          {amount:"1 L", item:"water"},
          {amount:"200 ml", item:"full-fat milk"},
          {amount:"100g", item:"queso fresco or feta, cubed"},
          {amount:"1", item:"avocado, diced"},
          {amount:"2 tbsp", item:"vegetable oil"},
          {amount:"aji sauce", item:"(blend ½ tomato, 1 aji amarillo or jalapeño, spring onion, lime juice)"}
        ],
        instructions: [
          "Sauté onion in oil until soft. Add garlic, cumin and achiote, cook 2 minutes.",
          "Add potatoes and water. Bring to a boil, simmer 25 minutes until potatoes are very soft.",
          "Mash some potatoes into the broth to thicken naturally.",
          "Add milk, stir and simmer 5 minutes. Season.",
          "Make aji sauce: blend all ingredients until smooth.",
          "Serve soup in bowls topped with cheese cubes and diced avocado. Pass aji sauce at the table."
        ],
        youtube: { search: "Locro de Papa recipe Ecuadorian potato soup", url: "https://www.youtube.com/results?search_query=Locro+de+Papa+recipe+Ecuadorian+potato+soup" }
      },
      main: {
        name: "Seco de Pollo",
        description: "Ecuadorian chicken braised in beer, chicha and tomatoes with coriander and aji — served over rice.",
        servings: 4, prepTime: "20 min", cookTime: "45 min",
        ingredients: [
          {amount:"1 kg", item:"chicken pieces (thighs and drumsticks)"},
          {amount:"330 ml", item:"beer or light chicha"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"2", item:"red peppers, diced"},
          {amount:"1", item:"white onion, diced"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"large bunch", item:"fresh coriander, chopped"},
          {amount:"1 tsp", item:"cumin"},
          {amount:"1 tsp", item:"achiote"},
          {amount:"3 tbsp", item:"vegetable oil"},
          {amount:"to serve", item:"white rice and fried sweet plantains (maduro)"}
        ],
        instructions: [
          "Season chicken. Brown in oil in a heavy pot, all sides. Set aside.",
          "Sauté onion, peppers and garlic 8 minutes. Add achiote and cumin, cook 1 minute.",
          "Add crushed tomatoes and beer. Stir well, scraping the bottom.",
          "Return chicken to pot. Cover and simmer 30–35 minutes until chicken is cooked through and sauce is thick.",
          "Stir in most of the coriander. Adjust seasoning.",
          "Serve over white rice with fried plantains and remaining fresh coriander."
        ],
        youtube: { search: "Seco de Pollo recipe Ecuadorian chicken stew", url: "https://www.youtube.com/results?search_query=Seco+de+Pollo+recipe+Ecuadorian" }
      },
      dessert: {
        name: "Espumillas de Guayaba",
        description: "Cloud-like guava meringue whipped with egg whites — Ecuador's beloved street-fair dessert.",
        servings: 6, prepTime: "30 min", cookTime: "10 min",
        ingredients: [
          {amount:"400g", item:"ripe guavas (or 200 ml guava purée)"},
          {amount:"3", item:"egg whites"},
          {amount:"150g", item:"caster sugar"},
          {amount:"2 tbsp", item:"lemon juice"},
          {amount:"pinch", item:"salt"},
          {amount:"waffle cones", item:"for serving"}
        ],
        instructions: [
          "Peel and seed guavas. Blend flesh with lemon juice until smooth. Pass through a sieve.",
          "Make a sugar syrup: boil sugar with 50 ml water to 118°C (soft-ball stage).",
          "Whisk egg whites and salt to soft peaks.",
          "Pour hot syrup in a thin stream into egg whites while whisking. Continue whisking until glossy and cooled.",
          "Fold in guava purée to create a pink, fluffy mousse.",
          "Serve in waffle cones immediately, or in glasses. Best eaten fresh."
        ],
        youtube: { search: "Espumillas de guayaba recipe Ecuadorian meringue", url: "https://www.youtube.com/results?search_query=Espumillas+de+guayaba+recipe+Ecuadorian" }
      }
    }
  },

  {
    id: "paraguay", name: "Paraguay", flag: "🇵🇾", confederation: "CONMEBOL",
    intro: "Paraguayan food is corn-centric and warming — from the unique baked corn bread called sopa paraguaya to grilled beef and pumpkin desserts.",
    menu: {
      starter: {
        name: "Sopa Paraguaya (Corn Bread)",
        description: "Despite the name, sopa paraguaya is a dense, savoury baked corn cake with cheese and onion.",
        servings: 12, prepTime: "20 min", cookTime: "45 min",
        ingredients: [
          {amount:"500g", item:"fine cornmeal (maize flour)"},
          {amount:"400g", item:"queso paraguayo or fresh farmer's cheese, crumbled"},
          {amount:"2", item:"large onions, very finely diced"},
          {amount:"4", item:"eggs"},
          {amount:"400 ml", item:"full-fat milk"},
          {amount:"200g", item:"butter, melted"},
          {amount:"1 tsp", item:"salt"}
        ],
        instructions: [
          "Sauté onions in a little butter until golden and soft. Cool.",
          "Mix eggs, milk and butter together.",
          "Combine cornmeal, crumbled cheese, cooked onions and salt.",
          "Pour egg mixture over cornmeal mixture. Stir until combined — the batter will be quite wet.",
          "Pour into a well-greased 25×35 cm tin.",
          "Bake at 180°C for 40–45 minutes until golden on top and a skewer comes out clean.",
          "Cool 15 minutes before slicing. Serve warm or at room temperature."
        ],
        youtube: { search: "Sopa Paraguaya recipe authentic corn cake", url: "https://www.youtube.com/results?search_query=Sopa+Paraguaya+recipe+authentic" }
      },
      main: {
        name: "Chipa Guasú with Asado Paraguayo",
        description: "Baked fresh corn soufflé alongside grilled beef — the classic Paraguayan Sunday meal.",
        servings: 6, prepTime: "30 min", cookTime: "1 hr",
        ingredients: [
          {amount:"1 kg", item:"fresh corn kernels (or 2 cans sweet corn)"},
          {amount:"300g", item:"queso fresco, crumbled"},
          {amount:"4", item:"eggs"},
          {amount:"100g", item:"butter, melted"},
          {amount:"1", item:"onion, grated"},
          {amount:"1 tsp", item:"salt"},
          {amount:"1 kg", item:"beef ribs or skirt steak"},
          {amount:"coarse salt", item:"for the beef"},
          {amount:"chimichurri or pebre", item:"to serve"}
        ],
        instructions: [
          "Blend corn kernels in a food processor until chunky-smooth.",
          "Mix corn with cheese, eggs, butter, onion and salt.",
          "Pour into a buttered baking dish. Bake at 180°C for 40 minutes until golden and set.",
          "Season beef generously with coarse salt.",
          "Grill over hot charcoal, 5–8 minutes per side depending on thickness.",
          "Rest beef 5 minutes. Slice against the grain.",
          "Serve chipa guasú alongside beef with chimichurri."
        ],
        youtube: { search: "Chipa Guasú recipe Paraguayan fresh corn cake", url: "https://www.youtube.com/results?search_query=Chipa+Guasú+recipe+Paraguayan" }
      },
      dessert: {
        name: "Kivevé (Pumpkin Dessert)",
        description: "A thick, sweet pumpkin and cornmeal pudding scented with anise — unique to Paraguay.",
        servings: 8, prepTime: "15 min", cookTime: "45 min",
        ingredients: [
          {amount:"1 kg", item:"pumpkin or butternut squash, peeled and diced"},
          {amount:"200g", item:"fine cornmeal"},
          {amount:"200g", item:"sugar"},
          {amount:"100g", item:"queso fresco, crumbled"},
          {amount:"50g", item:"butter"},
          {amount:"500 ml", item:"water"},
          {amount:"1 tsp", item:"anise seeds"},
          {amount:"pinch", item:"salt"}
        ],
        instructions: [
          "Cook pumpkin in water until very soft, about 20 minutes. Do not drain.",
          "Mash or blend pumpkin with its cooking water into a smooth purée.",
          "Return to heat. Add sugar, anise seeds and salt. Stir over medium heat.",
          "Gradually whisk in cornmeal. Cook, stirring constantly, 20 minutes until very thick.",
          "Stir in butter and most of the cheese.",
          "Pour into a greased dish. Smooth top, scatter remaining cheese.",
          "Cool and serve at room temperature, cut into portions."
        ],
        youtube: { search: "Kivevé recipe Paraguayan pumpkin dessert", url: "https://www.youtube.com/results?search_query=Kivevé+recipe+Paraguayan+pumpkin" }
      }
    }
  },


  // ===== CONCACAF =====
  {
    id: "usa", name: "United States", flag: "🇺🇸", confederation: "CONCACAF",
    intro: "American cuisine is a mosaic of immigrant traditions — clam chowder from New England, BBQ from the South and classic apple pie.",
    menu: {
      starter: {
        name: "New England Clam Chowder",
        description: "Creamy potato soup packed with clams and smoky bacon — the pride of the East Coast.",
        servings: 4, prepTime: "20 min", cookTime: "35 min",
        ingredients: [
          {amount:"2 cans", item:"(400g each) chopped clams, juice reserved"},
          {amount:"150g", item:"smoked streaky bacon, diced"},
          {amount:"2", item:"large potatoes, peeled and diced"},
          {amount:"2", item:"celery stalks, diced"},
          {amount:"1", item:"large onion, diced"},
          {amount:"2 cloves", item:"garlic, minced"},
          {amount:"400 ml", item:"double cream"},
          {amount:"200 ml", item:"whole milk"},
          {amount:"2 tbsp", item:"plain flour"},
          {amount:"50g", item:"butter"},
          {amount:"to serve", item:"oyster crackers and fresh thyme"}
        ],
        instructions: [
          "Fry bacon in a large pot until crispy. Remove, leave fat in pot.",
          "Sauté onion, celery and garlic in bacon fat 5 minutes.",
          "Stir in flour. Add reserved clam juice and enough water to cover potatoes.",
          "Add potatoes. Simmer 15 minutes until tender.",
          "Pour in cream and milk. Add clams. Simmer gently 5 minutes — do not boil or clams toughen.",
          "Season with salt and white pepper.",
          "Serve in warmed bowls with crispy bacon, oyster crackers and thyme."
        ],
        youtube: { search: "New England clam chowder recipe authentic creamy", url: "https://www.youtube.com/results?search_query=New+England+clam+chowder+recipe+authentic" }
      },
      main: {
        name: "Southern BBQ Ribs with Mac & Cheese",
        description: "Fall-off-the-bone pork ribs with a smoky dry rub and tangy BBQ sauce, alongside creamy baked mac and cheese.",
        servings: 4, prepTime: "30 min + overnight rub", cookTime: "4 hrs",
        ingredients: [
          {amount:"2 racks", item:"pork baby back ribs"},
          {amount:"dry rub:", item:"2 tbsp smoked paprika, 1 tbsp brown sugar, 1 tsp each: cumin, garlic powder, onion powder, salt, black pepper"},
          {amount:"BBQ sauce:", item:"200 ml ketchup, 3 tbsp cider vinegar, 2 tbsp brown sugar, 1 tbsp Worcestershire, 1 tsp hot sauce"},
          {amount:"400g", item:"macaroni pasta"},
          {amount:"500 ml", item:"whole milk"},
          {amount:"200g", item:"sharp cheddar, grated"},
          {amount:"100g", item:"Gruyère, grated"},
          {amount:"3 tbsp", item:"butter"},
          {amount:"3 tbsp", item:"plain flour"},
          {amount:"breadcrumbs", item:"for topping"}
        ],
        instructions: [
          "Mix dry rub ingredients. Coat ribs all over, wrap in cling film, refrigerate overnight.",
          "Next day: bake ribs at 150°C, tightly wrapped in foil, for 3 hours.",
          "Mix BBQ sauce ingredients, simmer 10 minutes.",
          "Unwrap ribs, brush with BBQ sauce and grill 15 minutes until sticky and caramelised.",
          "For mac and cheese: boil pasta. Make béchamel with butter, flour and milk. Melt in cheeses.",
          "Combine pasta and sauce in a baking dish. Top with breadcrumbs. Bake at 200°C for 20 minutes.",
          "Serve ribs with extra BBQ sauce and mac and cheese alongside."
        ],
        youtube: { search: "Southern BBQ ribs recipe low slow authentic", url: "https://www.youtube.com/results?search_query=Southern+BBQ+ribs+recipe+low+and+slow" }
      },
      dessert: {
        name: "Classic American Apple Pie",
        description: "A double-crust apple pie with cinnamon, nutmeg and butter — the dessert that defines America.",
        servings: 8, prepTime: "40 min + 1 hr chilling", cookTime: "55 min",
        ingredients: [
          {amount:"300g", item:"plain flour (for pastry)"},
          {amount:"150g", item:"cold unsalted butter, cubed"},
          {amount:"4–5 tbsp", item:"ice-cold water"},
          {amount:"1 kg", item:"Granny Smith apples, peeled, cored and sliced"},
          {amount:"150g", item:"brown sugar"},
          {amount:"1 tsp", item:"ground cinnamon"},
          {amount:"¼ tsp", item:"ground nutmeg"},
          {amount:"2 tbsp", item:"cornflour"},
          {amount:"1 tbsp", item:"lemon juice"},
          {amount:"30g", item:"butter, in small pieces"},
          {amount:"1", item:"egg, beaten (for glaze)"},
          {amount:"1 tbsp", item:"demerara sugar (for top)"}
        ],
        instructions: [
          "Make pastry: rub butter into flour until breadcrumbs. Add ice water, bring together. Divide in two. Chill 1 hour.",
          "Toss apple slices with sugar, spices, cornflour and lemon juice.",
          "Roll one pastry disc to line a 23 cm pie dish. Fill with apple mixture, dot with butter.",
          "Roll second disc over the top, crimp edges to seal. Cut vents.",
          "Brush with beaten egg, sprinkle with demerara sugar.",
          "Bake at 200°C for 20 minutes, then reduce to 180°C for 35 more minutes.",
          "Cool at least 30 minutes before slicing. Serve with vanilla ice cream."
        ],
        youtube: { search: "classic American apple pie recipe double crust", url: "https://www.youtube.com/results?search_query=classic+American+apple+pie+recipe+double+crust" }
      }
    }
  },

  {
    id: "canada", name: "Canada", flag: "🇨🇦", confederation: "CONCACAF",
    intro: "Canadian cuisine celebrates maple syrup, wild salmon, tourtière and the world's best poutine.",
    menu: {
      starter: {
        name: "Poutine",
        description: "Crispy fries smothered in brown gravy and squeaky cheese curds — Québec's gift to the world.",
        servings: 4, prepTime: "20 min", cookTime: "30 min",
        ingredients: [
          {amount:"1 kg", item:"large Maris Piper potatoes, cut into thick chips"},
          {amount:"oil", item:"for deep frying"},
          {amount:"300g", item:"fresh cheese curds (or mild mozzarella torn into pieces)"},
          {amount:"gravy:", item:"4 tbsp butter, 4 tbsp flour, 500 ml beef stock, 200 ml chicken stock, 1 tbsp Worcestershire sauce, salt and pepper"}
        ],
        instructions: [
          "Double-fry chips: first at 150°C for 7 minutes until soft. Drain. Cool.",
          "Make gravy: melt butter, whisk in flour and cook 2 minutes. Add both stocks and Worcestershire.",
          "Simmer gravy, whisking, until smooth and coating consistency. Season well. Keep very hot.",
          "Final-fry chips at 190°C for 4–5 minutes until deeply golden. Drain immediately.",
          "Pile hot chips onto a large plate. Scatter cheese curds over while chips are piping hot.",
          "Pour very hot gravy generously over everything. Serve at once."
        ],
        youtube: { search: "authentic poutine recipe Quebec fries gravy cheese curds", url: "https://www.youtube.com/results?search_query=authentic+poutine+recipe+Quebec" }
      },
      main: {
        name: "Cedar Plank Salmon with Wild Rice & Maple Glaze",
        description: "Pacific salmon infused with cedarwood smoke, glazed in maple and mustard, with nutty wild rice.",
        servings: 4, prepTime: "30 min + 1 hr soaking", cookTime: "25 min",
        ingredients: [
          {amount:"1", item:"cedar plank, soaked in water 1 hour"},
          {amount:"4", item:"salmon fillets (180g each), skin-on"},
          {amount:"3 tbsp", item:"pure maple syrup"},
          {amount:"2 tbsp", item:"Dijon mustard"},
          {amount:"2 tbsp", item:"soy sauce"},
          {amount:"2 cloves", item:"garlic, minced"},
          {amount:"200g", item:"wild rice blend"},
          {amount:"2", item:"shallots, diced"},
          {amount:"50g", item:"dried cranberries"},
          {amount:"50g", item:"toasted pecans"},
          {amount:"500 ml", item:"vegetable stock"}
        ],
        instructions: [
          "Cook wild rice in stock with shallots for 45 minutes. Stir in cranberries and pecans. Season.",
          "Mix maple syrup, mustard, soy sauce and garlic to make the glaze.",
          "Heat grill to high. Place soaked cedar plank on grill, close lid, heat 5 minutes until smoking.",
          "Place salmon skin-side down on plank. Brush with maple glaze.",
          "Close grill lid, cook 12–15 minutes until salmon is just cooked through. Glaze once more halfway.",
          "Serve salmon on the plank or transferred to plates with wild rice alongside."
        ],
        youtube: { search: "cedar plank salmon maple glaze recipe Canadian", url: "https://www.youtube.com/results?search_query=cedar+plank+salmon+maple+glaze+recipe" }
      },
      dessert: {
        name: "Butter Tarts",
        description: "Canada's most iconic baked good — flaky pastry shells filled with a runny, butterscotch-like egg custard.",
        servings: 12, prepTime: "30 min + 30 min chilling", cookTime: "20 min",
        ingredients: [
          {amount:"200g", item:"plain flour"},
          {amount:"100g", item:"cold butter, cubed"},
          {amount:"3–4 tbsp", item:"ice-cold water"},
          {amount:"¼ tsp", item:"salt"},
          {amount:"150g", item:"brown sugar"},
          {amount:"100g", item:"butter, melted"},
          {amount:"2", item:"eggs"},
          {amount:"3 tbsp", item:"golden syrup or corn syrup"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"pinch", item:"salt"},
          {amount:"100g", item:"raisins or pecans (optional)"}
        ],
        instructions: [
          "Make pastry: rub butter into flour and salt. Add ice water, bring together. Chill 30 minutes.",
          "Roll thin, cut into circles, press into a 12-hole muffin tin.",
          "Mix brown sugar, melted butter, eggs, syrup, vanilla and salt until smooth.",
          "Place raisins or pecans in pastry shells if using. Pour filling on top — fill ¾ full.",
          "Bake at 200°C for 16–20 minutes. The filling should be set around edges but still slightly wobbly in the middle.",
          "Cool completely in the tin before removing — filling firms as it cools."
        ],
        youtube: { search: "Canadian butter tarts recipe authentic runny filling", url: "https://www.youtube.com/results?search_query=Canadian+butter+tarts+recipe+authentic" }
      }
    }
  },

  {
    id: "mexico", name: "Mexico", flag: "🇲🇽", confederation: "CONCACAF",
    intro: "Mexican cuisine is a UNESCO-recognised culinary heritage — complex moles, vibrant salsas and the world's best street food.",
    menu: {
      starter: {
        name: "Guacamole con Totopos",
        description: "Fresh avocado mashed with lime, jalapeño, onion and coriander — simple, perfect and non-negotiable.",
        servings: 4, prepTime: "15 min", cookTime: "0 min",
        ingredients: [
          {amount:"3", item:"ripe Hass avocados"},
          {amount:"1", item:"jalapeño, seeded and finely chopped"},
          {amount:"½", item:"white onion, very finely diced"},
          {amount:"2 tbsp", item:"fresh coriander, chopped"},
          {amount:"juice of 1–2", item:"limes"},
          {amount:"1", item:"ripe tomato, seeded and diced"},
          {amount:"½ tsp", item:"salt (or more to taste)"},
          {amount:"tortilla chips", item:"(totopos) to serve"}
        ],
        instructions: [
          "Cut avocados in half, remove stones. Scoop flesh into a molcajete (mortar) or bowl.",
          "Mash avocado roughly — leave some texture.",
          "Add jalapeño, white onion and coriander. Mix and mash together.",
          "Add tomato and fold in gently — do not over-mash.",
          "Add lime juice and salt. Taste and adjust.",
          "Serve immediately in the molcajete with plenty of totopos."
        ],
        youtube: { search: "authentic Mexican guacamole recipe molcajete", url: "https://www.youtube.com/results?search_query=authentic+Mexican+guacamole+recipe+molcajete" }
      },
      main: {
        name: "Mole Poblano con Pollo",
        description: "Chicken in Mexico's most celebrated sauce — a complex blend of 30+ ingredients including dried chillies and dark chocolate.",
        servings: 6, prepTime: "1 hr", cookTime: "2.5 hrs",
        ingredients: [
          {amount:"1 kg", item:"chicken pieces (thighs and drumsticks)"},
          {amount:"6", item:"dried mulato chillies"},
          {amount:"4", item:"dried ancho chillies"},
          {amount:"2", item:"dried pasilla chillies"},
          {amount:"2", item:"dried chipotle chillies"},
          {amount:"50g", item:"dark chocolate (70%), chopped"},
          {amount:"2", item:"tomatoes, roasted"},
          {amount:"1", item:"slice white bread, fried in lard until golden"},
          {amount:"1 tbsp", item:"sesame seeds, toasted"},
          {amount:"1 tbsp", item:"raisins"},
          {amount:"½ tsp each", item:"cinnamon, cloves, cumin, black pepper"},
          {amount:"½", item:"onion, charred in a dry pan"},
          {amount:"4 cloves", item:"garlic, charred"},
          {amount:"1 L", item:"chicken stock"},
          {amount:"lard or oil", item:"for frying"},
          {amount:"to serve", item:"white rice and sesame seeds"}
        ],
        instructions: [
          "Toast each dried chilli in a dry pan 30 seconds per side. Soak all in hot water 30 minutes. Drain.",
          "Blend chillies with roasted tomatoes, charred onion and garlic, fried bread, sesame, raisins and spices.",
          "Fry the chilli paste in lard in a heavy pot, stirring constantly, 10 minutes.",
          "Add chicken stock gradually. Simmer 30 minutes until thick and dark.",
          "Add chocolate, stir until melted. Season with salt and a little sugar if needed.",
          "Add chicken pieces, coat in sauce, cover and simmer 30 minutes.",
          "Serve over white rice, scatter sesame seeds and serve with warm tortillas."
        ],
        youtube: { search: "Mole Poblano recipe authentic Mexican from scratch", url: "https://www.youtube.com/results?search_query=Mole+Poblano+recipe+authentic+Mexican" }
      },
      dessert: {
        name: "Pastel Tres Leches",
        description: "Airy sponge soaked in three kinds of milk and crowned with whipped cream — Mexico's most beloved cake.",
        servings: 12, prepTime: "30 min + 4 hrs chilling", cookTime: "30 min",
        ingredients: [
          {amount:"6", item:"eggs, separated"},
          {amount:"200g", item:"caster sugar"},
          {amount:"200g", item:"plain flour"},
          {amount:"1 tsp", item:"baking powder"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"1 can (397g)", item:"sweetened condensed milk"},
          {amount:"1 can (400 ml)", item:"evaporated milk"},
          {amount:"200 ml", item:"single cream"},
          {amount:"400 ml", item:"double cream (for topping)"},
          {amount:"3 tbsp", item:"icing sugar (for whipped cream)"},
          {amount:"ground cinnamon", item:"for dusting"}
        ],
        instructions: [
          "Preheat oven to 180°C. Whisk egg yolks and sugar until pale and thick.",
          "Fold in flour and baking powder. Fold in stiff egg whites in three additions.",
          "Pour into a greased 25×35 cm tin. Bake 25–30 minutes. Cool in tin.",
          "Mix condensed milk, evaporated milk and single cream.",
          "Prick cake all over with a skewer. Pour three-milks mixture slowly over the top. Refrigerate 4 hours minimum.",
          "Whip double cream and icing sugar to soft peaks. Spread over cake.",
          "Dust with cinnamon. Cut into squares to serve."
        ],
        youtube: { search: "Pastel Tres Leches recipe Mexican cake authentic", url: "https://www.youtube.com/results?search_query=Pastel+Tres+Leches+recipe+Mexican" }
      }
    }
  },

  {
    id: "panama", name: "Panama", flag: "🇵🇦", confederation: "CONCACAF",
    intro: "Panamanian food reflects its position as a crossroads — Caribbean spice, Latin comfort and fresh Pacific seafood.",
    menu: {
      starter: {
        name: "Ceviche Panameño",
        description: "Fresh fish 'cooked' in lime juice with onion, celery, coriander and Scotch bonnet heat.",
        servings: 4, prepTime: "20 min + 45 min marinating", cookTime: "0 min",
        ingredients: [
          {amount:"500g", item:"very fresh white fish (sea bass or corvina), diced"},
          {amount:"juice of 8", item:"limes (about 200 ml)"},
          {amount:"1", item:"red onion, very thinly sliced"},
          {amount:"2", item:"celery stalks, finely diced"},
          {amount:"½", item:"Scotch bonnet or habanero, seeded and finely diced"},
          {amount:"large handful", item:"coriander, chopped"},
          {amount:"2 tbsp", item:"white wine vinegar"},
          {amount:"1 tsp", item:"salt"},
          {amount:"to serve", item:"saltine crackers (soda crackers)"}
        ],
        instructions: [
          "Place diced fish in a non-metallic bowl. Pour lime juice over — fish should be submerged.",
          "Add a generous pinch of salt. Cover and refrigerate 45 minutes, turning once.",
          "The fish will turn opaque — it is now 'cooked' by the acid.",
          "Drain most of the lime juice, leaving a little.",
          "Add red onion, celery, Scotch bonnet and coriander. Add vinegar. Toss gently.",
          "Serve very cold in small glasses with saltine crackers."
        ],
        youtube: { search: "Panamanian ceviche recipe corvina authentic", url: "https://www.youtube.com/results?search_query=Panamanian+ceviche+recipe+authentic" }
      },
      main: {
        name: "Sancocho de Gallina",
        description: "Panama's national soup-stew — chicken, yuca and corn in a fragrant broth with culantro.",
        servings: 6, prepTime: "20 min", cookTime: "1.5 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"chicken pieces (bone-in)"},
          {amount:"500g", item:"yuca (cassava), peeled and chunked"},
          {amount:"2", item:"corn on the cob, cut into rounds"},
          {amount:"1", item:"large onion, diced"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"1 bunch", item:"culantro (or coriander), chopped"},
          {amount:"1 tsp", item:"oregano"},
          {amount:"2 L", item:"water"},
          {amount:"to taste", item:"salt and pepper"},
          {amount:"to serve", item:"white rice, lime wedges, sliced chilli"}
        ],
        instructions: [
          "Place chicken in a large pot with water. Bring to a boil, skim well.",
          "Add onion, garlic, culantro, oregano, salt and pepper.",
          "Simmer 45 minutes. Remove chicken, shred meat from bones.",
          "Add yuca and corn to the broth. Simmer 30 minutes until yuca is tender.",
          "Return shredded chicken. Adjust seasoning.",
          "Serve in large bowls with white rice on the side, lime wedges and fresh chilli."
        ],
        youtube: { search: "Sancocho de Gallina Panameño recipe national dish", url: "https://www.youtube.com/results?search_query=Sancocho+de+Gallina+Panama+recipe" }
      },
      dessert: {
        name: "Arroz con Leche",
        description: "Creamy Latin rice pudding scented with cinnamon and lime peel — eaten across all of Latin America.",
        servings: 6, prepTime: "5 min", cookTime: "40 min",
        ingredients: [
          {amount:"300g", item:"short-grain white rice"},
          {amount:"1 L", item:"whole milk"},
          {amount:"1 can (397g)", item:"sweetened condensed milk"},
          {amount:"1", item:"cinnamon stick"},
          {amount:"2 strips", item:"lime or lemon peel"},
          {amount:"600 ml", item:"water"},
          {amount:"pinch", item:"salt"},
          {amount:"ground cinnamon", item:"for dusting"}
        ],
        instructions: [
          "Cook rice in water with cinnamon stick and lime peel for 15 minutes until water is absorbed.",
          "Add whole milk and a pinch of salt. Cook on low heat, stirring often, 15 minutes.",
          "Add condensed milk. Continue cooking and stirring 10 more minutes until thick and creamy.",
          "Remove cinnamon stick and lime peel.",
          "Serve warm or cold in bowls or glasses. Dust generously with ground cinnamon."
        ],
        youtube: { search: "arroz con leche recipe authentic Latin American", url: "https://www.youtube.com/results?search_query=arroz+con+leche+recipe+authentic+Latin" }
      }
    }
  },
  {
    id: "curacao", name: "Curaçao", flag: "🇨🇼", confederation: "CONCACAF",
    intro: "Curaçaoan cooking is a Caribbean-Dutch-African mosaic — savoury stuffed cheese, fried pastries and island sweets.",
    menu: {
      starter: {
        name: "Pastechi",
        description: "Golden deep-fried pastry turnovers stuffed with spiced Gouda cheese — the island's favourite snack.",
        servings: 12, prepTime: "40 min", cookTime: "15 min",
        ingredients: [
          {amount:"400g", item:"plain flour"},
          {amount:"100g", item:"butter, cold"},
          {amount:"1", item:"egg"},
          {amount:"120 ml", item:"milk"},
          {amount:"1 tsp", item:"baking powder"},
          {amount:"250g", item:"young Gouda, grated"},
          {amount:"1", item:"onion, finely chopped"},
          {amount:"1 tsp", item:"sweet paprika"},
          {amount:"oil", item:"for deep-frying"}
        ],
        instructions: [
          "Rub butter into flour and baking powder. Add egg and milk, knead to a smooth dough and rest 30 minutes.",
          "Mix grated Gouda with onion and paprika for the filling.",
          "Roll the dough thin and cut into circles.",
          "Spoon filling on one half, fold over and crimp the edges with a fork.",
          "Deep-fry at 180°C until puffed and deep golden.",
          "Drain on paper and eat warm."
        ],
        youtube: { search: "Pastechi Curacao cheese pastry recipe authentic", url: "https://www.youtube.com/results?search_query=Pastechi+Curacao+cheese+pastry+recipe" }
      },
      main: {
        name: "Keshi Yena",
        description: "The national dish: a whole Edam cheese shell baked around spiced chicken with raisins, olives and capers.",
        servings: 6, prepTime: "30 min", cookTime: "45 min",
        ingredients: [
          {amount:"1", item:"whole Edam cheese (hollowed) or 500g sliced Edam"},
          {amount:"600g", item:"chicken thighs, shredded"},
          {amount:"1", item:"onion, chopped"},
          {amount:"1", item:"bell pepper, diced"},
          {amount:"2", item:"tomatoes, chopped"},
          {amount:"3 tbsp", item:"raisins"},
          {amount:"3 tbsp", item:"green olives, sliced"},
          {amount:"1 tbsp", item:"capers"},
          {amount:"1 tsp", item:"piccalilli or mustard"},
          {amount:"2", item:"eggs, beaten"}
        ],
        instructions: [
          "Simmer chicken until tender, then shred.",
          "Sauté onion, pepper and tomato. Add chicken, raisins, olives, capers and piccalilli; cook to a thick stew.",
          "Bind the filling with beaten egg off the heat.",
          "Line a buttered bowl or dish with cheese slices, leaving overhang.",
          "Fill with the chicken mixture and fold the cheese over the top.",
          "Bake at 180°C for 25–30 minutes until the cheese melts and sets. Turn out to serve."
        ],
        youtube: { search: "Keshi Yena Curacao stuffed cheese recipe authentic", url: "https://www.youtube.com/results?search_query=Keshi+Yena+Curacao+stuffed+cheese+recipe" }
      },
      dessert: {
        name: "Bolo di Banana (Banana Cake)",
        description: "A moist island banana cake spiced with cinnamon and nutmeg, rich with butter and brown sugar.",
        servings: 10, prepTime: "20 min", cookTime: "50 min",
        ingredients: [
          {amount:"4", item:"very ripe bananas, mashed"},
          {amount:"200g", item:"butter, softened"},
          {amount:"200g", item:"brown sugar"},
          {amount:"3", item:"eggs"},
          {amount:"300g", item:"plain flour"},
          {amount:"2 tsp", item:"baking powder"},
          {amount:"1 tsp", item:"ground cinnamon"},
          {amount:"½ tsp", item:"grated nutmeg"},
          {amount:"1 tsp", item:"vanilla"}
        ],
        instructions: [
          "Cream butter and brown sugar until fluffy.",
          "Beat in the eggs one at a time, then the vanilla.",
          "Fold in the mashed banana.",
          "Sift in flour, baking powder, cinnamon and nutmeg; fold to a smooth batter.",
          "Pour into a lined loaf tin and bake at 175°C for about 50 minutes.",
          "Cool before slicing — it's even better the next day."
        ],
        youtube: { search: "Bolo di banana Curacao banana cake recipe", url: "https://www.youtube.com/results?search_query=Bolo+di+banana+Curacao+banana+cake+recipe" }
      }
    }
  },
  {
    id: "haiti", name: "Haiti", flag: "🇭🇹", confederation: "CONCACAF",
    intro: "Haitian cuisine is bold and proud — the freedom soup of independence, citrus-marinated fried pork and silky sweet-potato puddings.",
    menu: {
      starter: {
        name: "Soup Joumou",
        description: "The UNESCO-listed freedom soup: a golden squash soup with beef, pasta and vegetables, eaten on Independence Day.",
        servings: 8, prepTime: "30 min", cookTime: "1 hr 30 min",
        ingredients: [
          {amount:"1 kg", item:"giraumon or butternut squash, peeled"},
          {amount:"500g", item:"beef, cubed, marinated in epis"},
          {amount:"2", item:"carrots, sliced"},
          {amount:"2", item:"potatoes, diced"},
          {amount:"1", item:"turnip, diced"},
          {amount:"100g", item:"cabbage, shredded"},
          {amount:"100g", item:"rigatoni or vermicelli"},
          {amount:"1", item:"onion, sliced"},
          {amount:"2", item:"limes, juiced"},
          {amount:"1", item:"Scotch bonnet (whole), thyme, cloves"}
        ],
        instructions: [
          "Marinate the beef in epis (Haitian herb paste) and lime; brown in a heavy pot.",
          "Boil the squash separately until soft, then blend smooth and add to the pot with water.",
          "Add carrots, potatoes, turnip and onion; simmer until the beef is tender.",
          "Stir in cabbage, thyme, cloves and a whole Scotch bonnet (don't burst it).",
          "Add the pasta and cook until just tender; the soup should be rich and golden.",
          "Finish with lime and adjust salt. Serve hot with bread."
        ],
        youtube: { search: "Soup Joumou Haitian pumpkin soup recipe authentic", url: "https://www.youtube.com/results?search_query=Soup+Joumou+Haitian+pumpkin+soup+recipe" }
      },
      main: {
        name: "Griot with Pikliz",
        description: "Citrus-marinated pork shoulder braised then fried crisp, served with fiery pickled-cabbage pikliz.",
        servings: 6, prepTime: "30 min + overnight marinating", cookTime: "1 hr 30 min",
        ingredients: [
          {amount:"1.2 kg", item:"pork shoulder, cubed"},
          {amount:"2", item:"limes / sour oranges, juiced"},
          {amount:"1", item:"onion, sliced"},
          {amount:"4", item:"garlic cloves"},
          {amount:"2 tbsp", item:"epis (herb paste)"},
          {amount:"1", item:"Scotch bonnet"},
          {amount:"oil", item:"for frying"},
          {amount:"pikliz", item:"— shredded cabbage, carrot, chilli, vinegar"},
          {amount:"fried plantains", item:"to serve"}
        ],
        instructions: [
          "Marinate the pork overnight with citrus, onion, garlic, epis and Scotch bonnet.",
          "Simmer the pork in its marinade with a little water until tender, about 1 hour.",
          "Lift out the pork and reduce the braising liquid; reserve.",
          "Fry the pork in hot oil until deeply browned and crisp at the edges.",
          "Make pikliz ahead: pack cabbage, carrot and chilli in vinegar and let it pickle.",
          "Serve the griot with pikliz, fried plantains and the reduced sauce."
        ],
        youtube: { search: "Griot Haitian fried pork pikliz recipe authentic", url: "https://www.youtube.com/results?search_query=Griot+Haitian+fried+pork+pikliz+recipe" }
      },
      dessert: {
        name: "Pen Patat (Sweet Potato Pudding)",
        description: "A dense, spiced sweet-potato and banana pudding baked with coconut milk, cinnamon and rum.",
        servings: 10, prepTime: "25 min", cookTime: "1 hr 15 min",
        ingredients: [
          {amount:"1 kg", item:"sweet potato, grated"},
          {amount:"2", item:"ripe bananas, mashed"},
          {amount:"400 ml", item:"coconut milk"},
          {amount:"150g", item:"brown sugar"},
          {amount:"60g", item:"butter, melted"},
          {amount:"1 tsp", item:"ground cinnamon"},
          {amount:"½ tsp", item:"grated nutmeg"},
          {amount:"2 tbsp", item:"dark rum"},
          {amount:"3 tbsp", item:"raisins"}
        ],
        instructions: [
          "Mix grated sweet potato with mashed banana.",
          "Stir in coconut milk, sugar, melted butter, spices, rum and raisins.",
          "Pour into a buttered baking dish.",
          "Bake at 180°C for about 1 hour 15 minutes until set and caramelised on top.",
          "Cool until firm enough to slice.",
          "Serve in squares, warm or at room temperature."
        ],
        youtube: { search: "Pen Patat Haitian sweet potato pudding recipe", url: "https://www.youtube.com/results?search_query=Pen+Patat+Haitian+sweet+potato+pudding+recipe" }
      }
    }
  }
];
