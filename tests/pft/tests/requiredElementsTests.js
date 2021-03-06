var fs = require('fs');
var cwd = fs.workingDirectory;
var TH = require(cwd + '/tests/pft/testHelper.js');

PFT.tester.run('Page loads with expected controls', function (page, assert) {
    var curPage = new PFT.BasePage(page);
    TH.openIndexPage(curPage, function(curPage) {
        curPage.registerKeyElement('#fileDrop-div');
        curPage.registerKeyElement('#fileUpload-input');
        curPage.registerKeyElement('#addTaskButton-button');
        curPage.registerKeyElement('#saveFileButton-button');
        curPage.registerKeyElement('#showClosed-label');
        curPage.registerKeyElement('#filter-input');
        curPage.registerKeyElement('#clearFilter-button');
        curPage.registerKeyElement('#listContainer-div');
        curPage.registerKeyElement('#priorities-div');
        curPage.registerKeyElement('#priorities-ul');
        curPage.registerKeyElement('#projects-div');
        curPage.registerKeyElement('#projects-ul');
        curPage.registerKeyElement('#contexts-div');
        curPage.registerKeyElement('#contexts-ul');
        curPage.checkValidity(function (valid, errMessage) {
            assert.isTrue(valid, errMessage);
            assert.done();
        });
    });
});
