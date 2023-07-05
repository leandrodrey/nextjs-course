import {Card, CardHeader, Grid} from "@mui/material";
import {Layout} from "@/components/layouts";
import {EntryList} from "@/components/ui";

export default function Home() {
    return (
        <>
            <Layout>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{height: 'calc(100vh - 100px)'}}>
                            <CardHeader title="Pendientes"/>
                            <EntryList/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{height: 'calc(100vh - 100px)'}}>
                            <CardHeader title="En Progreso"/>
                            <EntryList/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{height: 'calc(100vh - 100px)'}}>
                            <CardHeader title="Completadas"/>
                            <EntryList/>
                        </Card>
                    </Grid>
                </Grid>
            </Layout>
        </>
    )
}
