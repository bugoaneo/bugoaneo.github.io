


/*form mask*/
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('[type="tel"]'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });

});

let forms = document.querySelectorAll('.form');

forms.forEach(function (item) {
    let telInp = item.querySelector('[type="tel"]');
    let formBTN = item.querySelector('.btn');
    formBTN.setAttribute('disabled', 'disabled')
    telInp.oninput = function () {
        if (telInp.value.length < 17) {
            formBTN.setAttribute('disabled', 'disabled')
        } else {
            formBTN.removeAttribute('disabled')
        }
    }
})


jQuery(document).ready(function () {
    jQuery("form").submit(function (e) { // Событие отправки с формы
        var form_data = jQuery(this).serialize(); // Собираем данные из полей
        jQuery.ajax({
            type: "POST", // Метод отправки
            url: "js/sendform.php", // Путь к PHP обработчику sendform.php
            data: form_data,
            success: function (data) {
                $('input').val('');
            }
        });
        $(this).css({ 'display': 'none' });
        $('input').val('');
        $(this).next().css({ 'display': 'block' });
        e.preventDefault();
    });
});