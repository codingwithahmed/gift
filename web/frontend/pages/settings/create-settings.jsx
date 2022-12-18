import {
    Card,
    Heading,
    Layout,
    Page,
    Stack,
    TextField,
    ColorPicker,
    Caption,
    Subheading,
    Checkbox
} from '@shopify/polaris'
import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
    settings as recoil_settings
} from '../../states/index'
import {
    useState
} from 'react'
import { useRecoilState } from 'recoil';

export default function Create_Settings () {
    const breadcrumbs = [{ content: "Gifty", url: "/" }];

    const [settings,setSettings] = useRecoilState(recoil_settings)

    const [color,setColor] = useState({
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.7,
      });

    return <Page>
            	<TitleBar
                    title="Create New Setting"
                    breadcrumbs = {breadcrumbs}
                    primaryAction={{
                        content:"Rate US 🌟",
                        onAction: () => navigate('/')
                    }} />
                <Layout sectioned>
                    <Stack>
                        <Stack.Item fill>
                        <Layout.Section>
                                <Card sectioned>
                                    <Card.Header title="Setting Detail" actions={[{
                                        content:"Tutorial"
                                    }]}>
                                        
                                    </Card.Header>
                                    
                                    <Card.Section>
                                        <TextField label='Name' placeholder='Enter Name Of Setting Here.' />
                                    </Card.Section>
                                    <Card.Section>
                                                <Heading>Button Text Settings</Heading>
                                                
                                                <TextField label='Text' placeholder='Upload' />
                                                <br />
                                                <Stack distribution='equalSpacing' alignment='center' >
                                                    <Stack.Item>
                                                        <TextField label='Size' type='number' placeholder='1' />
                                                    </Stack.Item>
                                                    <Stack.Item>

                                                    </Stack.Item>  
                                                </Stack>
                                                <br />
                                                <Stack.Item>
                                                    <Subheading>Text Color</Subheading>
                                                    <ColorPicker  onChange={setColor} color={color} allowAlpha />
                                                </Stack.Item>
                                    </Card.Section>

                                    <Card.Section>
                                        <Heading>Button Background Settings</Heading>
                                        <br />
                                        <Stack vertical>
                                            
                                            <Stack.Item>
                                                <Checkbox 
                                                        label='Transparent' 
                                                    />
                                            </Stack.Item>

                                            <Stack.Item>
                                                <Subheading>Background Color</Subheading>
                                                <ColorPicker color={color}  />
                                            </Stack.Item>


                                        </Stack>
                                    </Card.Section>
                                </Card>
                        </Layout.Section>
                        </Stack.Item>
                            
                            <Stack.Item fill>
                                <Layout.Section>
                                        <Card title='Preview' sectioned>
                                                <Card.Section>
                                                    <div>
                                                        <button>Upload</button>
                                                        <label>Upload Button label</label>
                                                    </div>
                                                </Card.Section>
                                        </Card>
                                </Layout.Section>

                                <Layout.Section>
                                    <Card sectioned title='Other Settings'>
                                        <Card.Section>
                                                <Card.Subsection>
                                                    <Stack vertical>
                                                        <Subheading>Settings For Orders</Subheading>
                                                        <Stack.Item>
                                                            <Checkbox label='Show On Order Dashobard' />
                                                        </Stack.Item>
                                                        <Stack.Item>
                                                            <Checkbox label='Images Name should include time of purchases' />
                                                        </Stack.Item>                                                        

                                                    </Stack>
                                                </Card.Subsection>

                                                <Card.Subsection>
                                                    <Stack vertical>
                                                        <Subheading>What pages to show on</Subheading>
                                                        <Stack.Item>
                                                            <Checkbox label='Show On All Products' />
                                                        </Stack.Item>
                                                    </Stack>
                                                </Card.Subsection>
                                        </Card.Section>
                                    </Card>
                                </Layout.Section>
                            </Stack.Item>
                        </Stack>
                </Layout>

    </Page>
}