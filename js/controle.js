$(document).ready(function(){	
    $("#cnpj").mask("99.999.999/9999-99");
});

$('#cnpj').on('keyup', function(){
    var cnpj = $(this).cleanVal()
    if(cnpj.length == 14)
    {
        $.ajax({
            url: 'https://www.receitaws.com.br/v1/cnpj/' + cnpj + '?callback=?' + '_ = {timestamp}', //Parametro para o jsonp
            cache: false,
            dataType: 'jsonp',
            success: function(json) {
                $('#razao-social').val(json['nome'])
                $('#nome-fantasia').val(json['fantasia'])
                $('#rua').val(json['logradouro'])
                $('#numero').val(json['numero'])
                $('#cidade').val(json['municipio'])
                $('#estado').val(json['uf'])
                $('#natureza-juridica').val(json['natureza_juridica'])
            },
            error: function(error) {
                alert("CNPJ rejeitado pela Receita Federal, tente novamente mais tarde!")
            }
        })
    }
})