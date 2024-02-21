$(document).ready(function() {
    // Load food supplies
    $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
        const foodSupplies = data.slice(0, 3); // Example: Assume first 3 items are food supplies
        displaySupplies(foodSupplies, 'food');
    });

    // Load drink supplies
    $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
        const drinkSupplies = data.slice(3, 6); // Example: Assume next 3 items are drink supplies
        displaySupplies(drinkSupplies, 'drink');
    });
});

function displaySupplies(supplies, type) {
    const suppliesList = $('#' + type + '-list');
    suppliesList.empty();
    supplies.forEach(function(item) {
        const supplyItem = `
            <div class="supply-item">
                <span class="name">${item.title}</span>
                <span class="quantity">${item.id}</span> <!-- Using ID as quantity for demonstration -->
            </div>`;
        suppliesList.append(supplyItem);
    });
}
