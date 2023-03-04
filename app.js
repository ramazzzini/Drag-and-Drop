const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const task = document.querySelector('.task');

task.addEventListener('click', createNewItem)
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}
function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hidden'), 0
    })
}

function dragend(event) {
    event.target.className = ('item')
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}

function createNewItem() {
    task.insertAdjacentHTML('beforebegin', `
  <div class="row">
    <div class="placeholder">
      <div class="item" draggable="true">Перетащи меня</div>
    </div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
  </div>`)
}