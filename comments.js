document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentName = document.getElementById('commentName');
    const commentText = document.getElementById('commentText');
    const commentsDiv = document.getElementById('comments');
    const clearCommentsButton = document.getElementById('clearComments');

    // Load comments from localStorage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        commentsDiv.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <strong>${comment.name}</strong> (${new Date(comment.date).toLocaleString()})<br>
                ${comment.text}
            `;
            commentsDiv.appendChild(commentElement);
        });
    }

    // Save comment to localStorage
    function saveComment(comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    // Clear all comments from localStorage
    function clearComments() {
        localStorage.removeItem('comments');
        commentsDiv.innerHTML = '';
    }

    // Handle form submission
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = commentName.value.trim();
        const text = commentText.value.trim();
        if (name && text) {
            const comment = {
                name: name,
                text: text,
                date: new Date()
            };
            saveComment(comment);
            loadComments();
            commentName.value = '';
            commentText.value = '';
        }
    });

    // Handle clear comments button click
    clearCommentsButton.addEventListener('click', function() {
        clearComments();
    });

    // Initial load of comments
    loadComments();
});