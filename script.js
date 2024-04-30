$(document).ready(function() {
    // Caminho para o arquivo JSON
    var arquivoJSON = "glossario.json";

    // Função para carregar os dados do arquivo JSON
    function carregarGlossario() {
        $.getJSON(arquivoJSON, function(data) {
            // Itera sobre cada item no arquivo JSON
            $.each(data, function(index, item) {
                // Cria elementos HTML para o termo e a definição
                var termoElement = $("<span>").addClass("termo").text(item.termo);
                var definicaoElement = $("<p>").addClass("definicao").text(item.definicao);

                // Adiciona os elementos à div do glossário
                $("#glossario").append(termoElement).append(definicaoElement);
            });
        });
    }

    // Chama a função para carregar o glossário quando o documento estiver pronto
    carregarGlossario();
});