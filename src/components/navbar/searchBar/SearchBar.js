import React,{useState,useEffect} from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = async () => {
    try {
      // Fetch data from the Google Books API
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      const data = await response.json();
      sessionStorage.setItem('searchResults', JSON.stringify(data.items || []));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    if (!searchTerm.trim()) {
      // Clear search results from sessionStorage
      sessionStorage.removeItem('searchResults');
    }

  
  const { variant, background, children, placeholder, borderRadius, ...rest } = props;
  // Chakra Color Mode
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");
  return (
    <InputGroup w={{ base: "100%", md: "300px" }} {...rest}>
      <InputLeftElement
        children={
          <IconButton
            bg='inherit'
            borderRadius='inherit'
            _hover='none'
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            icon={
              <SearchIcon color={searchIconColor} w='15px' h='15px' />
            }></IconButton>
        }
      />
      <Input
        variant="search"
        fontSize="sm"
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight="500"
        _placeholder={{ color: "gray.400", fontSize: "14px" }}
        borderRadius={borderRadius ? borderRadius : "30px"}
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(); // Trigger search on each input change
        }}
      />
    </InputGroup>
  );
}

export default SearchBar;
