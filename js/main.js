function lastUpdated(){
    var lastUpdateTimeStamp = new Date(document.lastModified);
    document.getElementById("lastUpdate").innerHTML = lastUpdateTimeStamp;
}