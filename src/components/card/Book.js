// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

export default function Book(props) {
  const { image, name, author, preview } = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <Card p='20px'>
      <Flex direction={{ base: "row",md:'row', lg: "row" }}>
        <Box mb={{ base: "20px", lg: "0px" }} mr={{ base: "10px",lg: "20px" }} _hover={{
            transform: "scale(1.2)",
            transition: "transform 0.3s ease-in-out",
          }}
          transition= "transform 0.3s ease-in-out">
          <Image src={image} borderRadius='20px'  w={{ base: "200px", "3xl": "200px" }}
            h={{ base: "180px", "3xl": "180px" }} />
        </Box>

        <Flex direction='column' justify='space-between' h='100%' w='100%'>
          <Flex
            justify={{ base: "start", lg: "start" }}
            direction={{ base: "col", lg: "row" }}
            mb='auto'
          >
            <Flex direction='column'>
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "lg",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "md",
                  "3xl": "lg",
                }}
                mb='5px'
                fontWeight='bold'
                me={{ base: "0px", lg: "14px" }}
              >
                {name}
              </Text>
              <Text
                color='secondaryGray.600'
                fontSize={{
                  base: "sm",
                }}
                fontWeight='400'
                me={{ base: "0px", lg: "14px" }}
              >
                {author}
              </Text>
            </Flex>
          </Flex>
          <Flex
            align='flex-end'
            justify='space-around'
            direction={{ base: "row" }}
            mt='25px'
          >
          <Link
              href={preview}
              target="_blank"
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}
            >
              <Button
                variant='darkBrand'
                color='white'
                fontSize='sm'
                fontWeight='500'
                borderRadius='70px'
                px='24px'
                py='5px'
              >
                Preview
              </Button>
            </Link>
            <Button
            // bg='white'
            _hover={{ bg: "#ccc" }}
            _active={{ bg: "transparent" }}
            _focus={{ bg: "white" }}
            p='0px !important'
            borderRadius='50%'
            minW='36px'
            h='36px'
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon
              transition='0.2s linear'
              w='20px'
              h='20px'
              as={like ? IoHeart : IoHeartOutline}
              color='brand.500'
            />
          </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}