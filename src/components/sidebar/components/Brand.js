import React from "react";
// Chakra imports
import { Flex, useColorModeValue,Text } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {

  return (
    <Flex align='center' direction='column'>
      <Flex align='center' direction='row' h='26px' w='175px' my='32px'>
      <Text sx={{fontWeight:'bold',fontSize:'25px'}} >BOOKS</Text>
      <Text sx={{fontSize:'25px',marginLeft:'0.5rem'}}>LIBRARY</Text></Flex>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
