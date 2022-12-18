import {
  Card,
  EmptyState,
  Heading,
  Layout,
  Page,
  SkeletonBodyText,
  ResourceItem,
  ResourceList,
  Stack,
  Subheading,
  Avatar,
} from "@shopify/polaris";
import { TitleBar, useNavigate, Loading } from "@shopify/app-bridge-react";
import {
  settings as recoil_settings
} from '../states/index'
import { useRecoilState } from "recoil";



export default function HomePage() {

//-------------------------------------variables-----------------------------



  const isLoading = true
  const isRefetching = false
 // const settings = []

  /*const settings = [
    {
        id:1,
        url : 'settings/12',
        name : 'POD',
        status : 'Active',
        type : 'All',

    },
    {
      id:1,
      url : 'settings/12',
      name : 'Caps',
      status : 'Active-Not',
      type : 'Single',
  },
  {
    id:1,
    url : 'settings/12',
    name : 'Apparel Product',
    status : 'Active',
    type : 'Multiple',
},{
  id:4,
  url : 'settings/142',
  name : 'Crop Setting',
  status : 'Active-Not',
  type : 'Single',
}
] */

const [settings,setSettings] = useRecoilState(recoil_settings)



//-------------------------------------Function-----------------------------


  const navigate = useNavigate()







  //-------------------------------------JSX ELEMENT -----------------------------



  const emptyStateMarkup = (
    <EmptyState 
        heading="Create A New Setting For Uploading Images"
        action={{
          content: "Create New Setting",
          onAction : () => navigate(`/settings/create-settings`)
        }}

        image = "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
        <p>Note : Setting are used to set rules for uploading image like you can set mask or u can request a certain dimmension image</p>
    </EmptyState>
  ) 


//-------------------------------------JSX FUNCTIONS -----------------------------





  if (!isLoading || isRefetching) {

    return <Page>
      <TitleBar title="Gifty" primaryAction={{
        content:"Rate US 🌟",
        onAction: () => navigate('/')
      }} />

      <Card sectioned>

            {
              !isLoading && !settings?.length  ?  emptyStateMarkup : (  
            <>
            <Loading />
            <SkeletonBodyText />  
            </>
              ) 
            }
            
      </Card>
    </Page>
  }


  if (settings.length < 1 ) {
    return <Page>
      <TitleBar title="Gifty" primaryAction={{
        content:"Rate US 🌟",
        onAction: () => navigate('/')
      }} />

      <Card sectioned>

           {emptyStateMarkup}
            
      </Card>
    </Page>
  }  

  return (
    <Page narrowWidth>
      <TitleBar title="Gifty" primaryAction={{
        content:"Rate US 🌟",
        onAction: () => navigate('/')
      }} />


      <Layout>

        <Layout.Section>
          <Card sectioned>
              <Card.Header title="Settings Created">
                <Heading>Total Settings : {settings.length.toString().toUpperCase()}</Heading>
              </Card.Header>

              <Card.Section>
                  <ResourceList 
                    resourceName={{
                      singular:'setting',
                      plural : 'settings'
                    }}

                    items={settings}

                    renderItem = {  (item) =>{

                      const {id,name,status, url,type} = item

                  


                      return (
                        <ResourceItem name={name} id={id} url={url} media={
                          <Avatar 
                            customer
                            size="medium"
                            name={name}
                            source={'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746'}
                          />
                        } onClick={() => navigate(`/settings/create-settings`)}>
                              <Stack spacing="extraLoose" alignment="center" distribution="trailing">
                                  <Stack.Item >
                                    <Heading> {name}</Heading>
                                  </Stack.Item>

                                  <Stack.Item >
                                    <Heading>{type}</Heading>
                                  </Stack.Item>
                                  <Stack.Item   >
                                    <Heading> { status.toLowerCase() == 'active' ? '🟢' : '🔴'}</Heading>  
                                  </Stack.Item>
                              </Stack>

                        </ResourceItem>
                      )

                    } }
                  > 



                  </ResourceList>
              </Card.Section>
          </Card>
        </Layout.Section>
        
      </Layout>
    </Page>
  );
}
