

function typeChoice(el) {
    const chosenType = el
    const displayBox = document.getElementById('type-choice')
    displayBox.textContent = chosenType
    return chosenType;
}


let moneyNum

function moneyChoice(el) {
    const chosenMoney = el
    const displayBox = document.getElementById('money-choice')
    displayBox.textContent = chosenMoney

    if (chosenMoney === 'no') {
        moneyNum = 'price=0'
    }
    if(chosenMoney === 'yes') {
        moneyNum = 'minprice=0&maxprice=0.1'
    }

}

async function response() {
    try {
        const apiType = document.getElementById('type-choice').textContent
        const apiCall = await fetch(`https://www.boredapi.com/api/activity?type=${apiType}&${moneyNum}`)

        const responseJson = await apiCall.json()
        console.log(responseJson)
        const activityDisplay = document.getElementById('info-box')
        activityDisplay.textContent = responseJson.activity
    }
    catch (error) {
        console.error(error)
    }
}


