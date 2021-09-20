import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'

import Contact from './Contact'
import { Provider } from "react-redux";
import store from '../store/store'

describe('Contact', () => {
    test('should render Contact Component', () => {
        render(
        <Provider store={store}>
             <Contact />
        </Provider>
       )
        // screen.debug();

        expect(screen.getByText('Contact Us')).toBeInTheDocument()
        // expect(screen.getByLabelText(/Fullname/)).toBeInTheDocument()
    })

    // test('should render Contact Component', () => {
        
    // })

    // test('should render Contact Component', () => {
        
    // })
    
})
