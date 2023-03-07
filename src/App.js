import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./stylesheet.css";

function App() {
  // Define your events data here
  const events = [
    {
      name: "Event 1",
      description: "This is event 1",
      location: "Location 1",
      date: "2023-03-08"
    },
    {
      name: "Event 2",
      description: "This is event 2",
      location: "Location 2",
      date: "2023-03-09"
    }
  ];

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreateEventPage />} /> 
          {/* Pass the events data as props to the EventList component */}
          <Route path="/myevent" element={<EventList events={events} />} />
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

// Create the EventList component
function EventList({ events }) {
  return (
    <Box>
      <Heading as="h2" size="md" color="gray.800" mb={4}>
        Events Today
      </Heading>
      {/* Loop through the events array and render each event */}
      {events.map((event, index) => (
        <Box
          key={index}
          mb={4}
          p={6}
          borderWidth={1}
          borderRadius={12}
          boxShadow="md"
          bg="white"
        >
          <Heading as="h3" size="sm" color="gray.800" mb={2}>
            {event.name}
          </Heading>
          <Box mb={2}>
            <b>Description: </b> {event.description}
          </Box>
          <Box mb={2}>
            <b>Location: </b> {event.location}
          </Box>
          <Box mb={2}>
            <b>Date: </b> {event.date}
          </Box>
        </Box>
      ))}
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
