let arr = [
    {
      foodImageURl:"samosa.avif",
      foodName: "samosa",
      foodCategory: "Snack",
      isJunkFood: true,
      calories: 200
    },
    {
      foodImageURl:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      foodName: "sandwich",
      foodCategory: "Snack",
      isJunkFood: true,
      calories: 295
    },
    {
      foodImageURl:"https://thumbs.dreamstime.com/b/chicken-noodles-stir-fry-peppers-celery-47807218.jpg",
      foodName: "noodles",
      foodCategory: "Snack",
      isJunkFood: true,
      calories: 329
    },
    {
      foodImageURl:"https://photo2.foodgawker.com/wp-content/uploads/2017/12/3125217.jpg",
      foodName: "pesarattu",
      foodCategory: "BreakFast",
      isJunkFood: false,
      calories: 133
    },
    {
      foodImageURl:"https://thumbs.dreamstime.com/b/indian-thali-26440151.jpg",
      foodName: "veg thali",
      foodCategory: "Dinner",
      isJunkFood: false,
      calories: 163
    },
    {
      foodImageURl:"https://media.istockphoto.com/id/517055112/photo/still-life-red-wine-cheese-and-prosciutto.jpg?s=612x612&w=0&k=20&c=CMX5Sr-W26M_pL8ay9sGqh0DXOAlacSoeJg2jjzhjLo=",
      foodName: "cheese and prosciutto",
      foodCategory: "Dinner",
      isJunkFood: false,
      calories: 450
    },
    {
      foodImageURl:"https://media.istockphoto.com/id/1333124213/photo/mutton-biryani-chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani.jpg?s=612x612&w=0&k=20&c=SLq3FBlt4jlz_f2sXW-1Q6eLMaFwFF1aj-1v6pW1Jso=",
      foodName: "biryani",
      foodCategory: "Dinner",
      isJunkFood: false,
      calories: 190
    },
    {
      foodImageURl:"https://t4.ftcdn.net/jpg/03/98/25/49/240_F_398254922_14Wn6iMyF9a2nq9qfY3XpfVTpsrWwQKn.jpg",
      foodName: "upma",
      foodCategory: "BreakFast",
      isJunkFood: false,
      calories: 400
    },
    {
      foodImageURl:"idly.jpg",
      foodName: "idly",
      foodCategory: "BreakFast",
      isJunkFood: false,
      calories: 100
    },
    {
      foodImageURl:"tuna.jpg",
      foodName: "herbed tuna salad",
      foodCategory: "Dinner",
      isJunkFood: false,
      calories: 400
    }
  ];
  
  function filterItem(category) {
    document.querySelector(".item-box").innerHTML = " ";
  
    if (category === "break") {
      // document.querySelector(".item-box").innerHTML = "";
      arr.filter(function (item) {
        item.foodCategory === "BreakFast"
          ? (document.querySelector(
              ".item-box"
            ).innerHTML += `<div class="item" style="background-image: url(${item.foodImageURl})">
                      <h4>${item.foodName}</h4>
                      <p>Food Category: ${item.foodCategory}</p>
                      <p>Calories: ${item.calories}</p>
                  </div>`)
          : 0;
      });
    } else if (category === "calories") {
      // document.querySelector(".item-box").innerHTML = "";
      arr.filter(function (item) {
        item.calories <300
          ? (document.querySelector(
              ".item-box"
            ).innerHTML += `<div class="item" style="background-image: url(${item.foodImageURl})">
                      <h4>${item.foodName}</h4>
                      <p>Food Category: ${item.foodCategory}</p>
                      <p>Calories: ${item.calories}</p>
                  </div>`)
          : 0;
      });
    } else if (category === "junck") {
      // document.querySelector(".item-box").innerHTML = "";
      arr.filter(function (item) {
        item.isJunkFood === true
          ? (document.querySelector(
              ".item-box"
            ).innerHTML += `<div class="item" style="background-image: url(${item.foodImageURl})">
                      <h4>${item.foodName}</h4>
                      <p>Food Category: ${item.foodCategory}</p>
                      <p>Calories: ${item.calories}</p>
                  </div>`)
          : 0;
      });
    } else {
      arr.filter(function (item) {
        document.querySelector(
          ".item-box"
        ).innerHTML += `<div class="item" style="background-image: url(${item.foodImageURl})">
                      <h4>${item.foodName}</h4>
                      <p>Food Category: ${item.foodCategory}</p>
                      <p>Calories: ${item.calories}</p>
                  </div>`;
      });
    }
  }
  
  arr.filter(function (item) {
    document.querySelector(
      ".item-box"
    ).innerHTML += `<div class="item" style="background-image: url(${item.foodImageURl})">
                      <h4>${item.foodName}</h4>
                      <p>Food Category: ${item.foodCategory}</p>
                      <p>Calories: ${item.calories}</p>
                  </div>`;
  });
  