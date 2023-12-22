import React, { useRef } from "react";
import { Button, Flex, Link, Text } from "@chakra-ui/react";

let banner =
  "https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg?size=626&ext=jpg&ga=GA1.1.33416800.1698360201&semt=ais";

const Banner = () => {
  const scrollRef = useRef(null);

  const handleDiscoverClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      ref={scrollRef}
      direction="column"
      bgImage={banner}
      bgSize="cover"
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius="30px"
      height="35rem"
    >
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color="white"
        mb="14px"
        mt="5rem"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight="700"
        lineHeight={{ base: "32px", md: "42px" }}
      >
        Explore a World of Knowledge with Our Latest Books
      </Text>
      <Text
        fontSize="md"
        color="#ccc"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="40px"
        lineHeight="28px"
      >
        Immerse yourself in a world of creativity and discovery. Find the latest
        and most captivating books waiting just for you.
      </Text>
      <Flex align="center">
        <Button
          bg="white"
          color="black"
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight="500"
          fontSize="14px"
          py="20px"
          px="27"
          me="38px"
          onClick={handleDiscoverClick}
        >
          Discover now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Banner;
