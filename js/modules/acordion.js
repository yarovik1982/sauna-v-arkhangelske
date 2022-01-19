
   
   function acordion(){

      const optionListElem = document.querySelector('.option__list');
      const optionItemElems = document.querySelectorAll('.option__item');
  
      optionItemElems.forEach(elem =>{
        if(elem.children[1].classList.contains('active')){
          elem.children[1].style.height = `${dropDown.scrollHeight}px`;
        }
      })
  
      const open = (button, dropDown)=>{
        closeAllDrops();
        dropDown.style.height = `${dropDown.scrollHeight}px`
        button.classList.add('active')
        dropDown.classList.add('active')
      };
      const close = (button, dropDown)=>{
        
        button.classList.remove('active');
        dropDown.classList.remove('active');
        dropDown.style.height = '';
        
      };
      const closeAllDrops = (button, dropDown)=>{
          optionItemElems.forEach((elem)=>{
          if(elem.children[0] !==button && elem.children[1] !==dropDown){
            close(elem.children[0], elem.children[1]);  
          
          }
        })
      };
  
      optionListElem.addEventListener('click', (event)=>{
  
        const target = event.target;
        if(target.classList.contains('option__button')){
          const parent = target.closest('.option__item');
          const description = parent.querySelector('.option__description');
          description.classList.contains('active')?close(target, description):open(target, description);
        }
      });
      
      document.body.addEventListener('click', (event)=>{
        const target = event.target;
        if(!target.closest('.option__list')){
          closeAllDrops();
        }
      })
    };
   //  acordion();
   export default acordion