const toggleFavorite = (id: number) => {
    if (typeof window !== 'undefined') {
        let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.includes(id)) {
            favorites = favorites.filter(pokeId => pokeId !== id);
        } else {
            favorites.push(id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};

const existsInFavorites = (id: number): boolean => {
    if (typeof window !== 'undefined') {
        const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        return favorites.includes(id);
    }
    return false;
};

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    toggleFavorite,
    existsInFavorites,
    pokemons
};
