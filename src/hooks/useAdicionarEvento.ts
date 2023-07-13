import { useSetRecoilState } from 'recoil';
import { IEvento } from '../interfaces/IEvento';
import { listaDeEventosState } from '../state/atom';
import { getId } from '../util';

export default function useAdicionarEvento() {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error('Não é possível adicionar um evento no passado');
    }
    evento.id = getId();
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento]);
  };
}
