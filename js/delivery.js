const select = $('#select10');

const addressDelivery = document.querySelector('.address-delivery')
const pointOfIssue = document.querySelector('.show-point-of-issue')
const paymentType = document.querySelector('.payment-type')

select.on('change', function() {
    const value = $(this).val();
    const parent = addressDelivery.parentElement;
    const $firstOption = $('#select2 option:first');
    if (value === '1') {
        addressDelivery.style.display = 'block';
        paymentType.style.display = 'block';
        pointOfIssue.style.display = 'none';
        $("#select2").val('1').change();
        $firstOption.attr('disabled', false);
        document.querySelector('.payment-value').innerHTML = 'Наличный расчёт';
        document.querySelector('.delivery-method-value').innerHTML = 'Доставка по адресу';
        document.querySelector('.order').children[4].remove()

        const parentElement =  document.querySelector('.order').children[3];

        parentElement.innerHTML = `<th scope="row">Вид оплаты:</th>
                                        <td class="text-right">Наличные</td>`

    }
    if (value === '2') {
        addressDelivery.style.display = 'none';
        paymentType.style.display = 'none';
        pointOfIssue.style.display = 'block';
        $("#select2").val('2').change();
        $firstOption.attr('disabled', true);
        document.querySelector('.payment-value').innerHTML = 'Безналичный расчёт';
        document.querySelector('.delivery-method-value').innerHTML = 'Самовывоз';

        const parentElement = document.querySelector('.order').children[3];

        parentElement.innerHTML = `<th scope="row">
                                    Адрес пункта выдачи:
                                </th>
                                <td class="text-right address-value">
                                    Пункт 1, Беларусь, Могилёвская область, Могилёв, ул. Подгорная, д.1, оф.112
                                </td>`

        const parentElementOfPayment = document.querySelector('.address-value').parentElement;
        const dateElement = document.createElement('tr');
        dateElement.innerHTML = `<th scope="row">
                                    Дата доставки:
                                </th>
                                <td class="text-right">
                                    16.02.2024
                                </td>`

        parentElementOfPayment.insertAdjacentElement('afterend',dateElement);
    }
});
