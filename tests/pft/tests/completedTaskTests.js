var fs = require('fs');
var cwd = fs.workingDirectory;
var TH = require(cwd + '/tests/pft/testHelper.js');

PFT.tester.run('can mark task as completed from list view', function (page, assert) {
    var curPage = new PFT.BasePage(page);
    TH.openIndexPage(curPage, function (curPage) {
        var text = '(A) Call Mom & Dad @Phone +Family <tuesday>';
        TH.addTask(text, curPage, assert, function afterAddTask() {
            /*jshint evil:true*/
            var className = curPage.eval(function () {
                return document.querySelector('#listContainer-div span').className;
            });
            assert.isTrue(className.match(/(btn-default)/), 'Expected that task was not already closed');
            curPage.click('#listContainer-div span');
            assert.isTrue(!curPage.exists('#listContainer-div button'));
            curPage.click('#showClosed-label');
            className = curPage.eval(function () {
                return document.querySelector('#listContainer-div span').className;
            });
            assert.isTrue(className.match(/(btn-danger)/), 'Expected that task was closed');
            assert.done();
        });
    });
});
