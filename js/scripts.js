$(document).ready(function(){

	$(document).keyup(function(){
		calculateTotal();
	});

	$('header a').click(function(){
		calculateTotal();
	});
	

	function calculateTotal() {
		var total = qtyTotal = parseFloat(0);

		$(document).find('td.total').each(function(){
			var temp = $(this).text().replace(',', '');
			var temp = parseFloat(temp);
			if (typeof temp !== 'NaN' && temp > 0) {
				total += temp;
			}
		});

		$(document).find('input[ng-model=qty').each(function(e){
			var temp = $(this).val();
			var temp = parseFloat(temp);
			if (typeof temp !== 'NaN' && temp > 0) {
				qtyTotal = qtyTotal + parseFloat($(this).val());
			}
		});

		qtyTotal 	= 	Math.round(qtyTotal * 10) / 10;
		total 		= 	parseInt(total);

		$('span#qtytotal').text(qtyTotal + ' litre');
		$('span#finaltotal').text('Rs. ' + total);
	}

});