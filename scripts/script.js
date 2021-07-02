let box = document.querySelector("div#box");

let topLeft = document.querySelector("#topLeft input");
let topRight = document.querySelector("#topRight input");
let bottomRight = document.querySelector("#bottomRight input");
let bottomLeft = document.querySelector("#bottomLeft input");

const width = document.querySelector("#width");
const height = document.querySelector("#height");

const message = document.querySelector("#message");


topLeft.addEventListener("input", () => {
  toModelForm();
});

topRight.addEventListener("input", () => {
  toModelForm();
});

bottomRight.addEventListener("input", () => {
  toModelForm();
});

bottomLeft.addEventListener("input", () => {
  toModelForm();
});

width.addEventListener("input", () => {
  box.style.width = `${width.value}px`;
});

height.addEventListener("input", () => {
  box.style.height = `${height.value}px`;
});

function toModelForm() {
  box.style.borderRadius = `${topLeft.value}% ${100 - topLeft.value}% ${bottomRight.value
    }% ${100 - bottomRight.value}% / 
      ${100 - bottomLeft.value}% ${topRight.value}% ${100 - topRight.value}% ${bottomLeft.value
    }%`;
}

function copy() {
  text = ` width: ${width.value}px;
  height: ${height.value}px;
  
  -webkit-border-radius: ${topLeft.value}% ${100 - topLeft.value}% ${bottomRight.value}% 
  ${100 - bottomRight.value}% / ${100 - bottomLeft.value}% ${topRight.value}% 
  ${100 - topRight.value}% ${bottomLeft.value}% ;
                
  -moz-border-radius: ${topLeft.value}% ${100 - topLeft.value}% ${bottomRight.value}% 
  ${100 - bottomRight.value}% / ${100 - bottomLeft.value}% ${topRight.value}% 
  ${100 - topRight.value}% ${bottomLeft.value}% ;
  
  border-radius: ${topLeft.value}% ${100 - topLeft.value}% ${bottomRight.value}% 
  ${100 - bottomRight.value}% / ${100 - bottomLeft.value}% ${topRight.value}% 
  ${100 - topRight.value}% ${bottomLeft.value}% ;`;

  navigator.clipboard.writeText(text).then(() => {
    returnCopyStatus('😊 Copied ! ')
  }, function () {
    returnCopyStatus('😞 No copied ! ')
  }
  );
}

function returnCopyStatus(status) {
  message.innerHTML = `<p>${status}</p>`;
  message.classList.add("showTheMessage");

  setTimeout(() => {
    message.removeChild(message.firstChild);
    messa.classList.remove("showTheMessage");
  }, 2000);
}