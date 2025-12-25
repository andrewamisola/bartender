const RECIPES = [// CLASSIC
  { id:1, name:"Old Fashioned", category:"classic", glass:"Rocks glass", garnish:"Orange peel, cherry",
    image:"https://www.liquor.com/thmb/VnXE94WHWee_Zitriz1yF9_dgdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bourbon-old-fashioned-1200x628-fb-2e93c88f19e14b9cbae80420b08a183a.jpg",
    fact:"Often called the first true cocktail; the name appeared in print in the 1800s.",
    ingredients:[{amount:"2 oz",name:"Bourbon or Rye"},{amount:"1 tsp",name:"Simple syrup"},{amount:"2 dashes",name:"Angostura bitters",alt:"or any aromatic bitters"}],
    instructions:[
      "Add simple syrup and 2 dashes of bitters directly into a rocks glass",
      "Add a small splash of water (about 1 tsp) and stir gently with a bar spoon to combine",
      "Add one large ice cube or 3-4 regular cubes to the glass",
      "Pour bourbon over the ice slowly",
      "Stir gently for about 10 seconds to chill and dilute slightly",
      "Cut a 1-inch wide strip of orange peel, twist it over the drink to release oils, then drop it in",
      "Add a cocktail cherry and serve"
    ]}
,
  { id:2, name:"Negroni", category:"classic", glass:"Rocks glass", garnish:"Orange peel",
    image:"https://www.liquor.com/thmb/8l5MXC4hkdrCzymve7ZbZiYOonc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__03__16174655__WHite-negroni-720square-ca5ebe6e609341cba6ecb4e90c3353fe.jpg",
    fact:"Legend says Count Camillo Negroni asked for a stronger Americano in Florence.",
    ingredients:[{amount:"1 oz",name:"Gin"},{amount:"1 oz",name:"Campari",alt:"or Aperol (sweeter), Cappelletti, or any red bitter aperitivo"},{amount:"1 oz",name:"Sweet vermouth"}],
    instructions:[
      "Fill a mixing glass (or any tall glass) halfway with ice",
      "Pour in gin, Campari, and sweet vermouth - equal parts of each",
      "Stir with a bar spoon for 30 seconds using a smooth circular motion (don't shake - it makes the drink cloudy)",
      "Place one large ice cube in a rocks glass",
      "Use a strainer (or hold ice back with spoon) to pour the drink over the ice",
      "Cut a strip of orange peel, twist it over the drink to release the citrus oils",
      "Rub the peel around the rim, then drop it in the glass"
    ]}
,
  { id:3, name:"Martini", category:"classic", glass:"Martini glass", garnish:"Olive or lemon twist",
    image:"https://www.liquor.com/thmb/fFWvKhK3BVLEgEgu6OrhX5j39uk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dirty-martini-1200x628-facebook-5b037d2556124cfdbb5d811d6bd6e17a.jpg",
    fact:"The dry martini became a symbol of elegance in early 20th‑century bars.",
    ingredients:[{amount:"2.5 oz",name:"Gin or Vodka"},{amount:"0.5 oz",name:"Dry vermouth"}],
    instructions:[
      "Place your martini glass in the freezer for 5 minutes to chill (or fill with ice water while you prep)",
      "Fill a mixing glass halfway with ice",
      "Add gin (or vodka) and dry vermouth",
      "Stir continuously for 30 seconds - this chills without adding air bubbles",
      "Remove martini glass from freezer (or dump out ice water and dry it)",
      "Strain the cocktail into the chilled glass",
      "For olive garnish: add 1-3 olives on a pick. For lemon twist: cut a strip of lemon peel, twist over drink, and drop in"
    ]}
,
  { id:4, name:"Manhattan", category:"classic", glass:"Coupe glass", garnish:"Cherry",
    image:"https://www.liquor.com/thmb/yDZNHfDA1EwP3OuL_hHMUZl7_Nw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/manhattan-1200x628-fb-f771590c00ac45f1ba7d4bc6795751d3.jpg",
    fact:"Often linked to New York’s Manhattan Club in the late 1800s.",
    ingredients:[{amount:"2 oz",name:"Rye whiskey"},{amount:"1 oz",name:"Sweet vermouth"},{amount:"2 dashes",name:"Angostura bitters",alt:"or any aromatic bitters"}],
    instructions:[
      "Chill your coupe glass by filling it with ice water and setting aside",
      "Fill a mixing glass (or large glass) halfway with ice",
      "Add rye whiskey, sweet vermouth, and bitters",
      "Stir with a bar spoon for 30 seconds - use a smooth motion, keeping the spoon against the glass",
      "Dump the ice water from your coupe glass",
      "Place a strainer over your mixing glass and pour into the chilled coupe",
      "Drop in a cocktail cherry (Luxardo cherries are best, but any will work)"
    ]}
,
  { id:5, name:"Sidecar", category:"classic", glass:"Coupe glass", garnish:"Orange twist",
    image:"https://www.liquor.com/thmb/97tDo7yplmdjvyN3WXcfjYi4-K4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/calvados-sidecar-1200x628-email-b0fe8042d0774ccab80615c5a045eae8.jpg",
    fact:"Popularized in Paris after World War I, often tied to American expats.",
    ingredients:[{amount:"2 oz",name:"Cognac"},{amount:"0.75 oz",name:"Cointreau",alt:"or Triple Sec"},{amount:"0.75 oz",name:"Fresh lemon juice"}],
    instructions:[
      "Chill a coupe glass",
      "Add cognac, Cointreau, and lemon juice to a shaker with ice",
      "Shake hard for 12-15 seconds",
      "Optional: rim the glass with sugar",
      "Strain into the chilled coupe",
      "Garnish with an orange twist"
    ]}
,
  { id:6, name:"Tom Collins", category:"classic", glass:"Highball glass", garnish:"Lemon wheel, cherry",
    image:"https://www.liquor.com/thmb/RevbzF64LZA4n0NvJe_pxfEMDoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LQR-tomcollins-facebook-1200x628-495b7f84e8a54cfba7d6475b335ee313.jpg",
    fact:"The “Tom Collins Hoax” was a famous 1870s prank in the US.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"1 oz",name:"Fresh lemon juice"},{amount:"0.75 oz",name:"Simple syrup"},{amount:"Top",name:"Soda water"}],
    instructions:[
      "Fill a highball glass with ice",
      "Add gin, lemon juice, and simple syrup",
      "Stir briefly to combine",
      "Top with soda water",
      "Gently stir once",
      "Garnish with lemon wheel and cherry"
    ]}
,
  { id:7, name:"Gimlet", category:"classic", glass:"Coupe glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/aqoDnGpH8A1CP4QYNDXDRbCkmXU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vodka-Gimlet-1200x628-fb-2eb126c678014cac910dc1900165d395.jpg",
    fact:"Sailors used lime to prevent scurvy, inspiring the drink.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"0.75 oz",name:"Fresh lime juice"},{amount:"0.5 oz",name:"Simple syrup"}],
    instructions:[
      "Chill a coupe glass",
      "Add gin, lime juice, and simple syrup to a shaker with ice",
      "Shake hard for 12-15 seconds",
      "Strain into the coupe",
      "Garnish with a lime wheel"
    ]}
,
  { id:8, name:"Sazerac", category:"classic", glass:"Rocks glass", garnish:"Lemon twist",
    image:"https://www.liquor.com/thmb/Vl-sDaxkkOCcC-N4TZF7k8KDWg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sazerac-1200x628-facebook-47bfc5864be541bcbf3590c9cefbb1dd.jpg",
    fact:"Often called the official cocktail of New Orleans.",
    ingredients:[{amount:"2 oz",name:"Rye whiskey"},{amount:"0.25 oz",name:"Simple syrup"},{amount:"2 dashes",name:"Peychaud’s bitters"},{amount:"Rinse",name:"Absinthe"}],
    instructions:[
      "Chill a rocks glass with ice and a small amount of absinthe, then discard",
      "Stir rye, syrup, and bitters with ice in a mixing glass",
      "Strain into the rinsed glass without ice",
      "Express a lemon peel over the drink and discard or drop in"
    ]}
,
  { id:9, name:"Boulevardier", category:"classic", glass:"Rocks glass", garnish:"Orange peel",
    image:"https://www.liquor.com/thmb/LV0L3CF51hFJoSN-QdLe6ijXsFQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__09__12094720__Boulevardier-720x720-recipe-53da547e8cfc4bd79a393ac99891f5ba.jpg",
    fact:"A whiskey‑based cousin of the Negroni, popularized in the 1920s.",
    ingredients:[{amount:"1.5 oz",name:"Bourbon or Rye"},{amount:"1 oz",name:"Campari"},{amount:"1 oz",name:"Sweet vermouth"}],
    instructions:[
      "Stir whiskey, Campari, and sweet vermouth with ice",
      "Strain over a large cube in a rocks glass",
      "Garnish with orange peel"
    ]}
,
  { id:10, name:"Clover Club", category:"classic", glass:"Coupe glass", garnish:"Raspberry",
    image:"https://www.liquor.com/thmb/s8OsksNKpFdHfiOWslwAW4RLf6w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/clover-club-1200x628-email-8c26fd0b990c47d3a10d341c2f41937c.jpg",
    fact:"Named after a Philadelphia gentlemen’s club from the 1890s.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"0.75 oz",name:"Fresh lemon juice"},{amount:"0.5 oz",name:"Raspberry syrup"},{amount:"1",name:"Egg white"}],
    instructions:[
      "Add all ingredients to a shaker without ice and dry shake 10 seconds",
      "Add ice and shake again until well chilled",
      "Strain into a coupe",
      "Garnish with a raspberry"
    ]}
,

  // TIKI
  { id:11, name:"Mai Tai", category:"tiki", glass:"Rocks glass", garnish:"Mint, lime, pineapple",
    image:"https://www.liquor.com/thmb/uTblUjksvlksdaq8T1ut3LPar7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mai-tai-1200x628-fb-eeb8f3f2f6014ccca3f238d534c61b97.jpg",
    fact:"Created by Trader Vic in 1944, according to tiki lore.",
    ingredients:[{amount:"2 oz",name:"Aged rum"},{amount:"0.75 oz",name:"Fresh lime juice"},{amount:"0.5 oz",name:"Orange Curacao",alt:"or Triple Sec, Cointreau, Grand Marnier, or any orange liqueur"},{amount:"0.5 oz",name:"Orgeat syrup",alt:"or almond syrup"}],
    instructions:[
      "Fill a cocktail shaker halfway with ice cubes",
      "Add rum, fresh lime juice (always squeeze fresh - bottled won't taste right), orange curacao, and orgeat syrup",
      "Shake vigorously for 15 seconds - you want to hear the ice rattling loudly",
      "Fill a rocks glass with crushed ice (put regular ice in a clean towel and hit with a rolling pin if you don't have crushed)",
      "Strain the cocktail over the crushed ice",
      "Garnish with a sprig of fresh mint (slap it between your palms first to release aroma), a lime wheel, and a pineapple wedge"
    ]}
,
  { id:12, name:"Piña Colada", category:"tiki", glass:"Hurricane glass", garnish:"Pineapple wedge, cherry",
    image:"https://www.liquor.com/thmb/0PNt-EA20uKOuPriowhY92edpTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/coconut-colada-1200x628-fb-cca1c6f4dd874fc885529e6387159285.jpg",
    fact:"Puerto Rico declared it the national drink in 1978.",
    ingredients:[{amount:"2 oz",name:"White rum"},{amount:"2 oz",name:"Coconut cream",alt:"or Coco López, cream of coconut, or coconut milk + sugar"},{amount:"4 oz",name:"Pineapple juice"}],
    instructions:[
      "Add 1 cup of ice to a blender",
      "Pour in white rum, coconut cream, and pineapple juice",
      "Blend on high for 15-20 seconds until completely smooth with no ice chunks",
      "If too thick, add a splash more pineapple juice. If too thin, add more ice and blend again",
      "Pour into a hurricane glass or tall glass",
      "Cut a wedge of pineapple and make a small cut so it sits on the rim",
      "Add a cocktail cherry on a pick and serve with a straw"
    ]}
,
  { id:13, name:"Zombie", category:"tiki", glass:"Hurricane glass", garnish:"Mint, lime, cherry",
    image:"https://www.liquor.com/thmb/rWYZs65qEQJmXyfL-HYCXVB3CKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/zombie-1200x628-email-57206357c1694b3db9b3750fd075df45.jpg",
    fact:"Don the Beachcomber limited patrons to two due to its strength.",
    ingredients:[{amount:"1.5 oz",name:"Jamaican rum"},{amount:"1.5 oz",name:"Puerto Rican rum"},{amount:"0.75 oz",name:"Fresh lime juice"},{amount:"0.5 oz",name:"Grapefruit juice"},{amount:"0.5 oz",name:"Falernum"},{amount:"0.25 oz",name:"Grenadine"}],
    instructions:[
      "Add all ingredients to a shaker with ice",
      "Shake hard for 12-15 seconds",
      "Pour into a hurricane glass over crushed ice",
      "Garnish with mint, lime wheel, and cherry"
    ]}
,
  { id:14, name:"Painkiller", category:"tiki", glass:"Hurricane glass", garnish:"Nutmeg, pineapple",
    image:"https://www.liquor.com/thmb/qUOVau1qIgZL6-q1v9ONM9MiI_g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/painkiller-1200x628-fb-629cee6ebe2a4c67bae33b31cdf3d5bf.jpg",
    fact:"Associated with the Soggy Dollar Bar in the British Virgin Islands.",
    ingredients:[{amount:"2 oz",name:"Dark rum"},{amount:"4 oz",name:"Pineapple juice"},{amount:"1 oz",name:"Orange juice"},{amount:"1 oz",name:"Coconut cream"}],
    instructions:[
      "Add rum, pineapple juice, orange juice, and coconut cream to a shaker with ice",
      "Shake well for 12 seconds",
      "Pour into a hurricane glass over ice",
      "Grate fresh nutmeg on top",
      "Garnish with a pineapple wedge"
    ]}
,
  { id:15, name:"Jungle Bird", category:"tiki", glass:"Rocks glass", garnish:"Pineapple wedge",
    image:"https://www.liquor.com/thmb/BAZMHFGLRWpJVdqg9mwRJJn6aaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jungle-bird-1200x628-email-5df70187c96649e59bb522778b3b2f86.jpg",
    fact:"Created at the Kuala Lumpur Hilton in the 1970s.",
    ingredients:[{amount:"1.5 oz",name:"Dark rum"},{amount:"0.75 oz",name:"Campari"},{amount:"1.5 oz",name:"Pineapple juice"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"0.5 oz",name:"Simple syrup"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a rocks glass over ice",
      "Garnish with a pineapple wedge"
    ]}
,
  { id:16, name:"Navy Grog", category:"tiki", glass:"Rocks glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/cCnzz1CCaUy3qcFRGKcqlUX4_pc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__06__20134139__navy-grog-720x720-recipe-b602638555fc43f898698edea1f5f212.jpg",
    fact:"Inspired by British naval rum rations known as “grog.”",
    ingredients:[{amount:"1 oz",name:"Dark rum"},{amount:"1 oz",name:"Light rum"},{amount:"0.75 oz",name:"Fresh lime juice"},{amount:"0.75 oz",name:"Grapefruit juice"},{amount:"0.5 oz",name:"Honey syrup"}],
    instructions:[
      "Shake all ingredients with ice",
      "Pour into a rocks glass over crushed ice",
      "Garnish with a lime wheel"
    ]}
,
  { id:17, name:"Fog Cutter", category:"tiki", glass:"Hurricane glass", garnish:"Mint",
    image:"https://www.liquor.com/thmb/jCZqEgVY6Smod8PWNKoIZ-4SgaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2015__04__recipe-1-1-b79ce47310ba48d2bb4e67eb9bc53c01.jpg",
    fact:"A Trader Vic classic known for its potent mix of spirits.",
    ingredients:[{amount:"1 oz",name:"Light rum"},{amount:"0.5 oz",name:"Gin"},{amount:"0.5 oz",name:"Brandy"},{amount:"2 oz",name:"Orange juice"},{amount:"1 oz",name:"Fresh lemon juice"},{amount:"0.5 oz",name:"Orgeat syrup"}],
    instructions:[
      "Shake all ingredients with ice",
      "Pour into a hurricane glass over crushed ice",
      "Garnish with mint"
    ]}
,
  { id:18, name:"Scorpion", category:"tiki", glass:"Bowl or large glass", garnish:"Orange, cherry",
    image:"https://www.liquor.com/thmb/jCZqEgVY6Smod8PWNKoIZ-4SgaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2015__04__recipe-1-1-b79ce47310ba48d2bb4e67eb9bc53c01.jpg",
    fact:"Originally served as a punch for groups in tiki bars.",
    ingredients:[{amount:"1.5 oz",name:"Light rum"},{amount:"1 oz",name:"Brandy"},{amount:"2 oz",name:"Orange juice"},{amount:"1 oz",name:"Fresh lime juice"},{amount:"0.5 oz",name:"Orgeat syrup"}],
    instructions:[
      "Shake all ingredients with ice",
      "Pour into a large glass or bowl over ice",
      "Garnish with orange slice and cherry"
    ]}
,
  { id:19, name:"Saturn", category:"tiki", glass:"Coupe glass", garnish:"Lemon twist",
    image:"https://www.liquor.com/thmb/4oExftBf3MvRGQuaUT_YFNecN2E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__09__29123527__saturn-720x720-recipe-c2b913286f1f4a9bbf3ddf2dafd84fbb.jpg",
    fact:"Created by J. “Popo” Galsini in 1967; a gin‑based tiki oddity.",
    ingredients:[{amount:"1.5 oz",name:"Gin"},{amount:"0.5 oz",name:"Passion fruit syrup"},{amount:"0.25 oz",name:"Orgeat syrup"},{amount:"0.75 oz",name:"Fresh lemon juice"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a chilled coupe",
      "Garnish with lemon twist"
    ]}
,
  { id:20, name:"Blue Hawaii", category:"tiki", glass:"Hurricane glass", garnish:"Pineapple, cherry",
    image:"https://www.liquor.com/thmb/xVI7Q_Nup4G97MnpDMMVeOybq-8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-hawaii-1200x628-fb-e53b20a0a9f94ef98f78530381150312.jpg",
    fact:"Often linked to Honolulu’s Hilton Hawaiian Village in the 1950s.",
    ingredients:[{amount:"1.5 oz",name:"Light rum"},{amount:"0.5 oz",name:"Blue curaçao"},{amount:"2 oz",name:"Pineapple juice"},{amount:"0.5 oz",name:"Fresh lemon juice"}],
    instructions:[
      "Shake all ingredients with ice",
      "Pour into a hurricane glass over ice",
      "Garnish with pineapple and cherry"
    ]}
,

  // WHISKEY
  { id:21, name:"Whiskey Sour", category:"whiskey", glass:"Rocks glass", garnish:"Cherry, orange",
    image:"https://www.liquor.com/thmb/dgzIHBfisFS9cJfsKKR5hOrp3Fg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-1200x628-fb-39a9dc372c8b499a8c5a12fbd75d261a.jpg",
    fact:"One of the earliest “sour” templates recorded in the 1800s.",
    ingredients:[{amount:"2 oz",name:"Bourbon"},{amount:"0.75 oz",name:"Fresh lemon juice"},{amount:"0.5 oz",name:"Simple syrup"},{amount:"1",name:"Egg white (optional)"}],
    instructions:[
      "If using egg white: separate the egg, keeping only the white (no yolk). Add to shaker WITHOUT ice first",
      "Add bourbon, fresh lemon juice, and simple syrup to the shaker",
      "If using egg white: 'Dry shake' vigorously for 10 seconds without ice - this creates the foam",
      "Add ice to the shaker until it's about 3/4 full",
      "Shake hard for another 15 seconds until the outside of the shaker feels very cold",
      "Strain into a rocks glass over fresh ice (or serve 'up' without ice)",
      "Garnish with a cocktail cherry and a half-wheel of orange on the rim"
    ]}
,
  { id:22, name:"Mint Julep", category:"whiskey", glass:"Julep cup", garnish:"Mint bouquet",
    image:"https://www.liquor.com/thmb/iNad2_q2sHY0jrPmawaJg7cbyeQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mint-julep-1200x628-fb-e55426292aee465bb71479d979ec537e.jpg",
    fact:"Signature drink of the Kentucky Derby since 1938.",
    ingredients:[{amount:"2.5 oz",name:"Bourbon"},{amount:"0.5 oz",name:"Simple syrup"},{amount:"10",name:"Mint leaves"}],
    instructions:[
      "Gently muddle mint with simple syrup in a julep cup",
      "Fill the cup with crushed ice",
      "Add bourbon and stir until the cup frosts",
      "Top with more crushed ice",
      "Garnish with a mint bouquet"
    ]}
,
  { id:23, name:"Boulevardier", category:"whiskey", glass:"Rocks glass", garnish:"Orange peel",
    image:"https://www.liquor.com/thmb/LV0L3CF51hFJoSN-QdLe6ijXsFQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__09__12094720__Boulevardier-720x720-recipe-53da547e8cfc4bd79a393ac99891f5ba.jpg",
    fact:"A whiskey variation on the Negroni, popularized by Parisian ex‑pats.",
    ingredients:[{amount:"1.5 oz",name:"Bourbon or Rye"},{amount:"1 oz",name:"Campari"},{amount:"1 oz",name:"Sweet vermouth"}],
    instructions:[
      "Stir all ingredients with ice",
      "Strain over a large cube",
      "Garnish with orange peel"
    ]}
,
  { id:24, name:"Irish Coffee", category:"whiskey", glass:"Irish coffee glass", garnish:"Whipped cream",
    image:"https://www.liquor.com/thmb/inuGqDBx_LNPwfMjdoXXI9yKDa8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__02__22140200__irish-coffee-720x720-recipe1-b1ddbe38da014bdb9c21cb2b6fcc629f.jpg",
    fact:"Created in the 1940s to warm travelers at Shannon Airport, Ireland.",
    ingredients:[{amount:"1.5 oz",name:"Irish whiskey"},{amount:"4 oz",name:"Hot coffee"},{amount:"1 tsp",name:"Brown sugar"},{amount:"Top",name:"Lightly whipped cream"}],
    instructions:[
      "Warm the glass with hot water, then discard",
      "Add brown sugar and whiskey",
      "Fill with hot coffee and stir",
      "Float lightly whipped cream on top by pouring over a spoon"
    ]}
,
  { id:25, name:"Penicillin", category:"whiskey", glass:"Rocks glass", garnish:"Candied ginger",
    image:"https://www.liquor.com/thmb/rtEXgjasgYV6jA6ZC1xHEJf9QM0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penicillin-1200x628-email-91d83e512e58422b82b3beb7945b8a03.jpg",
    fact:"A modern classic created by Sam Ross in the early 2000s.",
    ingredients:[{amount:"2 oz",name:"Blended Scotch"},{amount:"0.75 oz",name:"Fresh lemon juice"},{amount:"0.75 oz",name:"Honey-ginger syrup"},{amount:"0.25 oz",name:"Islay Scotch (float)"}],
    instructions:[
      "Shake blended scotch, lemon juice, and honey-ginger syrup with ice",
      "Strain over a large cube in a rocks glass",
      "Float Islay scotch on top",
      "Garnish with candied ginger"
    ]}
,
  { id:26, name:"Rusty Nail", category:"whiskey", glass:"Rocks glass", garnish:"Lemon twist",
    image:"https://www.liquor.com/thmb/dLQgBu68viC2zMqSSHZ6WxEpJZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rusty-nail-1200x628-fb-40d3073774f34c76bc7f4765f3190282.jpg",
    fact:"Popular in the 1960s as a Scotch‑and‑Drambuie duo.",
    ingredients:[{amount:"2 oz",name:"Scotch whisky"},{amount:"0.75 oz",name:"Drambuie"}],
    instructions:[
      "Build in a rocks glass over ice",
      "Stir gently",
      "Garnish with lemon twist"
    ]}
,
  { id:27, name:"Rob Roy", category:"whiskey", glass:"Coupe glass", garnish:"Cherry",
    image:"https://www.liquor.com/thmb/EkLbemyc69OJmGIbqsxQ2Vc3X7Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rob-roy-1200x628-email-69c32003856e4a85ab140a8463fa8791.jpg",
    fact:"A Scotch-based Manhattan named after an 1890s operetta.",
    ingredients:[{amount:"2 oz",name:"Scotch"},{amount:"1 oz",name:"Sweet vermouth"},{amount:"2 dashes",name:"Angostura bitters"}],
    instructions:[
      "Stir all ingredients with ice",
      "Strain into a chilled coupe",
      "Garnish with a cherry"
    ]}
,
  { id:28, name:"Gold Rush", category:"whiskey", glass:"Rocks glass", garnish:"Lemon wheel",
    image:"https://www.liquor.com/thmb/2zn4MPTt9KymeRULZnWU28zjTA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gold-rush-1200x628-facebook-d1004fa2b1c647a1ac4bd41540c98322.jpg",
    fact:"A honeyed whiskey sour born at Milk & Honey in NYC.",
    ingredients:[{amount:"2 oz",name:"Bourbon"},{amount:"0.75 oz",name:"Fresh lemon juice"},{amount:"0.75 oz",name:"Honey syrup"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain over a large cube",
      "Garnish with lemon wheel"
    ]}
,
  { id:29, name:"Vieux Carré", category:"whiskey", glass:"Rocks glass", garnish:"Cherry, lemon twist",
    image:"https://www.liquor.com/thmb/3CjRa0o2hDkPoSGERsC6zfUqmIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__01__22125120__vieux-carre-720x720-recipe-a46b6cb491104bb99bebcc1284efdc05.jpg",
    fact:"Created at New Orleans’ Hotel Monteleone in the 1930s.",
    ingredients:[{amount:"1 oz",name:"Rye whiskey"},{amount:"1 oz",name:"Cognac"},{amount:"1 oz",name:"Sweet vermouth"},{amount:"2 dashes",name:"Peychaud’s bitters"},{amount:"2 dashes",name:"Angostura bitters"}],
    instructions:[
      "Stir all ingredients with ice",
      "Strain into a rocks glass over a large cube",
      "Garnish with cherry and lemon twist"
    ]}
,
  { id:30, name:"Paper Plane", category:"whiskey", glass:"Coupe glass", garnish:"Lemon twist",
    image:"https://www.liquor.com/thmb/Sl40h_FrSG_qzhJM0eDjelUk8qQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/paper-plane-1200x628-email-55ec3f146969415d851dcc4e9e82eee5.jpg",
    fact:"Created by Sam Ross in 2007; equal‑parts modern classic.",
    ingredients:[{amount:"0.75 oz",name:"Bourbon"},{amount:"0.75 oz",name:"Aperol"},{amount:"0.75 oz",name:"Amaro Nonino"},{amount:"0.75 oz",name:"Fresh lemon juice"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a chilled coupe",
      "Garnish with a lemon twist"
    ]}
,

  // VODKA
  { id:31, name:"Moscow Mule", category:"vodka", glass:"Copper mug", garnish:"Lime wheel, mint",
    image:"https://www.liquor.com/thmb/AJTtGuhRm4cZQ_gp8X0iplMbG0M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/moscow-mule-1200x628-fb-4e70ceada65a4e31b95f0c579e308f8e.jpg",
    fact:"Helped popularize vodka in the US in the 1940s.",
    ingredients:[{amount:"2 oz",name:"Vodka"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"4 oz",name:"Ginger beer",alt:"any brand - Fever-Tree, Bundaberg, Q Mixers, or ginger ale in a pinch"}],
    instructions:[
      "Fill a copper mug (or highball glass) with ice cubes to the top",
      "Pour vodka over the ice",
      "Squeeze half a lime into the mug (about 0.5 oz of juice) - you can drop the squeezed lime in too",
      "Top with ginger beer - pour slowly as it will fizz",
      "Stir gently with a bar spoon or straw just 2-3 times to mix",
      "Cut a wheel of lime and add it to the drink",
      "Slap a sprig of mint between your palms to release the aroma and place on top"
    ]}
,
  { id:32, name:"Cosmopolitan", category:"vodka", glass:"Martini glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/DDBPWp09xxOOimSS_kXAmUhZkio=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cosmopolitan-1934-1200x628-email-5fcad93b2f3747a7809e1c179d187ac1.jpg",
    fact:"Rose to fame in the 1990s and became a pop‑culture icon.",
    ingredients:[{amount:"1.5 oz",name:"Vodka"},{amount:"1 oz",name:"Cointreau",alt:"or Triple Sec, Grand Marnier, or any orange liqueur"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"0.25 oz",name:"Cranberry juice"}],
    instructions:[
      "Chill your martini glass in the freezer or fill with ice water",
      "Fill a shaker with ice",
      "Add vodka, Cointreau, fresh lime juice, and cranberry juice",
      "Shake vigorously for 15 seconds until the shaker is frosty cold",
      "Empty the ice water from your martini glass",
      "Strain the cocktail into the chilled glass - it should be a pretty pink color",
      "Cut a thin wheel of lime and float it on top, or make a small cut and perch it on the rim"
    ]}
,
  { id:33, name:"Bloody Mary", category:"vodka", glass:"Highball glass", garnish:"Celery, lemon",
    image:"https://www.liquor.com/thmb/ewZ5gNiJFXqCZXY4o43GFSbxTA0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bloody-mary-1200x628-fb-825e2c3d465f46ecb20ccaa57a5ac6dd.jpg",
    fact:"Often linked to Paris’ Harry’s New York Bar in the 1920s.",
    ingredients:[{amount:"2 oz",name:"Vodka"},{amount:"4 oz",name:"Tomato juice"},{amount:"0.5 oz",name:"Fresh lemon juice"},{amount:"2 dashes",name:"Worcestershire sauce"},{amount:"2 dashes",name:"Hot sauce"},{amount:"Pinch",name:"Salt and pepper"}],
    instructions:[
      "Fill a highball glass with ice",
      "Add vodka, tomato juice, lemon juice, and seasonings",
      "Stir gently to combine",
      "Garnish with celery and lemon"
    ]}
,
  { id:34, name:"Vodka Martini", category:"vodka", glass:"Martini glass", garnish:"Olive or lemon twist",
    image:"https://www.liquor.com/thmb/8WuGIEGEz2rcbNkChipUVEVXel0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dry-martini-1200x628-facebook-6902a617de3f40e5b72f6460f8d18f96.jpg",
    fact:"A modern twist that surged in popularity after World War II.",
    ingredients:[{amount:"2.5 oz",name:"Vodka"},{amount:"0.5 oz",name:"Dry vermouth"}],
    instructions:[
      "Stir vodka and vermouth with ice",
      "Strain into a chilled martini glass",
      "Garnish with olive or lemon twist"
    ]}
,
  { id:35, name:"White Russian", category:"vodka", glass:"Rocks glass", garnish:"None",
    image:"https://www.liquor.com/thmb/wzgqg2FC1Sqbwo_PAJofVVZIMRk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__12__20073201__white-russian-720x720-article-cbe4b9a832c64f8da0bb09407caefa7f.jpg",
    fact:"Popularized again by The Big Lebowski in the 1990s.",
    ingredients:[{amount:"2 oz",name:"Vodka"},{amount:"1 oz",name:"Kahlúa"},{amount:"1 oz",name:"Heavy cream"}],
    instructions:[
      "Build vodka and Kahlúa over ice in a rocks glass",
      "Float cream on top",
      "Stir gently if desired"
    ]}
,
  { id:36, name:"Black Russian", category:"vodka", glass:"Rocks glass", garnish:"None",
    image:"https://www.liquor.com/thmb/1CkHmUVYFcaiDkfiSeChhoB3wj0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-russian-1200x628-fb-9c575c4c58f84dcfbc862f4ff5c1e88d.jpg",
    fact:"Created in 1949 at the Hotel Métropole in Brussels.",
    ingredients:[{amount:"2 oz",name:"Vodka"},{amount:"1 oz",name:"Kahlúa"}],
    instructions:[
      "Build over ice in a rocks glass",
      "Stir gently"
    ]}
,
  { id:37, name:"Sex on the Beach", category:"vodka", glass:"Highball glass", garnish:"Orange slice",
    image:"https://www.liquor.com/thmb/ijULP_6vLSwj1ir7q5psZK12RnI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sex-on-the-Beach-1200x628-fb-616b62c0220c4994a36fc21001202ecd.jpg",
    fact:"A 1980s cocktail born from a peach schnapps promotion.",
    ingredients:[{amount:"1.5 oz",name:"Vodka"},{amount:"0.75 oz",name:"Peach schnapps"},{amount:"2 oz",name:"Cranberry juice"},{amount:"2 oz",name:"Orange juice"}],
    instructions:[
      "Fill a highball glass with ice",
      "Add vodka and peach schnapps",
      "Top with cranberry and orange juice",
      "Stir gently and garnish with orange"
    ]}
,
  { id:38, name:"Lemon Drop", category:"vodka", glass:"Coupe glass", garnish:"Sugar rim, lemon twist",
    image:"https://www.liquor.com/thmb/9mWv9dJoFV3s4ityitiiMTT33mg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lemon-drop-1200x628-fb-b28a979edf694b47b2899f937ecc6a03.jpg",
    fact:"Invented in San Francisco in the 1970s by Norman Jay Hobday.",
    ingredients:[{amount:"2 oz",name:"Vodka"},{amount:"0.75 oz",name:"Fresh lemon juice"},{amount:"0.75 oz",name:"Simple syrup"}],
    instructions:[
      "Rim a coupe with sugar",
      "Shake vodka, lemon juice, and syrup with ice",
      "Strain into the glass",
      "Garnish with lemon twist"
    ]}
,
  { id:39, name:"Screwdriver", category:"vodka", glass:"Highball glass", garnish:"Orange wedge",
    image:"https://www.liquor.com/thmb/bvHwc_oiBMo8RU7KtT8TNA6xd6g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LQR-screwdriver-facebook-1200x628-fc1acfc34a914274b8aacfaaef38a044.jpg",
    fact:"A simple two‑ingredient drink popular with American oil workers.",
    ingredients:[{amount:"2 oz",name:"Vodka"},{amount:"4 oz",name:"Orange juice"}],
    instructions:[
      "Fill a highball glass with ice",
      "Add vodka and orange juice",
      "Stir gently and garnish with orange"
    ]}
,
  { id:40, name:"Espresso Martini", category:"vodka", glass:"Martini glass", garnish:"Coffee beans",
    image:"https://www.liquor.com/thmb/aXfVFwaIc-eA1VdXeasCE-IokjI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/espresso-martini-1200x628-fb-5bac486a3a9a491cb5f4093699d5c2bc.jpg",
    fact:"Created in London in the 1980s as a “wake me up” cocktail.",
    ingredients:[{amount:"2 oz",name:"Vodka"},{amount:"1 oz",name:"Espresso"},{amount:"0.5 oz",name:"Coffee liqueur"},{amount:"0.25 oz",name:"Simple syrup"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a chilled martini glass",
      "Garnish with coffee beans"
    ]}
,

  // GIN
  { id:41, name:"Gin & Tonic", category:"gin", glass:"Highball glass", garnish:"Lime wedge",
    image:"https://www.liquor.com/thmb/69iLA4YryCzu3pV0rUmHvpn65u8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2014__06__23152435__garden-gin-tonic-720-720-recipe-e0ee3b2d42cb4146993e23352a0eba7e.png",
    fact:"Originally a way for British soldiers to take quinine for malaria.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"4 oz",name:"Tonic water",alt:"any brand - Fever-Tree, Q Mixers, Schweppes, Canada Dry"}],
    instructions:[
      "Fill a highball glass all the way to the top with ice - more ice = less dilution",
      "Pour gin over the ice",
      "Slowly pour tonic water down the side of the glass (pouring directly onto ice makes it go flat faster)",
      "Stir very gently just once or twice - over-stirring releases the carbonation",
      "Cut a lime into wedges",
      "Squeeze one wedge over the drink and drop it in",
      "Serve immediately while the tonic is still fizzy"
    ]}
,
  { id:42, name:"French 75", category:"gin", glass:"Champagne flute", garnish:"Lemon twist",
    image:"https://www.liquor.com/thmb/sfIzvGbdKk8kv8rYRIDHachFSA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__08125856__French-75-720x720-recipe-d06f001e37a546d7a23309fdd7970a71.jpg",
    fact:"Named after the French 75mm field gun from World War I.",
    ingredients:[{amount:"1 oz",name:"Gin"},{amount:"0.5 oz",name:"Fresh lemon juice"},{amount:"0.5 oz",name:"Simple syrup"},{amount:"3 oz",name:"Champagne",alt:"or Prosecco, Cava, or any dry sparkling wine"}],
    instructions:[
      "Fill a shaker with ice",
      "Add gin, fresh lemon juice, and simple syrup",
      "Shake for 10-12 seconds until well chilled",
      "Strain into a champagne flute (no ice in the glass)",
      "Top slowly with champagne - it will fizz, so pour in stages",
      "Cut a strip of lemon peel (about 2 inches long)",
      "Twist the peel over the drink to release the oils, then drop it in or drape over the rim"
    ]}
,
  { id:43, name:"Tom Collins", category:"gin", glass:"Highball glass", garnish:"Lemon wheel, cherry",
    image:"https://www.liquor.com/thmb/RevbzF64LZA4n0NvJe_pxfEMDoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LQR-tomcollins-facebook-1200x628-495b7f84e8a54cfba7d6475b335ee313.jpg",
    fact:"The drink’s name was part of a 19th‑century prank.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"1 oz",name:"Fresh lemon juice"},{amount:"0.75 oz",name:"Simple syrup"},{amount:"Top",name:"Soda water"}],
    instructions:[
      "Build gin, lemon, and syrup in a highball with ice",
      "Stir briefly",
      "Top with soda water",
      "Garnish with lemon wheel and cherry"
    ]}
,
  { id:44, name:"Gimlet", category:"gin", glass:"Coupe glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/aqoDnGpH8A1CP4QYNDXDRbCkmXU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vodka-Gimlet-1200x628-fb-2eb126c678014cac910dc1900165d395.jpg",
    fact:"Classically made with gin and lime cordial.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"0.75 oz",name:"Fresh lime juice"},{amount:"0.5 oz",name:"Simple syrup"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a chilled coupe",
      "Garnish with lime wheel"
    ]}
,
  { id:45, name:"Aviation", category:"gin", glass:"Coupe glass", garnish:"Cherry",
    image:"https://www.liquor.com/thmb/mEWNuYxDNMMDtVjmAPw2NWlBwV8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__04__26123002__takumis-aviation-720x720-recipe-03c33765bf3348efa572f6548a77c107.jpg",
    fact:"Named for its sky‑blue hue from crème de violette.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"0.5 oz",name:"Maraschino liqueur"},{amount:"0.25 oz",name:"Crème de violette"},{amount:"0.75 oz",name:"Fresh lemon juice"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a chilled coupe",
      "Garnish with a cherry"
    ]}
,
  { id:46, name:"Bee's Knees", category:"gin", glass:"Coupe glass", garnish:"Lemon twist",
    image:"https://www.liquor.com/thmb/NFzw_JJliBofheniy_KceB35msc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bees-Knees-1200x628-email-94cb57d3a84640c9923846445241f112.jpg",
    fact:"A Prohibition‑era drink designed to sweeten rough gin.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"0.75 oz",name:"Fresh lemon juice"},{amount:"0.75 oz",name:"Honey syrup"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a chilled coupe",
      "Garnish with lemon twist"
    ]}
,
  { id:47, name:"Last Word", category:"gin", glass:"Coupe glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/RdJyoC37-GZ4B5kdVHJmwcahxAI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/last-word-1200x628-email-f866f44480554c9790c6c4c389158f80.jpg",
    fact:"Originally from the Detroit Athletic Club, revived in the 2000s.",
    ingredients:[{amount:"0.75 oz",name:"Gin"},{amount:"0.75 oz",name:"Green Chartreuse"},{amount:"0.75 oz",name:"Maraschino liqueur"},{amount:"0.75 oz",name:"Fresh lime juice"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a chilled coupe",
      "Garnish with a lime wheel"
    ]}
,
  { id:48, name:"Clover Club", category:"gin", glass:"Coupe glass", garnish:"Raspberry",
    image:"https://www.liquor.com/thmb/s8OsksNKpFdHfiOWslwAW4RLf6w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/clover-club-1200x628-email-8c26fd0b990c47d3a10d341c2f41937c.jpg",
    fact:"A pink gin sour that dates back to the late 1800s.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"0.75 oz",name:"Fresh lemon juice"},{amount:"0.5 oz",name:"Raspberry syrup"},{amount:"1",name:"Egg white"}],
    instructions:[
      "Dry shake all ingredients",
      "Add ice and shake again",
      "Strain into a coupe",
      "Garnish with a raspberry"
    ]}
,
  { id:49, name:"Southside", category:"gin", glass:"Coupe glass", garnish:"Mint",
    image:"https://www.liquor.com/thmb/3B0SKxg9f3bbR_reOlPMsu4YIOI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__07__22142840__South-Side-720x720-Recipe-526df20e4f354afdae6c039b0fd970bc.jpg",
    fact:"A minty gin sour rumored to be popular during Prohibition.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"0.75 oz",name:"Fresh lime juice"},{amount:"0.5 oz",name:"Simple syrup"},{amount:"8",name:"Mint leaves"}],
    instructions:[
      "Gently muddle mint with syrup",
      "Add gin and lime, shake with ice",
      "Double strain into a chilled coupe",
      "Garnish with mint"
    ]}
,
  { id:50, name:"Bramble", category:"gin", glass:"Rocks glass", garnish:"Blackberries",
    image:"https://www.liquor.com/thmb/ZRCHjYLpibXZoZYt8sVv5iE_06Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bramble-1200x628-email-c38419cb6ae54fb4a1c1f3dc89d25dcb.jpg",
    fact:"Created in London in the 1980s by Dick Bradsell.",
    ingredients:[{amount:"2 oz",name:"Gin"},{amount:"0.75 oz",name:"Fresh lemon juice"},{amount:"0.5 oz",name:"Simple syrup"},{amount:"0.5 oz",name:"Crème de mûre"}],
    instructions:[
      "Shake gin, lemon, and syrup with ice",
      "Strain into a rocks glass over crushed ice",
      "Drizzle crème de mûre on top",
      "Garnish with blackberries"
    ]}
,

  // TEQUILA
  { id:51, name:"Margarita", category:"tequila", glass:"Margarita glass", garnish:"Lime wheel, salt rim",
    image:"https://www.liquor.com/thmb/4xgH0GOU4AA22rFYH0u6S4Jk2VU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-basil-margarita-1200x628-email-3744d57d19cc46a2a65d6fb50564d4fb.jpg",
    fact:"Multiple origin stories exist; it rose to fame mid‑20th century.",
    ingredients:[{amount:"2 oz",name:"Tequila blanco"},{amount:"1 oz",name:"Fresh lime juice"},{amount:"1 oz",name:"Cointreau",alt:"or Triple Sec, Grand Marnier, Combier, or any orange liqueur"}],
    instructions:[
      "To salt the rim: rub a lime wedge around the outer edge of the glass, then dip the rim in a plate of coarse salt (only salt the outer rim so it doesn't fall into the drink)",
      "Fill a shaker with ice",
      "Add tequila, fresh lime juice, and Cointreau",
      "Shake hard for 15 seconds until the shaker is very cold",
      "Fill your margarita glass (or rocks glass) with fresh ice",
      "Strain the cocktail over the ice",
      "Cut a wheel of lime and place on the rim"
    ]}
,
  { id:52, name:"Paloma", category:"tequila", glass:"Highball glass", garnish:"Grapefruit wedge",
    image:"https://www.liquor.com/thmb/yd3VVok0APVUPR_W1xQ2U8p2g9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/paloma-1200x628-fb-020c507be1e64ad496b8e91e52373c83.jpg",
    fact:"Often considered Mexico’s favorite tequila highball.",
    ingredients:[{amount:"2 oz",name:"Tequila"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"4 oz",name:"Grapefruit soda",alt:"Jarritos, Squirt, Fresca, or fresh grapefruit juice + soda water"}],
    instructions:[
      "Optional: salt the rim by rubbing with lime and dipping in salt",
      "Fill a highball glass with ice cubes to the top",
      "Pour tequila over the ice",
      "Add fresh lime juice",
      "Top with grapefruit soda - pour slowly to keep the fizz",
      "Stir gently once or twice",
      "Cut a wedge of grapefruit and add to the glass, or place on the rim"
    ]}
,
  { id:53, name:"Tequila Sunrise", category:"tequila", glass:"Highball glass", garnish:"Orange slice",
    image:"https://www.liquor.com/thmb/RQRwhSnK9p6wafwwyQsqAMJvD1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tequila-sunrise-1200x628-fb-0751708962f94b0d972e33c078fcf77d.jpg",
    fact:"The layered look made it a 1970s brunch classic.",
    ingredients:[{amount:"2 oz",name:"Tequila"},{amount:"4 oz",name:"Orange juice"},{amount:"0.5 oz",name:"Grenadine"}],
    instructions:[
      "Fill a highball glass with ice",
      "Add tequila and orange juice",
      "Slowly pour grenadine to sink to the bottom",
      "Do not stir for a layered effect",
      "Garnish with an orange slice"
    ]}
,
  { id:54, name:"El Diablo", category:"tequila", glass:"Highball glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/Q6X4K4hgm9xC1GNW9VxztJKqPbk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/el-diablo-1200x628-email-e3b580e02d1b4222a3a40516cc657cd6.jpg",
    fact:"A classic pairing tequila with ginger beer and crème de cassis.",
    ingredients:[{amount:"2 oz",name:"Tequila"},{amount:"0.5 oz",name:"Crème de cassis"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"Top",name:"Ginger beer"}],
    instructions:[
      "Build tequila, cassis, and lime in a highball with ice",
      "Top with ginger beer",
      "Stir gently and garnish with lime"
    ]}
,
  { id:55, name:"Ranch Water", category:"tequila", glass:"Highball glass", garnish:"Lime wedge",
    image:"https://www.liquor.com/thmb/xM0oSb5fVLDgNqvL-b805JlPFdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__12__16083833__The-Kickin-Mule-at-Triple-Creek-Ranch_article_720x720-c4d2ac567f10410bb48f73a04e993d8d.jpg",
    fact:"A West Texas staple made for hot days.",
    ingredients:[{amount:"2 oz",name:"Tequila blanco"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"Top",name:"Sparkling mineral water"}],
    instructions:[
      "Fill a highball glass with ice",
      "Add tequila and lime juice",
      "Top with sparkling water",
      "Stir gently and garnish with lime"
    ]}
,
  { id:56, name:"Tommy's Margarita", category:"tequila", glass:"Rocks glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/GWzZrFTthO-EBJtv-B6bzY0xfqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tommys-margarita-1200x628-fb-51db3a4b6b6b454c8d7f10ed6a1365e0.jpg",
    fact:"Created at Tommy’s in San Francisco, swapping orange liqueur for agave.",
    ingredients:[{amount:"2 oz",name:"Tequila blanco"},{amount:"1 oz",name:"Fresh lime juice"},{amount:"0.75 oz",name:"Agave syrup"}],
    instructions:[
      "Shake tequila, lime, and agave with ice",
      "Strain into a rocks glass over ice",
      "Garnish with lime wheel"
    ]}
,
  { id:57, name:"Mexican Mule", category:"tequila", glass:"Copper mug", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/UmHxdnKguJT7roL_0ZewDbPD_ac=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mule-1200x628-email-4a366063a43d4cc08aa59f49ca1dac52.jpg",
    fact:"A tequila twist on the Moscow Mule.",
    ingredients:[{amount:"2 oz",name:"Tequila"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"4 oz",name:"Ginger beer"}],
    instructions:[
      "Build in a mug over ice",
      "Top with ginger beer",
      "Stir gently and garnish with lime"
    ]}
,
  { id:58, name:"Bloody Maria", category:"tequila", glass:"Highball glass", garnish:"Celery",
    image:"https://www.liquor.com/thmb/0P1LnBBJ2iauYHmlYUl5d4us1zo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bloody-maria-1200x628-fb-bafda570a010489087a26ab3e14e78f5.jpg",
    fact:"A tequila swap for the Bloody Mary, popular in the Southwest.",
    ingredients:[{amount:"2 oz",name:"Tequila"},{amount:"4 oz",name:"Tomato juice"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"2 dashes",name:"Worcestershire sauce"},{amount:"2 dashes",name:"Hot sauce"}],
    instructions:[
      "Build all ingredients over ice in a highball",
      "Stir gently",
      "Garnish with celery"
    ]}
,
  { id:59, name:"Batanga", category:"tequila", glass:"Highball glass", garnish:"Lime wedge",
    image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    fact:"A Mexican classic: tequila, cola, and lime in a salt‑rimmed glass.",
    ingredients:[{amount:"2 oz",name:"Tequila"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"Top",name:"Cola"}],
    instructions:[
      "Salt the rim of a highball",
      "Fill with ice",
      "Add tequila and lime",
      "Top with cola and stir"
    ]}
,
  { id:60, name:"Oaxaca Old Fashioned", category:"tequila", glass:"Rocks glass", garnish:"Orange peel",
    image:"https://www.liquor.com/thmb/735m2YlHhBELOg_5SiTel3Cjyv0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oaxacan-old-fashioned-1200x628-email-9ca3f881ff1248f7b2e031de21c4ac93.jpg",
    fact:"A modern classic featuring mezcal and tequila, created in NYC.",
    ingredients:[{amount:"1.5 oz",name:"Reposado tequila"},{amount:"0.5 oz",name:"Mezcal"},{amount:"0.25 oz",name:"Agave syrup"},{amount:"2 dashes",name:"Angostura bitters"}],
    instructions:[
      "Stir all ingredients with ice",
      "Strain over a large cube",
      "Garnish with orange peel"
    ]}
,

  // RUM
  { id:61, name:"Mojito", category:"rum", glass:"Highball glass", garnish:"Mint sprig, lime",
    image:"https://www.liquor.com/thmb/xHC_wDmcs_8w7gCXumBYDWOJlCo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winter-mojito-1200x628-email-49bc03bd8ee142b7b1f2d5816b4a5fc5.jpg",
    fact:"Often linked to Havana and Cuban cocktail culture.",
    ingredients:[{amount:"2 oz",name:"White rum"},{amount:"1 oz",name:"Fresh lime juice"},{amount:"0.75 oz",name:"Simple syrup"},{amount:"8-10",name:"Mint leaves"},{amount:"Top",name:"Soda water"}],
    instructions:[
      "Add mint leaves to the bottom of a highball glass",
      "Add lime juice and simple syrup",
      "Gently muddle (press and twist) the mint 5-6 times - don't shred it, just bruise it to release oils",
      "Add the rum and stir to combine",
      "Fill the glass with ice",
      "Top with soda water and stir gently",
      "Slap a fresh sprig of mint between your palms (this releases the aroma) and add as garnish",
      "Add a lime wheel and serve with a straw"
    ]}
,
  { id:62, name:"Daiquiri", category:"rum", glass:"Coupe glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/T7XT7LGJjfm3iP5SYoHWeS-yCGk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/daiquiri-1200x628-email-ba2630027a70498b878ca8180183a779.jpg",
    fact:"Named after a Cuban mining town and favored by Hemingway.",
    ingredients:[{amount:"2 oz",name:"White rum"},{amount:"1 oz",name:"Fresh lime juice"},{amount:"0.75 oz",name:"Simple syrup"}],
    instructions:[
      "Chill your coupe glass in the freezer or fill with ice water",
      "Fill a shaker with ice",
      "Add white rum, fresh lime juice (must be fresh, not bottled), and simple syrup",
      "Shake vigorously for 15 seconds until the shaker is frosty cold",
      "Empty your coupe glass if it has ice water in it",
      "Strain into the chilled coupe - there should be no ice in the glass",
      "Float a thin lime wheel on top of the drink"
    ]}
,
  { id:63, name:"Dark 'n Stormy", category:"rum", glass:"Highball glass", garnish:"Lime wedge",
    image:"https://www.liquor.com/thmb/MrhZzY6oOFD4xikfHf-4NTHYKwY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dark-n-stormy-1200x628-email-c22a0356e0f54cbda2bfe53de9fc8dab.jpg",
    fact:"Trademarked by Gosling’s and linked to Bermuda.",
    ingredients:[{amount:"2 oz",name:"Dark rum"},{amount:"4 oz",name:"Ginger beer"},{amount:"0.5 oz",name:"Fresh lime juice"}],
    instructions:[
      "Fill a highball with ice",
      "Add ginger beer and lime juice",
      "Float dark rum on top",
      "Garnish with lime"
    ]}
,
  { id:64, name:"Cuba Libre", category:"rum", glass:"Highball glass", garnish:"Lime wedge",
    image:"https://www.liquor.com/thmb/cpSgrrmR7SDnFDfvI150WYsF-Fo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__01__02105149__Cuba-Libre-720x720-recipe-673b48bbef034d89b6b5149b8417c7d5.jpg",
    fact:"Meaning “Free Cuba,” it became popular after the Spanish‑American War.",
    ingredients:[{amount:"2 oz",name:"White rum"},{amount:"0.5 oz",name:"Fresh lime juice"},{amount:"Top",name:"Cola"}],
    instructions:[
      "Fill a highball with ice",
      "Add rum and lime juice",
      "Top with cola and stir",
      "Garnish with lime wedge"
    ]}
,
  { id:65, name:"Hurricane", category:"rum", glass:"Hurricane glass", garnish:"Orange, cherry",
    image:"https://www.liquor.com/thmb/QXSgZpZjavEmQ7t0m-QamrAJkao=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hurricane-1200x628-fb-5634ff033fa744ccb08eb779efecabe1.jpg",
    fact:"Created at Pat O’Brien’s in New Orleans.",
    ingredients:[{amount:"2 oz",name:"Light rum"},{amount:"2 oz",name:"Dark rum"},{amount:"2 oz",name:"Passion fruit syrup"},{amount:"1 oz",name:"Fresh lime juice"}],
    instructions:[
      "Shake all ingredients with ice",
      "Pour into a hurricane glass over ice",
      "Garnish with orange and cherry"
    ]}
,
  { id:66, name:"Planter's Punch", category:"rum", glass:"Highball glass", garnish:"Orange slice",
    image:"https://www.liquor.com/thmb/5YCaNXWLJcGjhpQdZJKdBYs5NS0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__02__14093314__planters-punch-720x720-recipe-b588afaf107743f88f79db8f7c386e83.jpg",
    fact:"A classic Caribbean punch dating back to the 1800s.",
    ingredients:[{amount:"2 oz",name:"Dark rum"},{amount:"1 oz",name:"Pineapple juice"},{amount:"0.75 oz",name:"Fresh lime juice"},{amount:"0.5 oz",name:"Simple syrup"},{amount:"2 dashes",name:"Angostura bitters"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a highball over ice",
      "Garnish with orange slice"
    ]}
,
  { id:67, name:"Caipirinha", category:"rum", glass:"Rocks glass", garnish:"Lime",
    image:"https://www.liquor.com/thmb/_f3guTFAfNtPIHBZnAvxTOcjWxg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caipirnha-1200x628-email-466cff85e3aa4b2293219cf32af78c26.jpg",
    fact:"Brazil’s national cocktail traditionally uses cachaça.",
    ingredients:[{amount:"2 oz",name:"Cachaça"},{amount:"0.75 oz",name:"Simple syrup"},{amount:"1",name:"Lime (cut into wedges)"}],
    instructions:[
      "Muddle lime wedges with syrup in a rocks glass",
      "Fill with ice",
      "Add cachaça and stir"
    ]}
,
  { id:68, name:"Rum Old Fashioned", category:"rum", glass:"Rocks glass", garnish:"Orange peel",
    image:"https://www.liquor.com/thmb/9X11Qd6xLwkdMhMx-0_NE6OsF3w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rum-old-fashioned_fb_1200x628-b177e872c01649e284ec3ecf7d0504dc.jpg",
    fact:"A tropical twist on the classic old fashioned template.",
    ingredients:[{amount:"2 oz",name:"Aged rum"},{amount:"0.25 oz",name:"Demerara syrup"},{amount:"2 dashes",name:"Angostura bitters"}],
    instructions:[
      "Stir rum, syrup, and bitters with ice",
      "Strain over a large cube",
      "Garnish with orange peel"
    ]}
,
  { id:69, name:"Painkiller", category:"rum", glass:"Hurricane glass", garnish:"Nutmeg",
    image:"https://www.liquor.com/thmb/qUOVau1qIgZL6-q1v9ONM9MiI_g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/painkiller-1200x628-fb-629cee6ebe2a4c67bae33b31cdf3d5bf.jpg",
    fact:"Best known from the British Virgin Islands.",
    ingredients:[{amount:"2 oz",name:"Dark rum"},{amount:"4 oz",name:"Pineapple juice"},{amount:"1 oz",name:"Orange juice"},{amount:"1 oz",name:"Coconut cream"}],
    instructions:[
      "Shake all ingredients with ice",
      "Pour into a hurricane glass over ice",
      "Grate nutmeg on top"
    ]}
,
  { id:70, name:"Rum Punch", category:"rum", glass:"Highball glass", garnish:"Nutmeg, lime",
    image:"https://www.liquor.com/thmb/jxt3eFf3JhF7cDH6eKCdboPccak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rum-Punch-1200x628-fb-e806f6e1a08049c78e7cacaf0df06af2.jpg",
    fact:"Traditional Caribbean recipe remembered by the rhyme “one of sour…”",
    ingredients:[{amount:"2 oz",name:"Dark rum"},{amount:"1 oz",name:"Fresh lime juice"},{amount:"1 oz",name:"Pineapple juice"},{amount:"0.5 oz",name:"Grenadine"}],
    instructions:[
      "Shake with ice",
      "Pour into a highball over ice",
      "Garnish with nutmeg and lime"
    ]}
,

  // MOCKTAILS
  { id:71, name:"Virgin Mojito", category:"mocktails", glass:"Highball glass", garnish:"Mint, lime",
    image:"https://www.liquor.com/thmb/nQVgicFhnBLzsOwFA2EjJl_EzrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mint-basil-Limeade-1200x628-email-e220c0b18fd9406fbca6f618b8ae2fbe.jpg",
    fact:"A non‑alcoholic take on the Cuban classic.",
    ingredients:[{amount:"1 oz",name:"Fresh lime juice"},{amount:"0.75 oz",name:"Simple syrup"},{amount:"10-12",name:"Mint leaves"},{amount:"Top",name:"Soda water"}],
    instructions:[
      "Add mint leaves to a highball glass",
      "Pour in lime juice and simple syrup",
      "Use a muddler or the back of a spoon to gently press the mint 5-6 times (don't tear it apart)",
      "Fill the glass with ice cubes",
      "Top with soda water, leaving a little room at the top",
      "Stir gently to combine everything",
      "Slap a fresh mint sprig between your hands and add to the top",
      "Add a lime wheel and serve with a straw"
    ]}
,
  { id:72, name:"Shirley Temple", category:"mocktails", glass:"Highball glass", garnish:"Cherry, orange",
    image:"https://www.liquor.com/thmb/4BXtpUtJyBIQEyr4fQW2VuKO8Bw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shirley-temple-1200x628-email-cf9a8c3ce5b941a191bff64edda65219.jpg",
    fact:"Named after the child star; its real inventor remains debated.",
    ingredients:[{amount:"4 oz",name:"Ginger ale"},{amount:"4 oz",name:"Lemon-lime soda",alt:"Sprite, 7-Up, Sierra Mist, or any lemon-lime soda"},{amount:"1 oz",name:"Grenadine",alt:"any brand, or make your own with pomegranate juice + sugar"}],
    instructions:[
      "Fill a highball glass with ice cubes",
      "Pour ginger ale halfway up the glass",
      "Add lemon-lime soda until the glass is nearly full",
      "Slowly pour grenadine down the inside edge of the glass - it will sink to the bottom and create a gradient effect",
      "Don't stir if you want the layered look, or stir once for even pink color",
      "Add a cocktail cherry and an orange slice on the rim",
      "Serve with a straw"
    ]}
,
  { id:73, name:"Virgin Mary", category:"mocktails", glass:"Highball glass", garnish:"Celery, lemon",
    image:"https://images.unsplash.com/photo-1541976076758-347942db1970?w=400&h=300&fit=crop",
    fact:"A booze‑free Bloody Mary that keeps the savory spice.",
    ingredients:[{amount:"4 oz",name:"Tomato juice"},{amount:"0.5 oz",name:"Fresh lemon juice"},{amount:"2 dashes",name:"Worcestershire sauce"},{amount:"2 dashes",name:"Hot sauce"},{amount:"Pinch",name:"Salt and pepper"}],
    instructions:[
      "Build all ingredients over ice",
      "Stir gently",
      "Garnish with celery and lemon"
    ]}
,
  { id:74, name:"Cucumber Cooler", category:"mocktails", glass:"Highball glass", garnish:"Cucumber ribbon",
    image:"https://www.liquor.com/thmb/u43XDb197hSTmISMAecYGg6TP7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__10__29142721__pimms-cup-720x720-recipe-e0c8e82adb6249a898be85f4136f3643.jpg",
    fact:"A spa‑style refresher with crisp cucumber notes.",
    ingredients:[{amount:"4 oz",name:"Soda water"},{amount:"1 oz",name:"Fresh lime juice"},{amount:"0.75 oz",name:"Simple syrup"},{amount:"4",name:"Cucumber slices"}],
    instructions:[
      "Muddle cucumber slices with syrup",
      "Add lime juice and ice",
      "Top with soda water and stir",
      "Garnish with cucumber ribbon"
    ]}
,
  { id:75, name:"Pineapple Ginger Fizz", category:"mocktails", glass:"Highball glass", garnish:"Pineapple wedge",
    image:"https://www.liquor.com/thmb/vLel-HaI_2Jurbe3lS85dQWKnQg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jamaican-breeze-1200x628-fb-63ad8c594ab6410499165e5c281b008d.jpg",
    fact:"A bright tropical fizz with ginger heat.",
    ingredients:[{amount:"3 oz",name:"Pineapple juice"},{amount:"1 oz",name:"Fresh lime juice"},{amount:"Top",name:"Ginger beer"}],
    instructions:[
      "Fill a highball with ice",
      "Add pineapple and lime",
      "Top with ginger beer and stir",
      "Garnish with pineapple"
    ]}
,
  { id:76, name:"Citrus Spritz", category:"mocktails", glass:"Wine glass", garnish:"Orange wheel",
    image:"https://www.liquor.com/thmb/xYpWGHkqawrYDW2XvZNYeeavUFY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__01__30091927__cbd-spritz-720x720-article-fe1cc76432554aa68193a428dd80fc73.jpg",
    fact:"Inspired by Italian spritzes without the alcohol.",
    ingredients:[{amount:"2 oz",name:"Orange juice"},{amount:"1 oz",name:"Fresh lemon juice"},{amount:"Top",name:"Soda water"}],
    instructions:[
      "Fill a wine glass with ice",
      "Add citrus juices",
      "Top with soda water and stir",
      "Garnish with orange wheel"
    ]}
,
  { id:77, name:"Arnold Palmer", category:"mocktails", glass:"Highball glass", garnish:"Lemon wedge",
    image:"https://www.liquor.com/thmb/4lPLCbAsQiLGgRpkWOsSBg7yI-E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/liber-tea-1200x628-email-7d07a13d56e743698e8b32d0b35f3cc3.jpg",
    fact:"Named after the golf legend who loved iced tea and lemonade.",
    ingredients:[{amount:"4 oz",name:"Iced tea"},{amount:"4 oz",name:"Lemonade"}],
    instructions:[
      "Fill a glass with ice",
      "Add iced tea and lemonade",
      "Stir gently",
      "Garnish with lemon wedge"
    ]}
,
  { id:78, name:"Sparkling Berry", category:"mocktails", glass:"Highball glass", garnish:"Mixed berries",
    image:"https://www.liquor.com/thmb/GfVJ1WTxDH6RZoPxpqsJSC5HJd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__04__09130652__sparkling-rose-margarita-punch-720x720-article-04c505929d014bfc9ed5920fcb565615.jpg",
    fact:"A soda‑shop style fizz with berry brightness.",
    ingredients:[{amount:"2 oz",name:"Mixed berry puree"},{amount:"1 oz",name:"Fresh lemon juice"},{amount:"Top",name:"Soda water"}],
    instructions:[
      "Add berry puree and lemon to a glass with ice",
      "Top with soda water",
      "Stir gently and garnish with berries"
    ]}
,
  { id:79, name:"Tropical Sunrise", category:"mocktails", glass:"Highball glass", garnish:"Orange slice",
    image:"https://www.liquor.com/thmb/RQRwhSnK9p6wafwwyQsqAMJvD1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tequila-sunrise-1200x628-fb-0751708962f94b0d972e33c078fcf77d.jpg",
    fact:"A layered mocktail inspired by the Tequila Sunrise look.",
    ingredients:[{amount:"4 oz",name:"Orange juice"},{amount:"0.5 oz",name:"Grenadine"},{amount:"1 oz",name:"Pineapple juice"}],
    instructions:[
      "Fill a glass with ice",
      "Add orange and pineapple juice",
      "Slowly pour grenadine to sink",
      "Garnish with orange"
    ]}
,
  { id:80, name:"Spiced Apple Fizz", category:"mocktails", glass:"Highball glass", garnish:"Apple slice",
    image:"https://www.liquor.com/thmb/c5naybHFRdlR3Jp_P9kh2IPkOjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spiced-apple-fizz-1200x628-fb-3a46abba268c46088838f2e8cccd03af.jpg",
    fact:"Apple and spice is a classic fall pairing turned fizzy.",
    ingredients:[{amount:"4 oz",name:"Apple cider"},{amount:"0.5 oz",name:"Fresh lemon juice"},{amount:"Top",name:"Soda water"}],
    instructions:[
      "Fill a glass with ice",
      "Add apple cider and lemon",
      "Top with soda water and stir",
      "Garnish with apple slice"
    ]},
  { id:101, name:"Chocolate Milk", category:"mocktails", glass:"Highball glass", garnish:"Whipped cream",
    image:"https://upload.wikimedia.org/wikipedia/commons/4/46/Chocolate_milk.jpg",
    fact:"A classic kid favorite that doubles as a nostalgic dessert drink.",
    ingredients:[{amount:"6 oz",name:"Cold milk"},{amount:"2 tbsp",name:"Chocolate syrup",alt:"or cocoa + sugar"}],
    instructions:[
      "Add milk and chocolate syrup to a tall glass",
      "Stir until fully combined and smooth",
      "Top with whipped cream if desired",
      "Serve with a straw"
    ]},
  { id:102, name:"Strawberry Milk", category:"mocktails", glass:"Highball glass", garnish:"Strawberry slice",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Strawberry_Milk_in_a_glass_cup..jpg",
    fact:"Strawberry milk became a lunchroom staple in the mid-20th century.",
    ingredients:[{amount:"6 oz",name:"Cold milk"},{amount:"2 tbsp",name:"Strawberry syrup",alt:"or blended strawberries + sugar"}],
    instructions:[
      "Add milk and strawberry syrup to a tall glass",
      "Stir until evenly pink",
      "Garnish with a strawberry slice",
      "Serve chilled"
    ]},
  { id:103, name:"Cookies & Cream Shake", category:"mocktails", glass:"Milkshake glass", garnish:"Cookie crumble",
    image:"https://upload.wikimedia.org/wikipedia/commons/2/23/Oreo_Milkshake.JPG",
    fact:"Cookie-and-cream flavors became a soda-shop favorite in the 1970s.",
    ingredients:[{amount:"6 oz",name:"Vanilla ice cream"},{amount:"3 oz",name:"Milk"},{amount:"3",name:"Chocolate sandwich cookies"}],
    instructions:[
      "Add ice cream, milk, and cookies to a blender",
      "Blend until smooth with small cookie bits",
      "Pour into a milkshake glass",
      "Top with cookie crumble"
    ]},
  { id:104, name:"Vanilla Milkshake", category:"mocktails", glass:"Milkshake glass", garnish:"Whipped cream",
    image:"https://upload.wikimedia.org/wikipedia/commons/2/29/Vanilla_milkshake.jpg",
    fact:"Milkshakes became a soda-fountain icon in the early 1900s.",
    ingredients:[{amount:"6 oz",name:"Vanilla ice cream"},{amount:"3 oz",name:"Milk"},{amount:"1 tsp",name:"Vanilla extract"}],
    instructions:[
      "Add ice cream, milk, and vanilla to a blender",
      "Blend until smooth and thick",
      "Pour into a milkshake glass",
      "Top with whipped cream if desired"
    ]},
  { id:105, name:"Hot Chocolate", category:"mocktails", glass:"Mug", garnish:"Whipped cream, cocoa",
    image:"https://upload.wikimedia.org/wikipedia/commons/1/14/Hot_chocolate_mug_with_whipped_cream.jpg",
    fact:"Hot chocolate traces back to early cacao drinks in Mesoamerica.",
    ingredients:[{amount:"8 oz",name:"Milk"},{amount:"2 tbsp",name:"Cocoa powder"},{amount:"1.5 tbsp",name:"Sugar"},{amount:"Pinch",name:"Salt"}],
    instructions:[
      "Warm milk in a small pot over medium heat",
      "Whisk in cocoa, sugar, and salt until smooth",
      "Heat until steaming, then pour into a mug",
      "Top with whipped cream and a dusting of cocoa"
    ]},
  { id:106, name:"Strawberry Lemonade", category:"mocktails", glass:"Highball glass", garnish:"Strawberry, lemon wheel",
    image:"https://upload.wikimedia.org/wikipedia/commons/c/c9/Lemonade_with_strawberry.jpg",
    fact:"Strawberry lemonade is a summer stand favorite across the U.S.",
    ingredients:[{amount:"4 oz",name:"Lemonade"},{amount:"2 oz",name:"Strawberry puree"},{amount:"Top",name:"Ice"}],
    instructions:[
      "Fill a glass with ice",
      "Add strawberry puree and lemonade",
      "Stir gently to combine",
      "Garnish with a strawberry and lemon wheel"
    ]},
  { id:107, name:"Classic Lemonade", category:"mocktails", glass:"Highball glass", garnish:"Lemon wheel",
    image:"https://upload.wikimedia.org/wikipedia/commons/f/f2/Lemon_drink.jpg",
    fact:"Lemonade has been served as a cooling drink since at least the 17th century.",
    ingredients:[{amount:"4 oz",name:"Water"},{amount:"2 oz",name:"Fresh lemon juice"},{amount:"1 oz",name:"Simple syrup"}],
    instructions:[
      "Fill a glass with ice",
      "Add lemon juice and simple syrup",
      "Top with water and stir",
      "Garnish with a lemon wheel"
    ]},
  { id:108, name:"Fruit Punch", category:"mocktails", glass:"Punch bowl", garnish:"Mixed fruit",
    image:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Bowle.JPG",
    fact:"Fruit punch is a party classic built for sharing.",
    ingredients:[{amount:"2 cups",name:"Orange juice"},{amount:"2 cups",name:"Pineapple juice"},{amount:"1 cup",name:"Cranberry juice"},{amount:"2 cups",name:"Lemon-lime soda"},{amount:"1 cup",name:"Mixed fruit"}],
    instructions:[
      "Add juices to a punch bowl",
      "Stir in mixed fruit",
      "Top with lemon-lime soda just before serving",
      "Serve over ice"
    ]},
  { id:109, name:"Root Beer Float", category:"mocktails", glass:"Float glass", garnish:"Whipped cream",
    image:"https://upload.wikimedia.org/wikipedia/commons/e/e2/Root_Beer_Float.jpg",
    fact:"The root beer float is also known as a “black cow.”",
    ingredients:[{amount:"6 oz",name:"Root beer"},{amount:"2 scoops",name:"Vanilla ice cream"}],
    instructions:[
      "Add two scoops of vanilla ice cream to a tall glass",
      "Slowly pour root beer over the ice cream",
      "Top with whipped cream if desired",
      "Serve with a straw and spoon"
    ]},
  { id:110, name:"Banana Smoothie", category:"mocktails", glass:"Highball glass", garnish:"Banana slice",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Banana_Smoothie.jpg",
    fact:"Banana smoothies are a quick, naturally sweetened blend.",
    ingredients:[{amount:"1",name:"Banana"},{amount:"6 oz",name:"Milk"},{amount:"4",name:"Ice cubes"}],
    instructions:[
      "Add banana, milk, and ice to a blender",
      "Blend until smooth",
      "Pour into a glass",
      "Garnish with a banana slice"
    ]},
  { id:111, name:"Strawberry Smoothie", category:"mocktails", glass:"Highball glass", garnish:"Strawberry",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/69/Strawberry_smoothie.jpg",
    fact:"Strawberry smoothies are a classic breakfast blend.",
    ingredients:[{amount:"1 cup",name:"Strawberries"},{amount:"6 oz",name:"Milk"},{amount:"4",name:"Ice cubes"}],
    instructions:[
      "Add strawberries, milk, and ice to a blender",
      "Blend until smooth",
      "Pour into a glass",
      "Garnish with a strawberry"
    ]},

  // SHOTS
  { id:81, name:"Kamikaze", category:"shots", glass:"Shot glass", garnish:"Lime wedge",
    image:"https://www.liquor.com/thmb/crekBrMQf9e-C2Fr9mU5TKWbtLA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__08__05121040__Kamikaze-720-720-recipe-7777fbacae9243e585eb990e48337913.jpg",
    fact:"A tart 1980s party classic.",
    ingredients:[{amount:"0.5 oz",name:"Vodka"},{amount:"0.5 oz",name:"Triple Sec",alt:"or Cointreau, Grand Marnier, or any orange liqueur"},{amount:"0.5 oz",name:"Fresh lime juice"}],
    instructions:[
      "Fill a shaker with ice",
      "Add vodka, triple sec, and fresh lime juice in equal parts",
      "Shake vigorously for 10 seconds",
      "Strain into a shot glass (use a strainer or the shaker lid held slightly open)",
      "Serve immediately with a small lime wedge on the side",
      "Tip: For multiple shots, multiply the recipe and strain into several glasses"
    ]}
,
  { id:82, name:"B-52", category:"shots", glass:"Shot glass", garnish:"None",
    image:"https://www.liquor.com/thmb/oRSCAy2LYDTsOgKjjq3goMTjzH4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__12__05144234__B52-shot-720sq-a7c7feadc9bb46098c21ae11442ccc64.jpg",
    fact:"Layered shots like this became popular in the 1970s.",
    ingredients:[{amount:"0.5 oz",name:"Kahlúa",alt:"or Tia Maria, Mr. Black, or any coffee liqueur"},{amount:"0.5 oz",name:"Baileys",alt:"or Carolans, Saint Brendan's, or any Irish cream liqueur"},{amount:"0.5 oz",name:"Grand Marnier",alt:"or Cointreau, Triple Sec, or any orange liqueur"}],
    instructions:[
      "Pour Kahlúa into a shot glass first (it's the heaviest)",
      "To layer: hold a bar spoon upside down with the tip touching the inside of the glass, just above the Kahlúa",
      "Very slowly pour Baileys over the back of the spoon - it should float on top",
      "Repeat the spoon technique for Grand Marnier, pouring very slowly",
      "The key is pouring VERY slowly - if you pour fast, the layers will mix",
      "You should have 3 distinct layers: dark brown, cream, orange",
      "Serve immediately - the layers will eventually blend together"
    ]}
,
  { id:83, name:"Lemon Drop Shot", category:"shots", glass:"Shot glass", garnish:"Sugar rim",
    image:"https://www.liquor.com/thmb/9mWv9dJoFV3s4ityitiiMTT33mg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lemon-drop-1200x628-fb-b28a979edf694b47b2899f937ecc6a03.jpg",
    fact:"A shot version of the popular lemon drop cocktail.",
    ingredients:[{amount:"1 oz",name:"Vodka"},{amount:"0.5 oz",name:"Fresh lemon juice"},{amount:"0.5 oz",name:"Simple syrup"}],
    instructions:[
      "Rim shot glass with sugar",
      "Shake all ingredients with ice",
      "Strain into the shot glass"
    ]}
,
  { id:84, name:"Jägerbomb", category:"shots", glass:"Shot + highball", garnish:"None",
    image:"https://www.liquor.com/thmb/ZOnlhYfd3CZCmdGA6gxP_oZEZJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2015__06__recipe-stags-leap-4cb3bd1bc7e84effae227fd3bbcf4c8c.jpg",
    fact:"Popularized in the early 2000s nightclub scene.",
    ingredients:[{amount:"1.5 oz",name:"Jägermeister"},{amount:"4 oz",name:"Energy drink"}],
    instructions:[
      "Pour Jägermeister into a shot glass",
      "Fill a separate glass with energy drink",
      "Drop the shot in and drink immediately"
    ]}
,
  { id:85, name:"Green Tea Shot", category:"shots", glass:"Shot glass", garnish:"None",
    image:"https://www.liquor.com/thmb/ypAXtFlkl9NlPSYPg-z4jWDJWsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jell-o-shots-1200x628-fb-9a7c3fc66a514975b89633e7060b1ae5.jpg",
    fact:"Despite the name, it contains no tea—just whiskey and peach.",
    ingredients:[{amount:"0.5 oz",name:"Irish whiskey"},{amount:"0.5 oz",name:"Peach schnapps"},{amount:"0.5 oz",name:"Sour mix"}],
    instructions:[
      "Shake all ingredients with ice",
      "Strain into a shot glass"
    ]}
,
  { id:86, name:"Washington Apple", category:"shots", glass:"Shot glass", garnish:"None",
    image:"https://www.liquor.com/thmb/QSPw_R277V4-5SR_NGUFsowdcJE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__11__01092111__washington-apple-shots-720x720-recipe-fbeea34667474f17ace5730f6af50ae2.jpg",
    fact:"Named after the state known for apples.",
    ingredients:[{amount:"0.5 oz",name:"Canadian whisky"},{amount:"0.5 oz",name:"Apple schnapps"},{amount:"0.5 oz",name:"Cranberry juice"}],
    instructions:[
      "Shake with ice",
      "Strain into a shot glass"
    ]}
,
  { id:87, name:"Buttery Nipple", category:"shots", glass:"Shot glass", garnish:"None",
    image:"https://www.liquor.com/thmb/oRSCAy2LYDTsOgKjjq3goMTjzH4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__12__05144234__B52-shot-720sq-a7c7feadc9bb46098c21ae11442ccc64.jpg",
    fact:"A sweet layered shot from the 1980s.",
    ingredients:[{amount:"0.5 oz",name:"Butterscotch schnapps"},{amount:"0.5 oz",name:"Irish cream"}],
    instructions:[
      "Pour butterscotch schnapps into a shot glass",
      "Slowly float Irish cream over a spoon"
    ]}
,
  { id:88, name:"Irish Car Bomb", category:"shots", glass:"Shot + pint", garnish:"None",
    image:"https://www.liquor.com/thmb/YBTM7C5Tw-j2xWc5NUBK0hNVdDw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__07__12110253__irish-car-bomb-720x720-recipe-1c63b18a1ce743b0ad9fb5885f9d7b54.jpg",
    fact:"A famous pub drop shot combining stout and Irish cream.",
    ingredients:[{amount:"0.5 oz",name:"Irish cream"},{amount:"0.5 oz",name:"Irish whiskey"},{amount:"4 oz",name:"Stout beer"}],
    instructions:[
      "Fill a pint glass halfway with stout",
      "Layer Irish cream and whiskey in a shot glass",
      "Drop the shot into the pint and drink quickly"
    ]}
,
  { id:89, name:"Pickleback", category:"shots", glass:"Shot glass", garnish:"Pickle spear",
    image:"https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop",
    fact:"Started in Brooklyn and became a cult bar favorite.",
    ingredients:[{amount:"1 oz",name:"Whiskey"},{amount:"1 oz",name:"Pickle brine"}],
    instructions:[
      "Take a whiskey shot",
      "Chase immediately with pickle brine",
      "Garnish with a pickle spear"
    ]}
,
  { id:90, name:"Fireball Shot", category:"shots", glass:"Shot glass", garnish:"None",
    image:"https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400&h=300&fit=crop",
    fact:"Cinnamon whisky shot that surged in popularity in the 2010s.",
    ingredients:[{amount:"1 oz",name:"Fireball cinnamon whisky"}],
    instructions:[
      "Chill the bottle",
      "Pour into a shot glass and serve"
    ]}
,

  // WINE
  { id:91, name:"Aperol Spritz", category:"wine", glass:"Wine glass", garnish:"Orange slice",
    image:"https://www.liquor.com/thmb/yUFcq8bM7y-8Sj4PjIYGYSrq5Wo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aperol-spritz-1200x628-email-7e707e720cfb4c3e90a65362e183d9b2.jpg",
    fact:"The 3‑2‑1 ratio made it a modern Italian aperitivo favorite.",
    ingredients:[{amount:"3 oz",name:"Prosecco",alt:"or any dry sparkling wine, Champagne, Cava"},{amount:"2 oz",name:"Aperol",alt:"or Campari (more bitter), Select, or other Italian aperitivo"},{amount:"Splash",name:"Soda water"}],
    instructions:[
      "Fill a large wine glass with ice cubes",
      "Pour in Aperol first",
      "Add Prosecco slowly (it will fizz up)",
      "Add just a splash of soda water (about 1 oz)",
      "Stir very gently just once - you don't want to lose the bubbles",
      "Cut a round slice of orange and add to the glass",
      "Serve with a straw if desired",
      "Tip: The ratio is 3-2-1 (Prosecco-Aperol-Soda) - easy to remember!"
    ]}
,
  { id:92, name:"Mimosa", category:"wine", glass:"Champagne flute", garnish:"Orange slice",
    image:"https://www.liquor.com/thmb/euc1Iil97mieCj7etz6W4_5kP9U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__01__03142227__Everything-You-Need-to-know-About-the-Drinks-That-Could-Save-Your-Morning-720x720-article-v21-652aa27466c64a89811e8e9b16328541.jpg",
    fact:"Named after the mimosa flower; a brunch staple since the 1920s.",
    ingredients:[{amount:"3 oz",name:"Champagne",alt:"or Prosecco, Cava, or any dry sparkling wine"},{amount:"3 oz",name:"Fresh orange juice"}],
    instructions:[
      "Make sure both champagne and orange juice are well chilled",
      "Pour orange juice into a champagne flute until it's about half full",
      "Slowly top with champagne - tilt the glass and pour down the side to preserve bubbles",
      "Do not stir - the bubbles will mix it naturally",
      "Optionally, add a small orange slice on the rim",
      "Serve immediately while it's still fizzy",
      "Tip: Fresh squeezed OJ is best, but pulp-free store bought works fine"
    ]}
,
  { id:93, name:"Bellini", category:"wine", glass:"Champagne flute", garnish:"Peach slice",
    image:"https://www.liquor.com/thmb/lt2qtx3Ws_stM_kS_tn-V-Key8I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spiced-pear-bellini-1200x628-email-97af993c7ade4e6a814de28910c62ee4.jpg",
    fact:"Invented at Harry’s Bar in Venice in the 1940s.",
    ingredients:[{amount:"3 oz",name:"Prosecco"},{amount:"2 oz",name:"Peach puree"}],
    instructions:[
      "Add peach puree to a flute",
      "Top slowly with Prosecco",
      "Stir gently and garnish with a peach slice"
    ]}
,
  { id:94, name:"Kir Royale", category:"wine", glass:"Champagne flute", garnish:"Lemon twist",
    image:"https://www.liquor.com/thmb/tp9NQnfI3LD5F2VVGHPpGVnCISs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kir-royale-1200x628-email-6cb3de5b58284fee8b97e4d92722189e.jpg",
    fact:"A champagne version of the classic Kir from France.",
    ingredients:[{amount:"0.5 oz",name:"Crème de cassis"},{amount:"4 oz",name:"Champagne"}],
    instructions:[
      "Add crème de cassis to a flute",
      "Top with champagne",
      "Garnish with lemon twist"
    ]}
,
  { id:95, name:"Sangria", category:"wine", glass:"Wine glass", garnish:"Orange, berries",
    image:"https://www.liquor.com/thmb/ubuCMzcx1NOebk2pNqsokPb_wwc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sangria-1200x628-fb-b801e1fce92c4ea28663d98c21f10795.jpg",
    fact:"Spain’s famous wine punch traditionally served in a pitcher.",
    ingredients:[{amount:"4 oz",name:"Red wine"},{amount:"1 oz",name:"Orange juice"},{amount:"0.5 oz",name:"Brandy"},{amount:"Top",name:"Soda water"},{amount:"1 cup",name:"Mixed fruit"}],
    instructions:[
      "Add wine, orange juice, and brandy to a glass with ice",
      "Top with soda water",
      "Stir gently and add fruit"
    ]}
,
  { id:96, name:"White Wine Spritzer", category:"wine", glass:"Wine glass", garnish:"Lime wedge",
    image:"https://www.liquor.com/thmb/cYyR-Nc12Xsc5vRFaCR0WIUX7LQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/watermelon-wine-spritzer-1200x628-email-113ab7c0478b4fb1a1efc3885040e08a.jpg",
    fact:"A low‑ABV refresher popular in Central Europe.",
    ingredients:[{amount:"3 oz",name:"White wine"},{amount:"2 oz",name:"Soda water"}],
    instructions:[
      "Fill a wine glass with ice",
      "Add white wine",
      "Top with soda water and stir",
      "Garnish with lime"
    ]}
,
  { id:97, name:"Hugo Spritz", category:"wine", glass:"Wine glass", garnish:"Mint, lime",
    image:"https://www.liquor.com/thmb/p850DZLhAMvBnNstY55X8XgT_DE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LQR-the-st-germain-cocktail-facebook-1200x628-649ceaa8911645edb3c800ea873eb26b.jpg",
    fact:"An Alpine spritz with elderflower, popularized in Northern Italy.",
    ingredients:[{amount:"3 oz",name:"Prosecco"},{amount:"1 oz",name:"Elderflower liqueur"},{amount:"Splash",name:"Soda water"},{amount:"6",name:"Mint leaves"}],
    instructions:[
      "Fill a wine glass with ice",
      "Add elderflower liqueur and Prosecco",
      "Top with soda water",
      "Add mint and garnish with lime"
    ]}
,
  { id:98, name:"Champagne Cocktail", category:"wine", glass:"Champagne flute", garnish:"Orange twist",
    image:"https://www.liquor.com/thmb/yH0EIrOK0nSfKuyzpzIUehFY0Fk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/champagne-cocktail-1200x628-fb-b4443e2f715941cd8c44b45d826ab0fb.jpg",
    fact:"Appeared in the first cocktail manuals of the 1800s.",
    ingredients:[{amount:"1",name:"Sugar cube"},{amount:"2 dashes",name:"Angostura bitters"},{amount:"4 oz",name:"Champagne"}],
    instructions:[
      "Soak a sugar cube with bitters and place in a flute",
      "Top with Champagne",
      "Garnish with orange twist"
    ]}
,
  { id:99, name:"Negroni Sbagliato", category:"wine", glass:"Rocks glass", garnish:"Orange peel",
    image:"https://www.liquor.com/thmb/GzhGVrk4UYDvmp4QkRanjGeyses=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/negroni-spagliato-1200x628-email-24a6f3e0dc6549798d5189f544b259cf.jpg",
    fact:"“Sbagliato” means mistaken—sparkling wine swapped for gin.",
    ingredients:[{amount:"1 oz",name:"Campari"},{amount:"1 oz",name:"Sweet vermouth"},{amount:"2 oz",name:"Sparkling wine"}],
    instructions:[
      "Build Campari and sweet vermouth over ice",
      "Top with sparkling wine",
      "Garnish with orange peel"
    ]}
,
  { id:100, name:"Wine Cooler", category:"wine", glass:"Highball glass", garnish:"Lime wheel",
    image:"https://www.liquor.com/thmb/XtGISs0puZ74huf3r18JD7wQIdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__07__17132920__Healthy-Drinking-Try-These-5-Inflammation-Busting-Turmeric-Cocktails-delhi-cooler-720x720-slideshow-18ef38f8a9c346c1a078ee34318b09d2.jpg",
    fact:"A 1980s favorite, especially when served over lots of ice.",
    ingredients:[{amount:"3 oz",name:"White wine"},{amount:"2 oz",name:"Citrus soda"},{amount:"1 oz",name:"Cranberry juice"}],
    instructions:[
      "Fill a highball glass with ice",
      "Add wine and juices",
      "Top with citrus soda and stir",
      "Garnish with lime wheel"
    ]}];
