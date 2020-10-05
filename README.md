# Descrição

Seu primeiro projeto usando React será a re-implementação do projeto FoodCamp, um restaurante especial que entrega seu pedido em 6 minutos.

Para isso, o restaurante só trabalha com um tipo específico de pedido: o combo de Prato+Bebida+Sobremesa.

O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante.

- Layout
    - [ ]  Aplicar layout para mobile, seguindo imagens fornecida (não é necessário implementar um layout para desktop)
    - [ ]  O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem
    - [ ]  Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria
    - [ ]  As fontes utilizadas são: [Righteous](https://fonts.google.com/specimen/Righteous) (nome do restaurante e títulos das categorias) e [Roboto](https://fonts.google.com/specimen/Roboto) (demais textos)
    - [ ]  As cores utilizadas foram:
        - #CF2B2B (vermelho)
        - #32B72F (verde)
        - #EEEEEE (cinza do body)
        - #333333 (fontes escuras)
        - #FFFFFF (fontes claras)
        - #CBCBCB (cinza do botão desabilitado)
    - [ ]  Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do layout
    - [ ]  Para fazer os produtos rolarem para o lado, utilize o overflow hidden, não é necessário que a rolagem funcione no desktop

- Seleção de itens
    - [ ]  Ao clicar sobre um item, o mesmo deve ser marcado como selecionado, seguindo layout da tela 2. É possível selecionar mais de um item da mesma categoria.
    - [ ]  Quando um item está selecionado, deve aparecer botões permitindo aumentar ou diminuir a quantidade daquele item no pedido
    - [ ]  Ao diminuir pra zero a quantidade de um item, este deve voltar para o layout anterior (de desmarcado)
- Botão de revisar pedido
    - [ ]  Por padrão, o botão de "Revisar pedido" deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
    - [ ]  Quando o usuário tiver selecionado pelo menos 1 item de cada categoria, o botão deve mudar para o estado de habilitado, seguindo layout da tela 3
    - [ ]  Ao clicar no botão de Revisar pedido, o usuário deve ser direcionado para outra URL da aplicação: "/revisar"
        - Você deve pesquisar sobre como utilizar o **React Router Dom** no seu projeto (documentação: [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)). Para fazer o comportamento desse botão, utilize o componente **Link** do React Router. Para decidir qual tela exibir, utilize os componentes **Router** e **Switch** do React Router**.**
        - Dica: Para desabilitar o click nesse botão, dê uma olhada [nesse stack overflow](https://stackoverflow.com/questions/42755802/how-to-disable-a-link-in-reactjs?rq=1)
- Tela de revisar pedido
    - [ ]  Aplicar o layout conforme tela fornecida, com os detalhes do pedido do usuário
    - [ ]  Ao clicar em "Cancelar", o usuário deve voltar para a página anterior (também usando **React Router Dom**)
    - [ ]  Ao clicar em Fechar pedido, o mesmo deve ser enviado via WhatsApp conforme próximo requisito
- Envio do pedido
    - [ ]  Ao finalizar o pedido, o usuário deverá ser encaminhado para o WhatsApp Web, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida

        **Dica**: Para criar um link que envia uma mensagem via WhatsApp, veja essa página de ajuda do WhatsApp: [https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=kk](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=kk)

        **Dica 2**: Para preparar a mensagem para o formato que o WhatsApp espera, pesquise por uma função chamada `encodeURIComponent(minhaString)`

    - [ ]  Essa mensagem deverá seguir este formato:

        ```css
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27.70
        ```

        **Dica**: para formatar um número decimal no formato 27.70, pesquise por `toFixed`
