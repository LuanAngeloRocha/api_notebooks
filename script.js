const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const image = document.getElementById('img');

const fetchApi = (value) => {
    const result = fetch(`https://5000-luanangelor-apinotebook-xeqkx712l9g.ws-us104.gitpod.io/api/notebooks/${value 
}`).then((res) => res.json()).then((data) => {console.log(data); return data;
});

return result

}


btnGo.addEventListener('click' , async (event) => {
    event.preventDefault();
    const  result = await fetchApi(characterId.value);
    content.textContent= `${JSON.stringify(result, undefined, 2)}`;
    image.src = `${result.image}`;

});