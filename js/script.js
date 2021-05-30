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




  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';




  function generateTitleLinks(customSelector = ''){
    /* delete link list in the left sidebar */

    const ulSelector = document.querySelector(optTitleListSelector);
    function clearLinks(){
      ulSelector.innerHTML = '';
    }

    clearLinks();

    const articles = document.querySelectorAll(optArticleSelector+customSelector);

    //console.log('articles: ', articles);
    // [PYT?] let ulInnerHTML = ulSelector.innerHTML;
    //console.log('ulInnerHTML: ', ulInnerHTML);

    //let addList = '';
    for(let article of articles){

      /* read an article id and write it to const */
      const articleId = article.getAttribute("id");
      //console.log('articleId: ', articleId);


      /* find element's title and write it to const */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
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


  function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for(let article of articles){
      /* find tags wrapper */
      const tagsList = article.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      //console.log('articleTags: '+articleTags);
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      //console.log('articleTagsArray: '+articleTagsArray[0]);
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* generate HTML of the link */
        let genHTML = '<li><a href="#tag-'+tag+'">'+tag+'</a></li>';
        /* add generated code to html variable */
        html = html + genHTML;
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsList.insertAdjacentHTML('beforeend', html);
    /* END LOOP: for every article: */
    }
  }

  generateTags();




  function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href: '+href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  //const tag = href.slice(5,-1);
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('.post-tags .list-horizontal a.active');

  /* START LOOP: for each active tag link */
  for(let activeTag of activeTags){

    /* remove class active */
    activeTag.classList.remove('active');

  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const hrefTags = document.querySelectorAll('[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for(let hrefTag of hrefTags){

    /* add class active */
    hrefTag.classList.add('active');

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('.post-tags .list-horizontal a');
  /* START LOOP: for each link */
  for(let link of links){
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}




addClickListenersToTags();











}
