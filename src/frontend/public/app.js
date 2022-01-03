document.addEventListener("DOMContentLoaded", function() {
    fetch('/ads')
        .then(response => response.json())
        .then(data => {
            if (!data.ad) { return ; }
            document.getElementById('ad-slogan').innerText = data.ad.slogan;
            document.getElementById('ad').style.display = 'block';
        })
        .catch(err => console.error(err));


    fetch('/catalog')
        .then(response => response.json())
        .then(data => {
            if (!data.items) return;

            for (i=0; i<data.items.length; i++) {
                console.log(data.items[i])
                let html = cardHTML
                    .replace('**name**', data.items[i].name)
                    .replace('**name**', data.items[i].name)
                    .replace('**image**', data.items[i].image)
                    .replace('**description**', data.items[i].description);

                document.getElementById('items').innerHTML += html;
            }
        })
        .catch(err => console.error(err));        
});        


const cardHTML = `
<div class="column">
<div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="**image**" alt="**name**">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">

        <div class="media-content">
          <p class="title is-4">**name**</p>
        </div>
      </div>
  
      <div class="content">
        **description**
      </div>
    </div>
  </div>              
</div> 
`;