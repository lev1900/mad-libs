const storyButton = document.getElementById("story");
storyButton.addEventListener("click", getWords);
function getWords(){
console.log(storyButton);
};

var words=document.querySelectorAll('input[type="text"]');
console.log(words);