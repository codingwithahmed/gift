import {
    Card,
    Layout,
    Page,
    Stack,
    TextField,
    ColorPicker,
    Subheading,
    Checkbox,
    ButtonGroup,
    Button,
    Select,
    Heading
} from '@shopify/polaris'
import { TitleBar } from "@shopify/app-bridge-react";

import {
    useState,
    useCallback,
    useEffect
} from 'react'


export default function Create_Settings () {
    const breadcrumbs = [{ content: "Gifty", url: "/" }];
    const [settings,setSettings] = useState({
        name : 'Untitled',
        mask : {
            selected : 'polygon',
            isVisible : false
        },
        conditions : []
    })
    
    useEffect(() => {
        console.log("Effect Setting : ",settings)
    },[settings])
   

    const [color,setColor] = useState({
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.7,
      });

      const options = [{
        label:'Product Title',
        value: 'product-title'
    },
    {
        label : 'Product Description',
        value : 'product-description'
    },
    {
        label: 'Catagory title',
        value : 'cat-title'    
    },  
    {
        label : 'Catagory Descrpition',
        value : 'cat-description'
    }
]

const masks = [
    {
        label : 'Circle',
        value : 'circle'
    },
    {
        label: 'Rectangle',
        value : 'rectangle'
    },
    {
        label: 'Square',
        value : 'square'
    },
    {
        label : 'Polygon',
        value : 'polygon'
    },
    {
        label : 'Iphone',
        value : 'iphone'
    },
    {
        label: 'Custom Mask',
        value : 'custom'
    }
]

const handleMaskDropDown = useCallback((e) => {
        console.log("E -> ",e)
       setSettings({
            ...settings,
            mask : {
                ...settings.mask,
                selected : String(e).toLowerCase() 
            }  
       })

       console.log("Settings Updated : ",settings.mask)
},[settings.mask])

const handleMaskVisibilty = useCallback((e) => {
    console.log('E ---> ',e)
    console.log("PREV SETTINGS : ",settings)
    setSettings({
        ...settings,    
        mask : {
            ...settings.mask,
            isVisible : e
        }
    })
    console.log("CHECK SETTING : ",settings.mask)
},[settings.mask])

const handleName = useCallback((e) => {
    setSettings({
        ...settings,
        name : e
    })
},[settings])

const handleAddnew = useCallback((e) => {

    const newArr = settings.conditions
    newArr.push({
        include : '',
        in : ''
    })
    setSettings({
        ...settings,
        conditions : newArr
    })

} ,[settings])

const handleConditionIn =  useCallback((e,i) => {
    const newArr = settings.conditions 
    newArr[i].in = e

    setSettings({
        ...settings,
        conditions : newArr
    })
    console.log("Conditions : ",settings.conditions)
},[settings.conditions])

const handleConditionInclude =  useCallback((e,i) => {
    const newArr = settings.conditions 
    newArr[i].include = e

    setSettings({
        ...settings,
        conditions : newArr
    })
    console.log("Conditions : ",settings.conditions)
},[settings.conditions])

/* 

const condition_markup = <Stack alignment='center'>
<Stack.Item>
    <Stack alignment='center'>
    <Stack.Item>
</Stack.Item>
<Stack.Item>

    <TextField label = 'Should Include '>

    </TextField>
</Stack.Item>
    </Stack>
</Stack.Item>

<Stack.Item>
    <Select label='In '  options={options}>
        
    </Select>
</Stack.Item>
</Stack>


*/

    return <Page>
            	<TitleBar
                    title="Create New Setting"
                    breadcrumbs = {breadcrumbs}
                    primaryAction={{
                        content:"Rate US 🌟",
                        onAction: () => navigate('/')
                    }} />
                <Layout sectioned>
                    <Stack distribution='equalS'>
                        <Stack.Item fill>
                        <Layout.Section>
                                <Card sectioned>
                                    <Card.Header title="Setting Detail" actions={[{
                                        content:"Tutorial"
                                    }]}>
                                        
                                    </Card.Header>
                                    
                                    <Card.Section>
                                        <TextField label='Name' value={settings.name} onChange={handleName} placeholder='Enter Name Of Setting Here.' />
                                    </Card.Section>

                                    

                                    <Card.Section title='Visibilty ConditionS'>
                                            <Card.Subsection>
                                                <Stack distribution='trailing'>
                                                    <ButtonGroup>
                                                        <Button primary onClick={handleAddnew}>
                                                            Add New +
                                                        </Button>
                                                    </ButtonGroup>
                                                </Stack>

                                            </Card.Subsection>

                                            {
                                                settings.conditions.map((item,index) => <Card.Subsection>
                                                    <Stack alignment='center'>
                                                        <Stack.Item>
                                                            <Stack alignment='center'>
                                                            <Stack.Item>
                                                        </Stack.Item>
                                                        <Stack.Item>

                                                            <TextField value={settings.conditions[index].include} onChange={(e) => handleConditionInclude(e,index)} label = 'Should Include '>
                                                            </TextField>
                                                        </Stack.Item>
                                                            </Stack>
                                                        </Stack.Item>

                                                        <Stack.Item>
                                                            <Select label='In ' value={settings.conditions[index].in}  onChange={(e) => handleConditionIn(e,index)}  options={options}>

                                                            </Select>
                                                        </Stack.Item>
                                                    </Stack>
                                                </Card.Subsection>)
                                            }

                                    </Card.Section>


                                    <Card.Section title='Button Text Settings'>
                                                <Card.Subsection>
                                                    <TextField label='Text' placeholder='Upload' />
                                                </Card.Subsection>
                                                <Card.Subsection>
                                                    <Stack distribution='equalSpacing' vertical alignment='left' >
                                                        <Stack.Item>
                                                            <TextField label='Size' type='number' placeholder='1' />
                                                        </Stack.Item>


                                                        <Stack.Item>
                                                            <Heading>Alignment</Heading>
                                                            <ButtonGroup segmented  fullWidth>
                                                                <Button>Right</Button>
                                                                <Button>Center</Button>
                                                                <Button>Left</Button>
                                                            </ButtonGroup>
                                                        </Stack.Item>  
                                                    </Stack>
                                                </Card.Subsection>
                                                <br />
                                                <Stack.Item>
                                                    <Heading>Text Color</Heading>
                                                    <Card.Subsection>
                                                        <ColorPicker  onChange={setColor} color={color} allowAlpha />
                                                    </Card.Subsection>
                                                </Stack.Item>
                                    </Card.Section>

                                    <Card.Section title='Button Background Settings'>
                                        <br />
                                        <Stack vertical>
                                            
                                            <Stack.Item>
                                                <Checkbox label='Transparent' />
                                            </Stack.Item>

                                            <Stack.Item>
                                                <Heading>Background Color</Heading>
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
                                    <Card title='Mask Setting' sectioned>
                                            <Card.Header title='Should Display Mask'>
                                                    <Checkbox onChange={handleMaskVisibilty} checked={settings.mask.isVisible} />
                                            </Card.Header>
                                            {
                                                settings.mask.isVisible ?  <Card.Section>
                                                    <Card.Subsection>
                                                        <Select label='Which Mask To Display' value={settings.mask.selected} onChange={handleMaskDropDown} options={masks} />
                                                    </Card.Subsection>
                                                    
                                                    <Card.Subsection>

                                                    {
                                                        settings.mask.selected == 'custom' ? <Button primary > Upload </Button> : ''
                                                    }

                                                    </Card.Subsection>
                                            
                                            </Card.Section> : ''
                                            }
                                           
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