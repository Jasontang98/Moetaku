const editButtons = document.querySelectorAll('.comment_edit_button')

for(let i=0; i<editButtons.length; i++){
const button = editButtons[i];
    button.addEventListener('click', (e) => {

        const commentId = e.target.id.split('-')[2];
        const articleId = e.target.id.split('-')[3];
        const commentForm = document.getElementById(`edit-form-${commentId}`)

        if (commentForm.classList.contains('hidden')) {
            commentForm.classList.remove('hidden')
        } else {
            commentForm.classList.add('hidden')
        }

        const submitButton = document.getElementById(`${commentId}-edit`)
        submitButton.addEventListener('click', async (submitEvent) => {
            submitEvent.preventDefault()
            const comment = document.getElementById(`${commentId}-comment-edit`).value

            const res = await fetch(`/articles/${articleId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: commentId,
                    body: comment

                })
            });
            const data = await res.json()

            if (data.message === 'Success!') {
                const commentDiv = document.getElementById(`${data.comment.id}-comment-div`);
                // const commentAuthor = document.getElementById(`${data.comment.id}-comment-author`);
                // const commentUpdated = document.getElementById(`${data.comment.id}-comment-updated`);

                const updatedDate = data.comment.updatedAt;
                const newDate = new Date(updatedDate);
                commentDiv.innerHTML = `${data.comment.body} <div id='comment_author_date'><div>${data.username}</div><div>${newDate.toDateString()}</div></div>`
                // commentAuthor.innerText = data.username;
                // commentUpdated.innerText = newDate.toDateString();

                commentForm.classList.add('hidden');
            }









        })


    })
}
