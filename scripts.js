const btnPerson01 = document.querySelector('.btn-01');
const btnPerson02 = document.querySelector('.btn-02');
const btnPerson03 = document.querySelector('.btn-03');
const btnPerson04 = document.querySelector('.btn-04');
const btnPerson05 = document.querySelector('.btn-05');
const btnPerson06 = document.querySelector('.btn-06');

const divPerson01 = document.querySelector('.person01');
const divPerson02 = document.querySelector('.person02');
const divPerson03 = document.querySelector('.person03');
const divPerson04 = document.querySelector('.person04');
const divPerson05 = document.querySelector('.person05');
const divPerson06 = document.querySelector('.person06');

const btnAll = [...document.querySelectorAll('.btn')];
const divAll = [...document.querySelectorAll('.div')];

btnAll.map((x, i) => x.addEventListener('click', () => {
    console.log(x, `btnPerson0${i + 1}`)
}));

btnAll.map((x) => x.addEventListener('click', () => {
    (x === btnPerson01 ? divAll.map(x => x === divPerson01 ? divPerson01.classList.toggle('hidden') : x.classList.add('hidden'))
        : x === btnPerson02 ? divAll.map(x => x === divPerson02 ? divPerson02.classList.toggle('hidden') : x.classList.add('hidden'))
            : x === btnPerson03 ? divAll.map(x => x === divPerson03 ? divPerson03.classList.toggle('hidden') : x.classList.add('hidden'))
                : x === btnPerson04 ? divAll.map(x => x === divPerson04 ? divPerson04.classList.toggle('hidden') : x.classList.add('hidden'))
                    : x === btnPerson05 ? divAll.map(x => x === divPerson05 ? divPerson05.classList.toggle('hidden') : x.classList.add('hidden'))
                        : divAll.map(x => x === divPerson06 ? divPerson06.classList.toggle('hidden') : x.classList.add('hidden')));
}));

console.log(btnAll);
console.log(divAll);

