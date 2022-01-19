import GetViews from "./GetViews.js";

const reviews = [
   {
      id: 1,
      img:"../images/rating-reviews-1.png",
      "name": "Владимир",
      "date":'12.12.2020',
      "content":"Сауна реально крутая и цена достаточно приемлимая для заведения такого комфорта",
   },
   {
     id: 2,
     img:"../images/rating-reviews-2.png",
     "name": "Александра",
     "date":'12.08.2021',
     "content":"Бронировали номер 'Гармония' отдыхали с детьми. Все очень понравилось, вежливый персонал. Все, что мы хотели, то и получили от отдыха и посещения вашей сауны. Особенно порадовала чистота номеров,теплый и чистый бассейн! Все остались очень довольны. Так держать ребята! Удачи вам и процветания!!!",
  },
  {
     id: 3,
     img:"../images/rating-reviews-3.png",
     "name": "Ольга",
     "date":'24.10.2020',
     "content":'Отмечали вчера день рождения в этой сауне и остались довольны) Прекраcное обслуживание, вежливый администратор и что самое главное ЧИСТО. Были в зале "Гармония", в этом зале очень удобное расположение бассейна и столика, очень удобно следить за детьми. Спасибо большое за этот праздник) Мы остались очень довольны)',
  },
]

const RenderViews = ()=>{
   const data = GetViews(reviews);
   const reviewsContainer = document.querySelector(".reviews__row-container");
   data.forEach(element => {
      reviewsContainer.insertAdjacentHTML("afterbegin",  
      `<div class="reviews__row-review">
         <div class="reviews__row-rate">
            <span class="reviews__row-star">
            <img src="${element.img}" alt="Rate">
            </span>
            <span class="reviews__row-date">${element.date}</span>
         </div>
         <p class="reviews__row-name">${element.name}</p>
         <p class="reviews__row-text">${element.content}</p>
      </div>`);   
});
   
}
export default RenderViews;