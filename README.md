# elden-ring

[![npm](https://img.shields.io/npm/v/elden-ring)](https://www.npmjs.com/package/elden-ring)
![npm](https://img.shields.io/npm/dm/elden-ring)

Get some general information on Elden Ring, and calculate the number of runes needed to level up.
For a simple level calculator, check out this site: https://eldenring.rorydobson.com/

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Responses](#responses)
  * [allLevels()](#alllevels)
  * [nextLevel(int)](#nextlevelint)
  * [runesTo(int)](#runestoint)
  * [runesFromTo(int, int)](#runesfromtoint-int)
  * [ratings()](#ratings)
  * [info()](#info)
* [License](#license)

## Install

[npm][]:

```sh
npm i elden-ring-ts
```

[yarn][]:

```sh
yarn add elden-ring-ts
```

## Usage

```js
import eldenring from "elden-ring-ts"

// Returns all levelling information
eldenring.allLevels()
//=> { 1: { total: 0 }, 2: { runes: 673, increase: 0, total: 673 }, 3: { runes: 689, increase: 16, total: 1362 } ... }

// Returns information on how many runes are needed to reach the next level
eldenring.nextLevel(4)
//=> { runes: 723, increase: 17, total: 2791 }

// Returns the number of runes to get to a certain level from level 1
eldenring.runesTo(10)
//=> 6667

// Returns the number of runes needed to get from one level to another
eldenring.runesFromTo(7, 10)
//=> 2379

// Return game ratings
eldenring.ratings()
//=> { "GameWatcher": { "review": "The Darkest Souls are often the brightest", "rating": "10 / 10.0" }, ... }

// Returns general information
eldenring.info()
//=> { title: 'Elden Ring', genre: 'Action Role-Playing', release: 'February 25, 2022', developer: 'FromSoftware Inc', ... }
```


## Responses

### allLevels()

An object will be returned with all of the details of number of runes needed to level up.

Response: `Object`

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{{level}}`      | `Object` | The level number. Contains information on the number of runes required. |
| &emsp;`runes`      | `int` | The number of runes needed to reach this level from the previous. |
| &emsp;`increase`      | `int` | The increase in runes needed in comparison to the previous level. |
| &emsp;`total`      | `int` | The total number of runes needed to reach this level. |

Example:
```json
{ 
    "1": { 
        "total": 0 
    }, 
    "2": { 
        "runes": 673, 
        "increase": 0, 
        "total": 673 
    }, 
    "3": { 
        "runes": 689, 
        "increase": 16, 
        "total": 1362 
    },
    ... 
}
```

### nextLevel(int)

An object will be returned with all of the details about how to reach the next level from the argument supplied. Example shows response from eldenring.nextLevel(4).

Response: `Object`

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `runes`      | `int` | The number of runes needed to reach this level from the previous. |
| `increase`      | `int` | The increase in runes needed in comparison to the previous level. |
| `total`      | `int` | The total number of runes needed to reach this level. |

Example:
```json
{ 
    "runes": 723, 
    "increase": 17, 
    "total": 2791 
}
```

### runesTo(int)

An integer will be returned with the number of runes needed to get to the level provided from level 1. Example shows response from eldenring.runesTo(10).

Response: `int`

Example:
`6667`

### runesFromTo(int, int)

An integer will be returned with the number of runes needed to get from one level to another. Example shows response from eldenring.runesFromTo(7, 10).

Response: `int`

Example:
`2379`

### ratings()

An object will be returned with ratings from well known gaming sources.

Response: `Object`

Example:
```json
{
    "GameWatcher": { 
        "review": "The Darkest Souls are often the brightest", 
        "rating": "10 / 10.0" 
    },
    "BaziCenter": {
        "review": "Solid gameplay, over the top world design, terrifying boss fights, eye catching visuals, deep combat mechanisms, endless possibilities, and many, many other things can be said about Elden Ring, but non of them can truly describe it for what it is. Elden Ring is out of this world, and you will have to play it.",
        "rating": "10 / 10"
    }, 
    ... 
}
```

### info()

An object will be returned with ratings from well known gaming sources.

Response: `Object`

Example:
```json
{ 
    "title": "Elden Ring", 
    "genre": "Action Role-Playing", 
    "release": "February 25, 2022", 
    "developer": "FromSoftware Inc",
    ... 
}
```

## License

[MIT](LICENSE) © 2022 Rory Dobson

##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/