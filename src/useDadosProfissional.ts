import IProsissional from "./types/IProfissional";
import useFetch from "./useFetch"

const  useDadosProfissional = () => {
    return useFetch<IProsissional[]>({url: `especialista`});
}

export default useDadosProfissional; 