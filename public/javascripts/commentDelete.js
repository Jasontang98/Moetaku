
const deleteButtons = document.querySelectorAll('.comment_delete_button');

for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i];

    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const commentId = e.target.id.split('-')[2];
        const articleId = e.target.id.split('-')[3];

        const res = await fetch(`/articles/${articleId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:commentId})
        })

        const data = await res.json()

        if (data.message = "Success!") {
            const commentDiv = document.getElementById(`${commentId}-comment-div`)
            const editButton = document.getElementById(`edit-comment-${commentId}-${articleId}`)
            const deleteButton = document.getElementById(`delete-comment-${commentId}-${articleId}`)
            const commentForm = document.getElementById(`edit-form-${commentId}`)
            commentDiv.remove()
            editButton.remove()
            deleteButton.remove()
            commentForm.remove()
        }

    })



}
