import React from 'react';

import { useSelector } from 'react-redux';

export default function Message() {
  const isShow = useSelector(state => state.layout.showMessage);

  return (
    <React.Fragment>
      {isShow && (
        <div className="container mt-3">
          <div className="alert alert-success" role="alert">
            Cadastro com Sucesso!!!
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

// mt-3 é uma classe do Bootstrap = margin-Top: 3px
