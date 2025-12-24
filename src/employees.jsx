import React from 'react'
import { createRoot } from 'react-dom/client' // Notice the change here
import EmployeeList from './EmployeeList.jsx'

// 1. Create a root.
const root = createRoot(document.getElementById('content'))

// 2. Render the component to the root.
root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>
)