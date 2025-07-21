const urlPattern = /\.com\/item\?id=\d+/;

function highlightMatchingUsers() {
    const opUser = document.querySelector('a.hnuser:nth-child(2)');

    if (opUser) {
        const opUserName = opUser.innerHTML.trim();

        const commentUsers = document.querySelectorAll('a.hnuser');

        commentUsers.forEach(user => {
            if (user.innerHTML.trim() === opUserName) {
                user.classList.add('highlightOP');
                if (user !== opUser) {
                    user.innerHTML += " [OP]";
                }
            }
        });
    }
}

if (urlPattern.test(window.location.href)) {
    highlightMatchingUsers();
}