<!DOCTYPE HTML>
<html lang="en" >

    <body>

        <div class="btn-new "></div> 

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Editar Prato</h3>
            </div>

            <div class="panel-body">
                <input type="hidden" id="id-prato">

                <input type="text" id="nome" class="margin_top form-control" placeholder="Nome">                 

                <div class="clear"></div>

                <input type="text" id="preco" class="fmargin_top form-control maskMoney" placeholder="Preço">   

                <div class="clear"></div> 

                <button class="btn btn-primary margin_top" id="btn-salvar"><span class="glyphicon glyphicon-ok"></span> Salvar</button>
                <button class="btn btn-danger margin_top" id="btn-remover"><span class="glyphicon glyphicon-minus"></span> Remover</button>
            </div>

        </div>

        <script>			
            var prato_id = '<?= $_GET["id"]; ?>';								

            jQuery(document).ready(function(){		
                jQuery(".maskMoney").maskMoney({symbol:'R$ ', showSymbol:true, thousands:'.', decimal:',', symbolStay: true});

                var prato    = new Prato().pegar_prato_por_id(prato_id);
                var nome     = jQuery("#nome");
                var preco    = jQuery("#preco");
                var id_prato = jQuery("#id-prato");

                nome.val(prato.nome);
                preco.val(prato.preco);
                id_prato.val(prato.id);
				
                var btn_salvar  = jQuery("#btn-salvar");
                var btn_remover = jQuery("#btn-remover");

                btn_salvar.on("click", pega_dados_prato);

                btn_remover.on("click", remover_prato);


            });					

            function remover_prato() {
                var prato    = new Prato();				
                var id_prato = jQuery("#id-prato");
                var retorno  = false;

                prato.id = id_prato.val();
				
                retorno = prato.remover_prato();

                if (retorno == true) {
                    set_pagina("pratos.html");
                }
            }

            function pega_dados_prato() {
                var prato    = new Prato();
                var nome     = jQuery("#nome");
                var preco    = jQuery("#preco");
                var id_prato = jQuery("#id-prato");
                var retorno  = false;

                prato.id    = id_prato.val();
                prato.nome  = nome.val();
                prato.preco = preco.val();

                retorno = prato.editar_prato();

                if (retorno == true) {
                    set_pagina("pratos.html");
                }
            }

        </script>

    </body>
</html>
