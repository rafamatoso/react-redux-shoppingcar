import reducer from './index';

describe('Layout Reducer', () => {
  test('Deve retornar o State inicial', () => {
    expect(reducer(undefined, {})).toEqual({ showMessage: false });
  });

  test('Deve retornar o State com a props showMessage=true', () => {
    expect(reducer(undefined, { type: 'SHOW_MESSAGE' })).toEqual({
      showMessage: true
    });
  });

  test('Deve retornar o State com a props showMessage=false', () => {
    expect(reducer({ showMessage: true }, { type: 'HIDE_MESSAGE' })).toEqual({
      showMessage: false
    });
  });
});
