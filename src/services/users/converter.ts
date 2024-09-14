import { RemoteCustomer } from "../../data";
import { Customer } from "../../domains/usecases";

const handleIdFormatter = (id = '') => {
  const cleaned = (id || '').replace(/\D/g, '');

  const formatted = cleaned.padStart(5, '0');

  return formatted.slice(0, 5);
}

export const converter = (dto?: RemoteCustomer[]): Customer[] | undefined => {
  return dto?.map((dto) => ({
    id: handleIdFormatter(dto.id?.value),
    email: dto?.email || 'foo@floki.com',
    gender: dto?.gender || 'unknown',
    location: dto?.location?.country || 'valhalla',
    name: `${dto?.name?.first || 'Hrafna'} ${dto?.name?.last || 'Flóki'}`,
    picture: dto?.picture?.medium || '',
  }))
}