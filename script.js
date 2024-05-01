

function typeChoice(el) {
    const chosenType = el
    const displayBox = document.getElementById('type-choice')
    displayBox.textContent = chosenType
    return chosenType;
}

function participantsChoice(el) {
    const chosenParticipants = el
    const displayBox = document.getElementById('participants-choice')
    displayBox.textContent = chosenParticipants
    return chosenParticipants;
}

function moneyChoice(el) {
    const chosenMoney = el
    const displayBox = document.getElementById('money-choice')
    displayBox.textContent = chosenMoney

    if (chosenMoney === no) {
        const noMoney = 0
        return noMoney;
    } else {
        const yesMoney = 1
        return yesMoney;
    }

}

async function response() {
    try {
        const apiType = document.getElementById('type-choice').textContent
        const apiParticipants = document.getElementById('participants-choice').textContent
        const apiCall = await fetch(`https://www.boredapi.com/api/activity?type=${apiType}&participants=${apiParticipants}`)

        const responseJson = await apiCall.json()
        console.log(apiType)
        console.log(responseJson)

    }
    catch (error) {
        console.error(error)
    }
}


