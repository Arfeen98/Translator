import { Box, Flex, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import languages from "./langauages";

import { RiArrowLeftRightFill } from 'react-icons/ri';

export const Translator = () => {
  const [queryfromValue, setQueryfromValue] = useState("");
  const [queryToValue, setQueryToValue] = useState("");
  const [selectedfrom, setSelectedfrom] = useState("en");
  const [selectedTo, setSelectedTo] = useState("hi");
const [selectedFromName, setNelectedFromName] = useState("English")
const [selectedToName, setNelectedToName] = useState("Hindi")

  const handdleChangeTo = (e) => {
    const inputName = e.target.value;
    setSelectedTo(inputName);
  };

  

 

  const handdleChange = (e) => {
    const inputName = e.target.value;

    setSelectedfrom(inputName);
  };



  const handleInputChange = (e) => {
    setQueryfromValue(e.target.value);
  };

  const handleInputChangeTo = (e) => {
    setQueryToValue(e.target.value);
  };

  useEffect(() => {
   
    if(selectedfrom&&selectedTo&&queryfromValue)
    {
       // program to display a text using setTimeout method
       let payload ={
        sentence:queryfromValue,
        fromLanguage:selectedfrom,
        toLanguage:selectedTo
      }
       


  const postQuary = (payload) => {
//console.log(payload)
    {
  
      axios({
        method: "post",
        url: "https://radiant-lake-22785.herokuapp.com/translate",
        data:payload
      })
        .then((res) => {
          if(res.data.c!="")
          {
            setQueryToValue(res.data.c);
          }
         
          
        
        })
        .catch((err) => {
      
        });
    }
  };
  // setQueryToValue(queryfromValue);


setTimeout(postQuary(payload), 1000);

    }

    
  }, [selectedfrom, selectedTo, queryfromValue]);

  return (
    <Box width={"600px"} minW="100px" minH="400px" height={"100%"} >
      <Box
        m="auto"
        width={"90%"}
        h="inherit"
        border={"1px solid "}
        borderColor="gray.300"
        boxShadow='dark-lg' p='6' rounded='md' bg='white' color={"blue"}
      >
        <h1>Translator</h1>
        <Flex
          width={"100%"}
          h="50px"
          borderBottom={"1px solid "}
          borderColor="gray.300"
        >
          <Box
            width={"50%"}
            h="100%"
          
            borderColor="gray.300"
          >
            <Flex gap="10px">
              <Select placeholder={selectedFromName} onChange={handdleChange}>
                {languages.map((ele) => {
                  return (
                    <option key={ele.code} value={ele.code}>
                      {ele.name}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </Box>
          <Box>
            <Text mt="2"><RiArrowLeftRightFill /></Text>
          </Box>
          <Box width={"50%"} h="100%" borderColor="gray.300">
            <Flex gap="10px">
              <Select placeholder={selectedToName} onChange={handdleChangeTo}>
                {languages.map((ele) => {
                  return (
                    <option key={ele.code} value={ele.code}>
                      {ele.name}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </Box>
        </Flex>
        <Stack direction={"row"}>
          <Box
            width={"50%"}
            h="200px"
            borderRight="1px solid"
            borderColor={"gray.300"}
          >
            <Textarea
              value={queryfromValue}
              onChange={handleInputChange}
              placeholder="Write here to translate"
              h="100%"
            />
          </Box>
          <Box w="50%" pos={"relative"}>
            <Textarea
              value={queryToValue}
              onChange={handleInputChangeTo}
              placeholder="Answer will be visible here!!!"
              h="100%"
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
