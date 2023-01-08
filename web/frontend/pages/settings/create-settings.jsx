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
        conditions : [],
        button_text : {
            text : 'Add To Card',
            size : 18,
            alignment : 'left',
            label : '* Upload For Adding To Cart',
            color : '#fffffff',
            bold : true,
            labelColor : '#FF0000'
        },
        button_bg : {
            transparent : true,
            color : '#000000',
            border : {
                color : '#000000',
                size : 4,
                hidden : true
            },
            
        },
        other : {
            all_pages : false,
            order_page : {
                show_dashboard : false,
                images_include_top : false 
            }
        }
    })
    
    useEffect(() => {
        console.log("Effect Setting : ",settings)
    },[settings])
   

    const styles = {
        
    background : String('hsl('+settings.button_bg.color.hue + '%,'+settings.button_bg.color.saturation+'%,'+settings.button_bg.color.brightness+'%);' ) 
    };

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


const alignmentOptions = [    {
    label : 'Left',
    value : 'left'
},
{
    label : 'Center',
    value : 'center'
},
{
    label: 'Right',
    value : 'right'
}]

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
},[settings])

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
},[settings])

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
},[settings])

const handleConditionInclude =  useCallback((e,i) => {
    const newArr = settings.conditions 
    newArr[i].include = e

    setSettings({
        ...settings,
        conditions : newArr
    })
    console.log("Conditions : ",settings.conditions)
},[settings])

const handleTextButton = useCallback((e) => {
    setSettings({
        ...settings,
        button_text : {
            ...settings.button_text,
            text : e
        }
    })
},[settings])

const handleTextSizeButton = useCallback((e) => {
    setSettings({
        ...settings,
        button_text : {
            ...settings.button_text,
            size : e
        }
    })
},[settings])


const handleTextLabelButton = useCallback((e) => {
     setSettings({
        ...settings,
        button_text : {
            ...settings.button_text,
            label : e
        }
    })
},[settings])

const handleTextAlignment = useCallback((e) => {
    setSettings({
        ...settings,
        button_text : {
            ...settings.button_text,
            alignment : e
        }
    })
},[settings])

const handleBoldnessButtonText = useCallback((e) => {
    setSettings({
        ...settings,
        button_text : {
            ...settings.button_text,
            bold : e
        }
    })
},[settings])
const handleColorText = useCallback((e) => {
  //  console.log("COLOR UPDATED : ", e )
  //  const {hue,saturation,brightness} = e
    setSettings({
        ...settings,
        button_text : {
            ...settings.button_text,
            color : e.target.value,
      //      rgb : hsv2Rgb(hue,saturation,brightness)
        }
    })
},[settings])

const handleBGButton = useCallback((e) => {
    console.log('E ====> ',e.target.value)
    setSettings({
        ...settings,
        button_bg : {
            ...settings.button_bg,
            color : e.target.value,
           // rgb : hsv2Rgb(hue,saturation,brightness)
        }
    })
},[settings])


const handleLabelColor = useCallback((e) => {
  //  console.log('E ====> ',e.target.value)
    setSettings({
        ...settings,
        button_text : {
            ...settings.button_text,
            labelColor : e.target.value,
           // rgb : hsv2Rgb(hue,saturation,brightness)
        }
    })
},[settings])


const handleTransparentbgButtton = useCallback((e) => {
    setSettings({
        ...settings,
        button_bg : {
            ...settings.button_bg,
            transparent : e
        }
    })
},[settings])

const handleBorderColor = useCallback((e) => {
    setSettings({
        ...settings,
        button_bg : {
            ...settings.button_bg,
            border : {
                ...settings.button_bg.border,
                color : e.target.value
            }
        }
    })
},[settings])


const handleBorderSize = useCallback((e) => {
    setSettings({
        ...settings,
        button_bg : {
            ...settings.button_bg,
            border : {
                ...settings.button_bg.border,
                size : e
            }
        }
    })
},[settings])

const handleBorderHidden = useCallback((e) => {
    setSettings({
        ...settings,
        button_bg : {
            ...settings.button_bg,
            border : {
                ...settings.button_bg.border,
                hidden : e
            }
        }
    })
},[settings])

const handleAllProductDispaly = useCallback ((e) => { 
    setSettings({
        ...settings,
        other : {
            ...settings.other,
            all_pages : e
        }
    })
},[settings])


const handleOtherTOP  = useCallback ((e) => { 
    setSettings({
        ...settings,
        other : {
            ...settings.other,
             order_page : {
                ...settings.other.order_page,
                images_include_top : e
             }
        }
    })
},[settings])

const handleOtherOD = useCallback ((e) => { 
    setSettings({
        ...settings,
        other : {
            ...settings.other,
             order_page : {
                ...settings.other.order_page,
                show_dashboard : e
             }
        }
    })
},[settings])

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
                        content:"Save",
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


                                    <Card.Section title='Button Settings'>
                                                <Card.Subsection>
                                                    <TextField label='Text' value={settings.button_text.text} onChange={handleTextButton} placeholder='Enter Button Text' />
                                                </Card.Subsection>
                                                <Card.Subsection>
                                                    <Stack distribution='equalSpacing' vertical alignment='left' >
                                                        <Stack.Item>
                                                            <TextField value={settings.button_text.size} onChange={handleTextSizeButton} label='Size' type='number' placeholder='1' />
                                                        </Stack.Item>

                                                        <Stack.Item>
                                                            <TextField label='Label Text' onChange={handleTextLabelButton} value={settings.button_text.label} />
                                                        </Stack.Item>



                                                        <Stack.Item>
                                                            
                                                            <Select options={alignmentOptions} onChange={handleTextAlignment} value={settings.button_text.alignment} label='Alignment' />

                                                        </Stack.Item>

                                                        <Stack.Item>
                                                             <Checkbox checked={settings.button_text.bold} onChange={handleBoldnessButtonText} value={settings.button_text.bold} label="Bold" />
                                                        </Stack.Item>
                                                    </Stack>
                                                        

                                                </Card.Subsection>
                                                <br />
                                                <Stack.Item>
                                                    <Heading>Text Color</Heading>
                                                    <Card.Subsection>
                                                        <input type={'color'} value={settings.button_text.color} onChange={handleColorText} />
                                                    </Card.Subsection>
                                                </Stack.Item>

                                                <Stack.Item>
                                                    <Heading>Label Color</Heading>
                                                    <Card.Subsection>
                                                        <input type={'color'} value={settings.button_text.labelColor} onChange={handleLabelColor} />
                                                    </Card.Subsection>
                                                </Stack.Item>
                                    </Card.Section>

                                    <Card.Section title='Button Background Settings'>
                                        <br />
                                        <Stack vertical>
                                            
                                            <Stack.Item>
                                                <Checkbox onChange={handleTransparentbgButtton} checked={settings.button_bg.transparent}  label='Transparent' />
                                            </Stack.Item>
                                        {
                                            !settings.button_bg.transparent ?  <Stack.Item>
                                            <Heading>Background Color</Heading>
                                            <input type={'color'} value={settings.button_bg.color} onChange={handleBGButton} />
                                        </Stack.Item> : ''
                                        }

                                      
                                        



                                        </Stack>
                                    </Card.Section>

                                    
                                    <Card.Section title='Border Settings' >
                                            <Stack vertical>
                                            <Stack.Item>
                                            <Checkbox label='Border Hidden' checked={settings.button_bg.border.hidden} onChange={handleBorderHidden} />
                                        </Stack.Item>

                                        {
                                            settings.button_bg.border.hidden ? '' : (<>
                                        <Stack.Item>
                                                <TextField value={settings.button_bg.border.size} onChange={handleBorderSize} type='number' label="Border Size" />
                                        </Stack.Item>
                                           
                                        <Stack.Item>
                                            <Heading>Border Color</Heading>
                                            <input value={settings.button_bg.border.color} onChange={handleBorderColor} type={'color'} />
                                        </Stack.Item></>
                                            )
                                        }
                                            </Stack>
                                    </Card.Section>


                                </Card>
                        </Layout.Section>
                        </Stack.Item>
                            
                            <Stack.Item fill>
                                <Layout.Section>
                                        <Card title='Preview' sectioned>
                                                <Card.Section>

                                                    <div style={{
                                                        display:'flex',
                                                        flexDirection:"column",
                                                        textAlign : settings.button_text.alignment
                                                    }}>
                                                        
                                                        
                                                        <button style={{
                                                            backgroundColor : settings.button_bg.transparent ? 'transparent' : settings.button_bg.color,
                                                            padding :settings.button_text.size * .4,
                                                            cursor : "pointer",
                                                            color : settings.button_text.color,
                                                            marginBottom : settings.button_text.size * .4,
                                                            borderWidth : `${settings.button_bg.border.size * 1}px`,
                                                            borderStyle : 'solid',
                                                            borderColor: settings.button_bg.border.color,
                                                            border : settings.button_bg.border.hidden ? '0px solid transparent' : `${settings.button_bg.border.size * 1}px solid ${settings.button_bg.border.color}`

                                                        }} ><p style={{
                                                            fontSize : settings.button_text.size * 1,
                                                            fontWeight : settings.button_text.bold ? 'bold' : ''
                                                        }}>{settings.button_text.text}</p></button>
                                                        <label style={{
                                                             fontSize : settings.button_text.size * .7,
                                                             color : settings.button_text.labelColor
                                                        }}>{settings.button_text.label}</label>
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
                                                            <Checkbox onChange={handleOtherOD} checked={settings.other.order_page.show_dashboard} label='Show On Order Dashobard' />
                                                        </Stack.Item>
                                                        <Stack.Item>
                                                            <Checkbox onChange={handleOtherTOP} checked={settings.other.order_page.images_include_top} label='Images Name should include time of purchases' />
                                                        </Stack.Item>                                                        

                                                    </Stack>
                                                </Card.Subsection>

                                                <Card.Subsection>
                                                    <Stack vertical>
                                                        <Subheading>What pages to show on</Subheading>
                                                        <Stack.Item>
                                                            <Checkbox checked={settings.other.all_pages} onChange={handleAllProductDispaly} label='Show On All Products' />
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