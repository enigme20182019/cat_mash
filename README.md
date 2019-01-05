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

 
__POST /vote/:winnerID/:looserId__

 update elo rating for cat with corresponding id
 return 503 status if at least one cat was not found