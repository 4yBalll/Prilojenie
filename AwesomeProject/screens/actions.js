// Определение типа действия для успешного получения данных IP
export const IP_DATA_RECEIVED = 'IP_DATA_RECEIVED';

// Создание действия для успешного получения данных IP
export const ipDataReceived = (ipData) => ({
  
    type: IP_DATA_RECEIVED,
    payload: ipData,
  });