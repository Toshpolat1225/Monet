$(document).ready(function(){
    $(".filtrKatalog").click(function(){
        $(".filtrSelect").slideToggle();
    });
    $("#reset").on("click", function () {
        $('#year option').prop('selected', function() {
            return this.defaultSelected;
        });
        $('#stile option').prop('selected', function() {
            return this.defaultSelected;
        });
        $('#money option').prop('selected', function() {
            return this.defaultSelected;
        });
        $('#material option').prop('selected', function() {
            return this.defaultSelected;
        });
        $('#variant option').prop('selected', function() {
            return this.defaultSelected;
        });
    });
    $(function () {
        $('footer .top_btn').click(() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    });
});
