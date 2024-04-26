// Определение типа действия для успешного получения данных IP
export const IP_DATA_RECEIVED = 'IP_DATA_RECEIVED';

// Создание действия для успешного получения данных IP
export function ipDataReceived(ipData) {
  return {
    type: IP_DATA_RECEIVED,
    payload: ipData,
  };
}