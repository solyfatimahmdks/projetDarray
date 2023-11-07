var articlesData = [
    {
        id: 1,
        title: "Développeur Web Front-End",
        image: "https://img.freepik.com/photos-premium/abstract-book-and-open-laptop-generative-ai_786587-12901.jpg?size=626&ext=jpg&ga=GA1.1.212687153.1691348973&semt=ais",
        description: "Devenez un développeur Web Front-End en réalisant une variété de projets pour votre portfolio - devenez un pro",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
        id: 2,
        title: "Développeur Web Front-End",
        image: "https://img.freepik.com/photos-gratuite/ordinateur-portable-ecouteurs-pres-blocs-notes-crayons_23-2147929697.jpg?size=626&ext=jpg&ga=GA1.1.212687153.1691348973&semt=ais",
        description: "Devenez un développeur Web Front-End en réalisant une variété de projets pour votre portfolio - devenez un pro",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
        id: 3,
        title: "Développeur Web Front-End",
        image: "https://img.freepik.com/photos-gratuite/codeur_1098-18084.jpg?size=626&ext=jpg&ga=GA1.1.212687153.1691348973&semt=sph",
        description: "Devenez un développeur Web Front-End en réalisant une variété de projets pour votre portfolio - devenez un pro",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
        id:4,
        title: "Développeur Web Front-End",
        image: "https://img.freepik.com/photos-gratuite/disposition-ordinateurs-portables-livres_23-2149765762.jpg?size=626&ext=jpg&ga=GA1.1.212687153.1691348973&semt=ais",
        description: "Devenez un développeur Web Front-End en réalisant une variété de projets pour votre portfolio - devenez un pro",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
        id:5,
        title: "Développeur Web Front-End",
        image: "https://img.freepik.com/photos-gratuite/espace-travail-bois-nature-morte-ordinateur-portable_23-2148186945.jpg?size=626&ext=jpg&ga=GA1.1.212687153.1691348973&semt=ais",
        description: "Devenez un développeur Web Front-End en réalisant une variété de projets pour votre portfolio - devenez un pro",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
        id:6,
        title: "Développeur Web Front-End",
        image: "https://img.freepik.com/photos-gratuite/nature-morte-livres-contre-technologie_23-2150062975.jpg?size=626&ext=jpg&ga=GA1.1.212687153.1691348973&semt=ais",
        description: "Devenez un développeur Web Front-End en réalisant une variété de projets pour votre portfolio - devenez un pro",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
];

function generateArticleCards() {
    var articleRow = document.getElementById('articleRow');

    articlesData.forEach(function(article) {
        var articleCard = document.createElement('div');
        articleCard.className = 'col';
        articleCard.innerHTML = `
            <div class="card border-0 shadow">
                <img src="${article.image}" class="img-fluid" alt="">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="my-3">${article.description}</p>
                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn bg-white border border-2 border-black radiusButton" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="openArticleModal(${article.id})">Voir plus</button>
                    </div>
                </div>
            </div>
        `;
        articleRow.appendChild(articleCard);
    });
}

function openArticleModal(articleId) {
    var modalTitle = document.getElementById('staticBackdropLabel');
    var modalBodyArticle = document.getElementById('modalBodyArticle');

    var article = articlesData.find(item => item.id === articleId);

    modalTitle.textContent = article.title;
    modalBodyArticle.innerHTML = `
        <div class="card border-0 shadow">
            <img src="${article.image}" class="img-fluid" alt="">
            <div class="card-body">
                <p class="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!. Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora
                      reiciendis libero voluptate!.Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!
                  </p>
                  <p class="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!. Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora
                      reiciendis libero voluptate!.Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!
                  </p>
                <div class="d-flex justify-content-end mt-3">
                    <button class="btn border border-2 radiusButton" data-bs-toggle="modal" data-bs-target="#comment-modal" id="comment-btn" onclick="openCommentModal(${article.id})">Commenter</button>
                </div>
            </div>
        </div>
    `;

    loadCommentsFromLocalStorage(articleId);


    // Ouvrir le modal
    $('#staticBackdrop').modal('show');

}

function openCommentModal(articleId) {
    var commentModal = document.getElementById('comment-modal');
    var commentList = document.getElementById('commentList');
    var articleNameSpan = document.getElementById('article-name');

    var article = articlesData.find(item => item.id === articleId);

    articleNameSpan.textContent = article.title;

    commentModal.setAttribute('data-article-id', articleId); //pr stocker temporairement l'id 

    loadCommentsFromLocalStorage(articleId);

    var article = articlesData.find(item => item.id === articleId);
        articleNameSpan.textContent = article.title;

    $('#comment-modal').modal('show');
}

function addComment() {
    var commentInput = document.getElementById('commentInput');
    var commentList = document.getElementById('commentList');
    var commentText = commentInput.value;

    var commentCard = document.createElement('div');
    commentCard.className = 'card mb-3 w-50 m-auto border-0';
    commentCard.id = 'mycard';
    commentCard.innerHTML = `
        <div class="row g-0" id="comment">
            <div class="col-md-4">
                <img src="https://img.freepik.com/photos-premium/portrait-belle-jeune-femme-aux-cheveux-boucles_847439-4471.jpg?w=740" class="img-fluid rounded-start h-50" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Prenom Nom</h5>
                    <p class="card-text">${commentText}</p>
                    <p class="card-text"><small class="text-body-secondary">Il y'a 3mn</small></p>
                </div>
            </div>
        </div>
    `;

    commentList.appendChild(commentCard);

    // Sauvegarder le commentaire dans le local storage
    saveCommentToLocalStorage(commentText);

    commentInput.value = '';
}

function saveCommentToLocalStorage(comment) {
    var commentModal = document.getElementById('comment-modal');
    var articleId = parseInt(commentModal.getAttribute('data-article-id'));
    var articleCommentsKey = 'comments_' + articleId;
    console.log(articleCommentsKey)
    var comments = JSON.parse(localStorage.getItem(articleCommentsKey)) || [];
    comments.push(comment);
    localStorage.setItem(articleCommentsKey, JSON.stringify(comments));
}

function loadCommentsFromLocalStorage(articleId) {
    var commentList = document.getElementById('commentList');
    var articleCommentsKey = 'comments_' + articleId;
    var comments = JSON.parse(localStorage.getItem(articleCommentsKey)) || [];

    // Effacer les commentaires existants
    commentList.innerHTML = '';

    console.log('Commentaires '+comments);
    console.log('ID'+articleId);

    // Créer et afficher les cartes de commentaires
    comments.forEach(function(commentText) {
        console.log(commentText);
        var commentCard = document.createElement('div');
        commentCard.className = 'card mb-3 w-75 m-auto border-0';
        commentCard.id = 'mycard';
        commentCard.innerHTML = `
            <div class="row g-0" id="comment">
                <div class="col-md-6">
                    <img src="https://img.freepik.com/photos-premium/portrait-belle-jeune-femme-aux-cheveux-boucles_847439-4471.jpg?w=740" class="img-fluid rounded-start h-50" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title p-0 m-0">Prenom Nom</h5>
                        <p class="card-text m-0 p-0">${commentText}</p>
                        <p class="card-text"><small class="text-body-secondary">Il y'a 3mn</small></p>
                    </div>
                </div>
            </div>
        `;

        commentList.appendChild(commentCard);
    });
}

document.getElementById('send-button').addEventListener('click', addComment);

// $('#comment-modal').on('hidden.bs.modal', function () {
//     // Supprimer la classe du fond noir après la fermeture du deuxième modal
//     $('.modal-backdrop').remove();
//   });

window.addEventListener('load', generateArticleCards);

window.addEventListener('DOMContentLoaded', function() {
    // Obtenir l'ID de l'article actuel du modal de commentaire
    var commentModal = document.getElementById('comment-modal');
    var articleId = parseInt(commentModal.getAttribute('data-article-id'));

    // Charger les commentaires depuis le local storage
    loadCommentsFromLocalStorage(articleId);
});