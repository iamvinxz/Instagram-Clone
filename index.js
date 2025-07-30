//module 
document.getElementById('addBtn').addEventListener("click",function(){
    document.getElementById('module').style.display = 'block';

})

document.getElementById('post-btn').addEventListener("click", function(){
    console.log(imageURL.value);  
    locationOutput.textContent = locationInput.value;
    document.getElementById('module').style.display = 'none';
})

const imageURL = document.getElementById('input-image-el');
const locationInput = document.getElementById('input-location-el');
const locationOutput = document.getElementById('location');
const postCards = document.querySelector('.main-container');

const post = [
     {
        id: 0,
        image: "https://images.unsplash.com/photo-1749916884078-e8359b2adcdd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body: "City Lights",   //caption
        likes: {
            name: "",
            date: " ",
        },
        comments: {
            name: "Khervin",
            comment: "wow",
            date: "",
        }        
    }, 
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1751795195789-8dab6693475d?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body: "chill",   //caption
        likes: {
            name: "",
            date: " ",
        },
        comments: {
            name: "Khervin",
            comment: "xd",
            date: "",
        }        
    },
     {
        id: 2,
        image: "https://images.unsplash.com/photo-1752035682783-308aadea1ca0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body: "Roadtrip",   //caption
        likes: {
            name: "",
            date: " ",
        },
        comments: {
            name: "Khervin",
            comment: "Roadtrip",
            date: "",
        }        
    }
]

const postHTML = [];

for(let i = 0; i < post.length; i++){
    const el = 
            `<div class="card">
                    <div class="title-post">
                        <img src="https://sketchok.com/images/articles/06-anime/002-one-piece/26/16.jpg" class="profile">
                        <div class="title-text">                        
                            <h3>Khervin</h3>
                            <p id="location">Philippines</p>  
                        </div>
                    </div>
                    <div class="image-post">
                        <div class="img-template-container">
                            <img src="${post[i].image}" width="450px" class="post-image">
                        </div>
                    </div>
                    <div class="caption-post">
                        <p id="caption-el">${post[i].body}</p>
                    </div>
                    <div class="post-items">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="comment-post">
                        <p>${post[i].comments.name}</p>
                        <span id="comments-el">${post[i].comments.comment}</span>
                    </div>
                </div>
            </div>`
        postHTML.push(el);
}

postCards.innerHTML += postHTML;

