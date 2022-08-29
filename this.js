console.log("this is my new website");
//  533d83c3ab174c7eb73abcce58aa4a07
let source="us"
let apikey="533d83c3ab174c7eb73abcce58aa4a07"
 let newsaccordians=document.getElementById("newsaccordian");
 const xhr=new XMLHttpRequest();
 xhr.open("GET",`https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apikey}`,true);
 xhr.onload = function () {
  if(this.status === 200){
     let json=JSON.parse(this.responseText)
     let articles=json.articles;
     let newshtml="";
     articles.forEach(function(element,index){
     //console.log(articles);
     
      
      let news=`<div class="card">
 
   <div class="card-header" id="heading${index}">
    <h2 class="mb-0">
     <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
       ${element.title}
     </button>
   </h2>
   </div>
   <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsExample">
     <div class="accordion-body">
       ${element["description"]}
     </div>
   </div>
  
</div> ` 
newshtml+=news;
     })

     newsaccordians.innerHTML=newshtml;
  }
  else{
      console.log("Some error occured")
  }
}

xhr.send();
 