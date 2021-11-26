/**
 * Delete the downloads folder to make sure the test has "clean"
 * slate before starting.
 */
 const path = require('path')
 const downloadsFolder = Cypress.config('downloadsFolder')
export const deleteDownloadsFolder = () => {
 cy.task('deleteFolder', downloadsFolder)
}

export const validateImage = (downloadedFilename) => {
    const downloadsFolder = Cypress.config('downloadsFolder')
  
    if (!downloadedFilename) {
      downloadedFilename = path.join(downloadsFolder, 'hunter_download.jpeg')
    }
  
    /*ensure the file has been saved before trying to parse it*/
    cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
    .should((buffer) => {
      /*by having length assertion we ensure the file has text*/
      /*since we don't know when the browser finishes writing it to disk*/
      expect(buffer.length).to.be.gt(1000)
    })
}
  