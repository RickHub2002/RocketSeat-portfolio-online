const linksSocialMedia = {
    github: 'RickHub2002',
    linkedin: 'https://br.linkedin.com/in/ricardo-targino-044681212'
}

const getApiUserProfile = () => {
    const apiUrl = `https://api.github.com/users/${linksSocialMedia.github}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        profileImage.src = data.avatar_url,
        postProfileImage.src = data.avatar_url
    })
}

getApiUserProfile();

function starClick() {
    return alert('Favoritado');
}

function commitClick() {
    return alert('Comitado');
}