import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./stylesheet.css";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreateEventPage />} /> />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

function HomePage() {
  return (
    <Box bg="url('/src/assie-bg-new.jpg') no-repeat center center fixed" bgSize="cover">
      {/* Add your homepage content here */}
      <Box>
        <Link to="/create">Create Event</Link>
      </Box>
    </Box>
  );
}

function CreateEventPage() {
  return (
    <Box
      maxW="xl"
      mx="auto"
      m={5}
      p={6}
      borderWidth={1}
      borderRadius={12}
      boxShadow="md"
      bg="white"
    >
      <Heading as="h1" size="lg" color="gray.800" mb={6}>
        สร้างกิจกรรมใหม่
      </Heading>
      <FormControl id="eventName" mb={4}>
        <FormLabel>ชื่อกิจกรรม</FormLabel>
        <Input type="text" placeholder="กรอกชื่อกิจกรรม" />
      </FormControl>
      <FormControl id="eventDescription" mb={4}>
        <FormLabel>รายละเอียด</FormLabel>
        <Textarea placeholder="กรอกรายละเอียด" />
      </FormControl>
      <FormControl id="eventLocation" mb={4}>
        <FormLabel>สถานที่ (ไม่บังคับ)</FormLabel>
        <Input type="text" placeholder="กรอกสถานที่" />
      </FormControl>
      <FormControl id="eventDate" mb={6}>
        <FormLabel>วันที่</FormLabel>
        <Input type="date" />
      </FormControl>
      <Button colorScheme="blue" size="md" w="full" mt={2}>
        Create Event
      </Button>
    </Box>
  );
}

export default App;
