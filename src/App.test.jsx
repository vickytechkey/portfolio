import { test, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

import React from "react";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import ProjectPage from "./pages/projectspage";
test("renders main pages", () => {
  render(<HomePage /> , {wrapper: MemoryRouter});
});
test("render about page" , ()=>{
  render(<AboutPage /> , {wrapper: MemoryRouter});
})

test("render contact page" , ()=>{
  render(<ContactPage /> , {wrapper: MemoryRouter});
})

test("render contact page" , ()=>{
  render(<ProjectPage /> , {wrapper: MemoryRouter});
})
