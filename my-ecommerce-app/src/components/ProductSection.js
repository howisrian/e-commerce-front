import React from 'react';
import './../assets/styles/ProductSection.css';

function ProductSection() {
  return (
    <div className="product-section-container">
      <h2 className="section-title">Novos</h2>
      <div className="product-section">
        <div className="product">
          <img src="produto1.jpg" alt="Produto 1" />
          <div className="product-details">
            <h3>Nome do Produto 1</h3>
            <p>Descrição do Produto 1</p>
            <p>R$ 50,00</p>
          </div>
        </div>
        {/* Outros produtos aqui */}
      </div>
    </div>
  );
}


export default ProductSection;