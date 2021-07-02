function incrementCount(button) {
    const parent = button.parentElement;
    const superParent = parent.parentElement;
    const price = superParent.getElementsByClassName('product-price')[0];
    const oneProductPrice = parseInt(price.attributes.getNamedItem('data-price').value);
    const input = parent.getElementsByTagName('input')[0];
    const count = parseInt(input.value) + 1;
    input.value = count;
    price.innerHTML = count * oneProductPrice + ' р.';
}

function decrementCount(button) {
    const parent = button.parentElement;
    const superParent = parent.parentElement;
    const price = superParent.getElementsByClassName('product-price')[0];
    const input = parent.getElementsByTagName('input')[0];
    const oneProductPrice = parseInt(price.attributes.getNamedItem('data-price').value);
    const count = parseInt(input.value) <= 1 ? 1 : parseInt(input.value) - 1;
    input.value = count;
    price.innerHTML = count * oneProductPrice + ' р.';
}