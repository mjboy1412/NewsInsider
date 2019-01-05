
var stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        // The page is fully loaded
        console.log(document.readyState);
        text_truncate();
        clearInterval(stateCheck);
        console.log("ready");

    }
}, 100);

