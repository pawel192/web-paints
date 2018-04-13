document.addEventListener('DOMContentLoaded',function(){
		
	const color1 = document.querySelector('#color1').innerHTML;
	const color2 = document.querySelector('#color2').innerHTML;
	const color3 = document.querySelector('#color3').innerHTML;
	const color4 = document.querySelector('#color4').innerHTML;
	const color5 = document.querySelector('#color5').innerHTML;

	

	const button = document.querySelector('#color-button');
	button.addEventListener('click', function(e){
		e.preventDefault();

			colorRal = document.querySelector('#color-ral').value;
			colorRgb = document.querySelector('#color-rgb').value;
			colorCmyk = document.querySelector('#color-cmyk').value;
			colorHex = document.querySelector('#color-hex').value;
			colorPantone = document.querySelector('#color-pantone').value;
		
			colorRal=colorRal;
		

		if(colorRal!=="" || colorRgb!=="" || colorHex!=="" || colorCmyk!=="" || colorPantone!==""){
			descriptionForm = document.querySelector('.colors-front');
			descriptionForm.classList.add('hidden');

			descriptionResult = document.querySelector('.colors-back');
			descriptionResult.classList.remove('hidden');



			color1Result = document.querySelector('#color1');
			color1Result.innerHTML=color1 + colorRal;
			color2Result = document.querySelector('#color2').innerHTML=color2 + colorRgb;
			color3Result = document.querySelector('#color3').innerHTML=color3 + colorCmyk;
			color4Result = document.querySelector('#color4').innerHTML=color4 + colorHex;
			color5Result = document.querySelector('#color5').innerHTML=color5 + colorPantone;

			const result1 = document.querySelector('#result1');
			if(colorRal==""){
				result1.classList.add('hidden');
			}
			const result2 = document.querySelector('#result2');
			if(colorRgb==""){
				result2.classList.add('hidden');
			}
			const result3 = document.querySelector('#result3');
			if(colorCmyk==""){
				result3.classList.add('hidden');
			}
			const result4 = document.querySelector('#result4');
			if(colorHex==""){
				result4.classList.add('hidden');
			}
			const result5 = document.querySelector('#result5');
			if(colorPantone==""){
				result5.classList.add('hidden');
			}
		};




		
	},false)

	const buttonBack = document.querySelector('#back-button');
	buttonBack.addEventListener('click', function(e){
		e.preventDefault();

		descriptionForm = document.querySelector('.colors-front');
		descriptionForm.classList.remove('hidden');

		descriptionResult = document.querySelector('.colors-back');
		descriptionResult.classList.add('hidden');

		colorRal = document.querySelector('#color-ral').value="";
		colorRgb = document.querySelector('#color-rgb').value="";
		colorCmyk = document.querySelector('#color-cmyk').value="";
		colorHex = document.querySelector('#color-hex').value="";
		colorPantone = document.querySelector('#color-pantone').value="";

		result1.classList.remove('hidden');
		result2.classList.remove('hidden');
		result3.classList.remove('hidden');
		result4.classList.remove('hidden');
		result5.classList.remove('hidden');
		


	},false)
});