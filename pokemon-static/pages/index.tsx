import {GetStaticProps, NextPage} from "next";
import {Grid} from "@nextui-org/react";
import {pokeApi} from "@/api";
import {Layout} from "@/components/layouts";
import {PokemonListResponse, SmallPokemon} from "@/interfaces";
import {ReactNode} from "react";
import {PokemonCard} from "@/components/pokemon";

interface Props {
    pokemons: SmallPokemon[];
}

function Row(props: { justify: string, children: ReactNode }) {
    return null;
}

const HomePage: NextPage<Props> = ({pokemons}) => {

    return (
        <>
            <Layout>
                <Grid.Container gap={2} justify="center">
                    {pokemons.map((pokemon) => (
                        <Grid key={pokemon.id} xs={12} md={4} lg={3} xl={2}>
                            <PokemonCard pokemon={pokemon} />
                        </Grid>
                    ))}
                </Grid.Container>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const {data} = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')

    const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
        const id:number = i + 1;
        const image: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

        return {
            ...pokemon,
            id,
            image
        }
    })

    return {
        props: {
            pokemons: pokemons
        }
    }
}

export default HomePage;
