const COUNTRIES_UEFA = [
  {
    id: "germany", name: "Germany", flag: "🇩🇪", confederation: "UEFA",
    intro: "German cuisine is hearty and comforting — slow-braised meats, warming soups, and legendary cakes.",
    menu: {
      starter: {
        name: "Linsensuppe (Lentil Soup)",
        description: "A smoky, warming lentil soup with root vegetables and frankfurter sausage.",
        servings: 4, prepTime: "15 min", cookTime: "45 min",
        ingredients: [
          {amount:"300g", item:"green or brown lentils, rinsed"},
          {amount:"2", item:"frankfurter sausages, sliced"},
          {amount:"2", item:"carrots, diced"},
          {amount:"2", item:"celery stalks, diced"},
          {amount:"1", item:"large onion, diced"},
          {amount:"2 cloves", item:"garlic, minced"},
          {amount:"1.2 L", item:"vegetable stock"},
          {amount:"2 tbsp", item:"white wine vinegar"},
          {amount:"1 tsp", item:"marjoram"},
          {amount:"2 tbsp", item:"olive oil"},
          {amount:"to taste", item:"salt and black pepper"}
        ],
        instructions: [
          "Heat olive oil in a large pot over medium heat. Sauté onion, carrots and celery for 5 minutes until softened.",
          "Add garlic and marjoram, cook 1 minute until fragrant.",
          "Add lentils and stock. Bring to a boil, then reduce heat and simmer 30 minutes until lentils are tender.",
          "Stir in sliced frankfurters and simmer 5 more minutes.",
          "Add white wine vinegar, season with salt and pepper.",
          "Serve hot with crusty bread."
        ],
        youtube: { search: "German Linsensuppe lentil soup recipe", url: "https://www.youtube.com/results?search_query=German+Linsensuppe+lentil+soup+recipe" }
      },
      main: {
        name: "Sauerbraten with Red Cabbage & Potato Dumplings",
        description: "Germany's iconic pot roast — beef marinated in vinegar and spices for days, braised until tender.",
        servings: 6, prepTime: "30 min + 3 days marinating", cookTime: "3 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"beef rump or chuck roast"},
          {amount:"500 ml", item:"red wine vinegar"},
          {amount:"500 ml", item:"water"},
          {amount:"2", item:"onions, sliced"},
          {amount:"10", item:"black peppercorns"},
          {amount:"4", item:"bay leaves"},
          {amount:"6", item:"cloves"},
          {amount:"2 tbsp", item:"sugar"},
          {amount:"100g", item:"gingersnap cookies, crushed"},
          {amount:"3 tbsp", item:"vegetable oil"},
          {amount:"500g", item:"red cabbage, shredded"},
          {amount:"1 kg", item:"floury potatoes (for dumplings)"},
          {amount:"1 egg", item:"plus extra flour for dumplings"}
        ],
        instructions: [
          "Combine vinegar, water, onions, peppercorns, bay leaves, cloves and sugar in a bowl. Submerge beef, cover and refrigerate 3 days, turning daily.",
          "Remove beef, pat dry. Strain and reserve marinade.",
          "Heat oil in a Dutch oven, brown beef on all sides over high heat. Add reserved marinade, bring to a boil.",
          "Reduce heat, cover and braise for 2.5–3 hours until very tender.",
          "Stir crushed gingersnaps into the braising liquid to thicken the gravy. Simmer 10 minutes.",
          "For red cabbage: simmer shredded cabbage with butter, apple, cloves and a splash of vinegar for 40 minutes.",
          "For dumplings: boil then rice potatoes. Mix with flour, egg and salt, form balls and simmer in salted water 15 minutes.",
          "Slice beef, serve with gravy, red cabbage and dumplings."
        ],
        youtube: { search: "authentic Sauerbraten recipe German pot roast", url: "https://www.youtube.com/results?search_query=authentic+Sauerbraten+recipe+German+pot+roast" }
      },
      dessert: {
        name: "Schwarzwälder Kirschtorte (Black Forest Cake)",
        description: "Layers of chocolate sponge, Kirsch-soaked cherries and whipped cream — a German classic.",
        servings: 10, prepTime: "45 min", cookTime: "35 min",
        ingredients: [
          {amount:"200g", item:"dark chocolate (70%)"},
          {amount:"6", item:"eggs"},
          {amount:"200g", item:"caster sugar"},
          {amount:"100g", item:"plain flour"},
          {amount:"50g", item:"cocoa powder"},
          {amount:"600 ml", item:"double cream"},
          {amount:"400g", item:"morello cherries (drained, juice reserved)"},
          {amount:"4 tbsp", item:"Kirsch (cherry schnapps)"},
          {amount:"50g", item:"dark chocolate shavings"}
        ],
        instructions: [
          "Preheat oven to 180°C. Whisk eggs and sugar for 8 minutes until pale and thick.",
          "Fold in sifted flour and cocoa powder gently. Pour into two greased 22 cm tins and bake 25 minutes.",
          "Cool completely. Drizzle each sponge with Kirsch mixed with cherry juice.",
          "Whip cream to stiff peaks. Fold half the cherries into one third of the cream.",
          "Place one sponge on a board, spread with the cherry cream, top with the second sponge.",
          "Cover the whole cake with remaining whipped cream. Press chocolate shavings onto the sides.",
          "Decorate top with whole cherries and extra chocolate shavings. Chill 2 hours before serving."
        ],
        youtube: { search: "Black Forest Cake Schwarzwälder Kirschtorte recipe", url: "https://www.youtube.com/results?search_query=Black+Forest+Cake+Schwarzwälder+Kirschtorte+recipe" }
      }
    }
  },

  {
    id: "france", name: "France", flag: "🇫🇷", confederation: "UEFA",
    intro: "French cuisine is the foundation of modern cooking — refined technique, rich sauces and iconic bistro classics.",
    menu: {
      starter: {
        name: "Soupe à l'Oignon (French Onion Soup)",
        description: "Slowly caramelised onions in beef broth, topped with a crouton and melted Gruyère.",
        servings: 4, prepTime: "10 min", cookTime: "1 hr",
        ingredients: [
          {amount:"1 kg", item:"white onions, thinly sliced"},
          {amount:"60g", item:"unsalted butter"},
          {amount:"1 tbsp", item:"olive oil"},
          {amount:"1 tsp", item:"sugar"},
          {amount:"3 cloves", item:"garlic, minced"},
          {amount:"150 ml", item:"dry white wine"},
          {amount:"1.2 L", item:"good beef stock"},
          {amount:"4 slices", item:"baguette, toasted"},
          {amount:"150g", item:"Gruyère, grated"},
          {amount:"2", item:"bay leaves"},
          {amount:"1 tsp", item:"fresh thyme"}
        ],
        instructions: [
          "Melt butter with oil in a heavy pot over low heat. Add onions, bay leaves and thyme.",
          "Cook on low for 40 minutes, stirring every 5 minutes, until deep golden-brown and caramelised. Add sugar halfway through.",
          "Add garlic, cook 1 minute. Pour in wine and bubble for 3 minutes.",
          "Add beef stock, season and simmer 20 minutes.",
          "Ladle into oven-safe bowls. Place a baguette slice on top, pile with Gruyère.",
          "Grill under a broiler until cheese is bubbling and golden. Serve immediately."
        ],
        youtube: { search: "classic French onion soup recipe Julia Child", url: "https://www.youtube.com/results?search_query=classic+French+onion+soup+recipe" }
      },
      main: {
        name: "Boeuf Bourguignon",
        description: "Beef slowly braised in Burgundy wine with mushrooms, pearl onions and lardons.",
        servings: 6, prepTime: "30 min", cookTime: "3 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"beef chuck, cut into 5 cm cubes"},
          {amount:"750 ml", item:"Burgundy or Pinot Noir wine"},
          {amount:"200g", item:"lardons or smoked bacon"},
          {amount:"250g", item:"button mushrooms, quartered"},
          {amount:"200g", item:"pearl onions, peeled"},
          {amount:"3", item:"carrots, sliced"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"2 tbsp", item:"tomato paste"},
          {amount:"500 ml", item:"beef stock"},
          {amount:"3 tbsp", item:"plain flour"},
          {amount:"bouquet garni", item:"(bay, thyme, parsley)"},
          {amount:"3 tbsp", item:"butter"}
        ],
        instructions: [
          "Marinate beef in wine overnight if possible. Pat beef dry, reserving wine.",
          "Fry lardons in a Dutch oven. Remove, brown beef in batches in the fat. Set aside.",
          "Cook carrots, garlic and pearl onions 5 minutes. Stir in flour and tomato paste.",
          "Return beef and lardons. Pour in reserved wine and stock. Add bouquet garni.",
          "Bring to a boil, cover and braise in 160°C oven for 2.5 hours.",
          "Sauté mushrooms in butter until golden. Add to pot for final 30 minutes.",
          "Remove bouquet garni. Skim excess fat. Adjust seasoning and serve with mashed potato."
        ],
        youtube: { search: "Boeuf Bourguignon authentic French recipe", url: "https://www.youtube.com/results?search_query=Boeuf+Bourguignon+authentic+French+recipe" }
      },
      dessert: {
        name: "Crème Brûlée",
        description: "Silky vanilla custard beneath a crisp, caramelised sugar crust.",
        servings: 6, prepTime: "15 min", cookTime: "45 min + 4 hrs chilling",
        ingredients: [
          {amount:"500 ml", item:"double cream"},
          {amount:"1", item:"vanilla pod, split and scraped"},
          {amount:"6", item:"egg yolks"},
          {amount:"100g", item:"caster sugar"},
          {amount:"6 tbsp", item:"demerara sugar (for brûlée)"}
        ],
        instructions: [
          "Preheat oven to 150°C. Heat cream with vanilla pod and seeds until just simmering. Remove pod.",
          "Whisk egg yolks and caster sugar until pale. Pour warm cream over slowly, whisking constantly.",
          "Strain into a jug. Pour into 6 ramekins set in a baking tray. Fill tray with boiling water to halfway.",
          "Bake 35–40 minutes until just set with a slight wobble. Cool, then refrigerate at least 4 hours.",
          "Sprinkle 1 tbsp demerara sugar evenly over each. Use a blowtorch to caramelise until amber and crackly.",
          "Serve immediately."
        ],
        youtube: { search: "perfect Crème Brûlée recipe French classic", url: "https://www.youtube.com/results?search_query=perfect+Creme+Brulee+recipe" }
      }
    }
  },

  {
    id: "spain", name: "Spain", flag: "🇪🇸", confederation: "UEFA",
    intro: "Spanish food celebrates bold flavours, fresh produce and the joy of sharing — from cold gazpacho to slow-cooked rice.",
    menu: {
      starter: {
        name: "Gazpacho Andaluz",
        description: "Ice-cold blended tomato soup with peppers, cucumber and a drizzle of olive oil.",
        servings: 4, prepTime: "20 min + 2 hrs chilling", cookTime: "0 min",
        ingredients: [
          {amount:"1 kg", item:"ripe tomatoes, roughly chopped"},
          {amount:"1", item:"red pepper, deseeded"},
          {amount:"½", item:"cucumber, peeled"},
          {amount:"2 cloves", item:"garlic"},
          {amount:"50g", item:"stale white bread, crusts removed"},
          {amount:"4 tbsp", item:"extra-virgin olive oil"},
          {amount:"2 tbsp", item:"sherry vinegar"},
          {amount:"to taste", item:"salt"},
          {amount:"to garnish", item:"diced cucumber, croutons, olive oil"}
        ],
        instructions: [
          "Soak bread in cold water for 5 minutes, then squeeze out excess.",
          "Blend tomatoes, pepper, cucumber, garlic and soaked bread until completely smooth.",
          "With blender running, slowly drizzle in olive oil to emulsify.",
          "Add sherry vinegar and salt to taste. Blend again.",
          "Pass through a fine sieve for a very smooth result. Chill at least 2 hours.",
          "Serve in chilled bowls, garnished with diced cucumber, croutons and a drizzle of olive oil."
        ],
        youtube: { search: "authentic gazpacho recipe Spain Andalucia", url: "https://www.youtube.com/results?search_query=authentic+gazpacho+recipe+Spain" }
      },
      main: {
        name: "Paella Valenciana",
        description: "Spain's most famous dish — saffron rice with chicken, rabbit and green beans.",
        servings: 6, prepTime: "20 min", cookTime: "45 min",
        ingredients: [
          {amount:"500g", item:"paella rice (Bomba or Calasparra)"},
          {amount:"400g", item:"chicken thighs, bone-in, cut into pieces"},
          {amount:"300g", item:"rabbit, cut into pieces"},
          {amount:"200g", item:"green beans, trimmed"},
          {amount:"200g", item:"large butter beans (garrofó)"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"1.5 L", item:"hot chicken stock"},
          {amount:"1 tsp", item:"sweet smoked paprika"},
          {amount:"generous pinch", item:"saffron threads, soaked in hot water"},
          {amount:"4 tbsp", item:"olive oil"},
          {amount:"4 cloves", item:"garlic, minced"},
          {amount:"to taste", item:"salt"}
        ],
        instructions: [
          "Heat olive oil in a large paella pan. Season and brown chicken and rabbit all over. Push to sides.",
          "Fry green beans in the centre for 3 minutes. Add garlic and paprika, stir briefly.",
          "Add crushed tomatoes and cook down 5 minutes until thick.",
          "Spread rice evenly across the pan. Pour in hot stock and saffron water. Do not stir again.",
          "Cook on high heat 10 minutes, then reduce to medium-low for 10 minutes.",
          "Raise heat for the final 2 minutes to create socarrat (crispy bottom). Listen for a gentle crackle.",
          "Remove from heat, cover with foil and rest 5 minutes. Serve with lemon wedges."
        ],
        youtube: { search: "authentic Paella Valenciana recipe Spain", url: "https://www.youtube.com/results?search_query=authentic+Paella+Valenciana+recipe" }
      },
      dessert: {
        name: "Churros con Chocolate",
        description: "Golden fried dough sticks served with thick hot chocolate for dipping.",
        servings: 4, prepTime: "10 min", cookTime: "20 min",
        ingredients: [
          {amount:"250g", item:"plain flour"},
          {amount:"300 ml", item:"boiling water"},
          {amount:"½ tsp", item:"salt"},
          {amount:"oil", item:"for deep frying"},
          {amount:"cinnamon sugar", item:"for dusting"},
          {amount:"200g", item:"dark chocolate, chopped"},
          {amount:"300 ml", item:"full-fat milk"},
          {amount:"2 tsp", item:"cornflour"},
          {amount:"2 tbsp", item:"sugar"}
        ],
        instructions: [
          "Mix flour, salt and boiling water to a smooth dough. Rest 5 minutes.",
          "Heat oil to 180°C. Fill a piping bag with a star nozzle with the dough.",
          "Pipe 15 cm lengths into the oil, snipping with scissors. Fry 3 minutes per side until golden.",
          "Drain on paper towels. Dust generously with cinnamon sugar.",
          "For chocolate: whisk cornflour into cold milk, add chocolate and sugar, heat and stir until thick.",
          "Serve churros immediately with hot chocolate sauce."
        ],
        youtube: { search: "churros con chocolate recipe Spanish", url: "https://www.youtube.com/results?search_query=churros+con+chocolate+recipe+Spanish" }
      }
    }
  },

  {
    id: "england", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", confederation: "UEFA",
    intro: "English cuisine balances pub classics with Sunday roast traditions and indulgent steamed puddings.",
    menu: {
      starter: {
        name: "Prawn Cocktail",
        description: "Chilled North Atlantic prawns in Marie Rose sauce on crisp lettuce — the classic British starter.",
        servings: 4, prepTime: "15 min", cookTime: "0 min",
        ingredients: [
          {amount:"400g", item:"cooked peeled prawns"},
          {amount:"4 tbsp", item:"mayonnaise"},
          {amount:"2 tbsp", item:"tomato ketchup"},
          {amount:"1 tsp", item:"Worcestershire sauce"},
          {amount:"few drops", item:"Tabasco sauce"},
          {amount:"1 tsp", item:"lemon juice"},
          {amount:"1", item:"iceberg lettuce, shredded"},
          {amount:"1", item:"avocado, sliced"},
          {amount:"to garnish", item:"paprika, lemon wedges, brown bread"}
        ],
        instructions: [
          "Mix mayonnaise, ketchup, Worcestershire sauce, Tabasco and lemon juice to make Marie Rose sauce.",
          "Fold most of the prawns into the sauce, reserving a few for garnish.",
          "Arrange shredded lettuce and avocado slices in cocktail glasses or bowls.",
          "Spoon prawn mixture on top.",
          "Garnish with reserved prawns, a sprinkle of paprika and lemon wedge.",
          "Serve with buttered brown bread and extra lemon."
        ],
        youtube: { search: "prawn cocktail recipe classic British starter", url: "https://www.youtube.com/results?search_query=prawn+cocktail+recipe+classic+British" }
      },
      main: {
        name: "Roast Beef with Yorkshire Pudding & Gravy",
        description: "A proper Sunday roast — sirloin beef with crispy Yorkshires, roast potatoes and rich gravy.",
        servings: 6, prepTime: "30 min", cookTime: "1.5 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"beef sirloin or rib-eye joint"},
          {amount:"2 tbsp", item:"English mustard"},
          {amount:"1 kg", item:"floury potatoes, peeled and parboiled"},
          {amount:"140g", item:"plain flour"},
          {amount:"4", item:"eggs"},
          {amount:"200 ml", item:"whole milk"},
          {amount:"4 tbsp", item:"goose fat or lard"},
          {amount:"500 ml", item:"beef stock"},
          {amount:"150 ml", item:"red wine"},
          {amount:"2 tbsp", item:"plain flour (for gravy)"},
          {amount:"to taste", item:"salt, pepper, horseradish sauce to serve"}
        ],
        instructions: [
          "Preheat oven to 220°C. Rub beef with mustard, salt and pepper. Roast 20 minutes, then reduce to 180°C.",
          "Roast 15 min per 500g for medium-rare. Rest 20 minutes before carving.",
          "Par-boil potatoes 10 minutes, drain and roughen edges. Toss in goose fat, roast 45 minutes until crisp.",
          "For Yorkshires: whisk flour, eggs and milk to smooth batter. Rest 30 minutes.",
          "Heat fat in a muffin tin in the oven until smoking. Pour batter in quickly. Bake 20–25 minutes — do not open the door.",
          "For gravy: pour off excess fat from beef tin. Stir flour into drippings, cook 2 minutes. Add wine and stock, scraping up the bits. Simmer and strain.",
          "Carve beef, serve with Yorkshires, roast potatoes, gravy and horseradish sauce."
        ],
        youtube: { search: "perfect roast beef Yorkshire pudding Sunday roast recipe", url: "https://www.youtube.com/results?search_query=perfect+roast+beef+Yorkshire+pudding+Sunday+roast" }
      },
      dessert: {
        name: "Sticky Toffee Pudding",
        description: "A dense steamed date sponge drenched in warm toffee sauce — Britain's most beloved dessert.",
        servings: 8, prepTime: "20 min", cookTime: "35 min",
        ingredients: [
          {amount:"175g", item:"Medjool dates, pitted and chopped"},
          {amount:"175 ml", item:"boiling water"},
          {amount:"1 tsp", item:"bicarbonate of soda"},
          {amount:"75g", item:"butter"},
          {amount:"175g", item:"dark muscovado sugar"},
          {amount:"3", item:"eggs"},
          {amount:"175g", item:"self-raising flour"},
          {amount:"200g", item:"light brown sugar (toffee sauce)"},
          {amount:"200 ml", item:"double cream (toffee sauce)"},
          {amount:"100g", item:"butter (toffee sauce)"}
        ],
        instructions: [
          "Preheat oven to 180°C. Pour boiling water over dates, add bicarbonate of soda, leave 10 minutes.",
          "Cream butter and sugar until fluffy. Beat in eggs one at a time.",
          "Fold in flour, then stir in date mixture.",
          "Pour into a greased 20×30cm tin and bake 30–35 minutes until firm.",
          "Make toffee sauce: melt butter and brown sugar together, add cream, simmer 3 minutes.",
          "Poke holes in the warm pudding. Pour half the sauce over. Return to oven 5 minutes.",
          "Serve warm with remaining sauce poured over and a scoop of vanilla ice cream."
        ],
        youtube: { search: "sticky toffee pudding recipe best British dessert", url: "https://www.youtube.com/results?search_query=sticky+toffee+pudding+recipe+British" }
      }
    }
  },

  {
    id: "portugal", name: "Portugal", flag: "🇵🇹", confederation: "UEFA",
    intro: "Portuguese cuisine is built on salt cod, seafood, olive oil and a love of custard pastries.",
    menu: {
      starter: {
        name: "Caldo Verde",
        description: "Portugal's national soup — silky potato broth with ribbons of kale and slices of chouriço.",
        servings: 4, prepTime: "15 min", cookTime: "30 min",
        ingredients: [
          {amount:"4", item:"large floury potatoes, peeled and chopped"},
          {amount:"1", item:"onion, diced"},
          {amount:"3 cloves", item:"garlic, sliced"},
          {amount:"1.2 L", item:"water or light stock"},
          {amount:"200g", item:"curly kale or cavolo nero, very finely sliced"},
          {amount:"150g", item:"chouriço, sliced into rounds"},
          {amount:"3 tbsp", item:"olive oil"},
          {amount:"to taste", item:"salt and pepper"}
        ],
        instructions: [
          "Sweat onion and garlic in olive oil 5 minutes. Add potatoes and cover with water or stock.",
          "Season with salt, bring to a boil and cook 20 minutes until potatoes are very soft.",
          "Blend (or mash) until silky smooth. Adjust thickness with more water if needed.",
          "Return to heat, bring to a simmer. Add finely shredded kale and cook 4 minutes.",
          "Meanwhile, fry chouriço slices in a dry pan until lightly crisped.",
          "Ladle soup into bowls, top with chouriço slices and a drizzle of olive oil."
        ],
        youtube: { search: "Caldo Verde Portuguese soup recipe authentic", url: "https://www.youtube.com/results?search_query=Caldo+Verde+Portuguese+soup+recipe" }
      },
      main: {
        name: "Bacalhau à Brás",
        description: "Shredded salt cod scrambled with matchstick potatoes, eggs and olives — a Portuguese icon.",
        servings: 4, prepTime: "20 min + soaking overnight", cookTime: "25 min",
        ingredients: [
          {amount:"400g", item:"dried salt cod (bacalhau), soaked 48 hrs, water changed 3×"},
          {amount:"300g", item:"thin straw potatoes (chips/shoestring)"},
          {amount:"2", item:"large onions, thinly sliced"},
          {amount:"3 cloves", item:"garlic, sliced"},
          {amount:"6", item:"eggs, lightly beaten"},
          {amount:"80g", item:"black olives"},
          {amount:"4 tbsp", item:"olive oil"},
          {amount:"large bunch", item:"fresh parsley, chopped"},
          {amount:"to taste", item:"white pepper"}
        ],
        instructions: [
          "Simmer soaked cod in water 15 minutes. Flake into small pieces, removing all bones and skin.",
          "Fry straw potatoes in olive oil until golden. Drain and set aside.",
          "In a large frying pan, cook onions in olive oil over medium heat until golden, about 12 minutes.",
          "Add garlic and cod, cook 3 minutes, stirring.",
          "Add potatoes, pour in beaten eggs. Stir gently over low heat until eggs are just set but still creamy.",
          "Season with white pepper. Garnish with olives and parsley. Serve immediately."
        ],
        youtube: { search: "Bacalhau à Brás recipe Portuguese cod recipe", url: "https://www.youtube.com/results?search_query=Bacalhau+a+Bras+recipe+Portuguese" }
      },
      dessert: {
        name: "Pastéis de Nata (Custard Tarts)",
        description: "Crisp flaky pastry filled with creamy egg custard, scorched on top — the soul of Lisbon.",
        servings: 12, prepTime: "30 min", cookTime: "20 min",
        ingredients: [
          {amount:"320g", item:"ready-rolled puff pastry"},
          {amount:"250 ml", item:"whole milk"},
          {amount:"200g", item:"caster sugar"},
          {amount:"100 ml", item:"water"},
          {amount:"6", item:"egg yolks"},
          {amount:"30g", item:"plain flour"},
          {amount:"30g", item:"cornflour"},
          {amount:"1", item:"cinnamon stick"},
          {amount:"1", item:"strip lemon zest"},
          {amount:"to serve", item:"cinnamon and icing sugar"}
        ],
        instructions: [
          "Preheat oven to its highest setting (240–250°C). Grease a 12-hole muffin tin.",
          "Boil sugar and water with cinnamon and lemon zest 3 minutes. Cool slightly, remove spices.",
          "Whisk flour, cornflour and milk until smooth. Heat gently, stirring, until thickened.",
          "Remove from heat. Whisk in syrup, then egg yolks. Strain through a sieve.",
          "Cut pastry into rounds, press into muffin holes, forming a cup shape.",
          "Fill three-quarters full with custard. Bake 15–18 minutes until custard is scorched in patches.",
          "Cool briefly, dust with cinnamon and icing sugar. Eat warm."
        ],
        youtube: { search: "Pastéis de Nata recipe Portuguese custard tarts", url: "https://www.youtube.com/results?search_query=Pasteis+de+Nata+recipe+Portuguese+custard+tarts" }
      }
    }
  },

  {
    id: "netherlands", name: "Netherlands", flag: "🇳🇱", confederation: "UEFA",
    intro: "Dutch cooking is honest and filling — split-pea soups, potato-based mashes and buttery stroopwafels.",
    menu: {
      starter: {
        name: "Erwtensoep (Split Pea Soup)",
        description: "The ultimate Dutch winter soup — thick, smoky and filling, served with rye bread and rookworst.",
        servings: 6, prepTime: "15 min", cookTime: "1.5 hrs",
        ingredients: [
          {amount:"500g", item:"green split peas, rinsed"},
          {amount:"1", item:"smoked ham hock"},
          {amount:"2 L", item:"water"},
          {amount:"3", item:"celery stalks with leaves, chopped"},
          {amount:"2", item:"leeks, sliced"},
          {amount:"2", item:"medium potatoes, diced"},
          {amount:"2", item:"carrots, diced"},
          {amount:"1", item:"celeriac (200g), diced"},
          {amount:"1", item:"rookworst (smoked sausage), sliced"},
          {amount:"to taste", item:"salt and pepper"},
          {amount:"to serve", item:"rye bread with butter"}
        ],
        instructions: [
          "Place split peas, ham hock and water in a large pot. Bring to a boil, skim foam, then simmer 1 hour.",
          "Remove ham hock, shred the meat. Discard bone.",
          "Add all vegetables to the pot, simmer 30 more minutes until very soft.",
          "Blend about a third of the soup to give it a thick, creamy consistency.",
          "Return shredded ham and sliced rookworst to the pot. Simmer 5 minutes.",
          "Season generously. Serve very thick (it should set overnight) with buttered rye bread."
        ],
        youtube: { search: "Erwtensoep Dutch split pea soup recipe", url: "https://www.youtube.com/results?search_query=Erwtensoep+Dutch+split+pea+soup+recipe" }
      },
      main: {
        name: "Stamppot Boerenkool met Rookworst",
        description: "Mashed potato and curly kale with smoked sausage — Dutch soul food at its finest.",
        servings: 4, prepTime: "10 min", cookTime: "30 min",
        ingredients: [
          {amount:"1 kg", item:"floury potatoes, peeled and cubed"},
          {amount:"500g", item:"curly kale, tough stems removed, chopped"},
          {amount:"2", item:"rookworst (Dutch smoked sausage)"},
          {amount:"100 ml", item:"warm whole milk"},
          {amount:"50g", item:"butter"},
          {amount:"100g", item:"bacon lardons"},
          {amount:"to taste", item:"salt, pepper and nutmeg"},
          {amount:"to serve", item:"mustard"}
        ],
        instructions: [
          "Boil potatoes in salted water 20 minutes. Add kale on top for last 10 minutes.",
          "Meanwhile, heat rookworst in simmering water 10 minutes.",
          "Fry lardons until crispy.",
          "Drain potatoes and kale thoroughly. Mash together with warm milk and butter.",
          "Season with salt, pepper and freshly grated nutmeg.",
          "Serve stamppot in deep plates with rookworst alongside and crispy bacon on top. Pass mustard at the table."
        ],
        youtube: { search: "Stamppot Boerenkool Dutch recipe traditional", url: "https://www.youtube.com/results?search_query=Stamppot+Boerenkool+Dutch+recipe" }
      },
      dessert: {
        name: "Stroopwafel Ice Cream Sandwiches",
        description: "Caramel-filled Dutch waffle cookies pressed around vanilla ice cream — simple and heavenly.",
        servings: 4, prepTime: "15 min", cookTime: "10 min",
        ingredients: [
          {amount:"8", item:"store-bought stroopwafels"},
          {amount:"500 ml", item:"good vanilla ice cream"},
          {amount:"100g", item:"dark chocolate, melted (optional)"},
          {amount:"50g", item:"toasted flaked almonds (optional)"}
        ],
        instructions: [
          "Soften ice cream at room temperature for 5 minutes until scoopable but not melted.",
          "Place a generous scoop of ice cream on a stroopwafel.",
          "Press a second stroopwafel on top gently to form a sandwich.",
          "Optionally dip edges in melted chocolate and roll in flaked almonds.",
          "Serve immediately or wrap and freeze up to 1 hour.",
          "For the real Dutch experience, first warm the stroopwafel over a cup of hot coffee — the caramel centre melts beautifully."
        ],
        youtube: { search: "homemade stroopwafels recipe Dutch caramel waffle", url: "https://www.youtube.com/results?search_query=homemade+stroopwafels+recipe+Dutch" }
      }
    }
  },

  {
    id: "belgium", name: "Belgium", flag: "🇧🇪", confederation: "UEFA",
    intro: "Belgium punches above its weight in world cuisine — famous for mussels, beer-braised stews, fries and waffles.",
    menu: {
      starter: {
        name: "Moules-Frites",
        description: "Steamed mussels in white wine, shallots and cream with crispy Belgian frites.",
        servings: 2, prepTime: "20 min", cookTime: "15 min",
        ingredients: [
          {amount:"2 kg", item:"fresh mussels, cleaned and debearded"},
          {amount:"4", item:"shallots, finely sliced"},
          {amount:"3 cloves", item:"garlic, minced"},
          {amount:"200 ml", item:"dry white wine"},
          {amount:"100 ml", item:"double cream"},
          {amount:"50g", item:"butter"},
          {amount:"large handful", item:"flat-leaf parsley, chopped"},
          {amount:"for frites", item:"500g Maris Piper potatoes, cut into thick sticks"},
          {amount:"oil", item:"for deep frying"}
        ],
        instructions: [
          "Cut potatoes, par-fry at 150°C for 7 minutes. Drain and cool. (This is the Belgian double-fry secret.)",
          "In a very large pot, melt butter over high heat. Add shallots and garlic, cook 2 minutes.",
          "Add white wine, bring to a boil, then add all mussels at once. Cover tightly.",
          "Cook 4–5 minutes, shaking occasionally, until all shells open. Discard any closed mussels.",
          "Stir in cream and half the parsley.",
          "While mussels cook, fry chips a second time at 180°C for 3–4 minutes until golden and crisp.",
          "Serve mussels in a deep bowl with frites alongside. Garnish with remaining parsley."
        ],
        youtube: { search: "Moules Frites Belgian recipe classic", url: "https://www.youtube.com/results?search_query=Moules+Frites+Belgian+recipe+classic" }
      },
      main: {
        name: "Carbonnade Flamande (Flemish Beef Beer Stew)",
        description: "Belgian beef braised slowly in dark ale with onions, mustard and a touch of brown sugar.",
        servings: 6, prepTime: "20 min", cookTime: "2.5 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"beef chuck, cut into thick slices"},
          {amount:"4", item:"large onions, sliced"},
          {amount:"500 ml", item:"Belgian dark ale (Dubbel or similar)"},
          {amount:"250 ml", item:"beef stock"},
          {amount:"2 tbsp", item:"Dijon mustard"},
          {amount:"2 tbsp", item:"brown sugar"},
          {amount:"3", item:"bay leaves"},
          {amount:"4", item:"fresh thyme sprigs"},
          {amount:"2 slices", item:"thick bread spread with mustard"},
          {amount:"3 tbsp", item:"butter"},
          {amount:"to taste", item:"salt and pepper"}
        ],
        instructions: [
          "Season beef, brown in batches in butter in a Dutch oven. Set aside.",
          "Cook onions in the same pot over low heat 20 minutes until golden.",
          "Return beef. Add ale, stock, bay, thyme and sugar.",
          "Place mustard-spread bread slices on top — they will dissolve into the sauce as a thickener.",
          "Cover and cook in a 160°C oven for 2–2.5 hours until beef is very tender.",
          "Discard bay and thyme. Season and adjust thickness — add stock if too thick.",
          "Serve with thick-cut frites or crusty bread."
        ],
        youtube: { search: "Carbonnade Flamande Belgian beef beer stew recipe", url: "https://www.youtube.com/results?search_query=Carbonnade+Flamande+Belgian+beef+stew+recipe" }
      },
      dessert: {
        name: "Belgian Liège Waffles",
        description: "Yeast-leavened waffles studded with pearl sugar that caramelises into crispy amber pockets.",
        servings: 8, prepTime: "20 min + 1 hr proving", cookTime: "20 min",
        ingredients: [
          {amount:"500g", item:"plain flour"},
          {amount:"7g", item:"instant yeast"},
          {amount:"250g", item:"unsalted butter, softened"},
          {amount:"2", item:"eggs"},
          {amount:"100 ml", item:"warm milk"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"1 tsp", item:"salt"},
          {amount:"200g", item:"Belgian pearl sugar (or crushed sugar cubes)"}
        ],
        instructions: [
          "Combine flour, yeast, salt, eggs, milk and vanilla. Knead 5 minutes.",
          "Add softened butter a little at a time, kneading until smooth and elastic.",
          "Cover and prove 1 hour at room temperature.",
          "Knock back dough and fold in pearl sugar.",
          "Divide into 8 portions. Cook in a waffle iron preheated and lightly greased.",
          "Cook 3–4 minutes until golden. The pearl sugar will caramelise and create a crispy crust.",
          "Serve immediately — optionally with whipped cream or fresh strawberries."
        ],
        youtube: { search: "Belgian Liège waffles pearl sugar authentic recipe", url: "https://www.youtube.com/results?search_query=Belgian+Liege+waffles+pearl+sugar+recipe" }
      }
    }
  },

  {
    id: "croatia", name: "Croatia", flag: "🇭🇷", confederation: "UEFA",
    intro: "Croatian cuisine blends Adriatic seafood with Balkan grilling traditions and Austrian-influenced pastries.",
    menu: {
      starter: {
        name: "Brudet (Dalmatian Fish Stew)",
        description: "A rustic Adriatic fisherman's stew with mixed fish in a rich tomato and wine broth.",
        servings: 4, prepTime: "20 min", cookTime: "40 min",
        ingredients: [
          {amount:"1 kg", item:"mixed fish fillets (sea bass, bream, monkfish), cut in pieces"},
          {amount:"400g", item:"crushed tomatoes"},
          {amount:"200 ml", item:"dry white wine"},
          {amount:"3", item:"onions, thinly sliced"},
          {amount:"4 cloves", item:"garlic, sliced"},
          {amount:"4 tbsp", item:"olive oil"},
          {amount:"1 tsp", item:"red chilli flakes"},
          {amount:"handful", item:"flat-leaf parsley"},
          {amount:"to serve", item:"polenta or bread"}
        ],
        instructions: [
          "Cook onions in olive oil over low heat for 15 minutes until golden.",
          "Add garlic and chilli flakes, cook 2 minutes.",
          "Add wine, let it reduce by half. Add crushed tomatoes and 200 ml water.",
          "Simmer the sauce 15 minutes until rich.",
          "Add fish pieces. Do not stir — just shake the pan gently to submerge.",
          "Cook 12–15 minutes until fish is just cooked through. Scatter parsley.",
          "Serve in deep bowls with grilled polenta or crusty bread."
        ],
        youtube: { search: "Brudet Dalmatian fish stew recipe Croatian", url: "https://www.youtube.com/results?search_query=Brudet+Dalmatian+fish+stew+Croatian+recipe" }
      },
      main: {
        name: "Peka (Lamb Under the Bell)",
        description: "Lamb and vegetables slowly roasted under a heavy iron bell covered in embers — Croatia's most ceremonial dish.",
        servings: 6, prepTime: "30 min", cookTime: "3 hrs",
        ingredients: [
          {amount:"1.5 kg", item:"bone-in lamb shoulder, cut in large pieces"},
          {amount:"800g", item:"potatoes, quartered"},
          {amount:"3", item:"carrots, chunked"},
          {amount:"2", item:"red peppers, chunked"},
          {amount:"1", item:"head of garlic, halved"},
          {amount:"2", item:"onions, wedged"},
          {amount:"200 ml", item:"white wine"},
          {amount:"4 tbsp", item:"olive oil"},
          {amount:"2 sprigs", item:"rosemary"},
          {amount:"to taste", item:"salt, pepper, sweet paprika"}
        ],
        instructions: [
          "Preheat oven to 200°C (or prepare wood embers if using a traditional peka).",
          "Toss all vegetables with olive oil, wine, garlic, rosemary, salt and paprika in a large metal dish.",
          "Nestle lamb pieces on top. Drizzle with more olive oil and season.",
          "Cover tightly with foil (or a peka bell). Roast at 200°C for 1 hour.",
          "Remove cover, stir vegetables gently, return uncovered for another 45–60 minutes.",
          "Lamb should be falling off the bone and vegetables caramelised.",
          "Serve straight from the dish with crusty bread to mop up the juices."
        ],
        youtube: { search: "Peka lamb Croatian recipe traditional", url: "https://www.youtube.com/results?search_query=Peka+lamb+Croatian+traditional+recipe" }
      },
      dessert: {
        name: "Kremšnita (Croatian Custard Slice)",
        description: "Two layers of puff pastry sandwiching a thick vanilla-egg custard cream — a Croatian café staple.",
        servings: 12, prepTime: "30 min + 4 hrs setting", cookTime: "30 min",
        ingredients: [
          {amount:"500g", item:"ready-rolled puff pastry (2 sheets)"},
          {amount:"1 L", item:"whole milk"},
          {amount:"8", item:"egg yolks"},
          {amount:"200g", item:"caster sugar"},
          {amount:"80g", item:"cornflour"},
          {amount:"1 tsp", item:"vanilla extract"},
          {amount:"300 ml", item:"double cream, whipped to stiff peaks"},
          {amount:"icing sugar", item:"for dusting"}
        ],
        instructions: [
          "Bake each puff pastry sheet at 200°C for 15 minutes until golden. Cool flat.",
          "Whisk egg yolks, sugar and cornflour until pale.",
          "Heat milk until just simmering. Slowly pour over egg mixture, whisking. Return to pan.",
          "Cook over medium heat, stirring constantly, until very thick. Add vanilla. Cool completely.",
          "Fold whipped cream into the cooled custard.",
          "Place one pastry sheet in a deep 30×20 cm tin. Spread the custard cream evenly. Top with second sheet.",
          "Refrigerate 4 hours until set. Dust with icing sugar and cut into squares with a sharp wet knife."
        ],
        youtube: { search: "Kremšnita Croatian custard slice recipe", url: "https://www.youtube.com/results?search_query=Kremsnita+Croatian+custard+slice+recipe" }
      }
    }
  },

  {
    id: "turkey", name: "Turkey", flag: "🇹🇷", confederation: "UEFA",
    intro: "Turkish cuisine is one of the world's great culinary traditions — grilled meats, fragrant spiced soups and the iconic baklava.",
    menu: {
      starter: {
        name: "Mercimek Çorbası (Red Lentil Soup)",
        description: "Silky red lentil soup seasoned with cumin and paprika, finished with sizzling paprika butter.",
        servings: 4, prepTime: "10 min", cookTime: "30 min",
        ingredients: [
          {amount:"300g", item:"red lentils, rinsed"},
          {amount:"1", item:"large onion, diced"},
          {amount:"2", item:"carrots, diced"},
          {amount:"2 cloves", item:"garlic, minced"},
          {amount:"1.2 L", item:"chicken or vegetable stock"},
          {amount:"2 tsp", item:"ground cumin"},
          {amount:"1 tsp", item:"sweet paprika"},
          {amount:"½ tsp", item:"dried mint"},
          {amount:"3 tbsp", item:"olive oil"},
          {amount:"lemon wedges", item:"to serve"},
          {amount:"2 tbsp", item:"butter + 1 tsp paprika (for drizzle)"}
        ],
        instructions: [
          "Sauté onion and carrots in olive oil 8 minutes. Add garlic, cumin and paprika, cook 1 minute.",
          "Add lentils and stock. Bring to a boil, skim, then simmer 25 minutes until lentils collapse.",
          "Blend until completely smooth. Add water if too thick.",
          "Season with salt. Return to gentle heat.",
          "Melt butter in a small pan until foaming. Add paprika, stir 30 seconds.",
          "Ladle soup into bowls, drizzle with paprika butter, scatter dried mint, serve with lemon."
        ],
        youtube: { search: "Mercimek Çorbası Turkish red lentil soup recipe", url: "https://www.youtube.com/results?search_query=Mercimek+Corbasi+Turkish+lentil+soup" }
      },
      main: {
        name: "Adana Kebabı",
        description: "Hand-minced spiced lamb kebabs on flat skewers, chargrilled and served with flatbread and sumac onions.",
        servings: 4, prepTime: "20 min + 1 hr chilling", cookTime: "15 min",
        ingredients: [
          {amount:"800g", item:"lamb mince (20% fat)"},
          {amount:"100g", item:"lamb tail fat or suet, finely chopped"},
          {amount:"2", item:"long red chillies, finely chopped"},
          {amount:"1 tsp", item:"dried chilli flakes"},
          {amount:"1 tsp", item:"ground cumin"},
          {amount:"1 tsp", item:"sweet paprika"},
          {amount:"2 tsp", item:"salt"},
          {amount:"2", item:"red onions (1 for kebab, 1 sliced with sumac for serving)"},
          {amount:"handful", item:"flat-leaf parsley"},
          {amount:"4", item:"flatbreads or pide, to serve"},
          {amount:"1 tbsp", item:"sumac"}
        ],
        instructions: [
          "Mix lamb mince, fat, chillies, spices, salt and grated onion by hand until a cohesive, sticky paste forms.",
          "Refrigerate 1 hour. This is essential for the kebab to hold on the skewer.",
          "Divide into 8 portions. With wet hands, mould each along a wide flat metal skewer.",
          "Grill over hot charcoal (or a hot griddle pan) 4–5 minutes per side until charred and cooked through.",
          "Meanwhile, toss sliced red onion with sumac, parsley and a pinch of salt.",
          "Slide kebabs off skewers onto warm flatbread. Top with sumac onions, tomatoes and green chillies.",
          "Serve with ayran (yogurt drink) or plain yogurt."
        ],
        youtube: { search: "Adana Kebab recipe authentic Turkish charcoal", url: "https://www.youtube.com/results?search_query=Adana+Kebab+recipe+authentic+Turkish" }
      },
      dessert: {
        name: "Baklava",
        description: "Layers of crisp filo pastry filled with pistachios and drenched in orange-scented syrup.",
        servings: 24, prepTime: "40 min", cookTime: "45 min",
        ingredients: [
          {amount:"400g", item:"filo pastry sheets"},
          {amount:"200g", item:"unsalted butter, melted"},
          {amount:"400g", item:"unsalted pistachios, finely chopped"},
          {amount:"400g", item:"sugar"},
          {amount:"300 ml", item:"water"},
          {amount:"1 tbsp", item:"lemon juice"},
          {amount:"1 tbsp", item:"orange blossom water"},
          {amount:"½ tsp", item:"ground cinnamon"}
        ],
        instructions: [
          "Make syrup: boil sugar, water and lemon juice 10 minutes. Add orange blossom water. Cool completely.",
          "Preheat oven to 170°C. Butter a 25×35 cm baking dish.",
          "Layer 10 filo sheets, brushing each with melted butter.",
          "Spread half the pistachios mixed with cinnamon. Layer 5 more buttered filo sheets.",
          "Spread remaining pistachios. Layer remaining filo, each buttered.",
          "Cut into diamonds before baking. Pour any remaining butter over top.",
          "Bake 40–45 minutes until deeply golden. Pour cold syrup over hot baklava. Rest 4 hours minimum."
        ],
        youtube: { search: "Turkish baklava recipe pistachio authentic", url: "https://www.youtube.com/results?search_query=Turkish+baklava+recipe+pistachio+authentic" }
      }
    }
  },

  {
    id: "austria", name: "Austria", flag: "🇦🇹", confederation: "UEFA",
    intro: "Austrian cuisine blends Viennese refinement with Alpine heartiness — from delicate soups to crispy schnitzel and the legendary Sachertorte.",
    menu: {
      starter: {
        name: "Leberknödelsuppe (Liver Dumpling Soup)",
        description: "Clear golden beef broth with rich, herby liver dumplings — a Viennese classic.",
        servings: 4, prepTime: "25 min", cookTime: "15 min",
        ingredients: [
          {amount:"300g", item:"chicken or calf liver, finely minced"},
          {amount:"100g", item:"stale white bread, soaked in milk and squeezed"},
          {amount:"1", item:"egg"},
          {amount:"1", item:"small onion, grated"},
          {amount:"2 tbsp", item:"plain flour"},
          {amount:"1 tbsp", item:"marjoram"},
          {amount:"1 tbsp", item:"flat-leaf parsley, chopped"},
          {amount:"1.5 L", item:"good beef consommé or clear stock"},
          {amount:"to taste", item:"salt, pepper, nutmeg"}
        ],
        instructions: [
          "Mix liver, bread, egg, onion, flour, marjoram and parsley until combined.",
          "Season well with salt, pepper and nutmeg.",
          "Refrigerate 20 minutes to firm up.",
          "Bring stock to a gentle simmer.",
          "Form mixture into 8 dumplings with wet hands. Simmer in stock 12 minutes until cooked through.",
          "Serve in warmed bowls with broth, garnished with parsley."
        ],
        youtube: { search: "Leberknödelsuppe Austrian liver dumpling soup recipe", url: "https://www.youtube.com/results?search_query=Leberknödelsuppe+Austrian+liver+dumpling+soup" }
      },
      main: {
        name: "Wiener Schnitzel",
        description: "Veal pounded paper-thin, breaded and fried in clarified butter until it ripples and puffs.",
        servings: 4, prepTime: "20 min", cookTime: "15 min",
        ingredients: [
          {amount:"4", item:"veal escalopes (150g each)"},
          {amount:"plain flour", item:"for dusting"},
          {amount:"3", item:"eggs, beaten"},
          {amount:"200g", item:"fresh white breadcrumbs"},
          {amount:"150g", item:"clarified butter (Butterschmalz)"},
          {amount:"1", item:"lemon, for squeezing"},
          {amount:"to serve", item:"potato salad, lingonberry jam, lemon wedges, parsley"}
        ],
        instructions: [
          "Pound veal escalopes between cling film to 3–4 mm thickness.",
          "Season flour. Set up a three-stage breading station: flour, beaten egg, breadcrumbs.",
          "Coat each schnitzel lightly in flour, then egg, then breadcrumbs. Do not press the crumbs — they should be loose.",
          "Heat clarified butter to 170°C in a wide pan — there should be enough to almost float the schnitzel.",
          "Fry each schnitzel 2–3 minutes per side, tilting and spooning butter over as it cooks so the crumb puffs up.",
          "Drain on paper towels. Serve immediately with a squeeze of lemon, potato salad and a side of lingonberry jam."
        ],
        youtube: { search: "Wiener Schnitzel authentic recipe veal Austrian", url: "https://www.youtube.com/results?search_query=Wiener+Schnitzel+authentic+recipe+Austrian" }
      },
      dessert: {
        name: "Sachertorte",
        description: "Vienna's legendary dense chocolate cake with apricot jam glaze beneath a mirror-smooth chocolate icing.",
        servings: 12, prepTime: "40 min", cookTime: "1 hr",
        ingredients: [
          {amount:"200g", item:"dark chocolate (70%), melted"},
          {amount:"150g", item:"unsalted butter, softened"},
          {amount:"150g", item:"caster sugar"},
          {amount:"8", item:"eggs, separated"},
          {amount:"150g", item:"plain flour"},
          {amount:"250g", item:"apricot jam, warmed and strained"},
          {amount:"200g", item:"dark chocolate (for icing)"},
          {amount:"200 ml", item:"double cream"}
        ],
        instructions: [
          "Preheat oven to 170°C. Beat butter and 100g sugar until pale. Beat in melted chocolate.",
          "Add egg yolks one at a time. Fold in flour.",
          "Whisk egg whites with remaining 50g sugar to stiff peaks. Fold into batter in three additions.",
          "Bake in a greased, floured 23 cm tin for 55–60 minutes. Cool completely.",
          "Split cake in half. Brush both cut surfaces generously with warm apricot jam. Reassemble.",
          "Coat outside of cake with remaining jam. Let set 30 minutes.",
          "Melt chocolate with cream, pour over cake and smooth with a palette knife. Set before serving with whipped cream."
        ],
        youtube: { search: "Sachertorte recipe authentic Viennese chocolate cake", url: "https://www.youtube.com/results?search_query=Sachertorte+recipe+authentic+Vienna" }
      }
    }
  },

  {
    id: "scotland", name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", confederation: "UEFA",
    intro: "Scottish cuisine draws on wild Highland landscapes — game, oats, whisky and foraged berries.",
    menu: {
      starter: {
        name: "Cock-a-Leekie Soup",
        description: "A gentle chicken and leek broth with prunes — Scotland's oldest documented soup.",
        servings: 4, prepTime: "15 min", cookTime: "1 hr",
        ingredients: [
          {amount:"4", item:"chicken thighs, bone-in"},
          {amount:"4", item:"large leeks, sliced (white and pale green)"},
          {amount:"8", item:"prunes, pitted"},
          {amount:"1.5 L", item:"chicken stock"},
          {amount:"1", item:"bay leaf"},
          {amount:"4", item:"black peppercorns"},
          {amount:"handful", item:"flat-leaf parsley"},
          {amount:"to taste", item:"salt and pepper"}
        ],
        instructions: [
          "Place chicken, stock, bay and peppercorns in a large pot. Bring to a boil, skim well.",
          "Add half the leeks. Simmer 45 minutes until chicken is very tender.",
          "Remove chicken, shred meat and discard bones and skin.",
          "Add remaining leeks and prunes to the broth. Simmer 10 minutes.",
          "Return shredded chicken to the pot. Season well.",
          "Serve in deep bowls, scattered with parsley."
        ],
        youtube: { search: "Cock-a-Leekie soup recipe traditional Scottish", url: "https://www.youtube.com/results?search_query=Cock-a-Leekie+soup+recipe+traditional+Scottish" }
      },
      main: {
        name: "Haggis, Neeps & Tatties",
        description: "Scotland's national dish — spiced offal pudding with buttered swede and mashed potato, served with whisky cream sauce.",
        servings: 4, prepTime: "15 min", cookTime: "2.5 hrs",
        ingredients: [
          {amount:"1", item:"haggis (450g, from butcher or good supermarket)"},
          {amount:"600g", item:"swede (neeps), peeled and diced"},
          {amount:"600g", item:"floury potatoes (tatties), peeled and diced"},
          {amount:"50g", item:"butter"},
          {amount:"100 ml", item:"double cream"},
          {amount:"2 tbsp", item:"Scotch whisky"},
          {amount:"1", item:"shallot, finely diced"},
          {amount:"100 ml", item:"chicken stock"},
          {amount:"to taste", item:"salt, pepper, nutmeg"}
        ],
        instructions: [
          "Wrap haggis in foil. Simmer in a pan of water for 2 hours.",
          "Boil swede until very tender, mash with butter and a little cream. Season with salt, pepper and nutmeg.",
          "Boil potatoes until tender, mash with remaining butter and cream. Season.",
          "For whisky sauce: sweat shallot in butter. Add whisky, ignite (optional). Add stock and cream, simmer until sauce consistency.",
          "Remove haggis from foil and casing. Serve generous spoonfuls on the plate.",
          "Arrange swede and potato alongside. Drizzle with whisky cream sauce."
        ],
        youtube: { search: "haggis neeps tatties recipe Burns Night Scotland", url: "https://www.youtube.com/results?search_query=haggis+neeps+tatties+recipe+Burns+Night" }
      },
      dessert: {
        name: "Cranachan",
        description: "A no-cook Scottish dessert of whipped cream, oats, raspberries and malt whisky — incredibly simple and good.",
        servings: 4, prepTime: "15 min + 30 min soaking", cookTime: "5 min",
        ingredients: [
          {amount:"75g", item:"pinhead oatmeal"},
          {amount:"400 ml", item:"double cream"},
          {amount:"3 tbsp", item:"runny honey"},
          {amount:"3 tbsp", item:"Scotch whisky"},
          {amount:"300g", item:"fresh raspberries"},
          {amount:"1 tbsp", item:"icing sugar"}
        ],
        instructions: [
          "Toast oatmeal in a dry frying pan until golden and nutty-smelling. Cool.",
          "Whip cream to soft peaks. Stir in 2 tbsp honey and the whisky.",
          "Fold in most of the toasted oats.",
          "Crush half the raspberries with icing sugar to make a rough coulis.",
          "Layer cream mixture, fresh raspberries and crushed raspberry coulis in glasses.",
          "Top with remaining oats and a drizzle of honey. Serve immediately."
        ],
        youtube: { search: "Cranachan recipe traditional Scottish dessert whisky", url: "https://www.youtube.com/results?search_query=Cranachan+recipe+traditional+Scottish+dessert" }
      }
    }
  },
  {
    id: "bosnia", name: "Bosnia & Herzegovina", flag: "🇧🇦", confederation: "UEFA",
    intro: "Bosnian cooking is Ottoman soul food — slow-simmered stews, grilled meats and syrup-soaked sweets shared around the table.",
    menu: {
      starter: {
        name: "Begova Čorba (Bey's Soup)",
        description: "A velvety chicken and okra soup thickened with a roux and finished with cream — fit for a bey.",
        servings: 6, prepTime: "20 min", cookTime: "1 hr",
        ingredients: [
          {amount:"1", item:"whole chicken, jointed"},
          {amount:"2", item:"carrots, diced"},
          {amount:"1", item:"parsnip, diced"},
          {amount:"1", item:"onion, finely chopped"},
          {amount:"150g", item:"okra, sliced"},
          {amount:"50g", item:"butter"},
          {amount:"40g", item:"plain flour"},
          {amount:"100 ml", item:"sour cream"},
          {amount:"1", item:"egg yolk"},
          {amount:"1 bunch", item:"parsley, chopped"}
        ],
        instructions: [
          "Simmer chicken in 2 litres salted water for 40 minutes. Lift out, shred the meat, reserve the stock.",
          "Sweat onion, carrot and parsnip in butter until soft. Add okra and the shredded chicken.",
          "Stir in flour and cook 2 minutes. Gradually whisk in the hot stock.",
          "Simmer 15 minutes until thickened and the vegetables are tender.",
          "Whisk sour cream with egg yolk, temper with a ladle of hot soup, then stir back in off the heat.",
          "Finish with plenty of parsley and serve hot."
        ],
        youtube: { search: "Begova corba Bosnian bey soup recipe", url: "https://www.youtube.com/results?search_query=Begova+corba+Bosnian+bey+soup+recipe" }
      },
      main: {
        name: "Ćevapi with Somun & Ajvar",
        description: "Hand-rolled minced beef-and-lamb sausages grilled over charcoal, tucked into pillowy flatbread with onions and ajvar.",
        servings: 4, prepTime: "30 min + 2 hr resting", cookTime: "15 min",
        ingredients: [
          {amount:"400g", item:"beef mince"},
          {amount:"300g", item:"lamb mince"},
          {amount:"4", item:"garlic cloves, crushed"},
          {amount:"1 tsp", item:"bicarbonate of soda"},
          {amount:"1 tsp", item:"sweet paprika"},
          {amount:"1 tsp", item:"salt"},
          {amount:"4", item:"somun flatbreads"},
          {amount:"1", item:"red onion, finely chopped"},
          {amount:"4 tbsp", item:"ajvar (red pepper relish)"}
        ],
        instructions: [
          "Mix both minces with garlic, bicarbonate, paprika and salt. Knead 5 minutes until sticky and smooth.",
          "Cover and rest in the fridge at least 2 hours (overnight is better).",
          "Roll into finger-length sausages about 2 cm thick.",
          "Grill over hot charcoal 8–10 minutes, turning, until charred outside and juicy within.",
          "Warm the somun and split open. Pack in 5–6 ćevapi per portion.",
          "Top with raw chopped onion and a spoonful of ajvar."
        ],
        youtube: { search: "Cevapi Bosnian recipe somun ajvar authentic", url: "https://www.youtube.com/results?search_query=Cevapi+Bosnian+recipe+somun+ajvar" }
      },
      dessert: {
        name: "Tufahija",
        description: "Whole apples poached in sugar syrup and stuffed with a sweet walnut cream, crowned with whipped cream.",
        servings: 6, prepTime: "25 min", cookTime: "25 min",
        ingredients: [
          {amount:"6", item:"firm apples, peeled and cored"},
          {amount:"300g", item:"sugar"},
          {amount:"500 ml", item:"water"},
          {amount:"1", item:"lemon, juiced"},
          {amount:"200g", item:"walnuts, finely ground"},
          {amount:"2 tbsp", item:"sugar (for filling)"},
          {amount:"50 ml", item:"of the poaching syrup"},
          {amount:"200 ml", item:"double cream, whipped"}
        ],
        instructions: [
          "Bring sugar, water and lemon juice to a gentle simmer.",
          "Poach the apples 10–15 minutes until tender but holding shape. Lift out and cool.",
          "Reduce the syrup by half. Mix ground walnuts with sugar and a little syrup to a paste.",
          "Stuff each apple generously with the walnut filling.",
          "Spoon over more syrup and chill at least 1 hour.",
          "Top each with whipped cream and a walnut half before serving."
        ],
        youtube: { search: "Tufahija Bosnian stuffed apple dessert recipe", url: "https://www.youtube.com/results?search_query=Tufahija+Bosnian+stuffed+apple+dessert" }
      }
    }
  },
  {
    id: "czechia", name: "Czech Republic", flag: "🇨🇿", confederation: "UEFA",
    intro: "Czech cuisine is hearty pub fare — roasted meats in silky sauces, bread dumplings and a serious sweet tooth.",
    menu: {
      starter: {
        name: "Bramboračka (Potato Soup)",
        description: "A rustic potato and mushroom soup laced with garlic, marjoram and root vegetables.",
        servings: 6, prepTime: "20 min", cookTime: "40 min",
        ingredients: [
          {amount:"500g", item:"potatoes, diced"},
          {amount:"30g", item:"dried mushrooms, soaked"},
          {amount:"1", item:"carrot, diced"},
          {amount:"1", item:"parsnip, diced"},
          {amount:"2", item:"garlic cloves, crushed"},
          {amount:"1 tsp", item:"dried marjoram"},
          {amount:"30g", item:"butter"},
          {amount:"30g", item:"plain flour"},
          {amount:"1.5 L", item:"vegetable stock"},
          {amount:"caraway seeds, salt, pepper", item:"to taste"}
        ],
        instructions: [
          "Simmer potatoes, carrot, parsnip and soaked mushrooms in stock until tender, about 20 minutes.",
          "Make a roux: cook butter and flour to a pale gold, then whisk in a ladle of hot stock.",
          "Stir the roux back into the soup to thicken.",
          "Add garlic, marjoram and caraway. Simmer 10 minutes more.",
          "Season well with salt and pepper.",
          "Serve with crusty rye bread."
        ],
        youtube: { search: "Bramboracka Czech potato soup recipe authentic", url: "https://www.youtube.com/results?search_query=Bramboracka+Czech+potato+soup+recipe" }
      },
      main: {
        name: "Svíčková na Smetaně",
        description: "Marinated beef in a silky root-vegetable cream sauce, served with bread dumplings, cranberries and a swirl of cream.",
        servings: 6, prepTime: "30 min + overnight marinating", cookTime: "2 hr 30 min",
        ingredients: [
          {amount:"1.2 kg", item:"beef sirloin or topside"},
          {amount:"2", item:"carrots"},
          {amount:"1", item:"parsnip"},
          {amount:"½", item:"celeriac"},
          {amount:"2", item:"onions"},
          {amount:"4", item:"allspice berries"},
          {amount:"4", item:"black peppercorns"},
          {amount:"2", item:"bay leaves"},
          {amount:"200 ml", item:"double cream"},
          {amount:"1 tbsp", item:"sugar, splash of vinegar"},
          {amount:"1", item:"loaf bread dumpling (knedlíky), to serve"},
          {amount:"cranberry sauce & lemon", item:"to garnish"}
        ],
        instructions: [
          "Lard the beef and marinate overnight with the chopped root vegetables, spices and a splash of vinegar.",
          "Sear the beef, then roast with the vegetables and a little stock at 160°C for about 2 hours until tender.",
          "Rest the meat. Discard whole spices and blend the vegetables with the pan juices into a smooth sauce.",
          "Stir in cream, sugar and a splash of vinegar; simmer to a glossy sauce. Adjust the sweet-sour balance.",
          "Slice the beef and nap with the sauce.",
          "Serve with bread dumplings, a spoon of cranberry, a cream swirl and a lemon slice."
        ],
        youtube: { search: "Svickova na smetane Czech beef recipe authentic", url: "https://www.youtube.com/results?search_query=Svickova+na+smetane+Czech+beef+recipe" }
      },
      dessert: {
        name: "Ovocné Knedlíky (Fruit Dumplings)",
        description: "Soft quark dough dumplings hiding whole plums, dusted with sweet curd cheese and browned butter.",
        servings: 4, prepTime: "30 min", cookTime: "10 min",
        ingredients: [
          {amount:"250g", item:"quark (curd cheese)"},
          {amount:"200g", item:"plain flour"},
          {amount:"1", item:"egg"},
          {amount:"30g", item:"butter, softened"},
          {amount:"pinch", item:"salt"},
          {amount:"8", item:"small plums, stoned"},
          {amount:"100g", item:"butter, for serving"},
          {amount:"100g", item:"tvaroh or ground poppy seed"},
          {amount:"icing sugar", item:"to dust"}
        ],
        instructions: [
          "Mix quark, flour, egg, softened butter and salt into a soft dough. Rest 15 minutes.",
          "Roll out and cut into squares. Wrap each square around a plum, sealing well.",
          "Drop the dumplings into gently simmering water and cook 8–10 minutes until they float and puff.",
          "Melt the serving butter until lightly browned and nutty.",
          "Drain the dumplings and roll in browned butter.",
          "Smother with curd cheese (or ground poppy seed) and a generous snow of icing sugar."
        ],
        youtube: { search: "Ovocne knedliky Czech fruit dumplings recipe", url: "https://www.youtube.com/results?search_query=Ovocne+knedliky+Czech+fruit+dumplings+recipe" }
      }
    }
  },
  {
    id: "norway", name: "Norway", flag: "🇳🇴", confederation: "UEFA",
    intro: "Norwegian food is the larder of the fjords — fresh fish, mountain mutton and buttery griddle cakes.",
    menu: {
      starter: {
        name: "Fiskesuppe (Bergen Fish Soup)",
        description: "A creamy west-coast fish soup with cod, root vegetables and a bright hit of vinegar and dill.",
        servings: 6, prepTime: "20 min", cookTime: "30 min",
        ingredients: [
          {amount:"600g", item:"cod or haddock, cubed"},
          {amount:"1 L", item:"fish stock"},
          {amount:"2", item:"carrots, julienned"},
          {amount:"1", item:"leek, sliced"},
          {amount:"½", item:"celeriac, diced"},
          {amount:"200 ml", item:"double cream"},
          {amount:"2", item:"egg yolks"},
          {amount:"1 tbsp", item:"white wine vinegar"},
          {amount:"1 tsp", item:"sugar"},
          {amount:"1 bunch", item:"dill, chopped"}
        ],
        instructions: [
          "Simmer carrots, leek and celeriac in the fish stock until just tender.",
          "Whisk cream with egg yolks. Temper with hot stock, then stir back into the pan off the boil.",
          "Add vinegar and sugar — the soup should taste subtly sweet-sour.",
          "Slip in the fish and poach gently 4–5 minutes until just cooked.",
          "Season with salt and white pepper.",
          "Finish with a generous shower of fresh dill."
        ],
        youtube: { search: "Bergen fiskesuppe Norwegian fish soup recipe", url: "https://www.youtube.com/results?search_query=Bergen+fiskesuppe+Norwegian+fish+soup+recipe" }
      },
      main: {
        name: "Fårikål (Mutton & Cabbage)",
        description: "Norway's national dish: layers of mutton and cabbage slow-stewed with whole black peppercorns.",
        servings: 6, prepTime: "20 min", cookTime: "2 hr",
        ingredients: [
          {amount:"1.5 kg", item:"mutton or lamb, on the bone, cut into pieces"},
          {amount:"1.5 kg", item:"white cabbage, in wedges"},
          {amount:"2 tbsp", item:"whole black peppercorns"},
          {amount:"2 tbsp", item:"plain flour"},
          {amount:"2 tsp", item:"salt"},
          {amount:"500 ml", item:"water"},
          {amount:"boiled potatoes", item:"to serve"}
        ],
        instructions: [
          "Layer mutton and cabbage in a heavy pot, fatty side of the meat down first.",
          "Between layers scatter peppercorns, a little flour and salt.",
          "Pour in the water, bring to a simmer, then cover tightly.",
          "Stew very gently for about 2 hours until the meat falls from the bone.",
          "Don't stir — just baste occasionally with the liquor.",
          "Serve in deep bowls with boiled potatoes and the peppery broth."
        ],
        youtube: { search: "Farikal Norwegian mutton cabbage recipe authentic", url: "https://www.youtube.com/results?search_query=Farikal+Norwegian+mutton+cabbage+recipe" }
      },
      dessert: {
        name: "Krumkake",
        description: "Crisp, cardamom-scented waffle cones rolled while hot and filled with whipped cream.",
        servings: 20, prepTime: "20 min", cookTime: "20 min",
        ingredients: [
          {amount:"3", item:"eggs"},
          {amount:"150g", item:"sugar"},
          {amount:"100g", item:"butter, melted"},
          {amount:"150g", item:"plain flour"},
          {amount:"100 ml", item:"milk"},
          {amount:"½ tsp", item:"ground cardamom"},
          {amount:"1 tsp", item:"vanilla"},
          {amount:"whipped cream", item:"to fill"}
        ],
        instructions: [
          "Whisk eggs and sugar until pale. Stir in melted butter.",
          "Fold in flour, milk, cardamom and vanilla to a smooth batter.",
          "Heat a krumkake iron and cook spoonfuls until golden and lacy.",
          "Working fast, roll each hot wafer around a cone form.",
          "Let the cones cool and crisp.",
          "Pipe in whipped cream just before serving so they stay crunchy."
        ],
        youtube: { search: "Krumkake Norwegian waffle cookie recipe", url: "https://www.youtube.com/results?search_query=Krumkake+Norwegian+waffle+cookie+recipe" }
      }
    }
  },
  {
    id: "sweden", name: "Sweden", flag: "🇸🇪", confederation: "UEFA",
    intro: "Swedish cooking balances comfort and finesse — buttery seafood, lingonberry-laced meatballs and cakes made for fika.",
    menu: {
      starter: {
        name: "Toast Skagen",
        description: "Hand-peeled prawns folded through dill mayonnaise, piled on butter-fried bread with a spoon of roe.",
        servings: 4, prepTime: "15 min", cookTime: "5 min",
        ingredients: [
          {amount:"300g", item:"cooked cold-water prawns"},
          {amount:"3 tbsp", item:"mayonnaise"},
          {amount:"2 tbsp", item:"crème fraîche"},
          {amount:"1 bunch", item:"dill, chopped"},
          {amount:"1 tsp", item:"Dijon mustard"},
          {amount:"1", item:"lemon, zested and juiced"},
          {amount:"4 slices", item:"white bread"},
          {amount:"butter", item:"for frying"},
          {amount:"4 tsp", item:"whitefish roe (löjrom)"}
        ],
        instructions: [
          "Fold prawns through mayonnaise, crème fraîche, mustard, dill and lemon zest.",
          "Season and add lemon juice to taste; chill briefly.",
          "Fry the bread in butter until golden and crisp on both sides.",
          "Cut into neat shapes and pile the prawn mixture high.",
          "Top each with a spoonful of roe.",
          "Garnish with a dill sprig and a lemon wedge."
        ],
        youtube: { search: "Toast Skagen Swedish prawn recipe authentic", url: "https://www.youtube.com/results?search_query=Toast+Skagen+Swedish+prawn+recipe" }
      },
      main: {
        name: "Köttbullar with Lingonberry",
        description: "Tender Swedish meatballs in a creamy gravy, served with mash, lingonberries and quick-pickled cucumber.",
        servings: 4, prepTime: "25 min", cookTime: "25 min",
        ingredients: [
          {amount:"400g", item:"beef mince"},
          {amount:"200g", item:"pork mince"},
          {amount:"1", item:"onion, grated"},
          {amount:"60g", item:"breadcrumbs soaked in 80 ml milk"},
          {amount:"1", item:"egg"},
          {amount:"¼ tsp", item:"ground allspice"},
          {amount:"30g", item:"butter"},
          {amount:"2 tbsp", item:"flour"},
          {amount:"400 ml", item:"beef stock"},
          {amount:"150 ml", item:"double cream"},
          {amount:"lingonberry jam & mash", item:"to serve"}
        ],
        instructions: [
          "Mix minces with grated onion, soaked breadcrumbs, egg and allspice. Season and roll into small balls.",
          "Brown the meatballs all over in butter, then lift out.",
          "Stir flour into the pan, cook 1 minute, then whisk in stock and cream.",
          "Simmer the gravy until glossy and return the meatballs to warm through.",
          "Adjust seasoning with a dash of soy for colour if you like.",
          "Serve with mashed potato and a generous spoon of lingonberry jam."
        ],
        youtube: { search: "Swedish kottbullar meatballs lingonberry recipe", url: "https://www.youtube.com/results?search_query=Swedish+kottbullar+meatballs+lingonberry+recipe" }
      },
      dessert: {
        name: "Prinsesstårta",
        description: "The iconic green princess cake: sponge, raspberry jam and vanilla cream under a dome of marzipan.",
        servings: 12, prepTime: "1 hr", cookTime: "25 min",
        ingredients: [
          {amount:"4", item:"eggs"},
          {amount:"150g", item:"sugar"},
          {amount:"120g", item:"plain flour"},
          {amount:"40g", item:"cornflour"},
          {amount:"1 tsp", item:"baking powder"},
          {amount:"500 ml", item:"pastry cream"},
          {amount:"400 ml", item:"double cream, whipped"},
          {amount:"4 tbsp", item:"raspberry jam"},
          {amount:"400g", item:"green marzipan"},
          {amount:"icing sugar & a marzipan rose", item:"to finish"}
        ],
        instructions: [
          "Whisk eggs and sugar to a thick ribbon. Fold in sifted flours and baking powder. Bake at 175°C for 25 minutes.",
          "Cool and slice the sponge into three layers.",
          "Layer with raspberry jam, pastry cream and whipped cream, mounding the top into a dome.",
          "Chill until firm so the dome holds.",
          "Roll green marzipan thin and drape over the whole cake, smoothing the dome.",
          "Dust with icing sugar and finish with a pink marzipan rose."
        ],
        youtube: { search: "Prinsesstarta Swedish princess cake recipe", url: "https://www.youtube.com/results?search_query=Prinsesstarta+Swedish+princess+cake+recipe" }
      }
    }
  },
  {
    id: "switzerland", name: "Switzerland", flag: "🇨🇭", confederation: "UEFA",
    intro: "Swiss cooking is alpine comfort — melted cheese, crisp potato rösti and delicate nut pastries from the mountain valleys.",
    menu: {
      starter: {
        name: "Bündner Gerstensuppe (Barley Soup)",
        description: "A thick Grisons barley soup with smoked ham, root vegetables and a finish of cream.",
        servings: 6, prepTime: "20 min", cookTime: "1 hr 15 min",
        ingredients: [
          {amount:"200g", item:"pearl barley"},
          {amount:"150g", item:"Bündnerfleisch or smoked ham, diced"},
          {amount:"2", item:"carrots, diced"},
          {amount:"1", item:"leek, sliced"},
          {amount:"½", item:"celeriac, diced"},
          {amount:"1", item:"onion, chopped"},
          {amount:"1.5 L", item:"beef stock"},
          {amount:"100 ml", item:"single cream"},
          {amount:"1", item:"bay leaf"},
          {amount:"parsley", item:"to finish"}
        ],
        instructions: [
          "Soak the barley 1 hour, then drain.",
          "Sweat onion, carrot, leek and celeriac in a little butter.",
          "Add barley, ham, bay leaf and stock. Simmer gently 1 hour, stirring now and then.",
          "The soup should turn thick and creamy as the barley breaks down.",
          "Stir in the cream and warm through; season well.",
          "Finish with chopped parsley and serve with alpine bread."
        ],
        youtube: { search: "Bundner Gerstensuppe Swiss barley soup recipe", url: "https://www.youtube.com/results?search_query=Bundner+Gerstensuppe+Swiss+barley+soup+recipe" }
      },
      main: {
        name: "Zürcher Geschnetzeltes with Rösti",
        description: "Zurich-style veal in a creamy mushroom and white wine sauce, served over crisp golden rösti.",
        servings: 4, prepTime: "20 min", cookTime: "30 min",
        ingredients: [
          {amount:"600g", item:"veal, thinly sliced"},
          {amount:"250g", item:"button mushrooms, sliced"},
          {amount:"1", item:"shallot, finely chopped"},
          {amount:"100 ml", item:"white wine"},
          {amount:"200 ml", item:"double cream"},
          {amount:"1 tbsp", item:"flour"},
          {amount:"butter", item:"for frying"},
          {amount:"800g", item:"waxy potatoes, par-boiled and grated"},
          {amount:"lemon juice & parsley", item:"to finish"}
        ],
        instructions: [
          "For the rösti, press grated potato into a buttered pan and fry slowly on both sides until golden and crisp.",
          "Dust the veal with flour and sear quickly in butter; remove.",
          "Sweat shallot and mushrooms, deglaze with white wine and reduce.",
          "Add cream and simmer to a velvety sauce.",
          "Return the veal with its juices, warm through (don't boil hard) and sharpen with lemon.",
          "Spoon over wedges of rösti and scatter with parsley."
        ],
        youtube: { search: "Zurcher Geschnetzeltes rosti Swiss veal recipe", url: "https://www.youtube.com/results?search_query=Zurcher+Geschnetzeltes+rosti+Swiss+veal+recipe" }
      },
      dessert: {
        name: "Basler Läckerli",
        description: "Spiced Basel honey biscuits packed with almonds and candied peel, glazed to a glossy finish.",
        servings: 30, prepTime: "30 min + resting", cookTime: "20 min",
        ingredients: [
          {amount:"250g", item:"honey"},
          {amount:"200g", item:"sugar"},
          {amount:"150g", item:"almonds, chopped"},
          {amount:"100g", item:"candied orange & lemon peel"},
          {amount:"350g", item:"plain flour"},
          {amount:"1 tsp", item:"ground cinnamon"},
          {amount:"½ tsp", item:"ground cloves"},
          {amount:"2 tbsp", item:"kirsch"},
          {amount:"100g", item:"icing sugar (for glaze)"}
        ],
        instructions: [
          "Warm honey and sugar until dissolved; cool slightly.",
          "Stir in almonds, candied peel, spices and kirsch.",
          "Work in the flour to a stiff dough. Rest overnight if you can.",
          "Roll to 1 cm thick on a lined tray and bake at 180°C for about 18 minutes.",
          "Brush the warm slab with a thin icing-sugar glaze.",
          "Cut into small rectangles while still warm; store in a tin to mellow."
        ],
        youtube: { search: "Basler Lackerli Swiss spiced biscuit recipe", url: "https://www.youtube.com/results?search_query=Basler+Lackerli+Swiss+spiced+biscuit+recipe" }
      }
    }
  }
];
