import axios from "axios";

/**
 * Agregar/reemplazar nuevos elementos a una arquitectura
 * en la base de datos del usuario
 * @param {FormData} formData objeto form-data con la información de los elementos
 */
const postElements = async (formData) => {
    try {
        const response = await axios.post("/elementos/", formData,
        {
            headers: {'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    }
    catch(error){
        return error.response.status;
    }
}

const postUpdatedElements = async (formData) => {
  try {
    const response = await axios.post('/updated-elements/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    return error.response.status;
  }
};

export {
    postElements, postUpdatedElements
}
