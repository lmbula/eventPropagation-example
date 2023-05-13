//allows select dynamic elements(elements that we add using javascript)
//event propagation - order the events are fired
//event bubbling - clicked element first then bubbles up --default
//event capturing - fires at the root and fires until it reaches target

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    const element = document.createElement('h1');
    element.classList.add('heading');
    element.textContent = `I'm inside the container`;
    container.appendChild(element);
});

//because the heading is being added dynamically we can use the container to target the element that has been added
container.addEventListener('click',function(e){
    if(e.target.classList.contains('heading')){
        console.log('Yes I do contain class heading');
    }
});