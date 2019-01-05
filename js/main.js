document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
        text_truncate();
        console.log("ready");
    } else if (event.target.readyState === 'loading') {
        console.log("Document not ready yet");
    }
});