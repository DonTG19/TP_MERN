function makeRequest(route, method, callBack, data = null) {
    let httpRequest = new XMLHttpRequest();   

    httpRequest.onreadystatechange = function (){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                callBack(httpRequest.responseText);
            } else {
                console.log('Il y a eu un problème avec la requête.');
            }
        }
    };

    httpRequest.open(method, route, true);
    data && httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(data));
}