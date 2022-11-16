import { Navbar } from "@nextui-org/react";
import { Text, Image, Spacer, Grid } from "@nextui-org/react";
import { ThemeSelector } from "./theme.component";
import { Switch, useTheme } from '@nextui-org/react'

export function CustomNavbar(){

  const { isDark, type } = useTheme();
  let src = (isDark ? "https://raw.githubusercontent.com/Gravity-Developer/image-repo/main/vscc_dark.png" : "https://raw.githubusercontent.com/Gravity-Developer/image-repo/main/vscc_dark.png") // light

    

    return <div>
        <Navbar height={120} >
            <Navbar.Brand>
                <Image

                    height={110 }  
                    src={src}
                    alt="Default Image"
                    objectFit="contain"    

                />

                
       

          </Navbar.Brand>
          <ThemeSelector />
        </Navbar>
    </div>
}


/*
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
