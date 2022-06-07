const createButton = document.getElementById("create_button");

createButton.addEventListener("click", async(e) => {
    const article_id = e.target.id.split('-')[0];
    const user_id = e.target.id.split('-')[1];
    e.preventDefault();
    const comment = document.getElementById("comment").value
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
    console.log(data);
});