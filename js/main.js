// check if DOM is ready or not
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
        console.log("ready");
    }
});
