import {Layout} from "@/components/layouts";
import {GetStaticProps, NextPage} from "next";
import {pokeApi} from "@/api";

const HomePage: NextPage = (props) => {

    console.log(props)

    return (
        <>
            <Layout title="Listado de Pokemons">

            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const {data} = await pokeApi.get('pokemon?limit=151')
    console.log(data)
    return {
        props: {
            pokemons: data.results
        }
    }
}

export default HomePage;
