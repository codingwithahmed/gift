import {
    Card,
    Heading,
    Layout,
    Page
} from '@shopify/polaris'
import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";


export default function Id () {
    const breadcrumbs = [{ content: "Gifty", url: "/" }];

    return <Page>
            	<TitleBar
                    title="Create New Setting"
                    breadcrumbs = {breadcrumbs}
                    primaryAction={{
                        content:"Rate US 🌟",
                        onAction: () => navigate('/')
                    }} />
                <Layout>
                        <Layout.Section>
    
                                <Card sectioned>
                                    <Card.Header title="Setting Detail" actions={[{
                                        content:"Tutorial"
                                    }]}>
                                        
                                    </Card.Header>

                                    <Card.Section>

                                    </Card.Section>
                                </Card>
                        </Layout.Section>

                </Layout>

    </Page>
}