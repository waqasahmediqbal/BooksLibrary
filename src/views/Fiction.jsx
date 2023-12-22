import React, { useState,useEffect } from "react";

// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Book from "components/card/Book";

const Fiction = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
         "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=12"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 4", "2xl": "1 / 1 / 2 / 2" }}>
          <Flex direction='column'>
          <SimpleGrid columns={{ base: 1, lg: 2,xl:3 }} gap='20px'>
            {books.map((book) => (
              <Book
                key={book.id}
                name={book.volumeInfo.title}
                author={book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
                image={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
                preview={book.volumeInfo.previewLink}
              />
            ))}
          </SimpleGrid>
            
          </Flex>
        </Flex>
      
      </Grid>
    </Box>
  );
}
export default Fiction