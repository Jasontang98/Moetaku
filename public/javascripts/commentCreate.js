const createButton = document.getElementsByClassName('comment_button')[0];
//const {User}=require('../db/models');

createButton.addEventListener("click", async (e) => {
    const article_id = e.target.id.split('-')[0];
    e.preventDefault();
    const textBox = document.getElementById('comment_create');
    const comment = textBox.value;

    if (comment) {
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
        location.reload();
        textBox.value = '';
    }
}
});
