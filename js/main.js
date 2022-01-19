import  RenderPosts  from "./modules/RenderPosts.js";
import acordion from "./modules/acordion.js";
// import GetViews from "./modules/GetViews.js";
import RenderViews from "./modules/RenderViews.js";
import InitModal from "./modules/IninMolal.js";



const posts =[
   {
     id: "1",
      item: "Сауна 'Лукоморье' приглашает в гости не только гостей, но и жителей города насладиться парными процедурами  финской парной. Мы знаем толк в банном отдыхе, поэтому все наши гости останутся довольны.приглашает в гости всех любителей качественного отдыха, окунуться в мир релакса и тепла в комфортной уютной обстановке. Наше заведение имеет все необходимое для полноценного отдыха.У нас можно не только отдохнуть большой компанией, но и организовать любое праздничное событие. Корпоративы и дни рождения, встречи с деловыми партнерами – у нас задуманное мероприятие пройдет на все 100%."
   },
   {
      id:"2",
      item: "lorem ipsum dolor set amet, lorem ipsum dolor set amet, lorem ipsum dolor set amet. lorem ipsum dolor set amet,lorem ipsum dolor set amet"
   }
 ];

 

RenderPosts(posts, "item");
acordion();
RenderViews();
InitModal();
