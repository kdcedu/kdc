import axios from "axios";
import { useEffect, useState } from "react";

interface Ward {
    id: string;
    full_name: string;
}

export const useGetWards = (id: string | null) => {
    const [wards, setWards] = useState<Ward[]>([]);

    useEffect(() => {
        const fetchWards = async () => {
            const res = await axios.get(`https://esgoo.net/api-tinhthanh/3/${id || '001'}.htm`);
            setWards(res.data?.data || []);
        }
        fetchWards();
    }, [id]);

    return wards;
}