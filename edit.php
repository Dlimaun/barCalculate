<!DOCTYPE HTML>
<html lang="en" manifest="cache.php">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta names="apple-mobile-web-app-status-bar-style" conttent = "black-translucent"/>

		<title> BarCalculate</title>			

		<link rel="stylesheet" type="text/css" href="css/estilo.css">	
		<link rel="stylesheet" type="text/css" href="css/jquery.mobile-1.3.2.min.css">	

	</head>
	<body>

		<!-- Add -->
		<div data-role="page" id="page-edit">
		    <div data-theme="a" data-role="header">
		        <a id="btn-salvar" data-role="button" href="#page1" class="ui-btn-right">
		            Salvar
		        </a>
		        <h3>
		            Editar Prato
		        </h3>
		        <input type="hidden" id="id-prato">
		        <div data-role="fieldcontain">
		            <label for="nome">
		                Nome
		            </label>
		            <input name="nome" id="nome" placeholder="" value="" type="text">
		        </div>
		        <div data-role="fieldcontain">
		            <label for="preco">
		                Preço
		            </label>
		            <input name="" id="preco" class="soNumeros" placeholder="" value="" type="text">
		        </div>
		        <div data-role="fieldcontain">
		        	<a data-role="button" href="#" id="btn-remover">Remover</a>
		       	</div>
		    </div>
		    
		</div>

		<script src="js/jquery-1.9.1.min.js"></script>
		<script src="js/jquery.mobile-1.3.2.min.js"></script>
		<script src="js/util/util.js"></script>
		<script src="js/model/Prato.js"></script>
		
		<script>			
			var prato_id = '<?= $_GET["id"]; ?>';								

			jQuery(document).ready(function(){		
			// alert( "OI3");
				// $.mobile.changePage();
					
				
				var prato 	 = new Prato().pegar_prato_por_id(prato_id);
				var nome  	 = jQuery("#nome");
				var preco 	 = jQuery("#preco");
				var id_prato = jQuery("#id-prato");

				nome.val(prato.nome);
				preco.val(prato.preco);
				id_prato.val(prato.id);
				
				

				jQuery(".soNumeros").keypress(function() {
                    soNumeros(event);
                });

				var btn_salvar  = jQuery("#btn-salvar");
				var btn_remover = jQuery("#btn-remover");

                btn_salvar.on("click", pega_dados_prato);

                btn_remover.on("click", remover_prato);


			});					

			function remover_prato() {
				var prato 	 = new Prato();				
				var id_prato = jQuery("#id-prato");
				var retorno  = false;

				prato.id 	= id_prato.val();
				
				retorno = prato.remover_prato();

				if (retorno == true) {
					location.href="pratos.html";
				}
			}

			function pega_dados_prato() {
				var prato 	 = new Prato();
				var nome  	 = jQuery("#nome");
				var preco 	 = jQuery("#preco");
				var id_prato = jQuery("#id-prato");
				var retorno  = false;

				prato.id 	= id_prato.val();
				prato.nome  = nome.val();
				prato.preco = preco.val();

				retorno = prato.editar_prato();

				if (retorno == true) {
					location.href="pratos.html";
				}
			}

		</script>

	</body>
</html>
