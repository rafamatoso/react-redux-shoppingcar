import { Types, Creators } from './index';

describe('Layout Actions', () => {
  describe('Actions Types', () => {
    test('Deve retornar a Action Type SHOW_MESSAGE', () => {
      expect(Types.SHOW_MESSAGE).toEqual('SHOW_MESSAGE');
    });

    test('Deve retornar a Action Type HIDE_MESSAGE', () => {
      expect(Types.HIDE_MESSAGE).toEqual('HIDE_MESSAGE');
    });
  });

  describe('Actions Creators', () => {
    test('Deve retornar a Action Creator show_message { type: SHOW_MESSAGE }', () => {
      expect(Creators.showMessage()).toEqual({ type: Types.SHOW_MESSAGE });
    });

    test('Deve retornar a Action Creator hide_message { type: HIDE_MESSAGE }', () => {
      expect(Creators.hideMessage()).toEqual({ type: Types.HIDE_MESSAGE });
    });
  });
});
