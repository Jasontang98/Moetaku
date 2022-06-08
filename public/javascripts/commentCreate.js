const createButton = document.getElementsByClassName('comment_button')[0];
//const {User}=require('../db/models');

createButton.addEventListener("click", async (e) => {
    const article_id = e.target.id.split('-')[0];
    e.preventDefault();
    const textBox = document.getElementById('comment_create');
    const comment = textBox.value;

    const res = await fetch(`/articles/${article_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            body: comment,
            article_id
        })
    });
    const data = await res.json()

    if (data.message === 'Success!') {
        const commentContainer = document.getElementById('comment_container');
        const newComment = document.createElement('div');
        const newAuthor = document.createElement('div');
        const updatedAt = document.createElement('div')
        newComment.innerText = data.comment.body;
        newAuthor.innerText = data.username;
        const updatedDate = data.comment.updatedAt;

        const newDate = new Date(updatedDate);

        updatedAt.innerText = newDate.toDateString();

        newComment.appendChild(newAuthor);
        newComment.appendChild(updatedAt);
        commentContainer.appendChild(newComment);



        textBox.value = '';
    }
});
