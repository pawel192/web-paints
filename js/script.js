document.addEventListener('DOMContentLoaded',function(){
	
	let colorsTypeArr = document.querySelectorAll('.color-value');
	let colorsValueArr = [];
	const button = document.querySelector('#color-button');
	button.addEventListener('click', function(e){
		e.preventDefault();

			for(i=0; i<colorsTypeArr.length; i++){
				colorsValueArr.push(colorsTypeArr[i].value)
				};

				console.log(colorsValueArr);
				if(colorsValueArr[i] !==""){
					descriptionForm = document.querySelector('.colors-front');
					descriptionForm.classList.add('hidden');

					descriptionResult = document.querySelector('.colors-back');
					descriptionResult.classList.remove('hidden');
						
					const result1 = document.querySelector('#result1');
					const result2 = document.querySelector('#result2');
					const result3 = document.querySelector('#result3');
					const result4 = document.querySelector('#result4');
					const result5 = document.querySelector('#result5');

					let colorResult1 = document.querySelector('#c-ral').innerHTML=colorsValueArr[0].toString();
						if(colorResult1 == ""){result1.classList.add('hidden');}
					let colorResult2 = document.querySelector('#c-rgb').innerHTML=colorsValueArr[1].toString();
						if(colorResult2 == ""){result2.classList.add('hidden');}
					let colorResult3 = document.querySelector('#c-cmyk').innerHTML=colorsValueArr[2].toString();
						if(colorResult3 == ""){result3.classList.add('hidden');}
					let colorResult4 = document.querySelector('#c-hex').innerHTML=colorsValueArr[3].toString();
						if(colorResult4 == ""){result4.classList.add('hidden');}
					let colorResult5 = document.querySelector('#c-pantone').innerHTML=colorsValueArr[4].toString();
						if(colorResult5 == ""){result5.classList.add('hidden');}

					}else{
						/*do poprawki-wyślwietla się komunikat przy każdym pustym polu a powinien tylko raz*/
						alert('Wypełnij min.1 pole w formularzu');
					};

				},false);
	

	const buttonBack = document.querySelector('#back-button');
	buttonBack.addEventListener('click', function(e){
		e.preventDefault();

		descriptionForm = document.querySelector('.colors-front');
		descriptionForm.classList.remove('hidden');

		descriptionResult = document.querySelector('.colors-back');
		descriptionResult.classList.add('hidden');


		for(i=0; i<colorsTypeArr.length; i++){
				colorsValueArr.push(colorsTypeArr[i].value='')
				};

		colorsValueArr.length=0;
		
		
		result1.classList.remove('hidden');
		result2.classList.remove('hidden');
		result3.classList.remove('hidden');
		result4.classList.remove('hidden');
		result5.classList.remove('hidden');
		},false);
	
});