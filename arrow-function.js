// document.getElementById('submit-btn').addEventListener('click', function () {
//     console.log("Hello")
// })
const inputField = () => {

    const inputFieldElement = document.getElementById('submit-field');
    const inputFieldText = inputFieldElement.value;
    const inputValue = parseFloat(inputFieldText
    );
    if (isNaN(inputValue)) {
        alert(`Sorry!!!${inputFieldText} is not permissible to do the task`)
    }
    else {
        const output = calculate(inputValue);
        const div = document.createElement('div');
        div.classList.add = "card-body"
        div.innerHTML = ` <h5 class="card-title">RESULT</h5>
        <p class="card-text">${output}</p>`

        const mainCard = document.getElementById('result-card');
        mainCard.textContent = '';
        mainCard.appendChild(div);
    }

}
const calculate = num => {
    let resultArray = [];
    for (let i = 1; i <= 10; i++) {
        const result = num * i;
        const line = `${num} X ${i} = ${result}`
        resultArray.push(line);
    }

    return resultArray.join('</br>');
}
// const clear = () => {
//     const inputFields = document.getElementById('submit-field');
//     inputFields.value = " ";
// }
document.getElementById('submit-field').addEventListener('focus', function () {
    const inputFields = document.getElementById('submit-field');
    inputFields.value = " ";
}

)

