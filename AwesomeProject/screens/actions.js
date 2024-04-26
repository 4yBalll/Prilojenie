export const IP_DATA_RECEIVED = 'IP_DATA_RECEIVED';

export const ipDataReceived = (ipData) => ({
  
    type: IP_DATA_RECEIVED,
    payload: ipData,
  });