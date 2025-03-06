function clicked(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("content").innerHTML = "";
        fileContent = xhttp.responseText;
        fileSplit = fileContent.split(",");
        output = fileSplit.slice(0,41).join("")
        document.getElementById("content").innerHTML = output;
    }
    xhttp.open("GET", "data/data.txt")
    xhttp.send()
}
