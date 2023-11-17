import {request, debounce} from './utilities.js';
import {renderStatus} from './status.js';
import { setupImageGallery } from './gallery/main.js';
import {setSubmitDisabled, resetForm} from './upload/main.js';

const baseUrl = 'https://30.javascript.pages.academy/kekstagram';

document.addEventListener('formdata', async (event) => {
  try {
    setSubmitDisabled(true);
    await request(baseUrl, {method: 'post', body: event.formData });
    resetForm();
    renderStatus('success');
  } catch (exception) {
    renderStatus('error');
  } finally {
    setSubmitDisabled(false);
  }
});

try {
  setupImageGallery(await request(`${baseUrl}/data`), debounce);
} catch {
  renderStatus('data-error', {autoHide: 5000});
}


