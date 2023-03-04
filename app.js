const item = document.querySelector('.item');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hidden'), 0
    })
}

function dragend(event) {
    event.target.classList.remove('hold')
    event.target.classList.remove('hidden')
}