// import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import Header from "../components/Header";

const LayoutUser = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        // height="100vh"
      >
        <Header />
        <Box>
          <Outlet />
        </Box>
      </Flex>
    </>
    // <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
    //   {/* <Sidebar /> */}
    //   <div className="xl:col-span-5">
    //     {/* <Header /> */}
    //     <div className="h-[90vh] overflow-y-scroll p-8">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
  );
};

export default LayoutUser;
