
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}
export const seedData: SeedData = {
    entries: [
        {

            description: 'Crear el proyecto',
            status: 'pending',
            createdAt: Date.now()
        },
        {

            description: 'Proyecto en progreso',
            status: 'in-progress',
            createdAt: Date.now() - 100000
        },
        {

            description: 'Proyecto terminado',
            status: 'finished',
            createdAt: Date.now() - 10000
        },
    ]
}
