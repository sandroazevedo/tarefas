function transferir() {

    var n = document.getElementById('numero').value
	var m = n

	var res = document.getElementById('res')

	var aux = ''
    
    if(n < 1 || n > 3999){
        window.alert('Numero incorreto')
    }


     else{
        while(n != 0){
            if(n >= 1000){
				aux += 'M'
				n = n - 1000;
			}

			else if (n >= 900){
                aux += 'CM'
				n = n - 900;
			}

			else if (n >= 500){
                aux += 'D'
				n = n - 400;
			}

			else if(n >= 400){
				aux += 'CD'
				n = n - 400;
			}

			else if (n >= 100){
				aux += 'C'
				n = n - 100;
			}

			else if (n >= 90){
				aux += 'XC'
				n = n - 90;
			}

			else if(n >=  50){
				aux += 'L'
				n = n - 50;
			}

			else if(n >=  40){
				aux += 'XL'
				n = n - 40;
			}

			else if(n >=  10){
				aux += 'X'
				n = n - 10;
			}

			else if(n >=  9){
				aux += 'IX'
				n = n - 9;
			}

			else if(n >=  5){
				aux += 'V'
				n = n - 5;
			}

			else if(n >=  4){
				aux += 'IV'
				n = n - 4;
			}

			else if(n >=  1){
				aux += 'I'
				n = n - 1;
			}
        }
    }

	if(m > 0 && m < 4000){
		res.innerHTML = m+' em algarismo romano é: '+ aux
	}


}