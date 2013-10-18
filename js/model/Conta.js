
function Conta() {
    var self = this;

    Conta.id;

    self.id = null;
    self.nome = "Restaurante X";
    self.pratos = [];
    self.coords = {};
    self.coords.latitude = null;
    self.coords.longitude = null;
    self.timestamp = null;
    self.total = null;
    self.qtdPessoas = 0;

    self.carregar_conta_atual = function() {
        var conta = JSON.parse(localStorage.getItem("conta_atual"));
        try {

            self.nome = conta.nome;
            self.pratos = conta.pratos;
            self.coords = conta.coords;
            self.timestamp = conta.timestamp;
            self.total = conta.total;
            self.qtdPessoas = conta.qtdPessoas;
        } catch (err) {
        }
        return this;

    };

    self.salvar_conta_atual = function() {
        localStorage.setItem("conta_atual", self.obj_em_json());
    };

    self.calcular_total = function() {
        var total = 0;
        jQuery.each(self.pratos, function(index, prato) {
            total += (prato.preco * prato.qtd);
        });
        self.total = total;
    };
    
    self.salvar_conta = function() {
        console.log("Salvando conta");

        self.calcular_total();

        var qtd_contas = localStorage.getItem("qtd_contas");
        if (qtd_contas == null) {
            qtd_contas = 1;
        } else {
            qtd_contas = parseInt(qtd_contas) + 1;
        }

        self.id = "conta-" + qtd_contas;

        localStorage.setItem("qtd_contas", qtd_contas);
        localStorage.setItem(self.id, self.obj_em_json());

        console.log(self);

        return true;
    };

    self.remover_conta = function() {
        console.log("Remover conta");
        localStorage.removeItem(self.id);
        return true;
    };

    self.pegar_conta_por_id = function(conta_id) {
        var json = localStorage.getItem(conta_id);
        var conta = self.json_em_obj(json);
        return conta;
    };

    self.obj_em_json = function() {
        return JSON.stringify(self);
    };

    self.json_em_obj = function(json) {
        var obj = JSON.parse(json);
        return obj;
    };

    self.lista_contas = function() {
        console.log("listando contas");
        var array_contas = new Array();

        var qtd_contas = parseInt(localStorage.getItem("qtd_contas"));

        if (qtd_contas != null && qtd_contas >= 1) {

            for (var key in localStorage) {

                if (key.indexOf("conta-") != -1) {
                    var obj = self.json_em_obj(localStorage.getItem(key));
                    array_contas.push(obj);
                }
            }
        }
        return array_contas;
    };
}