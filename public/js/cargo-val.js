$(document).ready(function(){

//Variables
	
	var tpCount = 0
	var tpPrice = 11.85
	var tpWeight = 3
	
	var lbCount = 0
	var lbPrice = 29.99
	var lbWeight = 5
	
	var vestCount = 0
	var vestPrice = 75
	var vestWeight = 6
	
	var waterCount = 0
	var waterPrice = 15.78
	var waterWeight = 27.9
	
	var totalPrice = 0
	var totalWeight = 0
	var fixedPrice
	var fixedWeight

// ============================================================================================================================================
	
	$('#clearModalButton').hide()

//CLEAR CARGO BUTTON ==========================================================================================================================

	$('#clearButton').on('click', function(){


	totalPrice = 0
	totalWeight = 0
	tpCount = 0
	lbCount = 0
	waterCount = 0
	vestCount = 0
	var fixedPrice = totalPrice.toFixed(2)
	var fixedWeight = totalWeight.toFixed(2)


	$('#totalPriceDisplay').text(fixedPrice)
	$('#totalWeightDisplay').text(fixedWeight)
	$('.toilet-paper-display').text(tpCount)
	$('.lunch-box-display').text(lbCount)
	$('.water-display').text(waterCount)
	$('.vest-display').text(vestCount)

	checkValid()

	toggleCargoButton()
	
	})



// TOILET PAPER ===================================================================================================================================================================
 
	$('#toiletPaperMinus').on('click', function(){


		if(totalPrice > 0 && tpCount !== 0) {

			totalPrice -= tpPrice


		}

		if(totalWeight > 0 && tpCount !== 0) {

			totalWeight -= tpWeight

		}

		if(tpCount > 0) {
		
			tpCount--

		}

		checkValid()

		toggleCargoButton()


		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.toilet-paper-display').text(tpCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	}) 

	$('#toiletPaperPlus').on('click', function(){

		totalPrice += tpPrice

		totalWeight += tpWeight

		tpCount++

		// console.log(totalPrice)

		checkValid()

		toggleCargoButton()

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.toilet-paper-display').text(tpCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	})

// LUNCH BOX ===================================================================================================================================================================
 
	$('#lunchBoxMinus').on('click', function(){
		
		if(totalPrice > 0 && lbCount !== 0) {

			totalPrice -= lbPrice


		}

		if(totalWeight > 0 && lbCount !== 0) {

			totalWeight -= lbWeight

		}

		if(lbCount > 0) {
		
		
			lbCount--

		}

		checkValid()

		toggleCargoButton()

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.lunch-box-display').text(lbCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	}) 

	$('#lunchBoxPlus').on('click', function(){

		totalPrice += lbPrice

		totalWeight += lbWeight

		lbCount++

		checkValid()

		toggleCargoButton()

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.lunch-box-display').text(lbCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	})


// WATER ===================================================================================================================================================================
 
	$('#waterMinus').on('click', function(){
		
		if(totalPrice > 0 && waterCount !== 0) {

			totalPrice -= waterPrice


		}

		if(totalWeight > 0 && waterCount !== 0) {

			totalWeight -= waterWeight

		}

		if(waterCount > 0) {
		
			waterCount--

		}

		checkValid()

		toggleCargoButton()

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.water-display').text(waterCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	}) 

	$('#waterPlus').on('click', function(){

		totalPrice += waterPrice

		totalWeight += waterWeight

		waterCount++

		checkValid()

		toggleCargoButton()

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.water-display').text(waterCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	})	

// VEST ===================================================================================================================================================================
 
	$('#vestMinus').on('click', function(){
		
		if(totalPrice > 0 && vestCount !== 0) {

			totalPrice -= vestPrice

		}

		if(totalWeight > 0 && vestCount !== 0) {

			totalWeight -= vestWeight

		}

		if(vestCount > 0) {
		
			vestCount--

		}

		checkValid()

		toggleCargoButton()

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.vest-display').text(vestCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	}) 

	$('#vestPlus').on('click', function(){

		totalPrice += vestPrice

		totalWeight += vestWeight

		vestCount++

		checkValid()

		toggleCargoButton()

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.vest-display').text(vestCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	})


	$('#cargoSubmitButton').on('click', function() {


		if(totalPrice === 0 && totalWeight === 0) {

			$('#validateTitle').text('Missing Cargo')
			$('#validateMessage').text('No cargo has been added.')
		
		}

		else {

			var sendData = {cost: totalPrice.toFixed(2), weight : totalWeight.toFixed(2), toiletPaper : tpCount, lunchBox : lbCount, water : waterCount, vest : vestCount}

			$.post('/Cargo-Validator', sendData, function(data) {

				// console.log(data)

				$('#validateTitle').text('Server Validation')
				$('#validateMessage').text(data)
			
			})
		}
	
		
	})


// FUNCTIONS ===================================================================================================================================================================

		var checkValid = function(){


		if (totalPrice > 200 && totalWeight > 200) {

			$('#totalPrice').css({"color":"red"})
			$('#totalWeight').css({"color":"red"})
			$('#cargoSubmitButton').css({"opacity":"0.3"})
		}

		else if (totalPrice > 200 && totalWeight < 200) {	


			$('#totalPrice').css({"color":"red"})
			$('#cargoSubmitButton').css({"opacity":"0.3"})
		}

		else if (totalPrice < 200 && totalWeight > 200) {	


			$('#totalWeight').css({"color":"red"})
			$('#cargoSubmitButton').css({"opacity":"0.3"})
		}

		else {

			$('#cargoSubmitButton').css({"opacity":"1"})
			$('#totalPrice').css({"color":"black"})
			$('#totalWeight').css({"color":"black"})

		}
	}

	var toggleCargoButton = function(){

		if(totalPrice <= 0 && totalWeight <= 0) {
			
			$('#clearModalButton').hide()
		}

		else {

			$('#clearModalButton').show()

		}
	}


})	
