const select = $('#select1');

const addressDelivery = document.querySelector('.address-delivery')
const pointOfIssue = document.querySelector('.show-point-of-issue')
const paymentType = document.querySelector('.payment-type')

select.on('change', function() {
    const value = $(this).val();
    if (value === '2') {
        const parent = addressDelivery.parentElement;
        parent.classList.remove('col-4')
        parent.classList.add('col-8')
        addressDelivery.style.display = 'none';
        paymentType.style.display = 'none';
        pointOfIssue.style.display = 'block';
        $("#select2").val('2').change();
        $('#select2 option[value="1"]').remove();
        document.querySelector('.payment-value').innerHTML = 'Безналичный расчёт';
        document.querySelector('.delivery-method-value').innerHTML = 'Самовывоз';
        document.querySelector('.order').children[3].remove();

        const parentElement = document.querySelector('.delivery-method-value').parentElement;
        const addressElement = document.createElement('div');

        addressElement.classList.add('row', 'py-2');
        addressElement.innerHTML = `<div class="col-2 border-top">
                                    Адрес пункта выдачи:
                                </div>
                                <div class="col-6 border-top text-right address-value">
                                    Пункт 1, Беларусь, Могилёвская область, Могилёв, ул. Подгорная, д.1, оф.112
                                </div>`

        parentElement.insertAdjacentElement('afterend',addressElement);

        const parentElementOfPayment = document.querySelector('.address-value').parentElement;
        const dateElement = document.createElement('div');
        dateElement.classList.add('row', 'py-2');
        dateElement.innerHTML = `<div class="col-2 border-top">
                                    Дата доставки:
                                </div>
                                <div class="col-6 border-top text-right">
                                    16.02.2024
                                </div>`

        parentElementOfPayment.insertAdjacentElement('afterend',dateElement);
    }
});
