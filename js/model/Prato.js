function Prato() {
	var self = this; 

	self.id;
	self.nome;
	self.preco;


	self.salvar_prato = function(){
		console.log("Salvando prato");

		var qtd_pratos = localStorage.getItem("qtd_pratos");
		if (qtd_pratos == null) {
			qtd_pratos = 1;
		} else {
			qtd_pratos = parseInt(qtd_pratos) + 1;
		}

		self.id = "prato-"+qtd_pratos;
		
		localStorage.setItem("qtd_pratos", qtd_pratos);
		localStorage.setItem(self.id, self.obj_em_json());

		return true;

	}

	self.editar_prato = function(){
		console.log("Editando prato");

		self.remover_prato();	
		var qtd_pratos = localStorage.getItem("qtd_pratos");
		
		qtd_pratos = parseInt(qtd_pratos) + 1;

		self.id = "prato-"+qtd_pratos;
		
		localStorage.setItem("qtd_pratos", qtd_pratos);
		localStorage.setItem(self.id, self.obj_em_json());

		for (var key in localStorage){
   					console.log(key)
   					console.log(localStorage.getItem(key));
				}

		return true;

	}	

	self.remover_prato = function() {
		console.log("Editando prato");
		localStorage.removeItem(self.id);	
		return true;
	}

	self.pegar_prato_por_id = function(prato_id) {
		var json  	 = localStorage.getItem(prato_id);
		var prato 	 = self.json_em_obj(json);
		return prato;
	}

	self.obj_em_json = function() {
		var json = '{"id":"'+ self.id +'","nome":"'+ self.nome +'","preco":"'+ self.preco +'"}';
		return json;
	}

	self.json_em_obj = function(json) {
		var obj = JSON.parse(json);
		return obj;
	}

	self.lista_pratos = function() {
		console.log("listando pratos");
		var array_pratos = new Array();

		var qtd_pratos = parseInt(localStorage.getItem("qtd_pratos")); 		

		if (qtd_pratos != null && qtd_pratos >= 1) {
			
			for (var key in localStorage){
				
   				if (key.indexOf("prato-") !=-1 ) {   					
   					var obj = self.json_em_obj(localStorage.getItem(key));
   					array_pratos.push(obj);
   				}
			}
		}
		return array_pratos;
	}
}
