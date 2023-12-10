async function getWebsiteContent() {
  const urlInput = document.getElementById('urlInput');
  const resultDiv = document.getElementById('result');

  try {
    const response = await axios.post('/getWebsiteContent', { url: urlInput.value });
    resultDiv.innerHTML = response.data;
  } catch (error) {
    resultDiv.innerHTML = 'Error fetching website content';
  }
}


  