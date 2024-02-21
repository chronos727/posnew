// data array
const data = [
    ['food', "Chicharon Bulaklak", 99, "Crispy Pork Belly", "chicharon.png"],
    ['drink', "Tequila", 1500, "Lovable Taste", "Tequila.png"],
    ['drink', "1 Bucket of Redhorse", 500, "Lakas Tama Pero Di Wasak", "1-Bucket-Redhorse.png"],
    ['drink', "Jack Daniels", 1500, "Wasak na Wasak", "Jack-Daniels.png"],
    ['drink', "Blowjob Tower", 1500, "Walang Kasing Sarap", "Blowjob-Tower.png"]
];

// global variables
let invoice_item = [];
let sub_total = 0;
let total = 0;
let tax = 0;

// first loop
let title = $('#name-cat').text();
if (title === 'Food') {
    food_cat();
}

// category sorting
$('#food').on('click', function() {
    $('#name-cat').text('Food');
    food_cat();
});

$('#drink').on('click', function() {
    drink_cat();
});

// reverse
$('#sort').on('click', function() {
    let cat_sort = $('#name-cat').text().toLowerCase();
    data.reverse();
    if (cat_sort === 'drink') {
        drink_cat();
    } else {
        $('#loop-card').html('');
        food_cat();
    }
});

// search
$('#search-btn').click(() => {
    $('#search-el').toggle();
});

$('#search-input').on('keyup', function() {
    const qvalue = $('#search-input').val().toUpperCase();
    const parentCard = document.getElementById('loop-card');
    const card = parentCard.getElementsByClassName('subCardParent');
    for (let i = 0; i < card.length; i++) {
        let text = card[i].getElementsByTagName('h5')[0];
        let title = text.textContent.toUpperCase();
        if (title.indexOf(qvalue) > -1) {
            card[i].style.display = 'block';
        } else {
            card[i].style.display = 'none';
        }
    }
});

function food_cat() {
    $('#loop-card').html('');
    let key = $('#food').text().toLowerCase();
    $.each(data, function(i, val) {
        if (val[0] === key) {
            const el_card = `
                <div class="col-md-3 mb-4 subCardParent" onclick="invoice_data('${val[4]}','${val[1]}',${val[2]})">
                    <div class="card">
                    <img src="assets/${val[4]}" class="card-img-top" height="130">
                    <div class="card-body">
                        <h5 class="card-title">${val[1]}</h5>
                        <p class="card-text">PHP ${val[2]}</p>
                    </div>
                    </div>
                </div>
            `;
            $('#loop-card').append(el_card);
        }
    });
}

function drink_cat() {
    $('#loop-card').html('');
    let key = $('#drink').text().toLowerCase();
    $('#name-cat').text('Drink');
    $.each(data, function(i, val) {
        if (val[0] === key) {
            const el_card = `
                <div class="col-md-3 mb-4 subCardParent" onclick="invoice_data('${val[4]}','${val[1]}',${val[2]})">
                    <div class="card">
                    <img src="assets/${val[4]}" class="card-img-top" height="200">
                    <div class="card-body">
                        <h5 class="card-title">${val[1]}</h5>
                        <p class="card-text">PHP ${val[2]}</p>
                    </div>
                    </div>
                </div>
            `;
            $('#loop-card').append(el_card);
        }
    });
}

function invoice_data(img, name, price) {
    let invoice_data = [img, name, price, 0];
    for (let i = 0; i < invoice_item.length; i++) {
        if (name === invoice_item[i][1]) {
            alert('Already added to the invoice');
            return;
        }
    }
    invoice_item.push(invoice_data);
    show_invoice();
}

function show_invoice() {
    $('#loop-invoice').html('');
    $('#total-item').html('');
    $.each(invoice_item, function(i, val) {
        const el_media = `
            <div class="media mb-2">
                <div class="media-body">
                    <h6 class="mt-0">${val[1]}</h6>
                    <p>PHP <span>${val[2]}</span></p>
                </div>
                <p>Quantity </p>
                <input class="quantity mt-3" id="quantity" type="number" value="${Number(val[3])}">
                <button class="btn delete mt-2"><img src="https://img.icons8.com/wired/35/000000/trash.png"></button>
            </div>
        `;
        const el_total = `
            <div class="media mb-2">
                <div class="media-body">
                    <h6 class="mt-0">${val[1]}</h6>
                    <p>PHP <span>${val[2]}</span></p>
                    <h6>Quantity: <span>${val[3]}</span> </h6>
                </div>
            </div>
        `;
        $('#loop-invoice').append(el_media);
        $('#total-item').append(el_total);
    });
}

// counting based on quantity
$('#loop-invoice').on('change', '.quantity', function() {
    if (isNaN($(this).val()) || $(this).val() <= 0) {
        $(this).val(0);
    }

    let input_position = $(".quantity").index(this);
    invoice_item[input_position][3] = $(this).val();
    counting();
    show_invoice();
});

// counting
function counting() {
    sub_total = 0;
    $.each(invoice_item, function(i, val) {
        sub_total += val[2] * val[3];
        tax = sub_total * 0.02;
        total = sub_total + tax;
        $('#tax').text(tax);
        $('#total').text(total);
    });
}

// input money
$('#money').keypress(function(event) {
    if (event.keyCode === 13) {
        buy();
    }
});

$('#buy').on('click', buy);

// counting total
function buy() {
    let money = $('#money').val();
    let change = money - total;
    if (money === '') {
        alert('Insert the amount of money');
        return;
    } else if (money <= total) {
        alert('Your money is not enough');
        return;
    } else if (isNaN(money)) {
        alert("Invalid input for money");
        return;
    }
    let confirm_invoice = confirm('Hi! ' + 'user' + ', are you sure for the customer\'s order?\nClick Yes to confirm');
    if (confirm_invoice) {
        $('#tax-in').text(tax);
        $('#total-in').text(total);
        $('#money-in').text(money);
        $('#change-in').text(change);
        $('#money').val('');
        $('#money').attr('placeholder', 'Insert Your Money');
        $('#modal-invoice').modal('show');
    } else {
        alert('BE CAREFUL');
        remove_invoice();
    }
}

// delete invoice based on target
$('#loop-invoice').on('click', '.delete', function() {
    let event = $('.delete').index(this);
    invoice_item.splice(event, 1);
    reset_amount();
    counting();
    show_invoice();
});

// delete all invoice
function remove_invoice() {
    invoice_item = [];
    reset_amount();
    show_invoice();
}

function reset_amount() {
    if (invoice_item.length === 0) {
        $('#tax').text(0);
        $('#total').text(0);
    }
}

$('#end-payment').on('click', remove_invoice);
