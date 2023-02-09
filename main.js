let people = [{
    fname : "John",
    lname: "Doe",
    age: 22,
    like: 1,
    pic: "https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384_960_720.jpg"
},{
    fname : "Mary",
    lname: "Doe",
    age: 30,
    like: 11,
    pic: "https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384_960_720.jpg"
},{
    fname : "Philip",
    lname: "Doe",
    age: 26,
    like: 0,
    pic: "https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384_960_720.jpg"
},{
    fname : "Martin",
    lname: "Doe",
    age: 20,
    like: 20,
    pic: "https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384_960_720.jpg"
}];

for(let val of people){
    document.getElementById("result").innerHTML += `
    <div>
<div class="card" style="width: 18rem;">
<img src="${val.pic}" class="card-img-top" alt="${val.fname}">
<div class="card-body">
  <h5 class="card-title">${val.fname}</h5>
  <p class="likes">${val.like}</p>
  <p class="btn btn-success likeBtn">Like</p>
  <p class="btn btn-warning showMore">Show more info</p>
</div>
</div>
</div>`;
}

let btns = document.getElementsByClassName("likeBtn");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        people[i].like++;
        console.log(people[i].like);
        document.getElementsByClassName("likes")[i].innerHTML = people[i].like;
    })
}

let moreInfoBtns = document.getElementsByClassName("showMore");

for(let i = 0; i < moreInfoBtns.length; i++){
    moreInfoBtns[i].addEventListener("click", function(){
        document.getElementById("info").innerHTML = `<div class="card" style="width: 100$;">
        <img src="${people[i].pic}" class="card-img-top" alt="${people[i].fname}">
        <div class="card-body">
          <h5 class="card-title">${people[i].fname} ${people[i].lname}</h5>
          <p class="card-text"> ${people[i].age} <br> ${people[i].like}</p>
        </div>
      </div>`;
    })
}
