async function getplayers() {
    let { players } = await fetch('https://mcapi.us/server/status?ip=smp.xingyan.tk&port=25565').then(response => response.json());
    return players.now;
}

async function getplayersmax() {
    let { players } = await fetch('https://mcapi.us/server/status?ip=smp.xingyan.tk&port=25565').then(response => response.json());
    return players.max;
}

async function getonline() {
    let { online } = await fetch('https://mcapi.us/server/status?ip=smp.xingyan.tk&port=25565').then(response => response.json());
    return online;
}



getonline().then(PromiseResult => {
    if(PromiseResult === false){
        document.getElementById("Online").innerText = document.getElementById("Online").innerText.replace('0/0', "Server Offline");
    }else{
        getplayers().then(PromiseResult => {
            document.getElementById("Online").innerText = document.getElementById("Online").innerText.replace('0', PromiseResult);
        });
        getplayersmax().then(PromiseResult => {
            document.getElementById("Online").innerText = document.getElementById("Online").innerText.replace('/0', "/"+PromiseResult);
        });
    }
})






