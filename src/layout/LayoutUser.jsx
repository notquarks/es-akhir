// import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Header from "../components/Header";

const LayoutUser = () => {
  return (
    <Flex height="100vh" width="100vw">
      <Stack>
        <Header />
        <Box>
          <Outlet />
        </Box>
      </Stack>
    </Flex>
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
