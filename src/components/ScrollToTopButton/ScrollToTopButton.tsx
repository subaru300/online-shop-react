import { Button } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";


const ScrollToTopButton = () => {

  const onCLickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button 
      onClick={onCLickHandler} 
      position="fixed" 
      bottom="20px" 
      right="20px" 
      colorScheme='teal'
      borderRadius='50px'
      >
     <FaArrowCircleUp />
    </Button>
  );
};

export default ScrollToTopButton;