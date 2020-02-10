import { showMessage, hideMessage } from './index';

describe('Layout Actions', () => {
  describe('Actions Types', () => {
    test('Deve retornar a Action Type SHOW_MESSAGE', () => {
      expect(showMessage.type).toEqual('SHOW_MESSAGE');
    });

    test('Deve retornar a Action Type HIDE_MESSAGE', () => {
      expect(hideMessage.type).toEqual('HIDE_MESSAGE');
    });
  });

  describe('Actions Creators', () => {
    test('Deve retornar a Action Creator show_message { type: SHOW_MESSAGE }', () => {
      expect(showMessage()).toEqual({ type: 'SHOW_MESSAGE' });
    });

    test('Deve retornar a Action Creator hide_message { type: HIDE_MESSAGE }', () => {
      expect(hideMessage()).toEqual({ type: 'HIDE_MESSAGE' });
    });
  });
});
