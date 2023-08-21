let total = 0;
let couponCode;

function homeCookerItem(target) {
  const selectedItem = document.getElementById("selected-items");
  const itemName = target.childNodes[3].childNodes[3].innerText;
  // console.log(itemName);
  const li = document.createElement("li");
  li.innerText = itemName;
  // console.log(li);
  selectedItem.appendChild(li);
  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price);
  // console.log(total);
  const firstTotal = (document.getElementById("total-price").innerText = total);
  const sellInput = document.getElementById("coupon-input");
  const sellButton = document.getElementById("coupon-button");
  sellInput.addEventListener("input", () => {
    const inputText = sellInput.value.trim();
    couponCode = inputText;
    // console.log(inputText);
    if (inputText === "SELL200") {
      sellButton.removeAttribute("disabled");
    }

    if (firstTotal >= 200) {
      const priceTotal = firstTotal * 0.2;
      const discountPrice = (document.getElementById("discount").innerText =
        priceTotal);
      const discount = firstTotal - priceTotal;
      const totalPrice = (document.getElementById("total").innerText =
        discount);
    }
  });
  const totalPrice = (document.getElementById("total").innerText = firstTotal);
}

function sportsCatesItem(target) {
  const selectedItem = document.getElementById("sportsWear");
  const itemName = target.childNodes[3].childNodes[3].innerText;
  // console.log(itemName);
  const li = document.createElement("li");
  li.innerText = itemName;
  // console.log(li);
  selectedItem.appendChild(li);
  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price);
  // console.log(total);
  const firstTotal = (document.getElementById("total-price").innerText = total);
  const sellInput = document.getElementById("coupon-input");
  const sellButton = document.getElementById("coupon-button");
  sellInput.addEventListener("input", () => {
    const inputText = sellInput.value.trim();
    couponCode = inputText;
    // console.log(inputText);
    if (inputText === "SELL200") {
      sellButton.removeAttribute("disabled");
    }

    if (firstTotal >= 200) {
      const priceTotal = firstTotal * 0.2;
      const discountPrice = (document.getElementById("discount").innerText =
        priceTotal);
      const discount = firstTotal - priceTotal;
      const totalPrice = (document.getElementById("total").innerText =
        discount);
    }
  });
  const totalPrice = (document.getElementById("total").innerText = firstTotal);
}

function homeCookItem(target) {
  const selectedItem = document.getElementById("furniture");
  const itemName = target.childNodes[3].childNodes[3].innerText;
  // console.log(itemName);
  const li = document.createElement("li");
  li.innerText = itemName;
  // console.log(li);
  selectedItem.appendChild(li);
  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price);
  // console.log(total);
  const firstTotal = (document.getElementById("total-price").innerText = total);
  const sellInput = document.getElementById("coupon-input");
  const sellButton = document.getElementById("coupon-button");
  sellInput.addEventListener("input", () => {
    const inputText = sellInput.value.trim();
    couponCode = inputText;
    // console.log(inputText);
    if (inputText === "SELL200") {
      sellButton.removeAttribute("disabled");
    }

    if (firstTotal >= 200) {
      const priceTotal = firstTotal * 0.2;
      const discountPrice = (document.getElementById("discount").innerText =
        priceTotal);
      const discount = firstTotal - priceTotal;
      const totalPrice = (document.getElementById("total").innerText =
        discount);
    }
  });
  const totalPrice = (document.getElementById("total").innerText = firstTotal);
}
