describe('Teste de busca', () => {
    beforeEach(() => {
        cy.visit('https://www.lojasrenner.com.br/', { headers: { "Accept-Encoding": "gzip, deflate" } })
       
    });
    
    it('Teste de busca por produto', () => {
       
        cy.get('.search').type('Camiseta do superman azul{enter}');
        
        cy.log('Busca realizada');
        
        cy.get(':nth-child(5) > .Filter_filterGroup__zOOeE').click()
        
        cy.get('[src="https://img.lojasrenner.com.br/item/535291115/medium/13.jpg"]').click()
       
        cy.get(':nth-child(2) > .ProductAttributes_labelOption__4v8Qz > .ProductAttributes_contentOption__9bNmU > span').click()
        
        cy.get('.ProductInformation_actionBuy__8RfyL').click()
        cy.get('.cart-header-omni-without-postal-code').click()
        cy.get('.modal-omni-location > .form_global > .form_item').type("06462-350")
        cy.get('.submit').click()
        cy.get('.end_buy').click()
        cy.get('.item-1 > .content').click();
        cy.get('.wrap_button_register > .js-register').click()
    });
});