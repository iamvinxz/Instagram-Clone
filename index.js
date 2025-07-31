const imageURL = document.getElementById('input-image-el');
const locationInput = document.getElementById('input-location-el');
const locationOutput = document.getElementById('location');
const postCards = document.querySelector('.main-container');
const caption = document.getElementById('input-caption-el');

let posts = [
     {
        id: 0,
        image: "https://images.unsplash.com/photo-1749916884078-e8359b2adcdd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body: "City Lights",   //caption
        location: "Tokyo",
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
        location: "Mumbai",
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
        location: "Florida",
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

function renderPost(){
    const postHTML = [];
    for(let i = 0; i < posts.length; i++){
        const el = 
                `<div class="card">
                        <div class="title-post">
                            <img src="https://sketchok.com/images/articles/06-anime/002-one-piece/26/16.jpg" class="profile">
                            <div class="title-text">                        
                                <h3 id="post_name">Khervin</h3>
                                <p id="location"><i class="fa-solid fa-location-dot"></i>${posts[i].location}</p>  
                            </div>
                            <i class="fa-solid fa-earth-americas"></i>
                            <button class="menu-btn" onClick="showModal(${posts[i].id})"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                            <div class="menu" id="${posts[i].id}">
                                <button title="Delete Post" id="delete-btn"  onClick="deletePost(${posts[i].id})"><i class="fa-solid fa-trash"></i></button>
                                <button title="Edit Post" id="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                            </div>
                        </div>
                        <div class="image-post">
                            <div class="img-template-container">
                                <img src="${posts[i].image}" width="450px" class="post-image">
                            </div>
                        </div>
                        <div class="caption-post">
                            <p id="caption-el"><span id="caption-name">Khervin:</span>${posts[i].body}</p>
                        </div>
                        <div class="post-items">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment"></i>
                            <i class="fa-regular fa-paper-plane"></i>
                        </div>
                        <div class="comment-post">
                            <p>${posts[i].comments.name}</p>
                            <span id="comments-el">${posts[i].comments.comment}</span>
                        </div>
                    </div>
                </div>`
            postHTML.push(el);
    }
    //console.log(postHTML)
    postCards.innerHTML = postHTML.join();
}

  renderPost()

document.getElementById('addBtn').addEventListener("click",function(){
    document.querySelector('.module').classList.add('show');
})

document.getElementById('post-btn').addEventListener("click", function(){
    if(imageURL.value == "" && locationInput.value == ""){
    Swal.fire({
        title: "Failed",
        text: "Please input on fields",
        icon: "error"
    });
    }else{
        console.log("submit");
        let newPost = {
            id: posts.length + 1,
            image: imageURL.value,
            body: caption.value,
            location: locationInput.value,
            likes: {
                name: "",
                date: "",
            },
            comments:{
                name:"Khervin",
                comment:"",
                date:""
            }
        }
        posts.push(newPost);
        renderPost(posts);
        imageURL.value = "";
        locationInput.value = "";
        Swal.fire({
            title: "Successful!",
            text: "You have new post!",
            icon: "success"
        });
        document.querySelector('.module').classList.remove('show');
        //console.log(posts);
    }
})

document.getElementById('cancel-btn').addEventListener('click',function(){
    document.querySelector('.module').classList.remove('show');
})

function showModal(id) {
    console.log("id")   
 
    document.getElementById(id).style.display = "block";
}


function deletePost(id) {
    console.log("id")   

    const filteredPost = posts.filter((post) => post.id != id) 
    posts = filteredPost
    renderPost();
    // re-render
}

document.getElementById('edit-btn').addEventListener('click',function(){
    Swal.fire({
            title: "Warning!",
            text: "To be continued!",
            icon: "info"
        });
})