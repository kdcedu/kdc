import axios from "axios";
import { useEffect, useState } from "react";

interface District {
    id: string;
    name: string;
}

export const useGetDistricts = (id: string | null) => {
    const [districts, setDistricts] = useState<District[]>([]);

    useEffect(() => {
        const fetchDistricts = async () => {
            const res = await axios.get(`https://esgoo.net/api-tinhthanh/2/${id || '01'}.htm`);
            setDistricts(res.data?.data || []);
        }
        fetchDistricts();
    }, [id]);

    return districts;
}