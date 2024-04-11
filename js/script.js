const newData = [
    ['Bands', 'Bands Set 1', 200, '', 'Bands Set 1.jpg'],
    ['Bands', 'Bands Set 2', 200, '', 'Bands Set 2.jpg'],
    ['Bands', 'Bands Set 3', 200, '', 'Bands Set 3.jpg'],
    ['Genshin', 'Genshin Impact Set 1', 200, '', 'Genshin Impact Set 1.jpg'],
    ['Genshin', 'Genshin Impact Set 2', 200, '', 'Genshin Impact Set 2.jpg'],
    ['Genshin', 'Genshin Impact Set 3', 200, '', 'Genshin Impact Set 3.jpg'],
    ['Initial', 'Initial D Set 1', 200, '', 'Initial D Set 1.jpg'],
    ['Initial', 'Initial D Set 2', 200, '', 'Initial D Set 2.jpg'],
    ['Initial', 'Initial D Set 3', 200, '', 'Initial D Set 3.jpg'],
    ['JDM', 'JDM Set 1', 200, '', 'JDM Set 1.jpg'],
    ['JDM', 'JDM Set 2', 200, '', 'JDM Set 2.jpg'],
    ['JDM', 'JDM Set 3', 200, '', 'JDM Set 3.jpg'],
    ['JJBA', 'JJBA Set 1', 200, '', 'JJBA Set 1.jpg'],
    ['JJBA', 'JJBA Set 2', 200, '', 'JJBA Set 2.jpg'],
    ['JJBA', 'JJBA Set 3', 200, '', 'JJBA Set 3.jpg']
];
// global variable
let invoice_item = []
let sub_total = 0
let total = 0
let tax = 0
let price = 0
let input_postion = 0

//loop
let title = $('#name-cat').text()
if(title == 'Bands'){
    Bands_cat()
}

//category
$('#Bands').on('click', function(){
    $('#name-cat').text('Bands')
    Bands_cat()
})

$('#Genshin').on('click', function(){
    $('#name-cat').text('Genshin')
    Genshin_cat()
})

$('#Initial').on('click', function(){
    $('#name-cat').text('Initial')
    Initial_cat()
})

$('#JDM').on('click', function(){
    $('#name-cat').text('JDM')
    JDM_cat()
})

$('#JJBA').on('click', function(){
    $('#name-cat').text('JJBA')
    JJBA_cat()
})



// reverse
$('#sort').on('click', function(){
    let cat_sort = $('#name-cat').text().toLowerCase()
    if(cat_sort == 'Bands'){
        console.log('click Bands')
        data.reverse()
        Bands_cat()
    }else{
        console.log('click Genshin')
        data.reverse()
        $('#loop-card').html('')
        Genshin_cat()
    }else{
        console.log('click Initial')
        data.reverse()
        $('#loop-card').html('')
        Initial_cat()
    }else{
        console.log('click JDM')
        data.reverse()
        $('#loop-card').html('')
        JDM_cat()
    }else{
        console.log('click JJBA')
        data.reverse()
        $('#loop-card').html('')
        JJBA_cat()
    }
})


//search
$('#search-btn').click(() => {
    $('#search-el').toggle()
})

$('#search-input').on('keyup',function(){
    const qvalue = $('#search-input').val()
    const filter = qvalue.toUpperCase()
    const parentCard = document.getElementById('loop-card')
    const card = parentCard.getElementsByClassName('subCardParent')
    for(let i = 0; i < card.length; i++){
        let text = card[i].getElementsByTagName('h5')[0]
        let title = text.textContent
        if(title.toUpperCase().indexOf(filter) > -1){
            card[i].style.display = 'block'
        }else{
            card[i].style.display = 'none'
        }
    }
})

function Bands_cat(){
    $('#loop-card').html('')
    let key = $('#Bands').text().toLowerCase()
    $.each(data, function(i, val){
        if(val[0] == key){
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
            `
            $('#loop-card').append(el_card)
        }
    })
}

function Genshin_cat(){
    $('#loop-card').html('')
    let key = $('#drink').text().toLowerCase()
    $('#name-cat').text('Drink')
    $.each(data, function(i, val){
        if(val[0] == key){
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
            `
            $('#loop-card').append(el_card)
        }
    })
}
function JDM_cat(){
    $('#loop-card').html('')
    let key = $('#drink').text().toLowerCase()
    $('#name-cat').text('Drink')
    $.each(data, function(i, val){
        if(val[0] == key){
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
            `
            $('#loop-card').append(el_card)
        }
    })
}
function Initial_cat(){
    $('#loop-card').html('')
    let key = $('#drink').text().toLowerCase()
    $('#name-cat').text('Drink')
    $.each(data, function(i, val){
        if(val[0] == key){
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
            `
            $('#loop-card').append(el_card)
        }
    })
}
function JJBA_cat(){
    $('#loop-card').html('')
    let key = $('#drink').text().toLowerCase()
    $('#name-cat').text('Drink')
    $.each(data, function(i, val){
        if(val[0] == key){
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
            `
            $('#loop-card').append(el_card)
        }
    })
}

// push data array to invoice data
function invoice_data(img, name, price){
    let invoice_data = [img, name, price, 0]
    for(let i = 0; i < invoice_item.length; i++){
        if(name == invoice_item[i][1]){
            alert('has available')
            return
        }
    }
    invoice_item.push(invoice_data)
    show_invoice()
}

// loop invoice

//add mo to sa big space pag gusto mo may image yung kada product
// <img src="assets/${val[0]}" class="align-self-center mr-3" width="95">

function show_invoice(){
    $('#loop-invoice').html('')
    $('#total-item').html('')
    $.each(invoice_item, function(i, val){
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
        `
        const el_total = `
            <div class="media mb-2">




                
                 <div class="media-body">
                    <h6 class="mt-0">${val[1]}</h6>
                    <p>PHP <span">${val[2]}</span></p>
                    
                    <h6>Quantity: <span">${val[3]}</span> </h6>
                </div>
            </div>
        `
        $('#loop-invoice').append(el_media)
        $('#total-item').append(el_total)
    })
}


// counting based on quantity
$('#loop-invoice').on('change','.quantity',function(){
    if(isNaN($(this).val()) || $(this).val() <= 0){
        $(this).val(0)
    }

    input_postion = $(".quantity").index(this)
    invoice_item[input_postion][3] = $(this).val()
    counting()
    show_invoice()
})

// counting
function counting (){
    sub_total = 0
    $.each(invoice_item, function(i, val){
        sub_total += val[2] * val[3]
        tax = sub_total * 0.02
        total = sub_total + tax
        $('#tax').text(tax)
        $('#total').text(total)
    })
}

// input money
$('#money').keypress(function(){
    if (event.keyCode == 13) {
        buy()
    }
})
$('#buy').on('click', buy)

// counting total
function buy(){
    let money = $('#money').val()
    let type = $('#buy-type').val()
    let change = money - total
    if(money == ''){
        alert('Insert The Money')
        return
    }else if(money <= total){
        alert('your money not enough')
        return
    }else if(isNaN(money)){
        alert("can't counting this value")
        return
    }
    let confirm_invoice = confirm('hi! '+ 'user' +', are you sure for the costumer\'s order?\nClick Yes to confirm')
    if(confirm_invoice == true){
        $('#tax-in').text(tax)
        $('#total-in').text(total)
        $('#total-type').text(type)
        $('#money-in').text(money)
        $('#change-in').text(change)
        $('#money').val('')
        $('#money').attr('placeholder', 'Insert Your Money')
        $('#modal-invoice').modal('show')
    }else{
        alert('BE CAREFUL')
        remove_invoice()
    }
}

// delete invoice based on target
$('#loop-invoice').on('click', '.delete', function(){
    let event = $('.delete').index(this)
    invoice_item.splice(event, 1)
    reset_amount()
    counting()
    show_invoice()
})


// delete all invoice
function remove_invoice(){
    $.each(invoice_item, function(i){
        invoice_item.splice(i, 1)
        invoice_item.shift()
        reset_amount()
    })
    show_invoice()
}

function reset_amount(){
    if(invoice_item == ''){
        $('#tax').text(0)
        $('#total').text(0)
    }
}

$('#end-payment').on('click', remove_invoice)


