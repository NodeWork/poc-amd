//Load common code that includes config, then load the app logic for this page.
curl(['./common'], function () {
    curl(['app/main2']);
});
