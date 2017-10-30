let lomakeOK = false;

const checkAttribute = (attr, elements, func) => {
    elements.forEach((el) => {
        if (el.hasAttribute(attr)) {
        func(el);
    }
});

};

const checkEmpty = (el) => {
    console.log(el.value);
    if(el.value === '') {
    //el.setAttribute('style', 'border: 1px solid red');
        el.setAttribute('style', 'border: 1px solid red');
        lomakeOK += '0';
    } else {
        el.setAttribute('style');
        lomakeOK += '1';
    }
};

const inputElementit = document.querySelectorAll('input');


const lomake = document.querySelector('form');

lomake.addEventListener('submit', (evt) => {
    evt.preventDefault();
    lomakeOK = '';
    checkAttribute('required', inputElementit, checkEmpty);
    const lauseke   = new RegExp('0');
    if (!lauseke.exec(lomakeOK)){
        lomake.sumbit();
    }

});

