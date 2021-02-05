const getWeatherData = async () => {
 const url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Krakow,pl&units=metric&appid=be45fea377f32d5e3f469489e86cdfc2'
 fetch(url).then((response) => {
    return response.json()

 })
 .then((json) => {
     console.log(json)
 })
 .catch((error) => {
     setTimeout(() => {
         console.log(error) 
     }, 5000)
 })

};


// const createPost = (post) => {
//     const card = document.createElement('div');
//     const image = document.createElement('img');
//     const cardBody = document.createElement('div');
//     const cardTitle = document.createElement('a');
//     const cardText = document.createElement('p');

//     card.classList.add('card');
//     image.classList.add('card-img-top');
//     cardBody.classList.add('card-body');
//     cardTitle.classList.add('card-title');
//     cardText.classList.add('card-text');

//     image.setAttribute('src', post.multimedia[0].url);
//     cardTitle.setAttribute('href', post.url);

//     cardTitle.textContent = post.title;
//     cardText.textContent = post.abstract;

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);

//     card.appendChild(image);
//     card.appendChild(cardBody);

//     return card;
// };

// const renderPosts = () => {
//     const news = document.querySelector('.news');

//     getData().then((data) => {
//         data.forEach((post) => {
//             const element = createPost(post);

//             news.appendChild(element);
//         });
//     });
// };

// renderPosts();
