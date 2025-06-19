import axios from 'axios';
import conf from '../config/config';

const UPSCALE_URL = 'https://api.picsart.io/tools/1.0/upscale';
const BG_REMOVE_URL = 'https://api.picsart.io/tools/1.0/removebg';

// Image Enhance
export const enhanceImage = async (file) => {
  const formData = new FormData();
  formData.append('upscale_factor', 'x4');
  formData.append('image', file);

  try {
    const response = await axios.post(UPSCALE_URL, formData, {
      headers: {
        'x-picsart-api-key': conf.API_KEY,
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = response.data;

    if (!data?.data?.url) {
      throw new Error(data.message || 'Enhancement failed');
    }

    return data.data.url;
  } catch (error) {
    console.error('Error enhancing image with Picsart:', error.response?.data || error.message);
    throw error;
  }
};


// Background Remover
export const removeBg = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('output_type', 'cutout');
  formData.append('bg_blur', '0');
  formData.append('scale', 'fit');
  formData.append('auto_center', 'false');
  formData.append('stroke_size', '0');
  formData.append('stroke_color', 'FFFFFF');
  formData.append('stroke_opacity', '100');
  formData.append('shadow', 'disabled');
  formData.append('shadow_opacity', '20');
  formData.append('shadow_blur', '50');
  formData.append('format', 'PNG');


  try {
    const response = await axios.post(BG_REMOVE_URL, formData, {
      headers: {
        'X-Picsart-API-Key': conf.API_KEY,
        accept: 'application/json',
      },
    });

    const data = response.data;

    if (!data?.data?.url) {
      throw new Error(data.message || 'Background removal failed');
    }

    return data.data.url;
  } catch (error) {
    console.error('Error removing background with Picsart:', error.response?.data || error.message);
    throw error;
  }
};
