let productImg = document.getElementById('productImg');
let btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {

    btn[i].onclick = () => {
        btn[i].onclick = () => {
            // Remove .active class from all other elements
            for (let j = 0; j < btn.length; j++) {
                if (i !== j) {
                    btn[j].classList.remove('active');
                }
            }

            // Add .active class to the clicked element
            btn[i].classList.add('active');

            productImg.src = `images/image${i + 1}.png`;
        };

    };
}
