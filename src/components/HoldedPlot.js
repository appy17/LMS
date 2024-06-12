import React, { useEffect, useState } from 'react'
import Nav from '../Nav'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    // Badge,
    // Box,
    // Flex,
    Center,
    Text,
    // Input,
    // Button,
    // Spinner,
    // Checkbox,
    // Menu,
    // MenuButton,
    // MenuList,
    // MenuItem,
    // Select,
    // FormLabel,
    // Heading,
  } from "@chakra-ui/react";
import axios from 'axios';
//   import { useEffect, useState } from "react";
//   import axios from "axios";
//   import { ChevronDownIcon } from "@chakra-ui/icons";

  
function HoldedPlots() {

    // const [data,setData] = useState([])
    // const [loading,setLoading] = useState(true)
    // const [error,setError] = useState(null)

    // useEffect(()=>{
    //     axios.get('http//jwefwjcbjwdf').then()
    // },[])

    const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_PHP_API_ENDPOINT');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

    
    return (
        <div>
            <Nav />
            <Center>

                <Text fontSize="30px" fontWeight="600" p="20px">
                    Holded Plots
                </Text>
            </Center>

            {error && <div>Error: {error}</div>}


            <Table variant="simple" w={"100%"} colorScheme="blue">
                <Thead>
                    <Tr bg="gray.800" >

                        <Th color="white">Sr No.</Th>
                        <Th color="white">ProjectName</Th>
                        <Th color="white">BlockName</Th>
                        <Th color="white">PlotNo.</Th>
                        <Th color="white">AreaSqft</Th>
                        <Th color="white">AreaSqmt</Th>
                        <Th color="white">PlotType</Th>
                        <Th color="white">PlotStatus</Th>
                        {/* <Th color="white">BookingDate</Th> */}
                        {/* <Th color="white">CustName</Th> */}
                        {/* <Th color="white">CustNo.</Th> */}
                        {/* <Th color="white">RegistryDate</Th> */}
                    </Tr>
                </Thead>

                {/* <Tbody>
                        {data.map(item => (
                        <Tr key={item.id}>
                        <Td>{item.id}</Td>
                        <Td>{item.name}</Td>
                        <Td>{item.age}</Td>
              
             </Tr>
          ))}
                 </Tbody> */}
  


                {/* <Tbody color="black" bg="blue.50">
                   
                        <Tr>
                            <Td>a</Td>
                            <Td fontWeight={700}>b</Td>
                            <Td>c</Td>
                            <Td>d</Td>
                            <Td>e</Td>
                            <Td>f</Td>
                            <Td>g</Td>
                            <Td> h</Td>

                            
                        </Tr>
                   
                </Tbody> */}

            </Table>

        </div>
    )
}

export default HoldedPlots