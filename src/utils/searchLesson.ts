import { ROUTES } from "@/constant/route";

export const searchLesson = (lesson: string) => {
    const search = lesson.toLowerCase();
    
    return ROUTES.filter((item) => item.name.toLowerCase().includes(search) || item.title.toLowerCase().includes(search));
};
