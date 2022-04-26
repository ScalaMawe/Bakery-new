if(navigator.serviceWorker) {
    navigator.serviceWorker.register("Bakery-new/sw.js");
    console.log("Si funciono, ya la armaste");
} else {
    console.log("No funciona, rindete :)")
}
