import React from 'react';

import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="container-fluid">
      <div className="row">
        {cart.length === 0 ? (
          <p className="col-sm-12 mt-5 text-warning text-center">
            Sem produtos no carrinho...
          </p>
        ) : (
          <div className="col-sm-3 mt-3">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
