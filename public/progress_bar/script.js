function skill(prcntage, elemId) {
    let counter = 0;
    const number = document.getElementById(elemId);

    const interval = setInterval(() => {
        if (counter >= prcntage) {
            clearInterval(interval);
        } else {
            counter += 1;
            number.innerHTML = counter + '%';
        }
    }, 26);
}

skill(65, 'frontendPercentage');
skill(80, 'UIPercentage');