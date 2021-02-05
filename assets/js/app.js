const getData = async () => {
    const url = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dpdEklNsRrFllaN1jlBDRAI14RTfPPF3';
    const response = await fetch(url);
    const json = await response.json();

    return json.results || [];
};

const createPost = (post) => {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('a');
    const cardText = document.createElement('p');

    card.classList.add('card');
    image.classList.add('card-img-top');
    cardBody.classList.add('card-body');
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');

    image.setAttribute('src', post.multimedia[0].url);
    cardTitle.setAttribute('href', post.url);

    cardTitle.textContent = post.title;
    cardText.textContent = post.abstract;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(image);
    card.appendChild(cardBody);

    return card;
};

const renderPosts = () => {
    const news = document.querySelector('.news');

    getData().then((data) => {
        data.forEach((post) => {
            const element = createPost(post);

            news.appendChild(element);
        });
    });
};

renderPosts();
