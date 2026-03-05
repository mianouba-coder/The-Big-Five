let total = 0;
function addSubscription() {
    const name = document.getElementById('subName').value;
    const cost = parseFloat(document.getElementById('subCost').value);
    
    if (name && cost) {
        const annual = cost * 12;
        total += annual;
        const item = document.createElement('p');
        item.innerHTML = `<strong>${name}</strong>: $${annual.toFixed(2)} / year`;
        document.getElementById('subList').appendChild(item);
        document.getElementById('totalDisplay').innerText = `Total Annual Waste: $${total.toFixed(2)}`;
        
        document.getElementById('subName').value = '';
        document.getElementById('subCost').value = '';
    }
}