import $ from 'jquery';

$(document).ready(function () {
    $("cancelBtn").click(function () {
        $("cancelBtn").animate({
            height: '0px',
        });
    });
});