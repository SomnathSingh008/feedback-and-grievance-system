import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './SubmissionsTable.css';

const SubmissionsTable = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const savedSubmissions = JSON.parse(localStorage.getItem('feedbackData') || '[]');
        setSubmissions(savedSubmissions);
    }, []);

    return (
        <div>
            <h2>Feedback Submissions</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Service Quality</th>
                        <th>Beverage Quality</th>
                        <th>Restaurant Cleanliness</th>
                        <th>Dining Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission, index) => (
                        <tr key={index}>
                            <td>{submission.customerName}</td>
                            <td>{submission.email}</td>
                            <td>{submission.phone}</td>
                            <td>{submission.serviceQuality}</td>
                            <td>{submission.beverageQuality}</td>
                            <td>{submission.restaurantCleanliness}</td>
                            <td>{submission.diningExperience}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default SubmissionsTable;
