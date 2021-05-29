{
  'use strict';



  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    //console.log('Link was clicked!');
    //console.log(event);

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    //console.log('clickedElement: ', clickedElement);
    //console.log('clickedElement (WITH +): ' + clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('article.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const hrefAttr = clickedElement.getAttribute("href");
    //console.log('hrefAttr: ', hrefAttr);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const correctArticle = document.querySelector('article'+hrefAttr+'.post');
    //console.log('correctArticle: ', correctArticle);

    /* add class 'active' to the correct article */
    correctArticle.classList.add('active');
  }









    const generateTitleLinks = function(){
      /* delete link list in the left sidebar */

      const ulSelector = document.querySelector('aside ul.titles');
      function clearLinks(){
        ulSelector.innerHTML = '';
      }

      clearLinks();

      const articles = document.querySelectorAll('article.post');
      //console.log('articles: ', articles);
      // [PYT?] let ulInnerHTML = ulSelector.innerHTML;
      //console.log('ulInnerHTML: ', ulInnerHTML);

      //let addList = '';
      for(let article of articles){

        /* read an article id and write it to const */
        const articleId = article.getAttribute("id");
        //console.log('articleId: ', articleId);


        /* find element's title and write it to const */
        const articleTitle = document.querySelector('article#'+articleId+' h3.post-title').innerHTML;
        //console.log('articleTitle: ', articleTitle);

        /* generate HTML code and write to const */
        const addLink = '<li><a href="#'+articleId+'"><span>'+articleTitle+'</span></a></li>';
        //console.log('addLink: ', addLink);

        /* insert the above HTML code to the left sidebar */
        //addList = addList + addLink;
        ulSelector.insertAdjacentHTML('beforeend', addLink);

      }
      //ulSelector.innerHTML = addList;


      const links = document.querySelectorAll('.titles a');

      for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }
    }

    generateTitleLinks();


}
