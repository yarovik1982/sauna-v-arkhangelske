

   function RenderPosts(obj, key){
      const wrapPost = document.querySelector(".post");
      // for(let i = 0; i < obj.length; i++){
         // if(wrapPost.dataset.id === obj[i][id]){
      wrapPost.textContent = obj[0][key];
      // }
      // console.log(obj[i][key]);
   }

export default RenderPosts;