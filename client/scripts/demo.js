console.log("js init");

$(document).ready(function() {
    $('#title-introduction').click(function(e) {
        document.getElementById("web").src = "/introduction";
    });
    $('#title-merge').click(function(e) {
        document.getElementById("web").src = "/mergeImage";
    });
    $('#title-upload').click(function(e) {
        document.getElementById("web").src = "/uploadMergeImage";
    });
});