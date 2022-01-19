function GetViews(obj){
  
   localStorage.setItem("reviews", JSON.stringify(obj));
   return obj;

   reviewsContainer.innerHTML = "";
   obj.forEach(item => {
      reviewsContainer.insertAdjacentHTML("beforeend", `<div class="reviews__row-review">
      <div class="reviews__row-rate">
      <span class="reviews__row-star">
          <img src="${obj.img}" alt="Rate">
      </span>
      <span class="reviews__row-date">${obj.date}</span>
  </div>
  <p class="reviews__row-name">${obj.name}</p>
  <p class="reviews__row-text">${obj.content}</p>
  </div>
  `)
   });
}
export default GetViews;