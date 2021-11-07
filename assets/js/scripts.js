/*let posts = document.getElementById('posts');

function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      return result.json()
    })
    .then((json) => {
      montarBlog(json);
    })
    .catch((err) => {
      console.log(err)
    })
}

function montarBlog(lista){
  let html = '';

  for(let i in lista){
    html += `<h3>${lista[i].title}</h3>`;
    html += `<p>${lista[i].body}</p>`;
    html += `<h3/>`;
  }
  posts.innerHTML = html;
}*/


let gifBtn = document.getElementById('gifBtn');
let search = document.getElementById('search');
let quantity = document.getElementById('quantity');
let gifsEl = document.getElementById('gifs');

function loadGifs() {
  fetch(`https://g.tenor.com/v1/search?q=${search.value}&key=LIVDSRZULELA&limit=${parseInt(quantity.value)}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      showGifs(json)
    })
}

function showGifs(jsonItems) {
  let result = jsonItems['results'];
  gifsEl.innerHTML = '';
  for (let i in result) {
    gifsEl.innerHTML += `<figure class="img-fluid d-flex flex-column m-sm-5 align-items-center text-center rounded bg-white p-md-3">
                <img src="${result[i]["media"][0]['gif']['url']}">
                <figcapture>${result[i].content_description}</figcapture>
               </figure>`;
  }
}

gifBtn.addEventListener('click', loadGifs);
