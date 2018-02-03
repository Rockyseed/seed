# Seed

## Development

### Build Source Code

The following tools are required to get the sources, build and develop
**Seed**:

1. A Git client. Any Git client will do, you can pick your favorite one.
   E.g., [Git](https://git-scm.com/) or
   [GitHub Desktop](https://desktop.github.com/).
2. [Node.js](https://nodejs.org). The required NPM tools will also be
   installed along with Node.js.
3. [Rush](https://aka.ms/rush). You can install it with NPM:
   `npm install --global @microsoft/rush`.
4. [Gulp](https://gulpjs.com/). You can install it with NPM:
   `npm install --global gulp-cli`, or follow the instructions from the
   official site.
5. [TypeScript](http://www.typescriptlang.org/). You can install it with
   NPM: `npm install --global typescript`, or follow the instructions
   from the official site.
6. (Optionally) your favorite editor or IDE. E.g.,
   [WebStorm](https://www.jetbrains.com/webstorm/) or
   [Visual Studio Code](https://code.visualstudio.com/).

To build **Seed**:

1. Clone the **Seed** with your favorite Git client.
2. Go to the root folder of **SEED**, where you can find a
   `rush.json` file.
3. Install dependencies with the Rush: `rush install`.
4. And then run `rush rebuild`. This will build (or rebuild) all
   projects in **Seed**.

### Try in Workbench

A workbench is provided in **SEED** that allows you to explore it in
your local machine without worry about deploying it to a real web
server.

To start the workbench:

1. Go to the "seed-lib" folder.
2. Run `gulp serve` to start serve the workbench.
3. A browser window should be automatically opened for you. You can also
   choose to open
   [http://localhost:4321/index.html](http://localhost:4321/index.html)
   in any browser you like.
4. To stop serve the workbench, press `Ctrl+C` in the command window
   where you started it.
