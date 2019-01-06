# Cat Mash

En se basant sur l'UX de Facemash et les données de https://latelier.co/data/cats.json.
L'application devra donc être composée de deux pages :
Une page pour voter
Une page pour voir tous les chats avec leur score
L’application doit pouvoir être utilisable depuis Google Chrome.
La technologie est libre.
Le projet devra être publié sur un GitHub public.
Le projet devra être hébergé pour être accessible publiquement.

## Run

> npm run production

## Development
> webpack 

then 

> npm run server
> npm start


## Host routes

__GET /cats__

 get 10 less voted cats shuffled

 
__POST /vote/:winnerID/:loserId__

 update elo rating for cat with corresponding id
 return 503 status if at least one cat was not found
 
 
 ## Roadmap
 
 - iteration 1 
  base function with elo rank | vote mechanism
 - iteration 1.5
  fix sort issue 
 - iteration 2
  remake the vote logic
  config files
  css -> scss
 - iteration 3
  complete affordance (vote, image load, rank page load)
  add host & client hot start 