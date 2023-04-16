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

# Why Did You Do *X*?

> Why is the data a separate object in each feature? Why can't I just put my state as fields in the class?
When loading JSON from localstorage and using it to replace an instance of a class, the methods on that class become undefined because it's impossible to store methods in localstorage. For this reason, our state objects need to contain **no methods**.

> Okay, but why does each data object need its own class?
To take advantage of autocomplete and other quality of life features that typescript provides, the compiler needs to know the shape of the data, AKA the field names of the object. 

> Why are there fields for features in the Game class, but they're also in the features array?
When updating, saving, and loading, all of the features in the game need to be iterated through. However, for components to easily access this state they need to also be named fields on their own.

