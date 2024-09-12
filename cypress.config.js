const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      return config;
      // implement node event listeners here
    },
    specPattern: "**/*.feature",
    chromeWebSecurity: false, // Disable Chrome web security
  },
});
