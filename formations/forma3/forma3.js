const formations = [
    {
        id: 1, 
        title: "Cours complet Html - Vidéo 1",
        video: "https://www.youtube.com/embed/0VRwVvgc3VE",
        description: "Vidéo 1: Structure d'une Balise HTML/Explication",
        content: "Daaray Technologie",
    },
    {
    id: 2, 
    title: "Cours complet Html - Vidéo 2",
    video: "https://www.youtube.com/embed/KzXUH1LKqsc",
    description: "Vidéo 2:C'est quoi HTML/CSS-Explication détaillée",
    content: "Daaray Technologie",

    },
    {
        id: 3, 
        title: "Cours complet Html - Vidéo 3",
        video: "https://www.youtube.com/embed/0VRwVvgc3VE",
        description: "Vidéo 3: Structure d'une Balise HTML/Explication",
        content: "Daaray Technologie ",

    },
    {
        id: 4, 
        title: "Cours complet Html - Vidéo 4",
        video: "https://www.youtube.com/embed/P5biY6vWN4k",
        description: "Vidéo 4: Telecharger VsCode/Explication détaillée",
        content: "Daaray Technologie",

    },
    {
        id: 5, 
        title: "Cours complet Html - Vidéo 5",
        video: "https://www.youtube.com/embed/0619cztrXz0",
        description: "Vidéo 5:Structure d'une page HTML / Explication",
        content: "Daaray Technologie",
    },
    {
        id: 6, 
        title: "Cours complet Html - Vidéo 6",
        video: "https://www.youtube.com/embed/-QPyH5l5rRQ",
        description: ":Les balises de h1 à h6 ,la balise br et la balise pre",
        content: "Daaray Technologie",
    },
    {
        id: 7, 
        title: "Cours complet Html - Vidéo 7",
        video: "https://www.youtube.com/embed/S3jCnAGwWqk",
        description: ":Les balises pour marquer l'importance  d'un texte",
        content: "Daaray Technologie",
    },
    {
      id: 8, 
      title: "Cours complet Html - Vidéo 8",
      video: "https://www.youtube.com/embed/0VRwVvgc3VE",
      description: "Vidéo 1: Structure d'une Balise HTML/Explication",
      content: "Daaray Technologie",
    },
    {
      id: 9, 
      title: "Cours complet Html - Vidéo 9",
      video: "https://www.youtube.com/embed/P5biY6vWN4k",
      description: "Vidéo 4: Telecharger VsCode/Explication détaillée",
      content: "Daaray Technologie",

    },
    {
      id: 10, 
      title: "Cours complet Html - Vidéo 10",
      video: "https://www.youtube.com/embed/-QPyH5l5rRQ",
      description: ":Les balises de h1 à h6 ,la balise br et la balise pre",
      content: "Daaray Technologie",
    },

] 

const commentList = [
    {
        text: 'Merci, facile à comprendre avec des exemples précis',
        date: 'Aujourd\hui'
    },
    {
        text: 'Contenu trés interessant et des explications claires',
        date: 'Il y\a 2h'
    }
]


window.onload = function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const formationCards = document.getElementById("playlist");

    function loadVideo(formation) {
        videoPlayer.innerHTML = `<iframe width="835" height="415" src="${formation.video}?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>`;
    }

    loadVideo(formations[0]);

    formations.forEach(formation => {
        const formationCard = document.createElement('div');
        formationCard.className='d-flex justify-content-between';
        formationCard.innerHTML=`
              <div class="vd-ifra mb-4">
                 <img src="https://i.ytimg.com/vi/P5biY6vWN4k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBykMukxtjWXC3E8YNxGjXyyj8egg">
              </div
              
              <div class="desc">
                 <div class="details-playlist mt-2">
                      <span class="fw-bold">${formation.title}</span>
                      <p class="fw-bold">${formation.description}</p>
                      <p>${formation.content}</p>
                 </div>
        `;
      
        formationCard.addEventListener('click', () => {

            loadVideo(formation);
          
        });
        
        formationCards.appendChild(formationCard);

    });

    const comments = document.getElementById('commentList');

    commentList.forEach(comment => {
        const commentEl = document.createElement('li');
        commentEl.className = 'comment'
        commentEl.innerHTML = `
        <div class="detailComent d-flex rounded-3 bg-secondary-subtle p-2" id="commentPart">
            <div class="persComent"><img src="image_forma3/P1.png" alt=""></div>
            <div class="textComent d-flex">
              <div class="text-left">
                <p id="commentText">
                  ${comment.text}
                </p>
            </div>
              <div class="text-right d-flex">
                <div class="like ms-5 ps-5">
                  <i class="fa-regular fa-thumbs-up"></i>
                  <i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i>
                </div>
                <p class="fw-bold ms-5 ps-5" style="color: #E94D1A;"><i class="bi bi-reply"></i>  Repondre</p>
              </div>
            </div>   
        </div>
        
        <hr class="border-3" style="color: #E94D1A;">
        <div class="commenter mb-3" id="commentDate">
           ${comment.date}
        </div>
        `
        comments.appendChild(commentEl);
       
    });

    const formComment = document.getElementById('form-comment');

    formComment.addEventListener('submit', (event) => {
        event.preventDefault();

        const message = document.getElementById('message-text').value;
        console.info('message: ', message);
        commentList.push({text: message, date: Date.now()});

        console.info('comments' , commentList);

        const newComment = document.createElement('li');
        newComment.className = 'comment'
        newComment.innerHTML = `
        
        <div class="detailComent d-flex bg-secondary-subtle p-2">
        <div class="persComent"><img src="image_forma3/P1.png" alt=""></div>
        <div class="textComent d-flex">
          <div class="text-left">
            <p id="commentText">
              ${message}
            </p>
        </div>
          <div class="text-right d-flex">
            <div class="like ms-5 ps-5">
              <i class="fa-regular fa-thumbs-up"></i>
              <i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i>
            </div>
            <p class="fw-bold ms-5 ps-5" style="color: #E94D1A;"><i class="bi bi-reply"></i>Repondre</p>
          </div>
        </div>   
    </div>
    
    <hr>
    <div class="commenter mb-3" id="commentDate">
       ${new Date()}
    </div>
        
        `
        comments.appendChild(newComment);
    })
};


