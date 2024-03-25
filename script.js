var questions = [
    {
        question: 'HTML Stands for_________________',
        option: [
            'Hypertext Markup Language',
            'HTML',
            'case cading atylesheet',
            'hyper text mockup language'
        ],
        corectans: 'Hypertext Markup Language',
    },
    {
        question: 'CSS Stand for_________________',
        option: [
            'case style sheet',
            'case code style sheet',
            'case cading stylesheet',
            'hyper text mockup language'
        ],
        corectans: 'case cading stylesheet',
    },
    {
        question: 'RAM Stands for_________________',
        option: [
            'Read only memory',
            'Read a module ',
            'Random Access Memory',
            'Random account model'
        ],
        corectans: 'Random Access Memory',
    },
    {
        question: 'js Stands for_________________',
        option: [
            'jgandjo script',
            'javascript',
            'java style',
            'java src'
        ],
        corectans: 'javascript',
    },
    {
        question: 'DOM Stands for_________________',
        option: [
            'Document object module',
            'data object model',
            'Html',
            'document oriented model'
        ],
        corectans: 'Document object module',
    }
]


var totalquestion = document.getElementById('totalquestionumber');
var currentquestionnumber = document.getElementById('currentquestionnumber');
var questiondisplay = document.getElementById('question');
var optionparent = document.getElementById('bottom-div');
var maindiv = document.getElementById('main');
var resultdiv = document.getElementById('result');
var marksvalue = document.getElementById('markvalue');
var index = 0;
var marks = 0;


function display() {
    questiondisplay.innerHTML = questions[index].question;

    for (i = 0; i < questions[index].option.length; i++) {
        var optivalue = questions[index].option[i];
        var corrvalue = questions[index].corectans;
        optionparent.innerHTML += `<button onclick="checkans('${optivalue}','${corrvalue}')" class="opt-btn">${questions[index].option[i]}</button>`;

    }
    totalquestion.innerHTML = questions.length;
    currentquestionnumber.innerHTML = index + 1;
}

display()



function checkans(clickoption, corectoption) {
    if (clickoption == corectoption) {
        marks++;
        nextquestion();
    }
    else {
        nextquestion();
    }
}


function nextquestion() {
    if (index + 1 == questions.length) {
        maindiv.style.display = 'none';
        resultdiv.style.display = 'block';
        marksvalue.innerHTML = marks;
    }
    else {
        index++;
        optionparent.innerHTML = "";
        display();
    }
}