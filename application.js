
function download(fileUrl, output) {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", output);
    a.click();
}

document.getElementById("install-fast").addEventListener('click', function (event) {
    download(
        "https://download1083.mediafire.com/860cf24xhjbg/tyypdkhddb8h8i0/CompanionCloud.zip",
        "CompanionCloud.zip"
    );
});
