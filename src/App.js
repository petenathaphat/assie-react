import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./stylesheet.css";

function App() {
  // Define your events data here
  const [events, setEvents] = useState([
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
  ]);

  // Callback function to add a new event to the events array
  const handleCreateEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          {/* Pass the handleCreateEvent callback as a prop */}
          <Route path="/create" element={<CreateEventPage onCreateEvent={handleCreateEvent} />} /> 
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

function EventList({ events }) {
  return (
    <Box
      maxW="xl"
      mx="auto"
      m={5}
      p={6}
      borderWidth={1}
      borderRadius={12}
        // boxShadow="md"
      borderColor="gray.200"
      bg="white"
    >
      <Heading as="h2" size="md" color="gray.800" mb={4}>
        กิจกรรมของฉัน
      </Heading>
      <Box>
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
              <b>รายละเอียด: </b> {event.description}
            </Box>
            <Box mb={2}>
              <b>สถานที่: </b> {event.location}
            </Box>
            <Box mb={2}>
              <b>วันที่: </b> {event.date}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}


function CreateEventPage({ onCreateEvent }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  
  // Function to handle form submission
  const handleSubmit = (e) => {
  e.preventDefault(); 

// Create a new event object
const newEvent = {
  name,
  description,
  location,
  date
};

// Call the onCreateEvent callback with the new event object
onCreateEvent(newEvent);

// Clear the form fields
setName("");
setDescription("");
setLocation("");
setDate("");

};

return (
<Box
   maxW="xl"
   mx="auto"
   m={5}
   p={6}
   borderWidth={1}
   borderRadius={12}
   borderColor="gray.200"
   bg="white"
 >
<Heading as="h2" size="md" color="gray.800" mb={4}>
เพิ่มกิจกรรมใหม่
</Heading>
<form onSubmit={handleSubmit}>
<FormControl id="name" mb={4}>
<FormLabel>ชื่อกิจกรรม</FormLabel>
<Input
type="text"
placeholder="กรอกชื่อกิจกรรม"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</FormControl>
<FormControl id="description" mb={4}>
<FormLabel>รายละเอียด</FormLabel>
<Textarea
placeholder="กรอกรายละเอียด"
value={description}
onChange={(e) => setDescription(e.target.value)}
required
/>
</FormControl>
<FormControl id="location" mb={4}>
<FormLabel>สถานที่</FormLabel>
<Input
type="text"
placeholder="กรอกสถานที่"
value={location}
onChange={(e) => setLocation(e.target.value)}
required
/>
</FormControl>
<FormControl id="date" mb={4}>
<FormLabel>วันที่</FormLabel>
<Input
type="date"
placeholder="Enter event date"
value={date}
onChange={(e) => setDate(e.target.value)}
required
/>
</FormControl>
<Button type="submit" colorScheme="blue" w="100%">
ยืนยัน
</Button>
</form>
</Box>
);
}

export default App;
