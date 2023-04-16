document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        var overlay = document.getElementById("loadingOverlay");
        overlay.classList.add("fade-out");

        setTimeout(function () {
            overlay.parentNode.removeChild(overlay);
        }, 500);
    }
};
