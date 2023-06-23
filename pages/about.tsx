import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

export default function About() {
    return (
        <>
            <h1>ABOUT US</h1>
        </>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
