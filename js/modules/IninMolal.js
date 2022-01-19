
function InitModal(){
   const body = document.querySelector("body");
   // const offer = document.querySelector("[data-id=offer");
   const modal = document.querySelector(".modal");
   

   function addClassElement (element, _class){
      element.classList.add(_class);
   }

   function removeClassElement(element, _class){
      element.classList.remove(_class);
   }

   document.addEventListener("click", function(event){
      let elem = event.target;
      if(elem.closest('[data-id=offer]')){
         addClassElement(body, "lock");
         addClassElement(modal, "visible");
      }
      if(elem.closest(".modal__item-close") || elem.classList.contains("modal")){
         
         removeClassElement(body, "lock");
         removeClassElement(modal, "visible");
      }
      console.log(elem);
   })
}
export default InitModal;