import React from 'react'
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {pokeApi} from "@/api";
import {PokemonFull} from "@/interfaces";
import {Layout} from "@/components/layouts";
import {Card, Grid} from "@nextui-org/react";

interface Props {
    pokemon: PokemonFull;
}

const PokemonPage:NextPage<Props> = (pokemon) => {

    console.log(pokemon);

    return (
        <Layout>
            <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} md={6} lg={2}>
                    <Card isHoverable isPressable variant="bordered">
                        <Card.Body css={{p:1}}>
                            <Card.Image
                                src={pokemon.pokemon.sprites.front_default}
                                alt={pokemon.pokemon.name}
                                width="100%"
                                height={140}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <Card>
                        <Card.Header>
                            <h2>{pokemon.pokemon.name}</h2>
                        </Card.Header>
                        <Card.Body>
                            <Grid.Container gap={2}>
                                <Grid>
                                    <h3>Types</h3>
                                    <ul>
                                        {pokemon.pokemon.types.map((type, i) => (
                                            <li key={i}>{type.type.name}</li>
                                        ))}
                                    </ul>
                                </Grid>

                                <Grid>
                                    <h3>Stats</h3>
                                    <p>Height: {pokemon.pokemon.height}</p>
                                    <p>Weight: {pokemon.pokemon.weight}</p>
                                </Grid>
                                <Grid>
                                    <h3>Abilities</h3>
                                    <ul>
                                        {pokemon.pokemon.abilities.map((ability, i) => (
                                            <li key={i}>{ability.ability.name}</li>
                                        ))}
                                    </ul>
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                    </Card>

                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map(( id, i) => ({
            params: { id }
        } )),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const {id} = params as {id: string};

    const {data} = await pokeApi.get(`pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage
