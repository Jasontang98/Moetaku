const createButton = document.getElementsByClassName('comment_button')[0];

createButton.addEventListener("click", async(e) => {
    const article_id = e.target.id.split('-')[0];
    const user_id = e.target.id.split('-')[1];
    e.preventDefault();
    const comment = document.getElementById('comment_text').value

    const res = await fetch (`/articles/${article_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            body: comment,
            article_id,
            user_id
        })
    });
    const data = await res.json()
    if (data.message === 'Success!') {
        const commentContainer = document.getElementById('comment_container');
        const newComment = document.createElement('div');
        newComment.innerText = data.comment.body;
        commentContainer.appendChild(newComment);

        const textBox = document.getElementById('comment_text');
        textBox.value = '';
    }
});
