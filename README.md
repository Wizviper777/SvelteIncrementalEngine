# Svelte Incremental Engine

A lightweight engine for creating incremental games using Svelte. Inspired by [Isha's Incremental Template](https://123ishatest.github.io/igt-docs/). 

### Create Anything

Whether you're making another Cookie Clicker clone or the next paradigm-shifting incremental experience, the main code is simple and extensible enough to be
used by any style of browser game. Quickly add features, test out components, and avoid duplicate code in a more streamlined developer experience.

### Modular

With the *Feature* system, each part of the game that holds any kind of data can be separated out and stored in different files for a building-block approach to making games. Want to add a new prestige layer or mechanic? Try creating a Feature! Additionally, Svelte's component system allows you to break your UI down into smaller chunks, allowing you move UI elements around hassle-free.

### Seamless Save/Load

Saving and loading can often get complex for larger games, and javascript not being able to parse JSON directly into classes properly can make creating a good saving architecture difficult. Each *Feature* contains a data object that you will create a custom class for, which can then be populated with default values. The saveGame function will automatically save each feature's data using the *saveKey* property and put the data object back into the class when loading. Don't want to save a *Feature's* data? Just leave the key blank!

### Reactive

One of the most time-consuming parts of making any kind of game is making sure all aspects of the game state are rendered on screen in real time for the player. With Svelte's easy-to-understand reactivity system, you can make a great UI without having to ever make a Document.getElementById() call again.

# How To Use

### Installation
Run the following commands in the terminal:
```
> git clone https://github.com/Wizviper777/SvelteIncrementalEngine.git
> cd ./SvelteIncrementalEngine
> npm install
```

### Testing/Deployment
```npm run dev``` will create a local preview of your game to debug and mess around with, while ```npm run build``` will compile your game to put on somewhere like Github Pages or Vercel.

### Where To Start

You can replace the example CoinGame feature with whatever you want to start out your game. As it grows more complex, make sure to break off into more *Features* and componentize your UI in order to keep things simple. You can even take advantage of SvelteKit's routing features if you want.

# How It Works

On page load, the ```loadGame()``` function is called to immediately load the save data, and once loaded the ```startGameLoop()``` function is called to begin the game loop. 

```requestAnimationFrame``` is used for a high update rate, and the amount of time between the current frame and the previous frame is passed to the main ```Game``` class' ```updateGame``` function. This is then passed to all of the features' update functions, so make sure to multiply your "X per second" statements by ```deltaT```! 

After updating everything, the ```updateStore``` method is called to set the Svelte **store** to the new state of the game. This is the main thing powering the reactivity of the page, so always make sure you access ```store``` from your UI and not the ```game``` object. You can also make your html a lot cleaner by defining a derived value like ```$: coins = $store.coinGame.data.coins``` in the ```<script>``` tags, allowing you to just use ```coins``` in your markup.

Saving works by saving each ```data``` object of each ```Feature``` to localstorage using the ```saveKey```. Loading works much the same way, just replacing the data object with the parsed save JSON.

The ```Utils``` file is for any helper functions that make things more readable in other files. Try making the ```format``` function more complex to turn a number like 1000000 into 1M!

# Why Did You Do *X*?

> Why is the data a separate object in each feature? Why can't I just put my state as fields in the class?

When loading JSON from localstorage and using it to replace an instance of a class, the methods on that class become undefined because it's impossible to store methods in localstorage. For this reason, our state objects need to contain **no methods**.

> Okay, but why does each data object need its own class?

To take advantage of autocomplete and other quality of life features that typescript provides, the compiler needs to know the shape of the data, AKA the field names of the object. 

> Why are there fields for features in the Game class, but they're also in the features array?

When updating, saving, and loading, all of the features in the game need to be iterated through. However, for components to easily access this state they need to also be named fields on their own.

