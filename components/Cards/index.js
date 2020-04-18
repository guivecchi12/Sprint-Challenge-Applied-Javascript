// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response)=>{
        //console.log(response.data.articles);
        let articles = response.data.articles;

        for(let [key, value] of Object.entries(articles)){
            //console.log(Object.keys(response.data.article));
            
            value.forEach((hl)=>{
                //console.log(hl);

                let card = document.createElement('div');
                card.classList.add('card');

                let headline = document.createElement('div');
                headline.classList.add('headline');
                headline.textContent = hl.headline;
                card.appendChild(headline);

                let author = document.createElement('div');
                author.classList.add('author');
                card.appendChild(author);

                let imgC = document.createElement('div');
                imgC.classList.add('img-container');
                author.appendChild(imgC);

                let img = document.createElement('img');
                img.src = hl.authorPhoto;
                imgC.appendChild(img);

                let name = document.createElement('span');
                name.textContent = "By " + hl.authorName;
                author.appendChild(name);

                let cardsC = document.querySelector('div.cards-container');
                cardsC.appendChild(card);

            })
            
        }
        

        // response.forEach((art)=>{
        //     console.log(art);

            // let card = document.createElement('div');
            // card.classList.add('card');

            // art.forEach((hl)=>{
            //     let headline = document.createElement('div');
            //     headline.classList.add('headline');
            //     headline.textContent = hl.headline;
            //     card.appendChild(headline);

            //     let author = document.createElement('div');
            //     author.classList.add('author');
            //     card.appendChild(author);

            //     let imgC = document.createElement('div');
            //     imgC.classList.add('img-container');
            //     author.appendChild(imgC);

            //     let img = document.createElement('img');
            //     img.src = hl.authorPhoto;
            //     imgC.appendChild(img);

            //     let name = document.createElement('span');
            //     name.textContent = "By " + hl.authorName;
            //     author.appendChild(name);
            // })
            // console.log(card);
            
        // })
        

    })
    .catch(console.log)
