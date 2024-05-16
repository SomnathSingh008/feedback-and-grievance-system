import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        phone: '',
        serviceQuality: '',
        beverageQuality: '',
        restaurantCleanliness: '',
        diningExperience: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.customerName) newErrors.customerName = 'Customer Name is required';
        if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Valid Email is required';
        if (!formData.phone || !validatePhone(formData.phone)) newErrors.phone = 'Valid Phone is required';
        if (!formData.serviceQuality) newErrors.serviceQuality = 'Service Quality is required';
        if (!formData.beverageQuality) newErrors.beverageQuality = 'Beverage Quality is required';
        if (!formData.restaurantCleanliness) newErrors.restaurantCleanliness = 'Restaurant Cleanliness is required';
        if (!formData.diningExperience) newErrors.diningExperience = 'Dining Experience is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            localStorage.setItem('feedbackData', JSON.stringify([...JSON.parse(localStorage.getItem('feedbackData') || '[]'), formData]));
            setSubmitted(true);
            setFormData({
                customerName: '',
                email: '',
                phone: '',
                serviceQuality: '',
                beverageQuality: '',
                restaurantCleanliness: '',
                diningExperience: '',
            });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="feedback-form-container">
            <h2>Aromatic Bar</h2>
            <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Customer Name:</label>
                    <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
                    {errors.customerName && <span>{errors.customerName}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <span>{errors.phone}</span>}
                </div>
                <div>
                    <label>Please rate the quality of the service you received from your host:</label>
                    <input type="radio" name="serviceQuality" value="Excellent" onChange={handleChange} /> Excellent
                    <input type="radio" name="serviceQuality" value="Good" onChange={handleChange} /> Good
                    <input type="radio" name="serviceQuality" value="Fair" onChange={handleChange} /> Fair
                    <input type="radio" name="serviceQuality" value="Bad" onChange={handleChange} /> Bad
                    {errors.serviceQuality && <span>{errors.serviceQuality}</span>}
                </div>
                <div>
                    <label>Please rate the quality of your beverage:</label>
                    <input type="radio" name="beverageQuality" value="Excellent" onChange={handleChange} /> Excellent
                    <input type="radio" name="beverageQuality" value="Good" onChange={handleChange} /> Good
                    <input type="radio" name="beverageQuality" value="Fair" onChange={handleChange} /> Fair
                    <input type="radio" name="beverageQuality" value="Bad" onChange={handleChange} /> Bad
                    {errors.beverageQuality && <span>{errors.beverageQuality}</span>}
                </div>
                <div>
                    <label>Was our restaurant clean?</label>
                    <input type="radio" name="restaurantCleanliness" value="Excellent" onChange={handleChange} /> Excellent
                    <input type="radio" name="restaurantCleanliness" value="Good" onChange={handleChange} /> Good
                    <input type="radio" name="restaurantCleanliness" value="Fair" onChange={handleChange} /> Fair
                    <input type="radio" name="restaurantCleanliness" value="Bad" onChange={handleChange} /> Bad
                    {errors.restaurantCleanliness && <span>{errors.restaurantCleanliness}</span>}
                </div>
                <div>
                    <label>Please rate your overall dining experience:</label>
                    <input type="radio" name="diningExperience" value="Excellent" onChange={handleChange} /> Excellent
                    <input type="radio" name="diningExperience" value="Good" onChange={handleChange} /> Good
                    <input type="radio" name="diningExperience" value="Fair" onChange={handleChange} /> Fair
                    <input type="radio" name="diningExperience" value="Bad" onChange={handleChange} /> Bad
                    {errors.diningExperience && <span>{errors.diningExperience}</span>}
                </div>
                <button type="submit">Submit</button>
                {submitted && <p>Thank you for completing the information</p>}
            </form>
        </div>
    );
};

export default FeedbackForm;
