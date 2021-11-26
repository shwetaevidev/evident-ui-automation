# evident-ui-automation

// "cypress:run": "cypress run --reporter mochawesome",
    // "cypress:createReport": "mochawesome-merge --reportDir cypress/reports/ > cypress/reports/reports.json && marge cypress/reports/reports.json --reportDir cypress/reports/",
     "test": "npm run cypress:run"

npm run cypress:run && npm run cypress:createReport

"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run --reporter mochawesome",
    "cypress:createReport": "mochawesome-merge --reportDir cypress/reports/ > cypress/reports/reports.json && marge cypress/reports/reports.json --reportDir cypress/reports/",
    "test": "npm run cypress:run"
  },