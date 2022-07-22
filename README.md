# E-CO ROADS PROJECT 

## Le projet

## La Team

```javascript
const TEAM = {
        team_back : {

        product_owner : {
            lastname : "Santucci",
            firstname : "Gaetan",
            github_account : "GaetanSantucci"
            },

        scrum_master_and_git_master : {
            lastname : "Vignot",
            firstname : "Océane",
            github_account : "Incitis"
        },

        lead_developer : {
            lastname : "Humbert",
            firstname : "Alexandre",
            github_account : "AlexandreHumbert"
        },},
        
        team_front : {
        lead_developper: {
            lastname : "El Bakkaly",
            firstname : "Aymen",
            github_account : "aymen-elbakkaly"
        },
        developper: {
            lastname : "Bretonnet",
            firstname : "Yoann",
            github_account : "YoannBretonnet"
        },
        }
}
```

## Les users stories 

[Tableau des stories](./_docs/user_stories.md)

## Initialisation de la BDD

Lien vers le MCD/MLD/MPD [ici](./_docs/init_api.md)

## Le versionning avec Sqitch 

## REGLES NOMENCLATURES

- Langue utilisée l'anglais ( BDD et API )

- Utilisation du camelCase

Pas d'utilisation d'ESLINT mais une même façon de faire entre developpeur 

```javascript
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
```


## INITIALISATION DU PROJET

On initialise NPM
```shell
    npm init
```
Installation des modules necessaires
```shell
    npm i express joi cookie-parser dotenv cors brcypt jsonwebtoken pg swagger-ui-express swagger-jsdoc
```

Recommandations modules de developpement
```shell
npm i --save-dev nodemon jest debug 