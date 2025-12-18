const storyButton = document.getElementById("story");
console.log(storyButton);

storyButton.addEventListener("click", getWords);
function getWords(){
var words=document.querySelectorAll('input[type="text"]');
var placeholders =document.querySelectorAll('.userInput');

placeholders.forEach((placeholder,index) => {
    console.log(words[index]);

     placeholder.innerHTML= words[index].value;
});
};
;


