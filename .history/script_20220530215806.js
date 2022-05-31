var serverOnline = document.querySelector('.server-online')




src = "https://mcapi.us/scripts/minecraft.min.js"
MinecraftAPI.getServerStatus('play.wafflecraft.xyz', {
    port: 32451 // optional, only if you need a custom port
}, function (err, status) {
    if (err) {
        return document.querySelector('.server-status').innerHTML = 'Error loading status';
    }

    // you can change these to your own message!
    serverOnline.innerHTML = status.online ? 'up' : 'down';
});