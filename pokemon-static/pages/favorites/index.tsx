import {useEffect, useState} from "react";
import {Layout} from "@/components/layouts";
import NoFavorites from "@/pages/favorites/NoFavorites";
import {localFavorites} from "@/utils";

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons);
    }, []);

    return (
        <Layout>
            <NoFavorites />
        </Layout>
    )
};

export default FavoritesPage;