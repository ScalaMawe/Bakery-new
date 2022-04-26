if(navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js");
    console.log("Si funciono, ya la armaste");
} else {
    console.log("No funciona, rindete :)")
}
