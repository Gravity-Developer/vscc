import { Navbar } from "@nextui-org/react";
import { Text, Image, Spacer, Link, Grid } from "@nextui-org/react";
import { ThemeSelector } from "./theme.component";
import { Switch, useTheme } from '@nextui-org/react'
import { Layout } from "../layouts/navbar.layout";
export function CustomNavbar(){

  const { isDark, type } = useTheme();
  let src = (!isDark ? "https://raw.githubusercontent.com/Gravity-Developer/image-repo/main/vscc_dark.png" : "https://raw.githubusercontent.com/Gravity-Developer/image-repo/main/vscc_light.png") // light

    

    return <Layout  >

      <Navbar isBordered shouldHideOnScroll variant="floating">
        <Navbar.Brand>
          <Image

          height={100 }  
          src={src}
          alt="Default Image"
          objectFit="contain"    

          />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link isActive href="#">Home</Navbar.Link>
          <Navbar.Link  href="/about">About</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content hideIn="xs">
          <Navbar.Item >
            <div style={{"alignItems":"center"}}>
              <Text font="inherit">Theme</Text>
              <ThemeSelector />
            </div>
          </Navbar.Item> 
        </Navbar.Content>
      </Navbar>
        
    </Layout>
}


/*
<Navbar height={120} isBordered >
            <Navbar.Brand>
                <Image

                    height={110 }  
                    src={src}
                    alt="Default Image"
                    objectFit="contain"    

                />

                
       

          </Navbar.Brand>
          <Navbar.Content activeColor="blue" variant="highlight-rounded">
          <Navbar.Link>ABOUT</Navbar.Link>
          <ThemeSelector />
          </Navbar.Content>
        </Navbar>
https://raw.githubusercontent.com/Gravity-Developer/image-repo/main/vscc_dark.png
        <Image
            width={105}
            height={75}  
            src="https://raw.githubusercontent.com/Gravity-Developer/image-repo/main/vscc_dark.png"
            alt="Default Image"
            onbjectFit="contain"            
        />
        <Spacer x={4}></Spacer>
        <Text b color="inherit" > 
          Vista Del Lago Solar Car Club
        </Text>

          </Navbar.Brand>
        </Navbar>

*/
