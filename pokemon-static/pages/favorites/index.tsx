import React, {useEffect, useState} from "react";
import {Layout} from "@/components/layouts";
import NoFavorites from "@/pages/favorites/NoFavorites";
import {localFavorites} from "@/utils";
import {FavoritePokemons} from "@/components/pokemon";

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons);
    }, []);

    return (
        <Layout>
            {
            favoritePokemons.length === 0
                ? (
                    <NoFavorites />
                )
                : (
                    <FavoritePokemons pokemons={favoritePokemons} />
                )
            }
        </Layout>
    )
};

export default FavoritesPage;