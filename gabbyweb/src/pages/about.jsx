// Filename - pages/about.js
import { Link } from "react-router-dom";
import React from "react";
import { Button } from "@chakra-ui/react";

export default function About() {
    return (
            <div>
                <h1>About Me</h1>
                <Button colorScheme='blue'>Hi there</Button>
            </div>
    );
}