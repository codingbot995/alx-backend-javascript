export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ data: 'API response of data' });
      } else {
        reject(new Error('Failed to fetch data from the  API'));
      }
    }, 1000);
  });
}
