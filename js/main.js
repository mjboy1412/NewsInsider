document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
        console.log("ready");
    }
});
