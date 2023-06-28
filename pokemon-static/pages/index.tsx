import {Button} from "@nextui-org/react";
import {Layout} from "@/components/layouts";

export default function HomePage(): JSX.Element {
    return (
        <>
            <Layout title="Listado de Pokemons">
                <h1>Home Page</h1>
                <Button color="gradient">Click me</Button>
            </Layout>
        </>
    )
}
