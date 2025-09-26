/**
 * Fetches JSON data from a given URL, with built-in error handling.
 *
 * @async
 * @function useFetch
 * @param {string} url - The URL to send the fetch request to.
 * @returns {Promise<any>} A promise that resolves with the parsed JSON response.
 * @throws {Error} If the fetch fails or the response is not OK.
 *
 * @example
 * const myFetch = async () => {
 *   try {
 *     const data = await useFetch('https://api.example.com/data');
 *     console.log(data);
 *   } catch (error) {
 *     console.error('Fetch failed:', error.message);
 *   }
 * });
 */
const useFetch = async (url) => {
  console.log(url)
  const response = await fetch(url);
  console.log(response)

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export default useFetch;
