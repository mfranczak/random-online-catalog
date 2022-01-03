document.addEventListener("DOMContentLoaded", function() {
    fetch('/ads')
        .then(response => response.json())
        .then(data => {
            if (!data.ad) { return ; }
            document.getElementById('ad-slogan').innerText = data.ad.slogan;
            document.getElementById('ad').style.display = 'block';
        })
        .catch(err => console.error(err));
});        