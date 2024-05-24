import { Box, Container, Flex, Heading, Text, VStack, Grid, GridItem, Image, Link, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={8}>Your one-stop shop for all things electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={20}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 1" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 1</Heading>
                <Text>$199.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 2" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 2</Heading>
                <Text>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 3" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 3</Heading>
                <Text>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 4" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 4</Heading>
                <Text>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} mt={10}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="md">ElectroShop</Heading>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Privacy Policy</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;