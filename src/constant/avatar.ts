const boys = Array.from({ length: 6 }, (_, i) => `boy_${i + 1}`);

const girls = Array.from({ length: 6 }, (_, i) => `girl_${i + 1}`);

const animals = Array.from({ length: 15 }, (_, i) => `animal_${i + 1}`)

export const avatars = [...boys, ...girls, ...animals];