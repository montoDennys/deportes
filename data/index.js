import { tabla as tablaPageData } from "./pages/tabla.js";

export const getPagesContext = (pagePath) => {
    console.log("Cargando variables para la página:", pagePath);
    
    let pageVariables = {};
    
    switch (pagePath) {
        case '/index.html':
            pageVariables = tablaPageData;
            break;
        default:
            console.warn("No se encontraron variables específicas para esta página.");
    }

    return {
        ...pageVariables
    };
};