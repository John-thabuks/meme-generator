document.addEventListener("DOMContentLoaded", ()=>{

    const generateMemebtn = document.querySelector(".meme-generator .generate-meme-btn");
    const memeImage = document.querySelector(".meme-generator img");
    const memeTitle = document.querySelector(".meme-generator .meme-title");
    const memeAuthor = document.querySelector(".meme-author");

    function updateDetails(url, title, author){
        memeImage.setAttribute("src", url);
        memeTitle.innerHTML = title;
        memeAuthor.innerHTML = `Meme by: ${author}`;
    }

    function generateMeme(){
        fetch("https://meme-api.com/gimme/wholesomememes")
        .then(response => response.json())
        .then(data =>{
            updateDetails(data.url,data.title, data.author)
        })
    }

    generateMemebtn.addEventListener("click", generateMeme)
    generateMeme();
})
