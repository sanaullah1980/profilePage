function changeName() {
    document.getElementById("name").innerText = "Jonathan Adler";
}

function removeElement(el) {
    if (el.alt === 'accept'){
        var connectionCount = Number(document.getElementById("connectionCount").innerText);
        document.getElementById("connectionCount").innerText = connectionCount + 1;
    }  
    
    var connectionRequestCount = Number(document.getElementById("requestCount").innerText);
    document.getElementById("requestCount").innerText = connectionRequestCount - 1;
    el.parentElement.parentElement.remove() 
}