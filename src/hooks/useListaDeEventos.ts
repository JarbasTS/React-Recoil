import { useRecoilValue } from 'recoil';
import { eventosFiltradosState } from '../state/seletores';

export default function useListaDeEventos() {
  return useRecoilValue(eventosFiltradosState);
}
