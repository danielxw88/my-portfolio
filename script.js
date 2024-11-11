function toggleDetails(projectId) {
    let details = document.getElementById(projectId);
    if (details.style.display == "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }

}

