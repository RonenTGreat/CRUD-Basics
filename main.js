let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let form = id("form"),
    input = id("input"),
    msg = id("msg")
    posts = id("posts")


form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked")

  formValidation();
});

let formValidation = () => {
  if(input.value.trim() === ""){
    msg.innerText = "Post cannot be black";
    console.log("failure");
  }else{
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
};