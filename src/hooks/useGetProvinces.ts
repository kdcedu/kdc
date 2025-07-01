import axios from "axios";
import { useEffect, useState } from "react";

interface Province {
    id: string;
    name: string;
}

export const useGetProvinces = () => {
    const [provinces, setProvinces] = useState<Province[]>([]);

    useEffect(() => {
        const fetchProvinces = async () => {
            const res = await axios.get('https://esgoo.net/api-tinhthanh/1/0.htm');
            setProvinces(res.data?.data || []);
        }
        fetchProvinces();
    }, []);

    return provinces;
}
