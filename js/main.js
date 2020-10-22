function lastUpdated(){
    var lastUpdateTimeStamp = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = lastUpdateTimeStamp;
}

console.log(lastUpdated());
